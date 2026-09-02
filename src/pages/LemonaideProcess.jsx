import { useCallback, useRef, useState } from 'react'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import backArrow from '../assets/lemonaide/back-arrow.svg'
import create1 from '../assets/lemonaide/create-1.png'
import create2 from '../assets/lemonaide/create-2.png'
import create3 from '../assets/lemonaide/create-3.png'
import create5 from '../assets/lemonaide/create-5.png'
import create7 from '../assets/lemonaide/create-7.png'
import create8 from '../assets/lemonaide/create-8.png'
import def1 from '../assets/lemonaide/def-1.png'
import def6 from '../assets/lemonaide/def-6.png'
import def7 from '../assets/lemonaide/def-7.png'
import def8 from '../assets/lemonaide/def-8.png'
import def9 from '../assets/lemonaide/def-9.png'
import delight1 from '../assets/lemonaide/delight-1.png'
import delightMac from '../assets/lemonaide/delight-3-macbook.png'
import delightScreen from '../assets/lemonaide/delight-3-screen.png'
import delight4 from '../assets/lemonaide/delight-4.png'
import delight5 from '../assets/lemonaide/delight-5.png'
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
import launch1 from '../assets/lemonaide/launch-1.png'
import launch2 from '../assets/lemonaide/launch-2.png'
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
import num5Active from '../assets/lemonaide/num-5-active.svg'
import num5Large from '../assets/lemonaide/num-5-large.svg'
import num5 from '../assets/lemonaide/num-5.svg'
import num6Active from '../assets/lemonaide/num-6-active.svg'
import num6Large from '../assets/lemonaide/num-6-large.svg'
import num6 from '../assets/lemonaide/num-6.svg'
import num7Active from '../assets/lemonaide/num-7-active.svg'
import num7Large from '../assets/lemonaide/num-7-large.svg'
import num7 from '../assets/lemonaide/num-7.svg'
import paper from '../assets/lemonaide/paper.svg'
import researchFieldwork from '../assets/lemonaide/research-fieldwork.png'
import researchHeuristics from '../assets/lemonaide/research-heuristics.png'
import researchBasics from '../assets/lemonaide/research-basics.png'
import researchReport from '../assets/lemonaide/research-report.png'
import researchCompetitors from '../assets/lemonaide/research-competitors.png'
import rule from '../assets/lemonaide/rule.svg'
import stepActiveRing from '../assets/lemonaide/step-active-ring.svg'
import stepCreateActive from '../assets/lemonaide/step-create-active.gif'
import stepCreate from '../assets/lemonaide/step-create.png'
import stepDefineActive from '../assets/lemonaide/step-define-active.gif'
import stepDefine from '../assets/lemonaide/step-define.png'
import stepDelightActive from '../assets/lemonaide/step-delight-active.gif'
import stepDelight from '../assets/lemonaide/step-delight.png'
import stepEvolveActive from '../assets/lemonaide/step-evolve-active.gif'
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
import lemonadeStrategy3 from '../assets/lemonaide/lemonade-strategy3.png'
import lemonadeStrategy4 from '../assets/lemonaide/lemonade-strategy4.png'
import lemonadeDefine2 from '../assets/lemonaide/lemonade-define2.png'
import lemonadeDefine7 from '../assets/lemonaide/lemonade-define7.png'
import lemonadeCreate4 from '../assets/lemonaide/lemonade-create4.png'
import lemonadeCreate6 from '../assets/lemonaide/lemonade-create6.png'
import lemonadeDelight2 from '../assets/lemonaide/lemonade-delight2.png'
import lemonadeDelight1 from '../assets/lemonaide/lemonade-delight1.mp4'

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
            485px tall (3840x2152, 1602x1080, 510x498, 886x498 and
            830x498), so the shared cover-fit crops nothing. */}
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
        <div className="lem-slide" style={{ width: '496.7px' }}>
          <img
            src={researchBasics}
            alt="How each audit issue is structured: title, definition, categorisation, heuristic violated, complexity and proposed solution"
          />
        </div>
        <div className="lem-slide" style={{ width: '862.9px' }}>
          <img
            src={researchReport}
            alt="Pages from the audit report, annotating issues across the My Loans and Loan Calculator screens"
          />
        </div>
        <div className="lem-slide" style={{ width: '808.3px' }}>
          <img
            src={researchCompetitors}
            alt="Competitor teardown comparing five direct pension platforms on visual design, strengths, weaknesses and features"
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
          <img className="lem-case__board" src={lemonadeStrategy3} alt="" />
          <span className="lem-case__tag" style={{ width: '176.85px', height: '30.6px' }} />
          <p className="lem-case__caption">Our workshop manual</p>
        </div>

        {/* 4 - Case study - 9 (1324:71800) — its screen recording has
            no asset in the file. */}
        <div className="lem-case lem-case--wide">
          <img className="lem-case__board" src={lemonadeStrategy4} alt="" />
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
        <div className="lem-slide" style={{ width: '806px' }} >
          <img src={lemonadeDefine2} alt="" />
        </div>
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
        <div className="lem-slide" style={{ width: 'full' }}>
          <img src={lemonadeDefine7} alt="" style={{objectFit:"contain"}}/>
        </div>
        {/* 1324:71833 — three screenshots side by side, logo on the first. */}
        
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

/* Create (3:24507) is a fourth scrollable row, of eight slides. Its
   first is the composed "screens" panel (1348:74681) — a red plate
   carrying some thirty screenshot fills, a MacBook mockup and the
   THE DESIGN label — which comes in as one render of the node rather
   than rebuilt layer by layer. Slides 4 and 6 ("11" and "13",
   1348:75035 / :75037) have no fill in the file and show as empty
   plates, exactly as Figma renders them. Only the first two slides
   are square; the rest carry the 12px radius. */
function CreateMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* screens (1348:74681) */}
        <div className="lem-slide lem-slide--square" style={{ width: '862px' }}>
          <img src={create1} alt="The delivered design: app screens and the marketing site" />
        </div>
        <div className="lem-slide lem-slide--square" style={{ width: '905px' }}>
          <img src={create2} alt="High-fidelity screens for the insurance app" />
        </div>
        {/* 1348:75034 — Figma shifts this fill up rather than centring it. */}
        <div className="lem-slide lem-slide--crop-bottom" style={{ width: '928.7px' }}>
          <img src={create3} alt="The onboarding and verification flow, screen by screen" />
        </div>
        {/* 1348:75035 — no asset in the file. */}
        <div className="lem-slide" style={{ width: '928.7px' }} >
          <img src={lemonadeCreate4} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '928.7px' }}>
          <img src={create5} alt="Screens mapped to their states across the build" />
        </div>
        {/* 1348:75037 — no asset in the file. */}
        <div className="lem-slide" style={{ width: '928.7px' }} >
          <img src={lemonadeCreate6} alt="" />
        </div>
        <div className="lem-slide" style={{ width: '815.5px' }}>
          <img src={create7} alt="API collections and responses during integration" />
        </div>
        <div className="lem-slide" style={{ width: '818px' }}>
          <img src={create8} alt="The front-end build running locally" />
        </div>
      </div>
    </div>
  )
}

/* Cycle Day Wise (1487:72066) — the motion-design workspace with its
   five regions called out. Figma's renderer returns an empty 1x1 for
   this whole subtree, so it is rebuilt from its geometry rather than
   flattened: graph paper, the grey plate, the MacBook carrying the
   After Effects screenshot, and five hairline outlines each with a
   tabbed label. Every number below is Figma's, relative to the
   627.938x387.897 plate (1487:72170).

   `at` places the tab against the box it labels and `cap` says which
   pair of its corners is rounded — Figma tucks each one inside a
   different edge. */
const ANATOMY = [
  { label: 'Top Bar', box: [77.92, 75.17, 472.322, 18.933], at: { top: 0 }, cap: 'bottom', dx: 0 },
  {
    label: 'Left Panel',
    box: [76.43, 95.09, 130.038, 131.034],
    // The only region whose outline is inset from its own box.
    outline: [1.5, 128.543],
    at: { top: '120.07px' },
    cap: 'top',
    dx: -2.49,
  },
  { label: 'Center Area', box: [206.46, 95.09, 297.443, 131.034], at: { bottom: 0 }, cap: 'top', dx: 5.73 },
  { label: 'Right Panel', box: [504.9, 95.09, 45.339, 223.705], at: { bottom: '1px' }, cap: 'bottom', dx: 0 },
  { label: 'Bottom Panel', box: [77.92, 227.13, 427.98, 91.674], at: { bottom: 0 }, cap: 'top', dx: 22.17 },
]

function DelightAnatomy() {
  return (
    <div className="lem-anat">
      {/* Grids (1487:72068) — the same 31px pitch as the page. */}
      <div className="lem-anat__grid" aria-hidden="true" />

      {/* Content (1487:72170) */}
      <div className="lem-anat__plate">
        {/* The mockup is 638.5px wide inside a 627.9px plate, and Figma
            does not clip it: it overhangs both edges by ~5px. */}
        <div className="lem-anat__mac">
          <img src={delightMac} alt="" />
          <span className="lem-anat__screen">
            <img src={delightScreen} alt="The motion-design workspace for the Cycle Day Wise sequence" />
          </span>
        </div>

        {ANATOMY.map((region) => (
          <div
            key={region.label}
            className="lem-anat__region"
            style={{
              left: `${region.box[0]}px`,
              top: `${region.box[1]}px`,
              width: `${region.box[2]}px`,
              height: `${region.box[3]}px`,
            }}
          >
            <span
              className="lem-anat__outline"
              style={{
                left: `${region.outline?.[0] ?? 0}px`,
                width: `${region.outline?.[1] ?? region.box[2]}px`,
              }}
            />
            <span
              className={`lem-anat__tab lem-anat__tab--cap-${region.cap}`}
              style={{ left: `calc(50% + ${region.dx}px)`, ...region.at }}
            >
              {region.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* Delight (3:24968) is the fifth scrollable row, of five slides. Its
   third is the annotated workspace above; the second (1487:72065) has
   no fill in the file and shows as a bordered empty plate, exactly as
   Figma renders it. */
function DelightMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* 1487:72064 — a screen recording whose fill is missing from
            the export, so this is a render of the node itself. */}
        <div className="lem-slide" style={{ width: '879px' }}>
          <img src={delight1} alt="The Indian Tiffin site, mid-scroll" />
          {/* <video src={lemonadeDelight1} autoPlay muted></video> */}
        </div>
        {/* 1487:72065 — no asset in the file. */}
        <div className="lem-slide lem-slide--outlined-soft" style={{ width: '889px' }}>
          <img src={lemonadeDelight2} alt="" />
        </div>
        {/* Cycle Day Wise (1487:72066) */}
        <div className="lem-slide" style={{ width: '713px' }}>
          <DelightAnatomy />
        </div>
        <div className="lem-slide" style={{ width: '862.2px' }}>
          <img src={delight4} alt="Cia, the conversational-AI mascot, and its expression set" />
        </div>
        <div className="lem-slide" style={{ width: '780px' }}>
          <img src={delight5} alt="Illustrated screens from the risk-profiling quiz" />
        </div>
      </div>
    </div>
  )
}

/* Launch & Grow (3:25431) is the last scrollable row, and the shortest:
   two slides over the 884px window. Figma puts the assetless one first
   (1200:418516) — its fill is missing from the export but the node
   renders real artwork, so that slide is a node render, not the empty
   plate the export suggests. The second is contained on a white plate
   inside a hairline border rather than cover-fitted. */
function LaunchMedia() {
  const { ref, handlers } = useDragScroll()

  return (
    <div className="lem-strip" ref={ref} {...handlers}>
      <div className="lem-strip__row">
        {/* 1200:418516 — a render of the node itself. */}
        <div className="lem-slide" style={{ width: '829px' }}>
          <img src={launch1} alt="A post-launch usability session in progress, screen shared with the participants" />
        </div>
        {/* 1200:418515 */}
        <div className="lem-slide lem-slide--sheet" style={{ width: '830px' }}>
          <img src={launch2} alt="The findings tracker: each issue scored by area, type and impact" />
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------- steps ---
   All seven steps carry their full content now, one Figma frame each.
   Every active illustration is an animated GIF and every step number
   has separate idle and active hand-drawn rings.
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
  {
    key: 'create',
    label: 'Create',
    node: '3:24507',
    ready: true,
    idleIcon: stepCreate,
    activeIcon: stepCreateActive,
    badgeIdle: num5,
    badgeActive: num5Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we craft the product experience.',
    lede: num5Large,
    headline: ['We build the real thing, design and ', 'development together.'],
    chips: [
      'High-Fidelity UI Design',
      'Design System',
      'UX & Content Writing',
      'Full-stack Development',
      'API Integrations',
      'Developer Handoff',
    ],
    Media: CreateMedia,
    takeaways: [
      'Design System: A scalable design system built for consistency and growth.',
      'Production-Ready UI: Polished UI designed and ready for production.',
      'Developer-Ready Handoff: Complete, developer-ready designs and specifications.',
    ],
    takeawayList: 'full',
    ai: 'Designers and developers own the work and quality. AI speeds up copy, asset creation and development, while human judgement keeps every output production-ready.',
  },
  {
    key: 'delight',
    label: 'Delight',
    node: '3:24968',
    ready: true,
    idleIcon: stepDelight,
    activeIcon: stepDelightActive,
    badgeIdle: num6,
    badgeActive: num6Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we elevate function into feeling.',
    lede: num6Large,
    headline: ['The details that turn a product into an ', 'experience people trust.'],
    chips: [
      'Illustration & Iconography',
      'Motion Design',
      'Error and Edge States',
      'Cross-Device Testing',
      'AI Personality Design',
    ],
    Media: DelightMedia,
    takeaways: [
      'Micro-interactions & Motion: Thoughtful micro-interactions and motion that bring the experience to life.',
      'UX Copy: Clear, intuitive UX copy across key user journeys.',
    ],
    takeawayList: 'full',
    ai: 'Designers set the tone and taste. AI helps prototype and iterate motion and copy faster, giving designers more time to refine the details that make the experience work.',
  },
  {
    key: 'launch-grow',
    label: 'Launch & Grow',
    node: '3:25431',
    ready: true,
    idleIcon: stepEvolve,
    activeIcon: stepEvolveActive,
    badgeIdle: num7,
    badgeActive: num7Active,
    badgeIdleTop: 6.87,
    badgeActiveTop: 8.22,
    subtitle: 'How we ship, measure, and grow.',
    lede: num7Large,
    headline: ['Launch is the start of the next loop, ', 'not the end of the process.'],
    chips: [
      'Usability Testing Cycles',
      'Behavior Analytics',
      'A/B Testing',
      'Product roadmapping',
      'AMC',
      'AI Output Review',
    ],
    Media: LaunchMedia,
    takeaways: [
      'Post-Launch Usability Testing: Usability testing to identify and address friction after launch.',
      'Ongoing User Insights: Continuous insights that keep the experience relevant.',
    ],
    takeawayList: 'full',
    ai: 'People own the final call on accuracy and quality. AI supports usability analysis and QA, helping teams spot more issues and turn findings into sharper insights.',
  },
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
