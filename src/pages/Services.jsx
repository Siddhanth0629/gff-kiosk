import { useCallback, useEffect, useRef, useState } from 'react'
import bgRoom from '../assets/landing/bg-room.png'
import cardGlass from '../assets/case-studies/card-glass.png'
import band from '../assets/services/band.svg'
import catDesign from '../assets/services/cat-design.png'
import catDesignFocused from '../assets/services/cat-design-alt.png'
import catEngineering from '../assets/services/cat-engineering-big.png'
import catResearch from '../assets/services/cat-research-alt.png'
import catResearchFocused from '../assets/services/cat-research-focused.png'
import iconsBack from '../assets/services/icons-back.png'
import iconsFront from '../assets/services/icons-front.png'
import light from '../assets/services/light.svg'
import lightAlt from '../assets/services/light-alt.svg'
import line190 from '../assets/services/line-190.svg'
import line191 from '../assets/services/line-191.svg'
import line192 from '../assets/services/line-192.svg'
import line193 from '../assets/services/line-193.svg'
import line194 from '../assets/services/line-194.svg'
import line195 from '../assets/services/line-195.svg'
import line197 from '../assets/services/line-197.svg'
import ringBig from '../assets/services/ring-big.png'
import ringBigMask from '../assets/services/ring-big-mask.svg'
import ringSmall from '../assets/services/ring-small.png'
import { ScreenFooter, ScreenHeader } from '../components/ScreenChrome.jsx'
import './Services.css'

/* =================================================================
   Our Services — one frame per focused category, all sharing a
   layout: Figma "service list" 194:58122 (Experience Engineering)
   and 194:58123 (Research & Strategy).

   Sliding the carousel swaps the whole hub, so the category is the
   single source of truth: it carries its own service cards and its
   own focused-circle spec. The chrome, rings, band and carousel are
   pixel-identical across the frames and are drawn once.

   The file's 30s looping timeline — four counter-rotating rings plus
   a breathing pulse on the focused circle — is ported to CSS
   @keyframes at the bottom of Services.css.
   ================================================================= */

// Card slots are shared by every frame: the two variants place their
// cards in the same six positions, so position and connector geometry
// live in Services.css keyed by slot, and only the artwork window
// changes per card.
const SLOT_LINES = {
  'left-top': line194,
  'right-top': line195,
  'left-bottom': line192,
  'right-bottom': line193,
  'top-center': line197,
  'bottom-center': line190,
}

// Every card windows into one shared pair of icon sheets (a glow copy
// and a crisp copy) at a fixed 556.96% x 553.95% scale — verified
// byte-identical across both frames — so a card is just an offset.
const DEFAULT_INSET = '7.79% 6.1% 6.49% 4.88%'

const CATEGORIES = [
  {
    key: 'experience-engineering',
    label: ['Experience Engineering'],
    icon: catEngineering,
    node: 'I194:58122;1999:22180',
    // 194:58122
    cards: [
      { slot: 'left-top', key: 'website-development', label: ['website development'], sprite: ['-28.03%', '-361.53%'] },
      { slot: 'right-top', key: 'ai-agent-development', label: ['AI agent development'], sprite: ['-278.94%', '-360.01%'] },
      { slot: 'top-center', key: 'mobile-app-development', label: ['mobile app development'], sprite: ['-154.37%', '-359.8%'], glow: lightAlt },
      { slot: 'left-bottom', key: 'maintenance-support', label: ['Maintenance & Support'], sprite: ['-154.37%', '-453.44%'] },
      { slot: 'right-bottom', key: 'qa-testing', label: ['QA & ', 'testing'], sprite: ['-404.24%', '-363.84%'] },
      { slot: 'bottom-center', key: 'devops-deployment', label: ['devOps & deployment'], sprite: ['-28.04%', '-454.09%'] },
    ],
  },
  {
    key: 'research-strategy',
    label: ['Research & ', 'Strategy'],
    icon: catResearch,
    // Figma gives the focused circle its own goggles export and crop.
    iconFocused: catResearchFocused,
    node: 'I194:58123;1999:21790',
    // 194:58123 — four cards, and each one insets its artwork
    // differently, unlike the engineering frame's uniform inset.
    cards: [
      { slot: 'left-top', key: 'ux-workshop', label: ['UX ', 'Workshop'], sprite: ['-27.05%', '-34.71%'], inset: '7.79% 4.88% 6.49% 6.1%' },
      { slot: 'right-top', key: 'ux-audit', label: ['UX ', 'audit'], sprite: ['-278.8%', '-34.71%'] },
      { slot: 'left-bottom', key: 'usability-testing', label: ['Usability Testing'], sprite: ['-154.37%', '-34.71%'], inset: '7.14% 5.18% 7.14% 5.8%', line: line191 },
      { slot: 'right-bottom', key: 'user-interview', label: ['user ', 'interview'], sprite: ['-405.86%', '-34.71%'], inset: '7.79% 5.79% 6.49% 5.19%' },
    ],
  },
  {
    key: 'experience-design',
    label: ['Experience ', 'Design '],
    icon: catDesign,
    // Like Research & Strategy, the focused circle has its own glove
    // export and crop.
    iconFocused: catDesignFocused,
    node: 'I194:58124;1999:21695',
    // 194:58124 — five cards. Its top-centre card sits 6px lower and
    // 1px left of the slot the other frames use, hence `offset`.
    cards: [
      { slot: 'left-top', key: 'ux-design', label: ['UX ', 'design'], sprite: ['-154.37%', '-159.36%'], inset: '7.79% 4.88% 6.49% 6.1%' },
      { slot: 'right-top', key: 'ai-ux-design', label: ['AI UX ', 'Design'], sprite: ['-405.71%', '-161.14%'], inset: '7.79% 4.88% 6.49% 6.1%' },
      { slot: 'top-center', key: 'ui-design', label: ['UI ', 'design'], sprite: ['-27.76%', '-156.62%'], inset: '7.79% 4.88% 6.49% 6.1%', glow: lightAlt, offset: [-1, 6] },
      { slot: 'left-bottom', key: 'product-visual-design', label: ['Product Visual Design'], sprite: ['-280.6%', '-157.17%'], line: line191 },
      { slot: 'right-bottom', key: 'branding', label: ['branding'], sprite: ['-26.33%', '-268.47%'], inset: '7.79% 4.88% 6.49% 6.1%' },
    ],
  },
]

// Figma's measured geometry: circles are 246px (290px focused) with a
// constant 118px gap, so the pitch is 364px between two unfocused
// neighbours and 386px across the focused one.
const GAP = 118
const W_SMALL = 246
const W_BIG = 290
const PITCH = W_SMALL + GAP
const WINDOW = 4 // renders 2*WINDOW+1 = 9 circles, as Figma does
const TAP_SLOP = 8 // px of travel before a tap is re-read as a swipe

const mod = (n, m) => ((n % m) + m) % m

/** Per-card nudge off the shared slot position, applied to both the
 *  card and its connector line. */
const offsetVars = (card) => ({
  '--dx': `${card.offset?.[0] ?? 0}px`,
  '--dy': `${card.offset?.[1] ?? 0}px`,
})

/** Signed x-offset from the frame centre for the circle `rel` steps
 *  away from the focused one. */
function offsetFor(rel) {
  if (rel === 0) return 0
  const steps = Math.abs(rel)
  const x = (W_BIG + W_SMALL) / 2 + GAP + (steps - 1) * PITCH
  return Math.sign(rel) * x
}

/** Pointer-drag + tap carousel. `focus` is unbounded and wraps through
 *  CATEGORIES, so the track scrolls forever in both directions.
 *
 *  Deliberately no setPointerCapture: capturing on the track would stop
 *  the circles' own click events from firing, which is what makes
 *  tap-to-focus and keyboard activation work. A window-level pointerup
 *  covers releases that land outside the track instead. */
function useCarousel() {
  const [focus, setFocus] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [dragging, setDragging] = useState(false)
  const drag = useRef(null)
  // Survives past pointerup so the click handler that fires next can
  // tell a tap from the end of a swipe.
  const moved = useRef(false)

  const finish = useCallback((clientX) => {
    const d = drag.current
    if (!d) return
    drag.current = null
    setDragging(false)
    setDragX(0)
    if (!moved.current) return
    const dx = clientX - d.startX
    // Round to the nearest slot, but let a short flick still count.
    const steps = Math.round(dx / PITCH) || Math.sign(dx)
    setFocus((f) => f - steps)
  }, [])

  const onPointerDown = useCallback((event) => {
    // Ignore secondary buttons; a kiosk only ever sends touch/primary.
    if (event.button) return
    drag.current = { id: event.pointerId, startX: event.clientX }
    moved.current = false
    setDragging(true)
  }, [])

  const onPointerMove = useCallback((event) => {
    const d = drag.current
    if (!d || d.id !== event.pointerId) return
    const dx = event.clientX - d.startX
    if (Math.abs(dx) > TAP_SLOP) moved.current = true
    setDragX(dx)
  }, [])

  const onPointerUp = useCallback(
    (event) => {
      if (drag.current?.id !== event.pointerId) return
      finish(event.clientX)
    },
    [finish],
  )

  // Catch releases outside the track.
  useEffect(() => {
    if (!dragging) return undefined
    const end = (event) => finish(event.clientX)
    window.addEventListener('pointerup', end)
    window.addEventListener('pointercancel', end)
    return () => {
      window.removeEventListener('pointerup', end)
      window.removeEventListener('pointercancel', end)
    }
  }, [dragging, finish])

  const onKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') setFocus((f) => f - 1)
    else if (event.key === 'ArrowRight') setFocus((f) => f + 1)
    else return
    event.preventDefault()
  }, [])

  return {
    focus,
    setFocus,
    dragX,
    dragging,
    wasDragged: () => moved.current,
    handlers: { onPointerDown, onPointerMove, onPointerUp, onKeyDown },
  }
}

function ServiceCard({ card, onSelect }) {
  const labelLines = card.label.map((line, i) => <span key={i}>{line}</span>)

  return (
    <button
      type="button"
      className={`svc-card svc-card--${card.slot}`}
      style={{
        ...offsetVars(card),
        '--sx': card.sprite[0],
        '--sy': card.sprite[1],
        '--hero-inset': card.inset ?? DEFAULT_INSET,
      }}
      onClick={() => onSelect(card.key)}
    >
      {/* Figma's 9.978px background blur. It sits on its own layer,
          never on .svc-card: a backdrop-filter makes the element a
          backdrop root, which would isolate the artwork below and turn
          the screen / hard-light / overlay blends into no-ops. */}
      <span className="svc-card__blur" />

      <span className="svc-card__hero svc-card__hero--back">
        <span className="svc-card__hero-clip">
          <img src={iconsBack} alt="" />
        </span>
      </span>

      <span className="svc-card__tint">
        <span className="svc-card__tint-crop">
          <img src={cardGlass} alt="" />
        </span>
      </span>

      <span className="svc-card__glass">
        <span className="svc-card__label svc-card__label--under" aria-hidden="true">
          {labelLines}
        </span>
        <span className="svc-card__glass-fill" />
      </span>

      <span className="svc-card__hero svc-card__hero--front">
        <span className="svc-card__hero-clip">
          <img src={iconsFront} alt="" />
        </span>
      </span>

      <span className="svc-card__light">
        <span className="svc-card__light-crop">
          <img src={card.glow ?? light} alt="" />
        </span>
      </span>

      <span className="svc-card__label svc-card__label--over">{labelLines}</span>
    </button>
  )
}

function Services({ onBack = () => {}, onHome = onBack, onSelect = () => {} }) {
  const { focus, setFocus, dragX, dragging, wasDragged, handlers } = useCarousel()

  const active = CATEGORIES[mod(focus, CATEGORIES.length)]

  const circles = []
  for (let rel = -WINDOW; rel <= WINDOW; rel += 1) {
    const index = focus + rel
    circles.push({ index, rel, category: CATEGORIES[mod(index, CATEGORIES.length)] })
  }

  return (
    <div className="svc">
      {/* Rotunda backdrop (I194:58122;1999:22024) — the landing's
          3088x4019 render, here behind a 7px blur and a 70% scrim. */}
      <div className="svc__bg" aria-hidden="true">
        <div className="svc__bg-crop">
          <img src={bgRoom} alt="" />
        </div>
        <div className="svc__bg-scrim" />
      </div>

      {/* Horizon band behind the hub (I194:58122;2168:41259) */}
      <img className="svc__band" src={band} alt="" />

      <ScreenHeader title="Our Services" onBack={onBack} onHome={onHome} />

      {/* ring bg (I194:58122;2848:61034) — four rings on the shared 30s
          loop, counter-rotating in pairs. */}
      <div className="svc__rings" aria-hidden="true">
        <div className="svc__ring svc__ring--left">
          <div className="svc__ring-crop">
            <img src={ringSmall} alt="" />
          </div>
        </div>
        <div className="svc__ring svc__ring--right">
          <div className="svc__ring-crop">
            <img src={ringSmall} alt="" />
          </div>
        </div>
        {/* The mask is an annulus stroke, so the ring texture spins
            inside a fixed window rather than the window spinning. */}
        <div
          className="svc__ring-mask"
          style={{
            maskImage: `url(${ringBigMask})`,
            WebkitMaskImage: `url(${ringBigMask})`,
          }}
        >
          <div className="svc__ring svc__ring--halo">
            <div className="svc__ring-crop">
              <img src={ringBig} alt="" />
            </div>
          </div>
        </div>
        <div className="svc__ring svc__ring--core">
          <div className="svc__ring-crop">
            <img src={ringBig} alt="" />
          </div>
        </div>
      </div>

      <ScreenFooter translucent />

      {/* Category carousel (I194:58122;1999:22069) */}
      <div
        className={`svc__carousel${dragging ? ' svc__carousel--dragging' : ''}`}
        role="group"
        aria-label="Service categories"
        {...handlers}
      >
        {circles.map(({ index, rel, category }) => {
          const focused = rel === 0
          return (
            <button
              key={index}
              type="button"
              className={`svc-cat svc-cat--${category.key}${focused ? ' svc-cat--focused' : ''}`}
              data-node-id={category.node}
              style={{ '--x': `${offsetFor(rel) + dragX}px` }}
              aria-current={focused ? 'true' : undefined}
              tabIndex={Math.abs(rel) <= 1 ? 0 : -1}
              onClick={() => {
                if (wasDragged()) return
                if (focused) onSelect(category.key)
                else setFocus(index)
              }}
            >
              <span className="svc-cat__circle">
                <span className="svc-cat__icon">
                  <span className="svc-cat__icon-crop">
                    <img
                      src={focused ? (category.iconFocused ?? category.icon) : category.icon}
                      alt=""
                    />
                  </span>
                </span>
                <span className="svc-cat__label">
                  {category.label.map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      {/* Connector lines, drawn under the cards they belong to. */}
      {active.cards.map((card) => (
        <img
          key={card.key}
          className={`svc-line svc-line--${card.slot}`}
          style={offsetVars(card)}
          src={card.line ?? SLOT_LINES[card.slot]}
          alt=""
        />
      ))}

      {active.cards.map((card) => (
        <ServiceCard key={card.key} card={card} onSelect={onSelect} />
      ))}
    </div>
  )
}

export default Services
