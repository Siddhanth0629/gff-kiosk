/**
 * Bundles the built app into one self-contained dist/kiosk.html that runs
 * straight off the file system (no server, no ./assets folder).
 *
 * Every image/svg is re-encoded and embedded as a data URI, the CSS goes into
 * an inline <style>, and the JS bundle becomes a classic <script> at the end of
 * <body> (file:// blocks `type="module"`, so the module tag has to go).
 *
 * Usage: npm run build:kiosk   (runs vite build first)
 */
import { readFile, writeFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const DIST = path.resolve('dist')
const ASSETS = path.join(DIST, 'assets')
const OUT = path.join(DIST, 'kiosk.html')

// Kiosk screens are 4K at most; anything wider than this is wasted bytes.
const MAX_WIDTH = 2560
const WEBP_QUALITY = 80

const mime = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`
const mb = (n) => `${(n / 1024 / 1024).toFixed(1)} MB`

async function toDataUri(file) {
  const ext = path.extname(file).toLowerCase()
  const buf = await readFile(file)

  if (ext === '.svg') {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(buf.toString('utf8'))
      .replace(/%20/g, ' ')
      .replace(/'/g, '%27')}`
  }

  let out = buf
  let type = mime[ext] ?? 'application/octet-stream'

  // Video is embedded as-is. sharp cannot read it, and re-encoding would
  // need ffmpeg, which the build does not depend on.
  if (type.startsWith('video/')) {
    return `data:${type};base64,${buf.toString('base64')}`
  }

  try {
    const animated = ext === '.gif'
    const img = sharp(buf, { animated })
    const { width } = await img.metadata()
    const webp = await sharp(buf, { animated })
      .resize({
        width: width && width > MAX_WIDTH ? MAX_WIDTH : undefined,
        withoutEnlargement: true,
      })
      .webp({ quality: WEBP_QUALITY })
      .toBuffer()
    if (webp.length < buf.length) {
      out = webp
      type = 'image/webp'
    }
  } catch (err) {
    console.warn(`  ! keeping original ${path.basename(file)} (${err.message})`)
  }

  return `data:${type};base64,${out.toString('base64')}`
}

const html = await readFile(path.join(DIST, 'index.html'), 'utf8')
const files = await readdir(ASSETS)

const js = files.find((f) => f.endsWith('.js'))
const css = files.find((f) => f.endsWith('.css'))
const media = files.filter((f) => mime[path.extname(f).toLowerCase()])

// Root-level assets referenced straight from index.html (favicon, sprites).
const rootMedia = (await readdir(DIST)).filter(
  (f) => mime[path.extname(f).toLowerCase()],
)

console.log(`Embedding ${media.length + rootMedia.length} assets…`)
const uris = new Map()
let rawTotal = 0
for (const [dir, list, prefix] of [
  [ASSETS, media, '/assets/'],
  [DIST, rootMedia, '/'],
]) {
  for (const name of list) {
    const file = path.join(dir, name)
    rawTotal += (await stat(file)).size
    uris.set(prefix + name, await toDataUri(file))
  }
}

/** Swaps every `/assets/foo.png` reference for its data URI. */
const embed = (text) => {
  let hits = 0
  for (const [ref, uri] of uris) {
    const parts = text.split(ref)
    if (parts.length > 1) {
      hits += parts.length - 1
      text = parts.join(uri)
    }
  }
  return [text, hits]
}

const [cssOut, cssHits] = embed(await readFile(path.join(ASSETS, css), 'utf8'))
const [jsOut, jsHits] = embed(await readFile(path.join(ASSETS, js), 'utf8'))
console.log(`Rewrote ${cssHits} CSS + ${jsHits} JS references.`)

const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? 'gff-kiosk'
const favicon = uris.get('/favicon.svg')

// A literal `</script` inside the bundle would close the tag early.
const guard = (code) => code.replace(/<\/script/gi, '<\/script').replace(/<!--/g, '<\!--')

const out = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
${favicon ? `    <link rel="icon" type="image/svg+xml" href="${favicon}" />\n` : ''}    <style>
${cssOut}
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
// Wrapped so the bundle keeps the module scope + strict mode it was built for.
(function () { "use strict";
${guard(jsOut)}
})();
    </script>
  </body>
</html>
`

await writeFile(OUT, out)
console.log(`\n${path.relative(process.cwd(), OUT)}`)
console.log(`  assets on disk: ${mb(rawTotal)}  ->  single file: ${mb(Buffer.byteLength(out))}`)
console.log(`  css ${kb(Buffer.byteLength(cssOut))}, js ${kb(Buffer.byteLength(jsOut))}`)
