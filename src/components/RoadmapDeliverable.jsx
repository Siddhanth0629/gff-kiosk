import { Fragment } from 'react'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import goalsDiagram from '../assets/services-detail/roadmap-goals-diagram.svg'
import stepRule from '../assets/services-detail/roadmap-step-rule.svg'
import './RoadmapDeliverable.css'

/* =================================================================
   Product Roadmap deliverable — the three document cards that open
   the service detail's deliverables strip: Figma "PR 11" 1804:73545,
   "PR 12" 1804:73940 and "Product Roadmap - Goals" 1804:74333.

   PR 11 and PR 12 are two windows onto one 963.556px-wide roadmap
   document. The strip shows a 542px band of it: PR 11 from the top,
   PR 12 from 469px down, and each hides the header the other shows.
   So <RoadmapDoc> renders the document once and the card slides it
   under its own clip.

   The document is set in Space Grotesk, its own typeface, not the
   kiosk's Gilroy. Copy lives here rather than in serviceDetailData
   because it is the artwork's content, not the screen's.
   ================================================================= */

/** Renders one rich-text run: strings verbatim, `{ b }` in Medium. */
function Run({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <strong key={i} className="rmd__em">
        {part.b}
      </strong>
    ),
  )
}

/* The document's three roadmap phases (1804:73866 / 1804:73557).
   `body` doubles as the goals page's copy — Figma sets the same
   three paragraphs there at a larger size. */
const PHASES = [
  {
    key: 'now',
    label: 'Now',
    body: [
      'Allows the executives a ',
      { b: 'panoramic view' },
      ' of their organisation, its interconnected ecosystem, and the strategic landscape. Empowers them to ',
      { b: 'tailor and customise' },
      ' the operational framework.',
    ],
    chips: [
      'Account Creation',
      'Onboarding',
      'Guided Tour',
      'Send for Approval',
      'Presentation view',
      'World Building',
      'Customisation',
      'Strategy Lifecycle',
      'SoS Visualisation',
    ],
    cards: [
      {
        title: 'Strawman Visualisation',
        text: 'Gain organisational visibility in two weeks with minimal data inputs and activity',
      },
      {
        title: 'Enrich the World',
        text: 'Begin to improve the organisational knowledge graph and see your SoS improve',
      },
      {
        title: 'Edit the Ontology',
        text: 'Customise a consistent language that can be followed throughout the SoS',
      },
      {
        title: 'Validate',
        text: 'Share and present the OS for validation from peers, Chairman, Board and higher ups.',
      },
      {
        title: 'Interactive Tour',
        text: 'Guided inquiry and Strategy orchestration constructs to understand the World building exercise better.',
      },
      {
        title: 'Updates & Notifications',
        text: 'Get updates and notifications on the world building exercise',
      },
    ],
  },
  {
    key: 'next',
    label: 'Next',
    body: [
      'Unlocks the ',
      { b: 'Service Catalogue' },
      ' and leverages advanced AI functionalities for comprehensive ',
      { b: 'summarisation' },
      ', ',
      { b: 'intelligent recommendations' },
      ', and ',
      { b: 'robust scenario testing' },
      '. Optimise ideation and refinement through the Jamboard and use the SOS through ',
      { b: 'multiple devices' },
      '.',
    ],
    chips: [
      'AI Companion',
      'Service Catalogue',
      'Marketplace',
      'Collaboration',
      'Customisation',
      'World Building',
      'Strategy Lifecycle',
      'World Enrichment',
    ],
    cards: [
      {
        title: 'Enable Tagging',
        text: 'Tag and assign people to fill in the information gaps and keep improving the SoS view',
      },
      {
        title: 'Share Inputs & Interact',
        text: 'Review, approve and appreciate the World building done by others.',
      },
    ],
  },
  {
    key: 'future',
    label: 'Future',
    body: [
      "Streamline Executive's operations with focused actions including ",
      { b: 'Activation' },
      ', ',
      { b: 'Review' },
      ', and ',
      { b: 'Analysis' },
      '. Engages a comprehensive range of ',
      { b: 'personas' },
      ' to develop the SOS, execute services, and establish a dynamic marketplace for work packages.',
    ],
    chips: [
      'Service Catalogue',
      'Marketplace',
      'Platform Governance',
      'Gamification',
      'Third Party Integrations',
      'AI Companion',
      'Customisation',
      'Strategy Lifecycle',
      'World Enrichment',
    ],
    cards: [
      {
        title: 'Easy Data Input',
        text: 'Upload extensive documents and presentations as a form of inputting data.',
      },
      {
        title: 'Third Party Integrations',
        text: 'Connect your third party integrations such as HRMS, CRM etc for easy data retrieval.',
      },
      {
        title: 'Conflict Resolution & Voting',
        text: 'Settle disagreements and differences of opinion with the help of in-built conflict resolution mechanisms.',
      },
      {
        title: 'Customised Visuals',
        text: "Tailor the visual representation of the system of systems to match the executive's aesthetic and mental model.",
      },
    ],
  },
]

/* The goals page reads bottom-up — Future at the top of the stack,
   Now at the foot — and gives each paragraph its own label height
   and measure (1804:74349). */
const GOAL_ROWS = [
  { key: 'future', label: 'Future', tab: 40, width: 405.496 },
  { key: 'next', label: 'Next', tab: 27, width: 405.496 },
  { key: 'now', label: 'Now', tab: 24, width: 387.43 },
]

const BY_KEY = Object.fromEntries(PHASES.map((phase) => [phase.key, phase]))

/** header (1804:73547 / 1804:73942). PR 11 puts the byline on the
 *  right and drops the label; PR 12 does the opposite. */
function DocHeader({ label }) {
  return (
    <div className={`rmd__header${label ? '' : ' rmd__header--right'}`}>
      {label && <span className="rmd__header-label">Product Roadmap</span>}
      <span className="rmd__header-brand">
        <img src={lyLogo} alt="" />
        Lemon Yellow
      </span>
    </div>
  )
}

/**
 * One 542px window onto the roadmap document.
 *
 * @param {number} top    How far down the document the window sits.
 * @param {boolean} label Whether the header carries its label.
 */
export function RoadmapDoc({ top = 0, label = false }) {
  return (
    <div className="rmd" style={{ '--rmd-top': `${-top}px` }}>
      <div className="rmd__paper" aria-hidden="true" />

      <DocHeader label={label} />

      {/* Business Vision (1804:73866) — the phase columns and the
          chips beneath them. */}
      <div className="rmd__vision">
        <div className="rmd__goals">
          {PHASES.map((phase) => (
            <div className={`rmd__goal rmd__goal--${phase.key}`} key={phase.key}>
              <span className="rmd__goal-label">{phase.label}</span>
              <div className="rmd__goal-panel">
                <p className="rmd__goal-text">
                  <Run parts={phase.body} />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values (1804:73880) */}
        <div className="rmd__values">
          <h3 className="rmd__values-title">Values Covered</h3>
          <div className="rmd__values-cols">
            {PHASES.map((phase) => (
              <div className={`rmd__chips rmd__chips--${phase.key}`} key={phase.key}>
                {phase.chips.map((chip) => (
                  <span className="rmd__chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Worldbuilding (1804:73557) — the first section of the
          document body. Its Now/Next/Future timeline, and every
          section after it, sit below 1011px and so fall outside both
          windows; they are left out rather than rendered unseen. */}
      <div className="rmd__section">
        <h3 className="rmd__section-title">World building</h3>
        <div className="rmd__tracks">
          {PHASES.map((phase) => (
            <div className={`rmd__track rmd__track--${phase.key}`} key={phase.key}>
              {phase.cards.map((card) => (
                <div className="rmd__card" key={card.title}>
                  <h4 className="rmd__card-title">{card.title}</h4>
                  <p className="rmd__card-text">{card.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** Product Roadmap - Goals (1804:74333) — its own 542px page. */
export function RoadmapGoals() {
  return (
    <div className="rmg">
      <div className="rmd__paper" aria-hidden="true" />

      {/* header+footer (1804:74335) */}
      <span className="rmg__brand">Lemon Yellow</span>
      <span className="rmg__label">Product Roadmap</span>

      <h3 className="rmg__title">Business Goals</h3>

      {/* step (1804:74343) — the muted NOW/NEXT/FUTURE ribbon. */}
      <div className="rmg__step">
        <span>NOW</span>
        <span className="rmg__step-rule">
          <img src={stepRule} alt="" />
        </span>
        <span>NEXT</span>
        <span className="rmg__step-rule">
          <img src={stepRule} alt="" />
        </span>
        <span>FUTURE</span>
      </div>

      <img className="rmg__diagram" src={goalsDiagram} alt="" />

      <div className="rmg__rows">
        {GOAL_ROWS.map((row, i) => (
          <Fragment key={row.key}>
            {i > 0 && <span className="rmg__divider" />}
            <div className="rmg__row">
              <span className="rmg__tab" style={{ '--tab': `${row.tab}px` }}>
                <span className="rmg__tab-text">{row.label}</span>
              </span>
              <p className="rmg__text" style={{ '--measure': `${row.width}px` }}>
                <Run parts={BY_KEY[row.key].body} />
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
