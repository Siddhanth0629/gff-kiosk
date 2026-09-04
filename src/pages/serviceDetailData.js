import accHowAiHelps from '../assets/services-detail/acc-how-ai-helps.png'
import accHowWeDoIt from '../assets/services-detail/acc-how-we-do-it.png'
import accWalkAway from '../assets/services-detail/acc-walk-away.png'
import accWhatWeDo from '../assets/services-detail/acc-what-we-do.png'
import galCollaborating from '../assets/services-detail/gal-collaborating.png'
import galInsights from '../assets/services-detail/gal-insights.png'
import audAccHowAiHelps from '../assets/services-detail/aud-acc-how-ai-helps.png'
import audAccHowWeDoIt from '../assets/services-detail/aud-acc-how-we-do-it.png'
import audAccWalkAwayA from '../assets/services-detail/aud-acc-walk-away-a.png'
import audAccWalkAwayB from '../assets/services-detail/aud-acc-walk-away-b.png'
import audAccWhatWeDo from '../assets/services-detail/aud-acc-what-we-do.png'
import iconAlertCircle from '../assets/services-detail/icon-alert-circle.svg'
import iconArrowsSpin from '../assets/services-detail/icon-arrows-spin.svg'
import iconChatExclamation from '../assets/services-detail/icon-chat-exclamation.svg'
import iconEye from '../assets/services-detail/icon-eye.svg'
import iconGraphLineUp from '../assets/services-detail/icon-graph-line-up.svg'
import iconHourglassClock from '../assets/services-detail/icon-hourglass-clock.svg'
import iconCompass from '../assets/services-detail/icon-compass.svg'
import iconGlobe from '../assets/services-detail/icon-globe.svg'
import iconGraphLineDown from '../assets/services-detail/icon-graph-line-down.svg'
import iconHeadSettings from '../assets/services-detail/icon-head-settings.svg'
import iconListCheck from '../assets/services-detail/icon-list-check.svg'
import iconPackageCheck from '../assets/services-detail/icon-package-check.svg'
import iconQuestionCircle from '../assets/services-detail/icon-question-circle.svg'
import iconRoute from '../assets/services-detail/icon-route.svg'
import iconScale from '../assets/services-detail/icon-scale-balanced.svg'
import iconShieldCheck from '../assets/services-detail/icon-shield-check.svg'
import iconSort91Up from '../assets/services-detail/icon-sort-91-up.svg'
import iconUserSearch from '../assets/services-detail/icon-user-search.svg'
import intAccHowAiHelps from '../assets/services-detail/int-acc-how-ai-helps.png'
import intAccHowWeDoIt from '../assets/services-detail/int-acc-how-we-do-it.png'
import intAccWalkAwayA from '../assets/services-detail/int-acc-walk-away-a.png'
import intAccWalkAwayB from '../assets/services-detail/int-acc-walk-away-b.png'
import intAccWhatWeDo from '../assets/services-detail/int-acc-what-we-do.png'
import ustAccHowAiHelpsA from '../assets/services-detail/ust-acc-how-ai-helps-a.png'
import ustAccHowAiHelpsB from '../assets/services-detail/ust-acc-how-ai-helps-b.png'
import ustAccHowWeDoIt from '../assets/services-detail/ust-acc-how-we-do-it.png'
import ustAccWalkAway from '../assets/services-detail/ust-acc-walk-away.png'
import ustAccWhatWeDo from '../assets/services-detail/ust-acc-what-we-do.png'

/* =================================================================
   Copy and artwork for the service detail screens — Figma
   "services-detail-workshop" 43:38737 and its siblings.

   Reached from Our Services: tapping a focused category's card opens
   the matching entry here. Only the shapes live in ServiceDetail.jsx.

   Rich text is a flat list of segments: a plain string renders as-is,
   `{ b }` renders in Gilroy SemiBold. Figma sets the emphasis mid
   sentence, so a paragraph is an array rather than a string.
   ================================================================= */

/** The chip row (43:38843). Every service detail shows all four and
 *  highlights its own, so the row is shared, not per-service. */
export const SERVICE_CHIPS = [
  { key: 'ux-workshop', label: 'UX Workshop' },
  { key: 'user-interview', label: 'User Interview' },
  { key: 'ux-audit', label: 'UX Audit' },
  { key: 'usability-testing', label: 'Usability Testing' },
]

export const SERVICE_DETAILS = {
  // 43:38737
  'ux-workshop': {
    title: 'UX Workshop',
    lead: [
      'Align your team on what to build, before a single line of code is written. For ',
      { b: 'leadership teams with competing priorities ' },
      'and no shared product direction.',
    ],

    // "Usability Case" cards (43:38851) — when to reach for this.
    cases: [
      { icon: iconScale, text: 'Creating a digital product from scratch' },
      { icon: iconArrowsSpin, text: 'Redesigning an existing product' },
      { icon: iconCompass, text: 'Starting without shared direction' },
      { icon: iconRoute, text: 'Unclear product roadmap' },
      { icon: iconGlobe, text: 'Pivoting into new markets' },
    ],

    // accordion (43:38888)
    sections: [
      {
        key: 'what-we-do',
        title: 'What we do',
        image: accWhatWeDo,
        body: [
          {
            type: 'p',
            text: [
              'A facilitated session that aligns leadership and product teams on a clear, prioritized direction.',
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['We run two types:'] },
          {
            type: 'ol',
            items: [
              [
                'Product Discovery Workshop: define ',
                { b: 'what to build, for whom, and why ' },
                'for a new product',
              ],
              [
                'Design Thinking Workshop: solve ',
                { b: 'specific product challenges' },
                ' through structured creative problem-solving',
              ],
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['Every session includes:'] },
          {
            type: 'ol',
            items: [
              [{ b: 'Problem framing' }, ' and opportunity definition'],
              [{ b: 'User definition' }, ' and audience mapping'],
              ['Feature and initiative prioritization'],
              ['Strategic alignment across stakeholders'],
              ['Documented decisions at the close of every session'],
            ],
          },
        ],
      },
      {
        key: 'how-we-do-it',
        title: 'How we do it',
        image: accHowWeDoIt,
        body: [
          {
            type: 'ol',
            items: [
              [
                'Pre-workshop preparation: ',
                { b: 'stakeholder interviews' },
                ', agenda design, research synthesis',
              ],
              [
                'Facilitated session:',
                { b: ' problem framing, user definition' },
                ', opportunity mapping',
              ],
              ['Synthesis: all outputs structured and documented in real time'],
              [
                'Strategic roadmap delivery: decisions, priorities, and ',
                { b: 'next steps ready to act on' },
              ],
            ],
          },
        ],
      },
      {
        key: 'how-ai-helps',
        title: 'How AI Helps',
        image: accHowAiHelps,
        body: [
          {
            type: 'ol',
            items: [
              [
                'AI synthesizes pre-workshop inputs across documents and stakeholder notes to surface patterns before the session begins. ',
              ],
              ['It assists in ', { b: 'structuring prioritization exercises.' }],
              [
                'Post-session, ',
                { b: 'AI accelerates documentation' },
                ' of all decisions and outputs.',
              ],
              [
                'Human judgment leads every facilitation decision: how to frame problems, which tensions to surface, and how to guide the room toward alignment.',
              ],
            ],
          },
        ],
      },
      {
        key: 'walk-away-with',
        title: 'What you walk away with',
        image: accWalkAway,
        body: [
          { type: 'p', text: ['Deliverables:'] },
          {
            type: 'ol',
            items: [
              ['Product strategy document'],
              ['Product Roadmap '],
              ['Foundational user personas '],
              ['Information architecture '],
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['ROI: '] },
          {
            type: 'ol',
            items: [
              [
                'For the ',
                { b: 'CEO and founders' },
                ': faster decisions and a reduced risk of building the wrong thing. ',
              ],
              [
                'For the ',
                { b: 'product team' },
                ': a clear, prioritized direction they can execute without constant realignment. ',
              ],
              [
                'For the ',
                { b: 'development team' },
                ': a brief they can build toward with confidence from day one.',
              ],
            ],
          },
        ],
      },
    ],

    // deliverables (1804:73544) — a 542px-tall strip that scrolls
    // sideways, opening on three windows of the Product Roadmap
    // document (rendered by RoadmapDeliverable) and closing on three
    // photographs.
    //
    // `width` is the card, `fill` the size the photo is drawn at
    // inside it: Figma crops each one by oversizing the fill and
    // letting the card clip it, top-left anchored.
    gallery: [
      { key: 'roadmap-vision', kind: 'roadmap', width: 964, caption: 'Product Roadmap' },
      { key: 'roadmap-worldbuilding', kind: 'roadmap', width: 964, top: 469, label: true },
      { key: 'roadmap-goals', kind: 'roadmap-goals', width: 964 },
      {
        key: 'collaborating',
        kind: 'photo',
        src: galCollaborating,
        width: 777,
        fill: [777, 542],
        caption: 'Collaborating in the UX workshop',
      },
      {
        key: 'insights',
        kind: 'photo',
        src: galInsights,
        width: 671,
        fill: [1267, 542],
        caption: 'UX workshop insights and ideas',
      },
      {
        key: 'ia',
        kind: 'photo',
        src: accWalkAway,
        width: 891,
        fill: [891, 876],
        caption: 'Post workshop - Information architecture',
      },
    ],
  },

  // 43:39069
  'user-interview': {
    title: 'User Interview',
    lead: [
      'The only way to know',
      { b: ' what your users actually need is to ask them. ' },
      'We do that with structure, expertise, and no guesswork.',
    ],
    // title (43:39180) sets this measure narrower than the workshop's.
    leadWidth: 596,

    // "Usability Case" cards (43:39183)
    cases: [
      { icon: iconUserSearch, text: 'Designing for unknown users' },
      { icon: iconGraphLineDown, text: 'Flat user adoption' },
      { icon: iconListCheck, text: 'Validate before building' },
      { icon: iconChatExclamation, text: 'Decisions based on assumptions' },
      { icon: iconHeadSettings, text: 'Conflicting views on users' },
    ],

    // accordion (43:39220)
    sections: [
      {
        key: 'what-we-do',
        title: 'What we do',
        image: intAccWhatWeDo,
        body: [
          {
            type: 'ol',
            items: [
              [
                { b: 'Structured one-to-one research sessions' },
                ' with representative users from your audience.',
              ],
              [{ b: 'Recruitment and screening of participants' }],
              ['Discussion guide and ', { b: 'script design' }],
              [{ b: 'Moderated sessions' }, ' by experienced UX researchers'],
              [{ b: 'Cross-session synthesis and pattern analysis' }],
              ['Structured findings report, not raw transcripts'],
            ],
          },
        ],
      },
      {
        key: 'how-we-do-it',
        title: 'How we do it',
        image: intAccHowWeDoIt,
        body: [
          {
            type: 'ol',
            items: [
              [
                { b: 'Recruitment and screening' },
                ': right participants, right profile',
              ],
              [
                'Discussion guide design: structured questions with room for depth',
              ],
              [
                'Moderated sessions: ',
                { b: 'conducted by trained UX researchers' },
              ],
              [
                'Synthesis and reporting: patterns, themes, and key quotes structured into a findings report',
              ],
            ],
          },
        ],
      },
      {
        key: 'how-ai-helps',
        title: 'How AI Helps',
        image: intAccHowAiHelps,
        body: [
          {
            type: 'ol',
            items: [
              [
                'AI handles ',
                { b: 'transcription of session recordings' },
                ', saving hours of manual work.',
              ],
              [
                'It assists in cross-session synthesis by ',
                { b: 'identifying recurring themes and grouping quotes by topic.' },
              ],
              [
                'Human researchers lead every session and make all interpretation calls: which themes matter, what the data means, and what the client should do about it.',
              ],
            ],
          },
        ],
      },
      {
        key: 'walk-away-with',
        title: 'What you walk away with',
        // Figma layers a second shot over the first in this row.
        image: intAccWalkAwayA,
        overlay: intAccWalkAwayB,
        body: [
          { type: 'p', text: ['Deliverables: '] },
          {
            type: 'ol',
            items: [
              ['Structured ', { b: 'research findings report' }],
              ['Key insights deck for stakeholder presentation'],
              ['User quotes library organized by theme'],
              ['Foundational ', { b: 'inputs for persona development' }],
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['ROI: '] },
          {
            type: 'ol',
            items: [
              [
                'For product leadership: decisions grounded in',
                { b: ' real evidence, not internal assumption.' },
              ],
              [
                'For marketing: a clearer picture of ',
                { b: 'who the user is ' },
                'and what they actually care about.',
              ],
              [
                'For the business:',
                { b: ' reduced risk of investing in features' },
                ' that miss the mark.',
              ],
            ],
          },
        ],
      },
    ],

    // deliverables (1804:74381) — seven spreads of the "User
    // interview insights" report, rendered by InterviewReport. Every
    // page is a full 964-wide card, 20px apart like the workshop's.
    gallery: [
      { key: 'charts', kind: 'report-charts', width: 964, caption: 'User interviews and findings report' },
      { key: 'objectives', kind: 'report-objectives', width: 964 },
      { key: 'insights', kind: 'report-insights', width: 964, caption: 'Insights from user interviews' },
      { key: 'quote', kind: 'report-quote', width: 964, caption: 'User quotes' },
      { key: 'persona', kind: 'report-persona', width: 964, caption: 'Foundational persona development' },
      { key: 'board', kind: 'report-board', width: 963, caption: 'Listening to users firsthand' },
      { key: 'conclusion', kind: 'report-conclusion', width: 964, caption: 'Insights that shaped our recommendations' },
    ],
  },

  // 43:38903
  'ux-audit': {
    title: 'UX Audit',
    // title (43:39014) sets this over two lines at a 730px measure.
    lead: [
      'Your product is live, but something is not working.\nA UX Audit shows you ',
      { b: 'exactly what, where and how to fix bad UX.' },
    ],
    leadWidth: 730,

    // "Usability Case" cards (43:39017)
    cases: [
      { icon: iconQuestionCircle, text: 'Users struggle to complete task' },
      { icon: iconGraphLineDown, text: 'Unexplained conversion drop-offs' },
      { icon: iconSort91Up, text: 'Redesigning without clear priorities' },
      { icon: iconAlertCircle, text: 'Recurring customer service complaints' },
      { icon: iconEye, text: 'Need opinion before investing in redesign' },
    ],

    // accordion (43:39054)
    sections: [
      {
        key: 'what-we-do',
        title: 'What we do',
        image: audAccWhatWeDo,
        body: [
          {
            type: 'ol',
            items: [
              [
                'An expert evaluation of your existing product against established usability principles. ',
              ],
              ['Audit your product for ', { b: 'dark UX patterns ' }],
              [
                { b: 'Heuristic evaluation' },
                " against Nielsen's 10 Usability Principles",
              ],
              [{ b: 'User journey ' }, 'and navigation assessment '],
              ['Accessibility review against ', { b: 'WCAG guidelines ' }],
              ['Prioritized recommendations with effort and impact mapping'],
            ],
          },
        ],
      },
      {
        key: 'how-we-do-it',
        title: 'How we do it',
        image: audAccHowWeDoIt,
        body: [
          {
            type: 'ol',
            items: [
              ['Product walkthrough: full experience mapped end to end '],
              [
                { b: 'Heuristic evaluation' },
                ": assessed against Nielsen's 10 Usability Principles ",
              ],
              [
                'Analytics and data review: ',
                { b: 'quantitative signals layered onto qualitative findings ' },
              ],
              [
                'Recommendations report: ',
                { b: 'issues prioritized by severity ' },
                'and effort, with quick wins called out',
              ],
            ],
          },
        ],
      },
      {
        key: 'how-ai-helps',
        title: 'How AI Helps',
        image: audAccHowAiHelps,
        body: [
          {
            type: 'ol',
            items: [
              [
                'AI runs ',
                { b: 'automated accessibility checks' },
                ' and flags',
                { b: ' WCAG violations ' },
                'across screens at scale. ',
              ],
              [
                'It assists in ',
                { b: 'pattern recognition' },
                ' across large, complex products with many screens. ',
              ],
              [
                'AI helps',
                { b: ' structure the audit report' },
                ' and generate severity-mapped recommendations efficiently.',
              ],
              [
                'Human experts make every severity and priority call: AI surfaces the data, but the diagnosis and recommendations require experienced UX judgment.',
              ],
            ],
          },
        ],
      },
      {
        key: 'walk-away-with',
        title: 'What you walk away with',
        // Figma layers a second shot over the first in this row.
        image: audAccWalkAwayA,
        overlay: audAccWalkAwayB,
        body: [
          { type: 'p', text: ['Deliverables: '] },
          {
            type: 'ol',
            items: [
              [{ b: 'Comprehensive UX Audit report' }],
              [{ b: 'Severity-prioritized recommendations' }, ' list'],
              ['Quick wins roadmap'],
              [{ b: 'Executive summary for leadership' }],
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['ROI: '] },
          {
            type: 'ol',
            items: [
              [
                'For the product team: a clear, ',
                { b: 'evidence-based brief ' },
                'for what to fix and in what order.',
              ],
              [
                'For the CEO: confidence that redesign investment is going to the right problems.',
              ],
              [
                'For customer success: fewer escalations once high-severity issues are addressed.',
              ],
            ],
          },
        ],
      },
    ],

    // deliverables (1804:75897) — six spreads of the UX Audit report,
    // rendered by AuditReport. The last is a narrower 562px card.
    gallery: [
      { key: 'intro', kind: 'audit-intro', width: 964, caption: 'UX Audit report' },
      { key: 'journeys', kind: 'audit-journeys', width: 964 },
      { key: 'homepage', kind: 'audit-homepage', width: 964, caption: 'Screen level analysis' },
      { key: 'forex', kind: 'audit-forex', width: 964 },
      { key: 'recommendations', kind: 'audit-recommendations', width: 964, caption: 'Prioritized recommendations list' },
      { key: 'basics', kind: 'audit-basics', width: 562, caption: 'The Basics Structure' },
    ],
  },

  // 43:38574
  'usability-testing': {
    title: 'Usability Testing',
    // title (43:38685) — two lines, the second all in SemiBold.
    lead: [
      'You think your product works. Your users may disagree. \n',
      { b: 'We find out before it costs you.' },
    ],
    leadWidth: 556,

    // "Usability Case" cards (43:38688)
    cases: [
      { icon: iconPackageCheck, text: 'Validate product improvements' },
      { icon: iconHourglassClock, text: 'Users take too long for simple tasks' },
      { icon: iconShieldCheck, text: 'Catch issues before launch' },
      { icon: iconGraphLineUp, text: 'Confirm changes improved UX' },
      { icon: iconAlertCircle, text: 'Resolve recurring usability issues' },
    ],

    // accordion (43:38722)
    sections: [
      {
        key: 'what-we-do',
        title: 'What we do',
        image: ustAccWhatWeDo,
        body: [
          {
            type: 'p',
            text: [
              { b: 'Moderated task-based sessions ' },
              'where real users interact with your product while researchers observe.',
            ],
          },
          {
            type: 'ol',
            items: [
              ['Task scenario design'],
              ['Representative ', { b: 'participant recruitment' }],
              ['Moderated sessions with live observation'],
              ['Issue documentation by severity and frequency'],
              [
                { b: 'Actionable recommendations' },
                ' tied to real user evidence',
              ],
            ],
          },
        ],
      },
      {
        key: 'how-we-do-it',
        title: 'How we do it',
        image: ustAccHowWeDoIt,
        body: [
          {
            type: 'ol',
            items: [
              [
                'Task design: ',
                { b: 'realistic scenarios ' },
                "based on your product's core user goals",
              ],
              [
                'Participant recruitment: ',
                { b: 'matched to your actual user profile' },
              ],
              [
                'Moderated sessions: researcher-led, with probing and thinking-aloud protocols',
              ],
              [
                'Synthesis and reporting:',
                { b: ' issues mapped by severity, ' },
                'frequency, and recommended action',
              ],
            ],
          },
        ],
      },
      {
        key: 'how-ai-helps',
        title: 'How AI Helps',
        // Figma layers a second shot over the first in this row.
        image: ustAccHowAiHelpsA,
        overlay: ustAccHowAiHelpsB,
        body: [
          {
            type: 'ol',
            items: [
              [
                'AI ',
                { b: 'transcribes session recordings and flags timestamps' },
                ' where users expressed confusion or hesitation.',
              ],
              [
                'It assists in ',
                { b: 'clustering similar issues across participants' },
                ' for faster synthesis.',
              ],
              [
                'AI helps generate highlight reels from recordings for quick stakeholder sharing.',
              ],
              [
                'Human researchers conduct every session: the expertise is in ',
                { b: 'how questions are asked,' },
                ' when to probe, and how to hold space for authentic user behavior.',
              ],
            ],
          },
        ],
      },
      {
        key: 'walk-away-with',
        title: 'What you walk away with',
        image: ustAccWalkAway,
        body: [
          { type: 'p', text: ['Deliverables:'] },
          {
            type: 'ol',
            items: [
              [{ b: 'Usability test report ' }, 'with all issues documented'],
              ['Severity and frequency issue map'],
              [{ b: 'Video highlight clips' }, ' for stakeholder sharing'],
              [
                { b: 'Prioritized recommendations' },
                ' tied to real user evidence',
              ],
            ],
          },
          { type: 'gap' },
          { type: 'p', text: ['ROI:'] },
          {
            type: 'ol',
            items: [
              [
                'For the product team: ',
                { b: 'issues caught before launch' },
                ' cost a fraction of what they cost after it.',
              ],
              [
                'For the CEO: ',
                { b: 'direct evidence of how users experience the product' },
                ', unfiltered by internal opinion.',
              ],
              [
                'For customer success: fewer support tickets on issues that were designed out before launch.',
              ],
            ],
          },
        ],
      },
    ],

    // deliverables (1804:76443) — seven spreads of the usability
    // testing report, rendered by UsabilityReport.
    gallery: [
      { key: 'board', kind: 'usability-board', width: 964, caption: 'Observing users in action' },
      { key: 'objectives', kind: 'usability-objectives', width: 964 },
      { key: 'tasks', kind: 'usability-tasks', width: 964, caption: 'The different tasks  we assign' },
      { key: 'persona', kind: 'usability-persona', width: 964, caption: 'Personas that bring users into focus' },
      { key: 'task', kind: 'usability-task', width: 964, caption: 'Usability testing findings and insights' },
      { key: 'finding', kind: 'usability-finding', width: 964 },
      { key: 'recommendations', kind: 'usability-recommendations', width: 964, caption: 'Suggested recommendations' },
    ],
  },
}
