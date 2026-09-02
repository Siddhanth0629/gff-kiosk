import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ScreenFooter } from '../components/ScreenChrome.jsx'
import arrowFilled from '../assets/cs-detail/arrow-filled.svg'
import arrowGoBack from '../assets/cs-detail/arrow-go-back.svg'
import iconHome from '../assets/case-studies/icon-home.svg'
import { CASE_STUDY_DETAILS } from './caseStudyDetailData.js'
import './CaseStudyDetail.css'

/* =================================================================
   Case-study detail — Figma section "Artha One" 3:27384
   (ArthaOne 1 = 3:27385, 1080 x 1920).

   Reached from the case-study listing: tapping a brand card whose
   detail exists in caseStudyDetailData.js opens it here.

   Figma draws thirty-three frames that differ only in the phone
   screen, so this file draws the chrome — plum ground, graph paper,
   the panel, the nav, the brand row, the lede, the chips, the
   footer — once, and swaps the screen inside the mockup.

   The walkthrough is stepped, not played: a tap on the phone
   advances one screen and wraps at the end, so a visitor reads the
   flow at their own pace instead of chasing a timer. Screens that
   are recordings (type: 'video') loop for as long as they are the
   current screen.

   Coordinates are the frame's absolute px values. The head block and
   the phone are Figma children of the panel, but they are positioned
   against the page here so the panel's 1px border doesn't shift them
   by a pixel.
   ================================================================= */

/* How many screens either side of the current one stay mounted.
   Only a window is in the DOM: thirty-three 611 x 1266 bitmaps
   decoded at once is ~100MB of texture, and the kiosk panel does not
   have it to spare — and the videos are worse, since a mounted
   <video> holds a decoder whether or not it is on screen. Two ahead
   is enough that the next screen is decoded before it is shown, so
   the cut never flashes. */
const AHEAD = 2
const BEHIND = 1

/* The mark + wordmark pair, placed inside Figma's 272 x 35 box. */
function BrandLogo({ logo, brand }) {
  return (
    <span className="csd__logo">
      <span className="csd__logo-art">
        {[logo.mark, logo.word].map((part) => (
          <img
            key={part.src}
            src={part.src}
            alt=""
            style={{
              left: `${part.left}px`,
              top: `${part.top}px`,
              width: `${part.width}px`,
              height: `${part.height}px`,
            }}
          />
        ))}
      </span>
      <span className="csd__logo-name">{brand}</span>
    </span>
  )
}

/* Frame 2147226739 — the arrows flanking the brand. Figma stacks
   rotate(180deg) on scaleY(-1) for the left one, which composes to a
   plain horizontal flip of the same glyph. They step between case
   studies, and ArthaOne is the only one with a detail page, so both
   render exactly as designed and are disabled. Wire onPrev/onNext
   when a second one lands. */
function BrandArrow({ dir, onClick }) {
  return (
    <button
      type="button"
      className={`csd__arrow csd__arrow--${dir}`}
      onClick={onClick}
      disabled={!onClick}
      aria-label={dir === 'prev' ? 'Previous case study' : 'Next case study'}
    >
      <img src={arrowFilled} alt="" />
    </button>
  )
}

function CaseStudyDetail({
  brand = 'ArthaOne',
  onBack = () => {},
  onHome = onBack,
  onPrev = null,
  onNext = null,
}) {
  const study = CASE_STUDY_DETAILS[brand] ?? CASE_STUDY_DETAILS.ArthaOne
  const { screens } = study
  const count = screens.length

  const [at, setAt] = useState(0)
  // The tap hint earns its place only until the visitor has found the
  // interaction; after the first tap it never comes back.
  const [hinted, setHinted] = useState(false)

  // Prime the stills so a cut is never waiting on the network. Videos
  // are left to their own preload — pulling ~35MB of mp4 up front
  // would stall the panel for no gain.
  useEffect(() => {
    screens.forEach((s) => {
      if (s.type === 'video') return
      const img = new Image()
      img.src = s.src
    })
  }, [screens])

  // Keyed by index, not by src: three of the recordings are byte
  // duplicates of each other and would collide on src.
  const videos = useRef(new Map())

  const mounted = useMemo(() => {
    const keep = new Set()
    for (let d = -BEHIND; d <= AHEAD; d += 1) keep.add((at + d + count) % count)
    return keep
  }, [at, count])

  // Figma marks the screen itself as the interactive layer
  // (732:64192 is a link), so that is what takes the tap. Forward
  // wraps, which lets the flow be walked round more than once
  // without reaching a dead end.
  const step = useCallback(
    (d) => {
      setHinted(true)
      setAt((n) => (n + d + count) % count)
    },
    [count],
  )
  const next = useCallback(() => step(1), [step])

  // `autoPlay` fires once, at mount, so a recording that was mounted
  // as lookahead and only later stepped onto would sit on its poster
  // frame. Drive it from `at` instead, and rewind on the way in so a
  // screen always plays from the top.
  useEffect(() => {
    videos.current.forEach((el, i) => {
      if (i !== at) {
        el.pause()
        return
      }
      el.currentTime = 0
      // Rejects if the browser blocks it; muted playback is allowed
      // everywhere this runs, and a still first frame is a fine
      // fallback either way.
      el.play()?.catch(() => {})
    })
  }, [at, mounted])

  // Left/right on the focused phone, so the walkthrough can be
  // stepped back without cycling all the way round. Enter and Space
  // already reach `next` through the button's own click.
  const onKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') step(1)
      else if (event.key === 'ArrowLeft') step(-1)
      else return
      event.preventDefault()
    },
    [step],
  )

  return (
    <div className="csd">
      {/* Grids (3:27386) — 1px #931f5a rules on a 31px pitch, drawn
          full bleed; the opaque panel is what hides them through the
          middle, exactly as Figma's two line frames do. */}
      <div className="csd__grid" aria-hidden="true" />

      {/* For Mobile Phone (732:64117) */}
      <div className="csd__panel" aria-hidden="true" />

      {/* 732:64192 plus its bezel. Figma strokes the screen frame
          24px *outside*, so each export is 611 x 1266 and arrives
          with the device already around it. */}
      <button
        type="button"
        className="csd__phone"
        onClick={next}
        onKeyDown={onKeyDown}
        aria-label={`Screen ${at + 1} of ${count}: ${screens[at].name}. Tap for the next screen.`}
      >
        {/* The recordings are the 563 x 1218 screen with no device
            around it, so the bezel the stills carry in their own
            artwork has to be drawn for them. Same geometry, so it
            sits under the stills unnoticed. */}
        <span className="csd__bezel" aria-hidden="true" />

        {screens.map((s, i) =>
          mounted.has(i) ? (
            s.type === 'video' ? (
              <video
                key={s.src}
                className={`csd__screen csd__screen--video${i === at ? ' is-on' : ''}`}
                src={s.src}
                ref={(el) => {
                  if (el) videos.current.set(i, el)
                  else videos.current.delete(i)
                }}
                loop
                muted
                playsInline
                preload="auto"
              />
            ) : (
              <img
                key={s.src}
                className={`csd__screen${i === at ? ' is-on' : ''}`}
                src={s.src}
                alt=""
              />
            )
          ) : null,
        )}

        {/* Not in the design: without it nothing says the phone is
            tappable, which on a kiosk means the flow is never seen
            past its first screen. */}
        {!hinted && <span className="csd__hint">Tap to continue</span>}
      </button>

      {/* Frame 2147228694 (732:64212) */}
      <div className="csd__head">
        <div className="csd__nav">
          <button
            type="button"
            className="csd__back"
            onClick={onBack}
            aria-label="Go back"
          >
            <img src={arrowGoBack} alt="" />
          </button>
          <button
            type="button"
            className="csd__home"
            onClick={onHome}
            aria-label="Back to home page"
          >
            <img src={iconHome} alt="" />
          </button>
        </div>

        <div className="csd__brand">
          <BrandArrow dir="prev" onClick={onPrev} />
          <BrandLogo logo={study.logo} brand={study.brand} />
          <BrandArrow dir="next" onClick={onNext} />
        </div>

        <p className="csd__lede">
          {study.lede.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>

        {/* Chip Container (732:64228) */}
        <div className="csd__chips">
          {study.chips.map((chip) => (
            <span
              className="csd__chip"
              key={chip.label}
              style={{ width: `${chip.width}px` }}
            >
              {chip.label}
            </span>
          ))}
        </div>
      </div>

      {/* Footer [Test] (3:27484) — the plum variant of the same
          component the other interior screens use. */}
      <ScreenFooter variant="plum" />
    </div>
  )
}

export default CaseStudyDetail
