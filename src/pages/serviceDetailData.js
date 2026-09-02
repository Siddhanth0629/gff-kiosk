import accHowAiHelps from '../assets/services-detail/acc-how-ai-helps.png'
import accHowWeDoIt from '../assets/services-detail/acc-how-we-do-it.png'
import accWalkAway from '../assets/services-detail/acc-walk-away.png'
import accWhatWeDo from '../assets/services-detail/acc-what-we-do.png'
import galCollaborating from '../assets/services-detail/gal-collaborating.png'
import galInsights from '../assets/services-detail/gal-insights.png'
import galPersona from '../assets/services-detail/gal-persona.png'
// The synthesis shot is the same 3834x1934 photo the LemonAIde
// screen already ships, byte for byte, so it is imported from there
// rather than copied into a second 3MB file.
import galSynthesis from '../assets/lemonaide/strat-board.png'
import iconArrowsSpin from '../assets/services-detail/icon-arrows-spin.svg'
import iconCompass from '../assets/services-detail/icon-compass.svg'
import iconGlobe from '../assets/services-detail/icon-globe.svg'
import iconRoute from '../assets/services-detail/icon-route.svg'
import iconScale from '../assets/services-detail/icon-scale-balanced.svg'

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

    // deliverables (1571:80694) — a 542px-tall strip that scrolls
    // sideways. Widths are Figma's, so each shot keeps its crop.
    // 1571:80711 carries no fill in the file: it renders as the bare
    // #dcdcdc plate, and stays a placeholder here too.
    gallery: [
      { key: 'collaborating', src: galCollaborating, width: 777, caption: 'Collaborating in the UX workshop' },
      { key: 'insights', src: galInsights, width: 1267, caption: 'UX workshop insights and ideas' },
      { key: 'synthesis', src: galSynthesis, width: 1023, caption: 'UX synthesis and theming' },
      { key: 'persona', src: galPersona, width: 891, caption: 'Identifying a user persona', anchor: 'top' },
      { key: 'placeholder', src: null, width: 802, caption: null },
      { key: 'ia', src: accWalkAway, width: 891, caption: 'Post workshop - Information architecture', anchor: 'top' },
    ],
  },
}
