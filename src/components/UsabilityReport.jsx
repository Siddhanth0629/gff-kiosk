import contactSheet from '../assets/services-detail/ust-contact-sheet.png'
import iconCalendar from '../assets/services-detail/ust-icon-calendar.svg'
import iconDensity from '../assets/services-detail/ust-icon-density.svg'
import iconGroup from '../assets/services-detail/ust-icon-group.svg'
import iconHeart from '../assets/services-detail/ust-icon-heart.svg'
import iconLayout from '../assets/services-detail/ust-icon-layout.svg'
import iconMoveDown from '../assets/services-detail/ust-icon-move-down.svg'
import iconNav from '../assets/services-detail/ust-icon-nav.svg'
import iconToys from '../assets/services-detail/ust-icon-toys.svg'
import leadA from '../assets/services-detail/ust-lead-a.svg'
import leadB from '../assets/services-detail/ust-lead-b.svg'
import leadC from '../assets/services-detail/ust-lead-c.svg'
import leadIssue from '../assets/services-detail/ust-lead-issue.svg'
import persona from '../assets/services-detail/ust-persona.png'
import pieA from '../assets/services-detail/ust-pie-a.svg'
import pieB from '../assets/services-detail/ust-pie-b.svg'
import pieC from '../assets/services-detail/ust-pie-c.svg'
import screenShot from '../assets/services-detail/ust-screen.png'
import { ReportFooter, ReportGrid, ReportTitle } from './ReportKit.jsx'
import './UsabilityReport.css'

/* =================================================================
   "Usability testing" report — the seven pages in the Usability
   Testing screen's deliverables strip (Figma 1804:76444): the
   session board 1804:78553, Research Objectives 1804:78667, Tasks
   we assessed 1804:78801, a persona 1804:78934, a task's findings
   1804:79078, a screen finding 1804:79210 and the recommendations
   1804:79326.

   The deck is built from the same Figma components as the UX Audit
   report, so the graph-paper grid, byline footer and title block
   come from ReportKit; only the page bodies are here.

   Set in Gilroy at the document's own scale, hence Figma's
   fractional px throughout.
   ================================================================= */

const KICKER = 'Usability Testing'

/* ------------------------------------ session board (1804:78553) --- */

/* Top slideshow (1804:78656) — seven session photographs, every one
   a crop of the same contact sheet, so each tile carries the window
   Figma frames it with. */
const BOARD_TILES = [
  { x: 12.31, y: -0.02, w: 324.383, h: 179.769, ix: -3.71, iy: -11.56, iw: 232.06, ih: 234.67 },
  { x: 358.02, y: -0.02, w: 215.054, h: 179.878, ix: -9.48, iy: -238.14, iw: 525.59, ih: 352.69 },
  { x: 594.56, y: -0.02, w: 215.054, h: 179.878, ix: -125.74, iy: -238.14, iw: 525.59, ih: 352.69 },
  { x: 0, y: 200.96, w: 156.052, h: 180.059, ix: -219.7, iy: -11.56, iw: 483.16, ih: 234.67 },
  { x: 177.67, y: 201.2, w: 142.467, h: 179.667, ix: -409.99, iy: -120.58, iw: 523.42, ih: 232.6 },
  { x: 341.43, y: 201.2, w: 228.45, h: 179.44, ix: -147.78, iy: -120.58, iw: 326.01, ih: 232.6 },
  { x: 590.53, y: 201.42, w: 231.473, h: 179.591, ix: -218.8, iy: -11.56, iw: 324.88, ih: 234.67 },
]

/** The deck opens on the sessions themselves. */
export function ReportUsabilityBoard() {
  return (
    <div className="rk-page">
      <ReportGrid board />

      <div className="ust-board__sheet">
        <div className="ust-board__tiles">
          {BOARD_TILES.map((tile) => (
            <div
              className="ust-board__tile"
              key={`${tile.x}-${tile.y}`}
              style={{
                '--x': `${tile.x}px`,
                '--y': `${tile.y}px`,
                '--w': `${tile.w}px`,
                '--h': `${tile.h}px`,
              }}
            >
              <img
                src={contactSheet}
                alt=""
                style={{
                  '--ix': `${tile.ix}%`,
                  '--iy': `${tile.iy}%`,
                  '--iw': `${tile.iw}%`,
                  '--ih': `${tile.ih}%`,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <ReportFooter kicker={KICKER} />
    </div>
  )
}

/* ------------------------------- research objectives (1804:78667) --- */

const OBJECTIVES = [
  {
    title: 'Gaps & Pain Points',
    text: 'To identify any usability issues or pain points that users encounter while interacting with the Client app.',
  },
  {
    title: 'Expectations & Wants',
    text: "To gain insights into users' thoughts, expectations, behaviours and to understand their mental models",
  },
  {
    title: 'Brand Perception & satisfaction',
    text: "To assess the market sentiment towards the Client App app, understanding users' perceptions, preferences, and overall satisfaction with the app.",
  },
]

/** What the sessions set out to learn. */
export function ReportUsabilityObjectives() {
  return (
    <div className="rk-page">
      <ReportGrid board />
      <ReportFooter kicker={KICKER} />

      <div className="ust-obj__sheet">
        <p className="ust-obj__title">Research Objectives</p>
        <div className="ust-obj__cards">
          {OBJECTIVES.map((objective, i) => (
            <div className="ust-obj__card" key={objective.title}>
              <p className="ust-obj__num">{String(i + 1).padStart(2, '0')}</p>
              <div className="ust-obj__body">
                <p className="ust-obj__card-title">{objective.title}</p>
                <p className="ust-obj__card-text">{objective.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------ tasks assessed (1804:78801) --- */

const TASKS = [
  'Apply for a loan',
  'Loan Repayment',
  'Gold Loan Calculator',
  'Bill Payment',
  'Top Up Loan',
  'Download Statement',
  'Renew Loan',
]

/** The task list participants were asked to work through. */
export function ReportUsabilityTasks() {
  return (
    <div className="rk-page">
      <ReportGrid board />
      <ReportFooter kicker={KICKER} />

      <div className="ust-tasks__sheet">
        <p className="ust-tasks__title">Tasks we assessed</p>
        <p className="ust-tasks__blurb">
          We asked the user to perform the following tasks on the Client App
          app...
        </p>
      </div>

      <div className="ust-tasks__panel">
        <div className="ust-tasks__list">
          {TASKS.map((task, i) => (
            <div
              className={`ust-tasks__row${i === TASKS.length - 1 ? ' ust-tasks__row--last' : ''}`}
              key={task}
            >
              <span className="ust-tasks__num">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="ust-tasks__label">{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------ persona (1804:78934) --- */

const PERSONA_CARDS = [
  {
    key: 'challenges',
    label: 'CHALLENGES',
    icon: iconToys,
    dark: true,
    width: 229.346,
    items: [
      'Finds top-up, and renewal confusing.',
      'Unsure where to see loan statements or active loans.',
      'Needs clearer info on interest, principal, and dues.',
      'Gives up on login due to errors and hard-to-understand messages.',
      'English-heavy text is difficult to follow.',
    ],
  },
  {
    key: 'wants',
    label: 'WANTS',
    icon: iconHeart,
    width: 218.807,
    items: [
      'A single dashboard showing all loan-related actions clearly, with vernacular language support.',
      'Notifications before repayment dates to avoid missing deadlines.',
      'Visual confirmation of collateral and clear loan status indicators.',
      'Guided step-by-step workflows in the user’s preferred language.',
    ],
  },
]

/** One of the personas the sessions produced. */
export function ReportUsabilityPersona() {
  return (
    <div className="rk-page">
      <ReportGrid faint />

      <img className="ust-persona__portrait" src={persona} alt="" />
      <div className="ust-persona__sheet" />

      <ReportFooter kicker={KICKER} />

      <ReportTitle
        module="The ‘Branch Regular’"
        className="ust-persona__title"
      />

      <div className="ust-persona__bio">
        <p>
          Meenakshi has a gold loan but rarely uses the app, preferring to visit
          the branch for most transactions. She is highly confident in handling
          loans offline and knows the procedures inside out.
        </p>
        <p>
          When using the app, she needs guidance and clear instructions,
          especially for top-ups or renewals.
        </p>
      </div>

      <div className="ust-persona__who">
        <p>Meenakshi Ramesh, 52</p>
        <p>Grocery Store owner in Madurai</p>
      </div>

      {PERSONA_CARDS.map((card) => (
        <div className={`ust-persona__card ust-persona__card--${card.key}`} key={card.key}>
          <div className="ust-persona__card-head">
            <span
              className={`ust-persona__icon${card.dark ? ' ust-persona__icon--dark' : ''}`}
            >
              <img src={card.icon} alt="" />
            </span>
            <p className="ust-persona__label">{card.label}</p>
          </div>
          <ul style={{ '--w': `${card.width}px` }}>
            {card.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/* ------------------------------- task completion (1804:79078) --- */

const OUTCOMES = [
  { key: 'success', count: '34', label: 'Success' },
  { key: 'failed', count: '2', label: 'Failed' },
  { key: 'prompted', count: '1', label: 'Prompted' },
]

/** How one task scored, with the pie and the leader lines out to
 *  the screen it was performed on. Figma leaves that mockup's fill
 *  empty, so it renders as the bare device plate. */
export function ReportUsabilityTask() {
  return (
    <div className="rk-page">
      <ReportGrid board faint />
      <div className="ust-task__sheet" />
      <div className="ust-task__phone ust-task__phone--empty" />

      <ReportFooter kicker={KICKER} />

      <div className="ust-task__title">
        <p className="ust-task__flow">Task 1: Apply for a loan</p>
        <p className="ust-task__question">
          On the Client App app, where can you find the option to apply for a
          loan?
        </p>
      </div>

      <p className="ust-task__note">Apply for a loan</p>
      <p className="ust-task__legend">Task Completion</p>

      {/* Pie chart (1804:79189) — the ring and its two small wedges
          all live inside one turned circle, so each arc is placed
          within a rotated box rather than rotated itself. */}
      <div className="ust-task__pie">
        {[
          ['a', pieA],
          ['b', pieB],
          ['c', pieC],
        ].map(([key, src]) => (
          <span className={`ust-task__arc ust-task__arc--${key}`} key={key}>
            <span className="ust-task__arc-dial">
              <img src={src} alt="" />
            </span>
          </span>
        ))}
        <p className="ust-task__total">
          <strong>37</strong> Total Participants
        </p>
      </div>

      <div className="ust-task__stats">
        {OUTCOMES.map((outcome) => (
          <div
            className={`ust-task__stat ust-task__stat--${outcome.key}`}
            key={outcome.key}
          >
            <p className="ust-task__stat-count">{outcome.count}</p>
            <p className="ust-task__stat-label">{outcome.label}</p>
          </div>
        ))}
      </div>

      <img className="ust-task__lead ust-task__lead--a" src={leadA} alt="" />
      <img className="ust-task__lead ust-task__lead--b" src={leadB} alt="" />
      <img className="ust-task__lead ust-task__lead--c" src={leadC} alt="" />
    </div>
  )
}

/* ------------------------------- screen finding (1804:79210) --- */

const USER_TYPES = [
  { key: 'first', label: 'FIRST TIME USER' },
  { key: 'standard', label: 'STANDARD USER' },
  { key: 'advanced', label: 'ADVANCED USER' },
]

/** Issues Updated (1804:79322) — what the sessions found on one
 *  screen, graded positive. */
export function ReportUsabilityFinding() {
  return (
    <div className="rk-page">
      <ReportGrid board faint />
      <div className="ust-task__sheet" />

      <div className="ust-task__phone">
        <img src={screenShot} alt="" />
      </div>

      <ReportFooter kicker={KICKER} />

      <ReportTitle
        flow="Task 1: Apply for a loan"
        module="Home Screen"
        className="ust-find__title"
      />

      <div className="ust-find__card">
        <span className="ust-find__grade">positive</span>

        <span className="ust-find__users">
          <strong>18/37</strong> users
        </span>
        <p className="ust-find__heading">Ease of Discovery &amp; Completion</p>
        <p className="ust-find__body">
          The Apply Loan task was generally easy to perform, with 50% of the
          users completing it smoothly—especially since the feature was placed
          prominently on the home screen.
        </p>

        <div className="ust-find__seen">
          <p className="ust-find__seen-label">Mostly Seen in:</p>
          {USER_TYPES.map((type) => (
            <span
              className={`ust-find__type ust-find__type--${type.key}`}
              key={type.key}
            >
              {type.label}
            </span>
          ))}
        </div>
      </div>

      <img className="ust-find__lead" src={leadIssue} alt="" />
      <p className="ust-find__note">Home Screen</p>
    </div>
  )
}

/* --------------------------------- recommendations (1804:79326) --- */

const RECOMMENDATIONS = [
  {
    icon: iconMoveDown,
    flip: true,
    title: 'Homepage Prioritization',
    text: 'Users often scroll excessively to reach essential features like repayments, renewals, or top-ups. Rearranging the homepage based on usage patterns will highlight priority actions and save time.',
  },
  {
    icon: iconNav,
    title: 'Unintuitive Navigation Menus',
    text: 'Both the bottom navigation and side menus are unintuitive, with poor grouping and unclear labeling. Redesigning them to surface key features more logically will make navigation smoother, reduce confusion, and prevent unnecessary drop-offs.',
  },
  {
    icon: iconDensity,
    title: 'Visual Distinction',
    text: 'Key CTAs for renewal, top-up, and repayment blend in with other content. Using distinct colors, shapes, or placement will make them immediately recognizable.',
  },
  {
    icon: iconLayout,
    title: 'Page Layout for Mobile',
    text: 'Some pages appear cluttered or difficult to read on mobile. Optimizing layout and spacing ensures that all content and actions are easily accessible on smaller screens.',
  },
  {
    icon: iconCalendar,
    title: 'Date Input Flexibility',
    text: 'Entering older dates via the calendar is tedious for many users. Allowing both manual typing and calendar selection will speed up the process and reduce frustration.',
  },
  {
    icon: iconGroup,
    title: 'Nominee Option',
    text: 'Users expressed interest in adding nominee details during loan applications. This feature enhances safety, especially for senior users, and builds trust in the platform.',
  },
]

/** The deck closes on what to change. This page sits on the
 *  report's grey ground rather than white. */
export function ReportUsabilityRecommendations() {
  return (
    <div className="rk-page ust-recs">
      <ReportFooter kicker={KICKER} />

      <div className="ust-recs__grid">
        {RECOMMENDATIONS.map((rec) => (
          <div className="ust-recs__card" key={rec.title}>
            <div className="ust-recs__head">
              <span className="ust-recs__icon">
                <img
                  className={rec.flip ? 'ust-recs__icon--flip' : undefined}
                  src={rec.icon}
                  alt=""
                />
              </span>
              <p className="ust-recs__title">{rec.title}</p>
            </div>
            <p className="ust-recs__body">{rec.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
