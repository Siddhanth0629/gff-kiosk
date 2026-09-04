import lyLogo from '../assets/case-studies/ly-logo.svg'
import boardFrameA from '../assets/services-detail/int-board-frame-a.svg'
import boardFrameB from '../assets/services-detail/int-board-frame-b.svg'
import board1 from '../assets/services-detail/int-board-1.png'
import board2 from '../assets/services-detail/int-board-2.png'
import board4 from '../assets/services-detail/int-board-4.png'
import board5 from '../assets/services-detail/int-board-5.png'
import charts1 from '../assets/services-detail/int-charts-1.png'
import charts2 from '../assets/services-detail/int-charts-2.png'
import charts3 from '../assets/services-detail/int-charts-3.png'
import charts4 from '../assets/services-detail/int-charts-4.png'
import insightsShot from '../assets/services-detail/int-insights-shot.png'
import objBadge from '../assets/services-detail/int-obj-badge.png'
import personaA from '../assets/services-detail/int-persona-a.png'
import personaB from '../assets/services-detail/int-persona-b.png'
import pin from '../assets/services-detail/int-pin.svg'
import quoteBg from '../assets/services-detail/int-quote-bg.png'
import quotePhoto from '../assets/services-detail/int-quote-photo.png'
import reportPhoto from '../assets/services-detail/int-report-photo.png'
import stickySheet from '../assets/services-detail/int-sticky-note.svg'
import './InterviewReport.css'

/* =================================================================
   "User interview insights" — the seven report pages in the User
   Interview screen's deliverables strip (Figma 1804:74382): Charts
   1804:75216, Research Objectives 1804:75275, Key-insights
   1804:75365, Quote 1804:75419, Persona 1804:75465, the photo board
   1804:75549 and In Conclusion 1804:75699.

   Every page is one 963.556 x 542 spread of the same client
   deliverable, so they share a shell: a punched Paper sheet, a
   green-highlight title Chip, torn Sticky notes and the byline
   Footer. Only the page bodies differ.

   The deliverable is set in Departure Mono and Satoshi, its own
   typefaces, not the kiosk's Gilroy — and at the document's own
   scale, hence Figma's fractional px throughout.
   ================================================================= */

/** Renders one rich-text run: strings verbatim, `{ b }` bold and
 *  `{ i }` bold italic, the two emphases the report uses. */
function Run({ parts }) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return part
    if (part.i)
      return (
        <em key={i} className="irp-em irp-em--italic">
          {part.i}
        </em>
      )
    return (
      <strong key={i} className="irp-em">
        {part.b}
      </strong>
    )
  })
}

/* ------------------------------------------------------------ shell --- */

/* Figma punches each edge with 15 holes and a half-hole cap top and
   bottom, exported as 34 flat-colour ellipses per page. They are the
   page ground showing through the sheet, so they are CSS circles
   painted in --irp-hole rather than 238 <img> tags. */
const HOLES = Array.from({ length: 15 }, (_, i) => i)

function Strip() {
  return (
    <div className="irp-paper__strip" aria-hidden="true">
      <span className="irp-paper__cap" />
      {HOLES.map((i) => (
        <span className="irp-paper__hole" key={i} />
      ))}
      <span className="irp-paper__cap irp-paper__cap--end" />
    </div>
  )
}

/** Paper — the sheet a page is printed on. */
function Paper({ className = '', style, children }) {
  return (
    <div className={`irp-paper ${className}`.trim()} style={style}>
      <Strip />
      <div className="irp-paper__main">{children}</div>
      <Strip />
    </div>
  )
}

/** Title (…) — a heading on the report's green marker highlight. */
function Chip({ className = '', style, children }) {
  return (
    <div className={`irp-chip ${className}`.trim()} style={style}>
      {children}
    </div>
  )
}

/* Sticky-note — one torn-edge sheet. Figma exports the shape once
   per instance size; the path scales, so a single asset covers all
   of them. */
function Sticky({ className = '', style, children }) {
  return (
    <div className={`irp-sticky ${className}`.trim()} style={style}>
      <img className="irp-sticky__sheet" src={stickySheet} alt="" />
      <div className="irp-sticky__body">{children}</div>
    </div>
  )
}

/** Footer — the byline strip. `light` sets it over artwork, where
 *  Figma reverses the type out to white. */
function Footer({ light = false, wash = false }) {
  return (
    <div
      className={`irp-footer${light ? ' irp-footer--light' : ''}${wash ? ' irp-footer--wash' : ''}`}
    >
      <span className="irp-footer__kicker">User interview insights</span>
      <span className="irp-footer__label">Created by</span>
      <span className="irp-footer__name">LEMON YELLOW LLP</span>
      <img className="irp-footer__logo" src={lyLogo} alt="" />
    </div>
  )
}

/* ------------------------------------------------------- Charts page --- */

const CHARTS_BODY = [
  'User interviews structured 1:1 conversations with the aim of understanding more about a topic or product or experience in great details. ',
  'These ‘structured conversations’ around the topic of interest allow us to gain a deeper understanding of participants’ attitudes, beliefs, desires and experiences.',
  'Knowing and understanding this informs the design and the experience. ',
]

/** Charts (1804:75216) — the opening spread, over a blurred collage
 *  of session screens. */
export function ReportCharts() {
  return (
    <div className="irp irp--charts">
      {/* image (1804:75217) — the collage sits under the sheet and
          runs off the bottom of the page. */}
      <div className="irp-collage" aria-hidden="true">
        <div className="irp-collage__wide">
          <img src={reportPhoto} alt="" />
          <span className="irp-collage__veil" />
        </div>
        <div className="irp-collage__shot irp-collage__shot--a">
          <img src={charts1} alt="" />
        </div>
        <div className="irp-collage__shot irp-collage__shot--b">
          <img src={charts2} alt="" />
        </div>
        <div className="irp-collage__shot irp-collage__shot--c">
          <img src={charts3} alt="" />
        </div>
        <div className="irp-collage__shot irp-collage__shot--d">
          <img src={charts4} alt="" />
        </div>
      </div>

      <Footer light wash />

      <Paper className="irp-paper--charts">
        <Chip className="irp-chip--head irp-chip--charts">
          What are User Interviews?
        </Chip>
        <div className="irp-charts__body">
          {CHARTS_BODY.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <Sticky className="irp-sticky--charts">
          <p className="irp-charts__note">
            <Run
              parts={[
                'The idea is to collect first hand inputs and perspective to build the product ',
                { i: 'with the users, for the users.' },
              ]}
            />
          </p>
        </Sticky>
      </Paper>
    </div>
  )
}

/* -------------------------------------------- Research Objectives page --- */

const OBJECTIVES = [
  {
    title: 'Mapping routines, lifestyle & decision making patterns',
    text: 'Understand the day - to - day life of seafarers, including how they stay connected, manage downtime, and make personal or logistical decisions while at sea and on shore.',
  },
  {
    title: 'Uncover seafarer pain points & aspirations',
    text: 'Identify challenges faced across different life phases, and understand their desires around lifestyle, emotional well-being and logistics, both onboard and on land.',
  },
  {
    title: 'Understand family involvement & support needs',
    text: 'Explore how families and loved ones of seafarers can be better supported and involved, especially around emotional needs, communication challenges, and staying connected when the seafarer is offshore or at home.',
  },
  {
    title: 'Validate proposed services & solutions',
    text: 'Test the relevance, appeal, and perceived value of potential offerings, such as: Health & wellness tools, social wellbeing and community support, upskill & empowerment, family and connection, financial guidance.',
  },
  {
    title: 'Shape and prioritise the MVP',
    text: 'Leverage user insights to inform what the Minimum Viable Product should include: identifying the most valuable features, early hooks, and adoption drivers.',
  },
]

/** Research Objectives (1804:75275) — the sheet has scrolled almost
 *  off the top, leaving its heading and the numbered list. */
export function ReportObjectives() {
  return (
    <div className="irp irp--objectives">
      <Footer />

      <Paper className="irp-paper--objectives">
        <Chip className="irp-chip--head irp-chip--objectives">
          Research Objectives
        </Chip>
      </Paper>

      <div className="irp-obj">
        {OBJECTIVES.map((item, i) => (
          <div className="irp-obj__item" key={item.title}>
            <span className="irp-obj__badge">
              <span className="irp-obj__blob">
                <img src={objBadge} alt="" />
              </span>
              <span className="irp-obj__num">{i + 1}</span>
            </span>
            <div className="irp-obj__text">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------- Key-insights page --- */

/* The eight findings, in Figma's column-then-row order. `tall`
   marks the two notes the designer stretched to fit. */
const INSIGHTS = [
  { lead: 'Typical Onboard Duties: ', text: 'Work includes engine maintenance, watch keeping, loading/unloading, and port documentation (for officers/navigators)' },
  { lead: 'Captain Sets the Tone: ', text: 'A good captain sets the tone of the voyage. Social bonding and morale of the crew are directly linked to leadership' },
  { lead: 'Leadership Shapes Experience: ', text: 'Work experience on the ship is often heavily influenced by the leadership style of the captain or chief officer. Workload also varies significantly based on ship type, leadership, and voyage duration', tall: 132.489 },
  { lead: 'Shared Culture Across Nationalities: ', text: 'Not much differences between the seafarers of different nationalities. They have similar routines, rituals and mindset' },
  { lead: 'Physically & Mentally Demanding: ', text: 'Jobs are physically and mentally demanding, especially in rough weather or during back-to-back port stays' },
  { lead: 'Women Face Added Challenges: ', text: 'Female sea-farers face unique social and professional challenges; including but not limited to discrimination, lack of inclusivity and limited mentorship' },
  { lead: 'Rigid Hierarchies Suppress Expression: ', text: 'Strict onboard hierarchies and rank expectations make it hard for seafarers to express their needs, especially for younger or female crew' },
  { lead: 'Biggest Struggle - Human Conflict: ', text: 'The biggest unexpected or unimagined issue is inter-personal relations, workplace ‘politics’ and dealing with poor leadership. Being with the same people in confined space for prolonged periods of time', tall: 130.983, snug: true },
]

/** Key-insights (1804:75365) — eight findings in a four-by-two grid. */
export function ReportInsights() {
  return (
    <div className="irp irp--insights">
      <Paper className="irp-paper--insights">
        <Chip className="irp-chip--head irp-chip--insights">
          <span className="irp-chip__count">1/5</span>
          Understanding
          <br />
          the Seafarer
        </Chip>

        <p className="irp-insights__blurb">
          A snapshot of what defines seafarers’ daily experiences, social
          dynamics, and how leadership impacts morale and mental well-being.
        </p>

        {INSIGHTS.map((note, i) => (
          <Sticky
            className={`irp-sticky--insight${note.snug ? ' irp-sticky--snug' : ''}`}
            key={note.lead}
            style={{
              '--col': i >> 1,
              '--row': i & 1,
              '--h': note.tall ? `${note.tall}px` : undefined,
            }}
          >
            <p>
              <Run parts={[{ b: note.lead }, note.text]} />
            </p>
          </Sticky>
        ))}
      </Paper>

      <Footer />

      {/* A session screenshot pinned in at an angle (1804:75416). */}
      <div className="irp-insights__shot" aria-hidden="true">
        <img src={insightsShot} alt="" />
      </div>
    </div>
  )
}

/* -------------------------------------------------------- Quote page --- */

/** Quote (1804:75419) — one participant quote on a small sheet, over
 *  a darkened photograph. */
export function ReportQuote() {
  return (
    <div className="irp irp--quote">
      <div className="irp-quote__bg" aria-hidden="true">
        <img src={quoteBg} alt="" />
      </div>
      <div className="irp-quote__photo" aria-hidden="true">
        <img src={quotePhoto} alt="" />
      </div>

      <Paper className="irp-paper--quote">
        <p className="irp-quote__text">
          “It gets difficult not just because you are working with these people;
          but you are also living with them, for prolonged time periods, in
          close quarters. You are bound to brush elbows at some point”
        </p>
        <Chip className="irp-chip--quote">-Sahil, 3rd Officer</Chip>
      </Paper>

      <Footer light />
    </div>
  )
}

/* ------------------------------------------------------ Persona page --- */

const PERSONA_SECTIONS = [
  {
    title: 'Background',
    height: 104,
    text: 'With over twenty years of experience, Emre is a respected Chief Engineer known for his calm demeanor and deep knowledge. While he values traditional practices, he embraces new ideas that enhance teamwork and well-being. He enjoys sharing his expertise but struggles with the emotional challenges and cultural changes on board.',
  },
  {
    title: 'Needs',
    height: 97,
    items: [
      'Empathy-focused resources for mentoring younger crew',
      'Recognition for mentorship and leadership',
      'Tools to simplify documentation/tasks',
      'Emotional check-ins or burnout warning signs',
    ],
  },
  {
    title: 'Wants',
    height: 90,
    items: [
      'Respect for his service and expertise',
      'Better communication between junior and senior crew',
      'Understanding of work ethic across generations',
      'Forums to share wisdom and stories',
    ],
  },
  {
    title: 'Pain points',
    height: 112,
    items: [
      'Feeling isolated with a full crew, rank makes them inaccessible',
      'Frustration with younger crew’s screen time and lack of initiative ',
      "Leadership's emotional labor with poor support",
      'Excessive paperwork reduces meaningful interaction',
    ],
  },
]

const PERSONA_DETAILS = [
  ['Age:', '48'],
  ['Role:', 'Chief Engineer'],
  ['Family:', 'Married, has teenage children'],
]

const PERSONA_PICKS = [
  { text: 'Upskilling and Academics', width: 156.578 },
  { text: 'Support and Mental Health', width: 158.585 },
  { text: 'Seafarer Specific Community', width: 158.585 },
]

/** Persona (1804:75465) — the photo card, the profile, and the
 *  participant's three platform picks. */
export function ReportPersona() {
  return (
    <div className="irp irp--persona">
      <Paper className="irp-paper--persona">
        <span className="irp-persona__rule" aria-hidden="true" />

        <div className="irp-persona__grid">
          {PERSONA_SECTIONS.map((section) => (
            <div
              className="irp-persona__section"
              key={section.title}
              style={{ '--h': `${section.height}px` }}
            >
              <Chip>{section.title}</Chip>
              {section.items ? (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.text}</p>
              )}
            </div>
          ))}
        </div>

        <div className="irp-persona__about">
          <h4>The Skipper</h4>
          <dl>
            {PERSONA_DETAILS.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="irp-persona__picks">
          <Chip>Top 3 picks for the platform</Chip>
          <div className="irp-persona__notes">
            {PERSONA_PICKS.map((pick) => (
              <Sticky
                className="irp-sticky--pick"
                key={pick.text}
                style={{ '--w': `${pick.width}px` }}
              >
                <p>{pick.text}</p>
              </Sticky>
            ))}
          </div>
        </div>
      </Paper>

      {/* Card (1804:75539) — the participant photo, pinned on. */}
      <div className="irp-persona__card">
        <div className="irp-persona__photo" aria-hidden="true">
          <img className="irp-persona__photo-a" src={personaA} alt="" />
          <img className="irp-persona__photo-b" src={personaB} alt="" />
        </div>
        <span className="irp-persona__overlay" aria-hidden="true" />
        <div className="irp-persona__caption">
          <p className="irp-persona__name">Emre</p>
          <p className="irp-persona__role">Ranked Officer</p>
        </div>
      </div>
      <span className="irp-persona__pin" aria-hidden="true">
        <img src={pin} alt="" />
      </span>

      <Footer />
    </div>
  )
}

/* -------------------------------------------------------- board page --- */

/* 226 (1804:75549) — five session photographs on the bare sheet.
   Widths and heights are Figma's, so each keeps its crop.
   "Observation Image" exports blank from Figma, so its slot holds
   the row's shape and stays an empty plate. */
const BOARD_SHOTS = [
  { key: 'a', src: board1, w: 304.829, h: 157.033 },
  { key: 'b', src: board2, w: 281, h: 156, zoom: 'b' },
  { key: 'observation', src: null, w: 245.301, h: 189.711 },
  { key: 'd', src: board4, w: 187.338, h: 189.709, zoom: 'd' },
  { key: 'e', src: board5, w: 295, h: 191 },
]

export function ReportBoard() {
  return (
    <div className="irp irp--board">
      <div className="irp-board__paper">
        <Strip />
        <div className="irp-board__sheet" />
        <Strip />
      </div>

      {/* Grids (1804:75586) — the deliverable's crop frames. */}
      <img className="irp-board__frame-a" src={boardFrameA} alt="" />
      <img className="irp-board__frame-b" src={boardFrameB} alt="" />
      <span className="irp-board__dot" aria-hidden="true" />

      <div className="irp-board__shots">
        {BOARD_SHOTS.map((shot) => (
          <div
            className={`irp-board__shot${shot.zoom ? ` irp-board__shot--${shot.zoom}` : ''}`}
            key={shot.key}
            style={{ '--w': `${shot.w}px`, '--h': `${shot.h}px` }}
          >
            {shot.src && <img src={shot.src} alt="" />}
          </div>
        ))}
      </div>

      <Footer />
    </div>
  )
}

/* ------------------------------------------------ In Conclusion page --- */

/* The priority ladder down the right of the page: a heading, its
   count, and the notes that sit at that level. */
const PRIORITIES = [
  {
    title: 'Top most Priority',
    count: 'Picked 4 times each',
    top: 60.72,
    right: 63.73,
    notes: [
      { text: 'Seafarer Specific Community', left: 528.95, top: 43.66, h: 97.359 },
      { text: 'Support and Mental Health', left: 646.89, top: 43.66, h: 97.359 },
    ],
  },
  {
    title: 'Moderate Priority',
    count: 'Picked 2 times each',
    top: 227.84,
    right: 62.73,
    notes: [
      { text: 'Health and Fitness Information and Guidance', left: 528.95, top: 181.17, h: 73.772 },
      { text: 'Financial Wellness and Literacy', left: 647.89, top: 181.17, h: 73.772 },
      { text: 'Reviews and ratings for ships, captains and companies', left: 528.95, top: 261.46, h: 73.772 },
    ],
  },
  {
    title: 'Low Priority',
    count: 'Picked 1 time',
    top: 399.47,
    right: 63.73,
    notes: [{ text: 'Upskilling and Academics', left: 527.95, top: 375.39, h: 73.772 }],
  },
]

/** In Conclusion (1804:75699) — the recommendation the interviews
 *  led to, with the pillars ranked beside it. */
export function ReportConclusion() {
  return (
    <div className="irp irp--conclusion">
      <Footer />

      <Paper className="irp-paper--conclusion">
        <Chip className="irp-chip--head irp-chip--conclusion">
          How should it be?
        </Chip>
        <h4 className="irp-concl__lead">Viability of each Pillar</h4>
        <p className="irp-concl__body">
          Which of these features/pillars would do the target personas consider
          the most important?
        </p>
        <Sticky className="irp-sticky--takeaway">
          <p className="irp-concl__kicker">Takeaway</p>
          <p className="irp-concl__note">
            Both Seafarer Specific Community and Support and Mental Health were
            featured four times in the Top 3 picks. Upskilling and Academics was
            the lowest with just one mention.
          </p>
        </Sticky>
      </Paper>

      {PRIORITIES.map((tier) => (
        <div
          className="irp-concl__tier"
          key={tier.title}
          style={{ '--top': `${tier.top}px`, '--right': `${tier.right}px` }}
        >
          <p className="irp-concl__tier-title">{tier.title}</p>
          <p className="irp-concl__tier-count">{tier.count}</p>
        </div>
      ))}

      {PRIORITIES.flatMap((tier) => tier.notes).map((note) => (
        <Sticky
          className="irp-sticky--pillar"
          key={note.text}
          style={{
            '--x': `${note.left}px`,
            '--y': `${note.top}px`,
            '--h': `${note.h}px`,
          }}
        >
          <p>{note.text}</p>
        </Sticky>
      ))}
    </div>
  )
}
