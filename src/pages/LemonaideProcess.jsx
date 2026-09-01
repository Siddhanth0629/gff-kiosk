import { useCallback, useRef, useState } from 'react'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import backArrow from '../assets/lemonaide/back-arrow.svg'
import def1 from '../assets/lemonaide/def-1.png'
import def6 from '../assets/lemonaide/def-6.png'
import def7 from '../assets/lemonaide/def-7.png'
import def8 from '../assets/lemonaide/def-8.png'
import def9 from '../assets/lemonaide/def-9.png'
import defShotA from '../assets/lemonaide/def-shot-a.png'
import defShotB from '../assets/lemonaide/def-shot-b.png'
import defShotC from '../assets/lemonaide/def-shot-c.png'
import defShotLogo from '../assets/lemonaide/def-shot-logo.svg'
import exp1 from '../assets/lemonaide/exp-1.png'
import exp10 from '../assets/lemonaide/exp-10.png'
import exp11 from '../assets/lemonaide/exp-11.png'
import exp2 from '../assets/lemonaide/exp-2.png'
import exp8 from '../assets/lemonaide/exp-8.png'
import exp9 from '../assets/lemonaide/exp-9.png'
import glassDrawn from '../assets/lemonaide/glass-drawn.png'
import glassReal from '../assets/lemonaide/glass-real.png'
import iconAi from '../assets/lemonaide/icon-ai.svg'
import iconGoal from '../assets/lemonaide/icon-goal.svg'
import iconHome09 from '../assets/lemonaide/icon-home-09.svg'
import iconHome from '../assets/lemonaide/icon-home.svg'
import mediaCall from '../assets/lemonaide/media-call.png'
import mediaQuoteShot from '../assets/lemonaide/media-quote-shot.png'
import num1Idle from '../assets/lemonaide/num-1-idle.svg'
import num1Large from '../assets/lemonaide/num-1-large.svg'
import num1 from '../assets/lemonaide/num-1.svg'
import num2Active from '../assets/lemonaide/num-2-active.svg'
import num2Large from '../assets/lemonaide/num-2-large.svg'
import num2 from '../assets/lemonaide/num-2.svg'
import num3Active from '../assets/lemonaide/num-3-active.svg'
import num3Large from '../assets/lemonaide/num-3-large.svg'
import num3 from '../assets/lemonaide/num-3.svg'
import num4Active from '../assets/lemonaide/num-4-active.svg'
import num4Large from '../assets/lemonaide/num-4-large.svg'
import num4 from '../assets/lemonaide/num-4.svg'
import num5 from '../assets/lemonaide/num-5.svg'
import num6 from '../assets/lemonaide/num-6.svg'
import num7 from '../assets/lemonaide/num-7.svg'
import paper from '../assets/lemonaide/paper.svg'
import researchFieldwork from '../assets/lemonaide/research-fieldwork.png'
import researchHeuristics from '../assets/lemonaide/research-heuristics.png'
import rule from '../assets/lemonaide/rule.svg'
import stepActiveRing from '../assets/lemonaide/step-active-ring.svg'
import stepCreate from '../assets/lemonaide/step-create.png'
import stepDefineActive from '../assets/lemonaide/step-define-active.gif'
import stepDefine from '../assets/lemonaide/step-define.png'
import stepDelight from '../assets/lemonaide/step-delight.png'
import stepEvolve from '../assets/lemonaide/step-evolve.png'
import stepExploreActive from '../assets/lemonaide/step-explore-active.gif'
import stepExplore from '../assets/lemonaide/step-explore.png'
import stepResearchIdle from '../assets/lemonaide/step-research-idle.png'
import stepResearch from '../assets/lemonaide/step-research.gif'
import stepStrategyActive from '../assets/lemonaide/step-strategy-active.gif'
import stepStrategy from '../assets/lemonaide/step-strategy.png'
import stepperRule from '../assets/lemonaide/stepper-rule.svg'
import stratBoardBg from '../assets/lemonaide/strat-board-bg.jpg'
import stratBoard from '../assets/lemonaide/strat-board.png'
import stratWorkshopA from '../assets/lemonaide/strat-workshop-a.png'
import stratWorkshopB from '../assets/lemonaide/strat-workshop-b.png'
import './LemonaideProcess.css'

/* =================================================================
   The LemonAIde Process — one Figma frame per step, all sharing a
   layout: "lemonade process" 3:22661 (Research), 522:88012
   (Strategy), 3:23583 (Define) and 522:88550 (Explore).

   This is the light half of the kiosk: cream and white on graph
   paper, where the other three screens are the dark room. It
   therefore does NOT use the shared ScreenChrome — its nav sits
   inside the cream masthead with no page title, and its footer is a
   different, light component (3:23121 vs the dark 1043:4369).

   Tapping a step in the stepper swaps the masthead subtitle and the
   whole content column. Each step owns its media, which is genuinely
   a different shape per frame, so it comes in as a component.
   ================================================================= */

/** Drag-to-scroll, shared by all four evidence strips. Each is a row
 *  wider than the 884px window it sits in — the strategy strip is
 *  3089px of cards — so it drags horizontally. */
function useDragScroll() {
  const ref = useRef(null)
  const drag = useRef(null)

  const onPointerDown = useCallback((event) => {
    if (event.button) return
    drag.current = { x: event.clientX, left: ref.current.scrollLeft }
  }, [])

  const onPointerMove = useCallback((event) => {
    const d = drag.current
    if (!d || !ref.current) return
    ref.current.scrollLeft = d.left - (event.clientX - d.x)
  }, [])

  const end = useCallback(() => {
    drag.current = null
  }, [])

  return {
    ref,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: end,
      onPointerLeave: end,
      onPointerCancel: end,
    },
  }
}

/* ------------------------------------------------------- media ---
   Research (3:22661) is the same drag-scrolling row as the other
   three steps. Its first slide is the composed one the frame designs
   — two screenshots with the quote bubble laid over them — and the
   evidence slides sit side by side after it.

   Figma does not clip the composition: it sits 6.5px above the panel
   and its right-hand screenshot runs ~14px past the right edge. The
   row's 24px left padding is exactly the composition's own left
   inset, so its slide starts at x=0 and the offsets below are the
   Figma ones less 24px. The strip is 498px pulled 6.5px up, which
   lets the vertical overhang paint while the column's flow height
   stays the designed 485px.
   ------------------------------------------------------------- */
function ResearchMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip lem-strip--research" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* 1200:417173 — the composed slide, positioned by hand. */}
        <div className="lem-research">
          <img className="lem__media-shot" src={mediaQuoteShot} alt="" />
          <div className="lem__quote">
            <div className="lem__quote-head">
              <span className="lem__quote-name">Pooja</span>
              <span className="lem__quote-tag">STANDARD USER</span>
            </div>
            <blockquote className="lem__quote-bubble">
              &ldquo;I&rsquo;m not clear about what &lsquo;Paid Upto&rsquo; and
              &lsquo;Principal Due&rsquo; mean. The text is hard to read, and
              the Interest Rate is missing here. On the Payments page, extra
              charges are also not shown.&rdquo;
            </blockquote>
          </div>
          <img className="lem__media-call" src={mediaCall} alt="" />
        </div>

        {/* Each slide is sized to its own artwork's aspect ratio at
            485px tall (3840x2152 and 1602x1080), so the shared
            cover-fit crops nothing. */}
        <div className="lem-slide" style={{ width: '865.4px' }}>
          <img
            src={researchFieldwork}
            alt="Stakeholder and user interviews conducted on site"
          />
        </div>
        <div className="lem-slide" style={{ width: '719.4px' }}>
          <img
            src={researchHeuristics}
            alt="Heuristic evaluation against NN/g&rsquo;s ten usability principles"
          />
        </div>
      </div>
    </div>
  )
}

/* Strategy (522:88012) is a scrollable row of four case-study cards.
   Only the first is inside Figma's visible window, so that is all
   Figma will render; cards 3 and 4 have no artwork in the file at all
   and show their caption over an empty plate, exactly as Figma does.
   See README. */
function StrategyMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* 4 - Case study - 7 (1324:71782) */}
        <div className="lem-case lem-case--wide">
          <img className="lem-case__half lem-case__half--a" src={stratWorkshopA} alt="" />
          <img className="lem-case__half lem-case__half--b" src={stratWorkshopB} alt="" />
          <span className="lem-case__tag" style={{ width: '158.85px', height: '30.15px' }} />
          <p className="lem-case__caption">A day at a workshop</p>
          <span className="lem-case__badge">
            <img src={iconHome09} alt="" />
          </span>
        </div>

        {/* 4 - Case study - 6 (1324:71788) */}
        <div className="lem-case lem-case--wide">
          <img className="lem-case__board-bg" src={stratBoardBg} alt="" />
          <img className="lem-case__board" src={stratBoard} alt="" />
          <span className="lem-case__bar lem-case__bar--1" />
          <span className="lem-case__bar lem-case__bar--2" />
          <span className="lem-case__bar lem-case__bar--3" />
          <span className="lem-case__tag" style={{ width: '176.85px', height: '55.35px' }} />
          <p className="lem-case__caption lem-case__caption--tall">
            <span>A digital Whiteboard </span>
            <span>during a workshop</span>
          </p>
        </div>

        {/* 4 - Case study - 4 (1324:71796) — its book mockup exports
            as a fully transparent PNG and renders blank. */}
        <div className="lem-case lem-case--narrow">
          <span className="lem-case__tag" style={{ width: '176.85px', height: '30.6px' }} />
          <p className="lem-case__caption">Our workshop manual</p>
        </div>

        {/* 4 - Case study - 9 (1324:71800) — its screen recording has
            no asset in the file. */}
        <div className="lem-case lem-case--wide">
          <span className="lem-case__tag" style={{ width: '209.7px', height: '54px' }} />
          <p className="lem-case__caption lem-case__caption--tall">
            <span>An Information Architecture </span>
            <span>delivered after the workshop</span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* Define (3:23583) is another scrollable row, but of plain full-bleed
   slides rather than captioned cards. Its second slide has no asset in
   the file, so it shows as an empty plate exactly as Figma renders it.
   The last slide is a composite of three screenshots plus a logo. */
function DefineMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        <div className="lem-slide" style={{ width: '865px' }}>
          <img src={def1} alt="" />
        </div>
        {/* 1324:71828 — no asset in the file. */}
        <div className="lem-slide" style={{ width: '806px' }} />
        <div className="lem-slide lem-slide--outlined" style={{ width: '807px' }}>
          <img src={def6} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '1009px' }}>
          <img src={def7} alt="" />
        </div>
        {/* 1324:71831 — this one is cropped rather than cover-fitted. */}
        <div className="lem-slide lem-slide--crop" style={{ width: '944px' }}>
          <img src={def8} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '916px' }}>
          <img src={def9} alt="" />
        </div>
        {/* 1324:71833 — three screenshots side by side, logo on the first. */}
        <div className="lem-slide lem-slide--plain" style={{ width: '1130px' }}>
          <img className="lem-shot lem-shot--a" src={defShotA} alt="" />
          <span className="lem-shot__logo">
            <img src={defShotLogo} alt="" />
          </span>
          <img className="lem-shot lem-shot--b" src={defShotB} alt="" />
          <img className="lem-shot lem-shot--c" src={defShotC} alt="" />
        </div>
      </div>
    </div>
  )
}

/* Explore (522:88550) is a third scrollable row. Its first slide's
   image fill is missing from the export and is a node render instead;
   one slide sits on a grey plate and is contained rather than
   cover-fitted, and two carry hairline borders. */
function ExploreMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* 1218:418613 — its image fill is missing from the export, so
            this is a render of the node itself. */}
        <div className="lem-slide" style={{ width: '830px' }}>
          <img src={exp1} alt="" />
        </div>
        <div className="lem-slide lem-slide--outlined" style={{ width: '830px' }}>
          <img src={exp2} alt="" />
        </div>
        <div className="lem-slide lem-slide--outlined-dark" style={{ width: '830px' }}>
          <img src={exp8} alt="" />
        </div>
        {/* 1218:418616 — contained on a grey plate, not cover-fitted. */}
        <div className="lem-slide lem-slide--plate" style={{ width: '830px' }}>
          <img src={exp9} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '862px' }}>
          <img src={exp10} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '862px' }}>
          <img src={exp11} alt="" />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------- steps ---
   The two designed steps carry their full content; the other five are
   drawn exactly as Figma has them but disabled, because no frame for
   them has been read yet. Each active illustration is an animated GIF
   and each step number has separate idle and active hand-drawn rings.
   ------------------------------------------------------------- */
const STEPS = [
  {
    key: 'research',
    label: 'Research',
    node: '3:22661',
    ready: true,
    idleIcon: stepResearchIdle,
    activeIcon: stepResearch,
    badgeIdle: num1Idle,
    badgeActive: num1,
    badgeIdleTop: 4.72,
    badgeActiveTop: 5.81,
    subtitle: 'How we replace assumptions with evidence.',
    lede: num1Large,
    headline: ['We start with evidence, ', 'not assumptions.'],
    chips: [
      'Stakeholder Interviews',
      'User Research',
      'UX Audit',
      'Competitor Benchmarking',
      'Tech Audit',
      'AI Readiness Audit',
    ],
    Media: ResearchMedia,
    takeaways: [
      'User Interviews: 50 interviews across personas to uncover user needs and behaviours.',
      'Competitive Benchmarking: A benchmark study across 3–5 key competitors.',
      'UX Audit: A UX audit of the website, client portal and mobile experience.',
    ],
    ai: 'Strategists own the decisions on priorities, positioning and trade-offs. AI helps them move faster by modelling scenarios, pressure-testing assumptions and surfacing edge cases.',
  },
  {
    key: 'strategy',
    label: 'Strategy',
    node: '522:88012',
    ready: true,
    idleIcon: stepStrategy,
    activeIcon: stepStrategyActive,
    // Unlike Research's cover-fit, Figma insets this one inside its box.
    activeCrop: { left: '2.91%', top: '13%', width: '121.19%', height: '74%' },
    badgeIdle: num2,
    badgeActive: num2Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we turn evidence into direction.',
    lede: num2Large,
    headline: ['Evidence becomes a direction the whole team ', 'can commit to.'],
    chips: [
      'Product Discovery Workshop',
      'Product Roadmapping',
      'System Architecture',
      'Tech Stack Planning',
      'AI Interaction Design',
    ],
    Media: StrategyMedia,
    takeaways: [
      'Strategy Workshop: A 2-day, in-person workshop to align key stakeholders and define the strategy.',
      'Product Roadmap: A prioritised roadmap defining what gets designed, and in what order.',
    ],
    takeawayList: 'nowrap',
    ai: 'AI synthesises stakeholder inputs, validates assumptions, models scenarios, and helps teams prioritise what to design and when.',
  },
  {
    key: 'define',
    label: 'Define',
    node: '3:23583',
    ready: true,
    idleIcon: stepDefine,
    activeIcon: stepDefineActive,
    badgeIdle: num3,
    badgeActive: num3Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we frame the right problems to solve.',
    lede: num3Large,
    headline: ['We turn direction into ', 'lasting structure.'],
    chips: [
      'User Personas',
      'User Journey Mapping',
      'Information Architecture',
      'Content Strategy',
      'Sprint Planning',
      'AI Architecture Planning',
    ],
    Media: DefineMedia,
    takeaways: [
      'User Personas & Key Journeys: Defined personas and key journeys across user groups.',
      'Information Architecture: A clear information architecture across all platforms.',
      'Branding & Research Alignment: Branding and research working in parallel to shape the experience.',
    ],
    takeawayList: 'nowrap',
    ai: 'Designers shape the structure and story. AI accelerates synthesis and drafts, while designers own the voice, hierarchy, and final fit.',
  },
  {
    key: 'explore',
    label: 'Explore',
    node: '522:88550',
    ready: true,
    idleIcon: stepExplore,
    activeIcon: stepExploreActive,
    activeCrop: { left: '-10.84%', top: '10%', width: '136.06%', height: '80%' },
    badgeIdle: num4,
    badgeActive: num4Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we generate and test creative possibilities.',
    lede: num4Large,
    headline: ['We make ideas testable before ', 'we commit.'],
    chips: [
      'Concept Generation',
      'Ideation Sketches',
      'Style Definition',
      'Rapid Prototyping',
      'Proof of Concept',
      'AI Behaviour Prototyping',
    ],
    Media: ExploreMedia,
    takeaways: [
      'Ideations: Dedicated designer time for concept creation, exploration and ideation.',
      'UX Concepts & Style Exploration: Multiple UX concepts, interaction patterns and visual directions explored before a direction is locked.',
    ],
    takeawayList: 'full',
    ai: 'Designers shape and select creative directions. AI expands the possibilities and accelerates iteration, while designers make the final creative call.',
  },
  { key: 'create', label: 'Create', idleIcon: stepCreate, badgeIdle: num5, badgeIdleTop: 6.87 },
  { key: 'delight', label: 'Delight', idleIcon: stepDelight, badgeIdle: num6, badgeIdleTop: 6.87 },
  { key: 'launch-grow', label: 'Launch & Grow', idleIcon: stepEvolve, badgeIdle: num7, badgeIdleTop: 6.87 },
]

function LemonaideProcess({ onBack = () => {}, onHome = onBack }) {
  const [stepKey, setStepKey] = useState('research')
  const step = STEPS.find((s) => s.key === stepKey) ?? STEPS[0]
  const Media = step.Media

  return (
    <div className="lem">
      {/* Grids-1..4 — 1px rules on a 31px pitch. Figma clips them into
          four margin frames, but those frames don't actually clip their
          contents; the opaque white card is what hides the middle, so
          one background on the root does it. */}
      <div className="lem__grid" aria-hidden="true" />

      <div className="lem__card">
        {/* cream masthead + stepper (3:23096 / 522:88453) */}
        <div className="lem__head">
          <div className="lem__nav">
            <button type="button" className="lem__back" onClick={onBack}>
              {/* Figma stacks rotate(180deg) on scaleY(-1) — a flip. */}
              <span className="lem__back-icon">
                <img src={backArrow} alt="" />
              </span>
              Go Back
            </button>
            <button
              type="button"
              className="lem__home"
              onClick={onHome}
              aria-label="Back to home page"
            >
              <img src={iconHome} alt="" />
            </button>
          </div>

          <div className="lem__intro">
            <div className="lem__glass" aria-hidden="true">
              <div className="lem__glass-real">
                <div className="lem__glass-crop">
                  <img src={glassReal} alt="" />
                </div>
              </div>
              <div className="lem__glass-drawn">
                <div className="lem__glass-crop">
                  <img src={glassDrawn} alt="" />
                </div>
              </div>
            </div>
            <div className="lem__intro-text">
              <p className="lem__title">The LemonAIde Process</p>
              <p className="lem__subtitle">{step.subtitle ?? STEPS[0].subtitle}</p>
            </div>
          </div>

          <div className="lem__stepper">
            <div className="lem__steps">
              {STEPS.map((s) => {
                const isActive = s.key === step.key
                return (
                  <button
                    key={s.key}
                    type="button"
                    className={`lem-step${isActive ? ' lem-step--active' : ''}`}
                    style={{
                      '--badge-top': `${isActive ? s.badgeActiveTop ?? 5.81 : s.badgeIdleTop}px`,
                    }}
                    onClick={() => setStepKey(s.key)}
                    disabled={!s.ready}
                    aria-current={isActive ? 'step' : undefined}
                  >
                    <span className="lem-step__body">
                      <span
                        className={`lem-step__icon${isActive && s.activeCrop ? ' lem-step__icon--inset' : ''}`}
                      >
                        <img
                          src={isActive ? (s.activeIcon ?? s.idleIcon) : s.idleIcon}
                          alt=""
                          style={isActive ? s.activeCrop : undefined}
                        />
                      </span>
                      <span className="lem-step__label">{s.label}</span>
                    </span>
                    <span className="lem-step__badge">
                      <img src={isActive ? (s.badgeActive ?? s.badgeIdle) : s.badgeIdle} alt="" />
                    </span>
                    {isActive && (
                      <span className="lem-step__ring" aria-hidden="true">
                        <img src={stepActiveRing} alt="" />
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
            <img className="lem__stepper-rule" src={stepperRule} alt="" />
          </div>
        </div>

        {/* content column (3:23056 / 522:88407) */}
        <div className="lem__content" data-node-id={step.node}>
          <div className="lem__lede">
            <div className="lem__lede-title">
              <span className="lem__lede-badge">
                <img src={step.lede} alt="" />
              </span>
              <h1 className="lem__lede-heading">{step.label}</h1>
            </div>
            <p className="lem__lede-copy">
              {step.headline.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </p>
            <img className="lem__rule" src={rule} alt="" />
            <div className="lem__chips">
              {step.chips.map((chip) => (
                <span className="lem__chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
            <img className="lem__rule" src={rule} alt="" />
          </div>

          <Media />

          <div className="lem__takeaway">
            <div className="lem__paper">
              <img className="lem__paper-bg" src={paper} alt="" />
              <div className="lem__paper-title">
                <span className="lem__paper-icon">
                  <img src={iconGoal} alt="" />
                </span>
                What you&rsquo;ll walk away with:
              </div>
              <ul
                className={`lem__paper-list${step.takeawayList ? ` lem__paper-list--${step.takeawayList}` : ''}`}
              >
                {step.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="lem__ai">
              <div className="lem__ai-title">
                <span className="lem__ai-icon">
                  <img src={iconAi} alt="" />
                </span>
                Where AI Helps
              </div>
              <p className="lem__ai-copy">{step.ai}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer [Test] (3:23121) — the light variant. */}
      <div className="lem__footer">
        <span className="lem__footer-logo">
          <img src={lyLogo} alt="" />
        </span>
        <div className="lem__footer-text">
          <p className="lem__footer-name">Lemon Yellow LLP</p>
          <p className="lem__footer-site">lemonyellow.design</p>
        </div>
      </div>
    </div>
  )
}

export default LemonaideProcess
