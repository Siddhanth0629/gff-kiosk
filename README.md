# GFF Kiosk

Portrait kiosk UI built with React + Vite. Target panel: **1080 × 1920**.

```bash
npm run dev      # http://localhost:5173
npm run build
```

## Kiosk stage

The UI is authored at the panel's native 1080 × 1920 so every coordinate from
Figma is used verbatim. `App.jsx` measures the viewport and sets a
`--kiosk-scale` custom property; `.kiosk__stage` (`src/App.css`) applies it as a
`transform: scale()`, letterboxing the stage on smaller screens. On the real
panel the scale resolves to exactly `1` and nothing is transformed.

## Homepage

`src/pages/Home.jsx` + `src/pages/Home.css` implement Figma
[`landing` 3:22623](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=3-22623).
Figma node ids are kept in comments next to each block.

The file's 12-second looping animation timeline (15 animated nodes) is ported to
CSS `@keyframes` at the bottom of `Home.css` — no animation library needed.

`Home` takes an optional `onSelect(key)` prop, called with `case-studies`,
`services`, or `lemonaide-process` when a card is tapped. `App.jsx` routes all
three.

### Two implementation notes worth knowing

Both of these look like bugs if you change them back, so they are commented in
place as well:

- **The card float is animated with `margin`, not `transform`.** A transform on
  the card would make it a stacking context, which isolates its children's blend
  group and silently turns the artwork's `mix-blend-mode: lighten` into a no-op.
  Figma has no such isolation — the artwork has to blend against the room behind
  it. (Verified: with a transform, removing `mix-blend-mode` produced a
  byte-identical render.)
- **Hero shadows use `filter: drop-shadow`, not `box-shadow`.** The three hero
  PNGs are 65–76% transparent and Figma casts the shadow from the artwork's
  alpha. `box-shadow` traces the rectangular box instead and rings each subject
  with a visible dark rectangle.

## Case studies

`src/pages/CaseStudies.jsx` + `src/pages/CaseStudies.css` implement Figma
[`Case study Landing` 237:96906](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=237-96906).
Tapping the homepage's **Case Studies** card routes here (`App.jsx`); `onBack`
and `onHome` both return to the landing.

The ten cards are data-driven from the `CASES` array. They sit in a
856.705 × 1297.051 well on a 3-column × 4-row grid (28px gutters); two of them
span two columns. `onSelect(key)` fires with the card's key — it is a no-op
until the individual case-study screens exist, same as the homepage's
`services` card.

Each card stacks seven layers that blend against the dimmed room behind them:
hero art (`screen`) → frame texture (`hard-light`, 70%) → sheen (`lighten`) →
glass clip → hero again → glow (`overlay`) → label. Figma draws the label twice
per card — a 60% copy clipped inside the glass and a full-strength copy roughly
2px above it — and both are kept.

### Three things that look like bugs but aren't

- **Nothing between `.case` and a card layer may create a stacking context.**
  Same trap `Home.css` documents: a stacking context isolates the blend group
  and turns all four `mix-blend-mode`s into no-ops against the room. That is
  why Figma's `left: calc(50% - 4.36px)` + `translateX(-50%)` pairs are
  resolved to plain `left` values here, and why the card frame's 10.876px
  background blur lives on its own `.cs-card__blur` child instead of on
  `.cs-card`. (Verified: forcing every blend mode to `normal` changes the
  render, so the blends are live.)
- **Hero art is sized with `left`/`top`/`width`/`height`, not `inset`.** An
  absolutely positioned *replaced* element resolves `width: auto` to the
  image's intrinsic width — 1254px here — and drops the over-constrained
  offsets, so the `inset` shorthand lets the art escape the card entirely.
- **`.cs-card > span` sets no `display`.** Absolute positioning already
  blockifies those spans, and the selector is more specific than
  `.cs-card__label`, so declaring `display: block` there silently overrides the
  label's `display: flex` and top-aligns its text.

## Our services

`src/pages/Services.jsx` + `src/pages/Services.css` implement Figma
[`service list` 194:58122](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=194-58122).
Tapping the homepage's **Our Services** card routes here.

Figma draws one frame per focused category, all sharing a layout:
[194:58122](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=194-58122)
(Experience Engineering, six cards),
[194:58123](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=194-58123)
(Research & Strategy, four) and
[194:58124](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=194-58124)
(Experience Design, five). Sliding the carousel swaps the whole hub, so the
category is the single source of truth: it carries its own service cards and
its own focused-circle spec, while the chrome, band, rings and carousel — which
are pixel-identical across the frames — are drawn once.

Service cards ring the hub, each wired to it by a connector line, using the
same layer stack as the case-studies cards minus the `lighten` sheen. Every
card in *every* frame windows into one shared pair of icon sheets (verified
byte-identical across all three nodes), so a card is just an `--sx` / `--sy`
offset plus its own artwork inset. Cards sit in six fixed slots whose positions
and connector geometry live in `Services.css`; which slots a category fills is
its own business, and a card can nudge itself off its slot with `offset` — the
design frames disagree by a few px on where the top-centre card sits.

The file's 30s looping timeline is ported to CSS `@keyframes` at the bottom of
`Services.css`: two pairs of counter-rotating rings, plus a four-beat breathing
pulse on the focused circle. The keyframes animate the `rotate` and `scale`
properties rather than `transform`, so they compose with the carousel's own
`transform` instead of clobbering it. Both are disabled under
`prefers-reduced-motion`.

### The category carousel

Figma draws a static 3282px track: nine circles cycling
Experience Engineering → Research & Strategy → Experience Design, the centre
one enlarged to 290px. That is implemented as a genuine infinite carousel over
the three categories, rendering a nine-circle window around an unbounded
`focus` index, so it scrolls forever both ways. Measured geometry drives it —
246px circles (290px focused) with a constant 118px gap, giving a 364px pitch
between neighbours and 386px across the focused one.

Drag to swipe, tap a side circle to bring it to centre, arrow keys to step.
Sliding to a category swaps that category's whole set of service cards.
`useCarousel` deliberately does **not** call `setPointerCapture`: capturing on
the track would suppress the circles' own click events, which is what makes
tap-to-focus and keyboard activation work. A window-level `pointerup` catches
releases that land outside the track instead, and a ref records whether the
pointer travelled more than 8px so the click that fires after a swipe can be
told apart from a real tap.

### Four judgement calls

- **The header and footer are now shared.** They are the same Figma component
  on both interior screens, so they moved to `src/components/ScreenChrome.jsx`;
  the services variant passes `translucent` for its `rgba(0,0,0,0.5)` / 12px
  footer. Case Studies renders byte-identically before and after that change.
- **The icons' white box-shadows are dropped.** The export gives every category
  icon two hard offset white shadows (0 blur, 0 spread), but Figma's own render
  of this frame shows no such outline — the exporter flattened away their alpha.
  Rendering them literally puts a white rectangle around each icon.
- **The focused circle is centred on 540, not Figma's 538.** Figma's static
  frame leaves it 2px left of the ring assembly it sits inside; centring it on
  the ring also balances the two side circles against their own ring glows.
- **Each category focuses with its own chrome.** These are not one styled
  state: Experience Engineering focuses with a 2px border, a 19.173px blur and
  an ExtraBold label; Research & Strategy with a hairline border, a 36.403px
  blur, SemiBold, and its own separate goggles export cropped 2% higher. The
  Engineering values are the shared default and each other category overrides
  what its own frame specifies.

All three frames also carry a `cards 6` at `opacity: 0` — a hidden duplicate of
DevOps. It is not rendered.

Each frame offsets the focused circle's pulse by a second or so. That is an
artefact of each being a separate copy of the same animated component rather
than a designed difference — the cadence is identical — so one set of keyframes
serves all three.

## The LemonAIde process

`src/pages/LemonaideProcess.jsx` + `src/pages/LemonaideProcess.css` implement
Figma's per-step frames:
[`lemonade process` 3:22661](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=3-22661)
(Research),
[522:88012](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=522-88012)
(Strategy),
[3:23583](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=3-23583)
(Define) and
[522:88550](https://www.figma.com/design/5snNx9jd89wmcCfQdU6C25/GFF-proto-2026?node-id=522-88550)
(Explore). Tapping the homepage's **The LemonAIde Process** card routes here;
tapping a step in the stepper swaps the masthead subtitle and the whole content
column.

Each step owns its content — chips, takeaways, the "where AI helps" copy, both
of its stepper illustrations and both of its hand-drawn number rings. Its media
comes in as a component, because the frames are genuinely different shapes:
Research places two slides at fixed offsets, Strategy is a drag-scrollable row
of captioned case-study cards, and Define and Explore drag-scrollable rows of
full-bleed slides — with Define's last slide a composite of three screenshots
and a logo, and one of Explore's contained on a grey plate rather than
cover-fitted.

This is the light half of the kiosk — cream and white on graph paper, where the
other three screens are the dark room. It deliberately does **not** use the
shared `ScreenChrome`: its nav sits inside the cream masthead with no page
title, and its footer is a different, light Figma component (3:23121 against
the dark 1043:4369).

The graph paper is 1px rules on a 31px pitch. Figma clips them into four margin
frames, but those frames don't actually clip their contents — the rules are
drawn full-bleed and the opaque white card is what hides the middle — so one
background on the root reproduces it. The colour (`#eaeaea`) and the cream
(`#fcf4ed`) were sampled from Figma's own render of the frame.

### Five things worth knowing

- **The active step illustrations are animated GIFs.** Figma serves them from
  `.png` URLs, but `Research` is a 562×396 GIF89a, `Strategy` a 452×276 one and
  `Define` a 514×288 one, all with NETSCAPE loop blocks. They are committed as `.gif` so they animate.
  Each step also has a *separate* idle illustration and separate idle/active
  number rings — the same step is a different asset in each state.
- **One asset is a JPEG behind a `.png` URL.** The whiteboard backdrop on the
  second Strategy card is a 4096×2867 JPEG; it is committed as `.jpg`.
- **`.lem__lede` has a pinned 339px height.** Without it the flex column lets
  font-metric drift in the headline and chips push the media and takeaway down
  the page. 339px is Figma's own figure, and it checks out: both frames' media
  panels start at exactly y=965 in Figma's renders. Pinning it took Research
  from 13.1 back to 7.0 mean difference against its reference, and Strategy
  from 10.2 to 6.4.
- **The evidence strip is not clipped.** Figma declares it 4620px wide across
  seven slides, but only the first two have any renderable content — the strip's
  own render stops at 922px and the middle slides come back 1×1. The panel does
  not clip: the strip sits 6.5px above it and the right-hand slide runs ~14px
  past its right edge, both of which Figma's render shows. Verified against that
  render: right edge within 1px, top edge within 1px. That is why the Research
  strip alone is 498px pulled 6.5px up (`.lem-strip.lem-strip--research`) — the
  overhang paints and the column's flow height still comes to the designed
  485px. The doubled class is deliberate: the base `.lem-strip` rule is declared
  further down the file and would otherwise win on source order.
- **Some media is a flat render, and some is simply absent.** Research's
  slides 3–6 are Figma-drawn UI mockups — 588 `line` elements between them —
  with no exportable image fill; the two visible ones are committed as PNG
  renders of their nodes, with the quote card on top of the first kept as real
  text. On the Strategy strip, three images export as *fully transparent* PNGs
  (all-zero pixel data) and one card's screen recording has no asset at all, so
  cards 3 and 4 show their caption over an empty plate — which is exactly what
  Figma renders for them. Define's second slide is likewise assetless and shows
  as an empty plate. Explore's *first* slide looks the same in the export but is
  not — Figma renders real artwork for it, so that one is a node render. Always
  check the reference before accepting a missing fill as an empty slide; that
  one cost a 33.1 mean difference until it was caught.
- **Figma only renders what is inside a clip.** That is why both strips could
  only be captured up to their visible window, and why the off-screen cards
  come back 1×1. It is not a failed export.

### The Research evidence strip

`ResearchMedia` in `src/pages/LemonaideProcess.jsx` is the same drag-scrolling
row as Strategy, Define and Explore — 2602px of slides in an 884px window.

- The **first** slide is the composed one Figma designs: two screenshots with
  the quote bubble laid over them, positioned by hand inside `.lem-research`.
  The row's 24px left padding is the composition's own left inset in Figma, so
  that box starts at x=0 and its offsets are the Figma ones less 24px.
- The evidence slides that follow are plain `.lem-slide`s. Each is sized to its
  own artwork's aspect ratio at 485px tall — 865.4px for the 3840×2152 collage,
  719.4px for the 1602×1080 audit slide — so the shared `object-fit: cover`
  crops nothing. Add a slide by adding another `.lem-slide` with its own width.
- `.lem-slide > img` carries `pointer-events: none`. Without it the browser
  starts a native image drag the moment a drag begins on a slide, which kills
  the pointer stream and strands the strip part-scrolled. This fixed Define and
  Explore too — both could only be dragged as far as their first image.

### Only steps 1 to 4 are designed

The stepper shows all seven steps as Figma draws them, but only `Research`,
`Strategy`, `Define` and `Explore` have frames. The other three render exactly
as designed but are `disabled`. To add one, fill in its `STEPS` entry the way those two are filled
in — `ready: true`, its subtitle, lede badge, headline, chips, takeaways and AI
copy, plus a `Media` component if its media is a new shape — and nothing else
needs to change.

## Outstanding: two things need a designer with Figma file access

Neither can be resolved from the MCP API.

### 1. Gilroy is not bundled

The design uses Gilroy Medium (500), SemiBold (600), Bold (700) and — on the
services screen's focused category circle — ExtraBold (800). The LemonAIde
stepper labels are the file's one departure from Gilroy: they are Inter Tight,
behind `--font-ui` in `src/index.css`. The font is
licensed and not in the repo, so the stack currently falls back to
Poppins → Montserrat → `system-ui`. This is the largest visual difference from
the Figma render: the fallback is wider and heavier, so headings and the
wordmark run slightly long.

To fix: drop the four `Gilroy-*.woff2` weights into `src/assets/fonts/` and
uncomment the `@font-face` block at the top of `src/index.css`, adding a face
per weight. No other change is needed — `--font-display` already lists Gilroy
first.

### 2. The LemonAIde card's frame artwork is a stand-in

Figma node `3:22655` (the third card's background fill) **exports as a fully
transparent PNG** — decoded, every pixel is `rgba(0,0,0,0)`. It is empty from
both `get_design_context` and the raw asset endpoint, and Figma's own
render of the node in isolation is blank too, so the real fill can't be
retrieved through the API.

As a stand-in, `Home.css` crops the *third* frame out of the shared
`card-frames.png` sheet, continuing the same 364.55px horizontal stride the two
cards to its left use. Geometry, scale and position are correct; **the hue is
not** — the sheet's third frame is vivid orange, where the Figma composite shows
a desaturated silver-gold.

To fix: export node `3:22655`'s image fill manually from Figma, save it as
`src/assets/landing/card-frame-lemonade.png`, and in `Home.css` replace the
`.home__card--lemonade .home__card-bg-crop img` crop rule with:

```css
.home__card--lemonade .home__card-bg-crop img {
  inset: 0;
  width: 100%;
  height: 100%;
  object-position: bottom;
}
```

...then point the `<img>` in that card back at the new file.

## Assets

All artwork in `src/assets/landing/`, `src/assets/case-studies/`,
`src/assets/services/` and `src/assets/lemonaide/` is exported from the Figma
file. The MCP asset URLs
expire after ~7 days, so these are committed rather than fetched.

The case-studies backdrop is byte-identical to the landing's
(`landing/bg-room.png`, md5 `e232ad5b474563cbcc4ca66e56617a4a`), so that screen
imports the landing copy rather than shipping the 5.7MB PNG twice. `Banking`
and `Investment` likewise share one hero export, as they do in Figma.

The services screen reuses five assets outright rather than shipping second
copies — the backdrop, the card frame texture, the footer logo and both header
icons are all byte-identical to files already committed. Its six service-card
icons come from two shared sheets (a glow copy and a crisp copy) that every
card windows into, and the three category icons use the 2x exports where Figma
offered both.
