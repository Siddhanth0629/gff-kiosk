import arrow1 from '../assets/services-detail/aud-arrow-1.svg'
import arrow2 from '../assets/services-detail/aud-arrow-2.svg'
import arrow3 from '../assets/services-detail/aud-arrow-3.svg'
import arrow4 from '../assets/services-detail/aud-arrow-4.svg'
import arrow5 from '../assets/services-detail/aud-arrow-5.svg'
import arrow6 from '../assets/services-detail/aud-arrow-6.svg'
import fxLeadA from '../assets/services-detail/aud-fx-lead-a.svg'
import fxLeadB from '../assets/services-detail/aud-fx-lead-b.svg'
import fxModule from '../assets/services-detail/aud-fx-module.png'
import fxScreen from '../assets/services-detail/aud-fx-screen.png'
import hpLeadA from '../assets/services-detail/aud-hp-lead-a.svg'
import hpLeadB from '../assets/services-detail/aud-hp-lead-b.svg'
import hpModule from '../assets/services-detail/aud-hp-module.png'
import hpScreen from '../assets/services-detail/aud-hp-screen.png'
import iconActivity from '../assets/services-detail/aud-icon-activity.svg'
import iconGps from '../assets/services-detail/aud-icon-gps.svg'
import iconSmile from '../assets/services-detail/aud-icon-smile.svg'
import iconUser from '../assets/services-detail/aud-icon-user.svg'
import iconZoomText from '../assets/services-detail/aud-icon-zoom-text.svg'
import recExpand from '../assets/services-detail/aud-rec-expand.svg'
import recNav from '../assets/services-detail/aud-rec-nav.svg'
import recPalette from '../assets/services-detail/aud-rec-palette.svg'
import recShapes from '../assets/services-detail/aud-rec-shapes.svg'
import recStack from '../assets/services-detail/aud-rec-stack.svg'
import recStar from '../assets/services-detail/aud-rec-star.svg'
import recVariable from '../assets/services-detail/aud-rec-variable.svg'
import {
  ReportFooter,
  ReportGrid,
  ReportImpact,
  ReportSeverityKey,
  ReportTitle,
} from './ReportKit.jsx'
import './AuditReport.css'

/* =================================================================
   "UX Audit report" — the six pages in the UX Audit screen's
   deliverables strip (Figma 1804:75898): What is Audit? 1804:77271,
   Journeys Audited 1804:77421, Homepage 2 1804:77570, Home Products
   3 1804:77690, Recommendations 1804:77805 and the Basics structure
   1804:77979.

   All six are spreads of one client deliverable and share a shell:
   the graph-paper Grid, the byline Footer, the flow/module Title
   block, and the Impact card that annotates a screen finding. Only
   the page bodies differ.

   Set in Gilroy like the rest of the kiosk, but at the document's
   own scale — hence Figma's fractional px throughout.
   ================================================================= */

/* ------------------------------------------- What is Audit? (1804:77271) --- */

const AUDIT_IMPACTS = [
  {
    icon: iconUser,
    title: 'User Satisfaction',
    text: 'Aligning with proven usability principles, it enhances the overall user experience',
  },
  {
    icon: iconSmile,
    title: 'Reduces Frustration',
    text: 'Addressing violations leads to fewer user mistakes and smoother task flows',
  },
  {
    icon: iconZoomText,
    title: 'Evidence Backed',
    text: 'Provides research-backed insights rather than relying on subjective opinions.',
  },
  {
    icon: iconGps,
    title: 'shape strategy',
    text: 'Develop a stronger UX approach.',
  },
  {
    icon: iconActivity,
    title: 'Breaks in User Flow',
    text: 'Surfaces friction points where users might feel lost or uncertain or unsupported',
  },
]

/** The deck's opening spread: what an audit is, and what it buys. */
export function ReportAuditIntro() {
  return (
    <div className="rk-page">
      <ReportGrid />
      <ReportFooter kicker="UX Audit" />

      <div className="aud-intro__head">
        <div className="aud-intro__head-inner">
          <h3>What is a UX Audit ?</h3>
          <p>
            A UX Audit is where expert UX Researchers or UX Designers analyse
            the platform. They discover usability issues based on standard
            practices and heuristic guidelines.Exercises such as these help
            assess existing user flows, detect problems or distractions that
            prevent users from taking the desired actions.
          </p>
        </div>
      </div>

      <div className="aud-intro__impacts">
        <p className="aud-intro__ask">How does a UX Audit help us?</p>
        <div className="aud-intro__cards">
          {AUDIT_IMPACTS.map((card, i) => (
            <div
              className={`aud-impact-card${i > 0 ? ' aud-impact-card--tall' : ''}`}
              key={card.title}
            >
              <span className="aud-impact-card__icon">
                <img src={card.icon} alt="" />
              </span>
              <div className="aud-impact-card__text">
                <p className="aud-impact-card__title">{card.title}</p>
                <p className="aud-impact-card__body">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* --------------------------------------- Journeys Audited (1804:77421) --- */

/* The thirteen journeys, split across the panel's two columns the
   way Figma splits them. `tall` marks the rows whose label wraps. */
const JOURNEYS_LEFT = [
  'Homepage',
  'Gold Loan',
  'Home Loan',
  'Personal Loan',
  'Other Loan Products',
  'Bill Payment & Recharges',
  'Products for You',
]

const JOURNEYS_RIGHT = [
  'Services',
  'My Loans',
  'Locate Us',
  'Login',
  'Secondary Pages',
  'Profile & Notifications',
]

/** The index of journeys the audit covered. */
export function ReportAuditJourneys() {
  return (
    <div className="rk-page">
      <ReportGrid />
      <ReportFooter kicker="UX Audit" />

      <p className="aud-journeys__title">Journeys Audited</p>
      <p className="aud-journeys__blurb">
        We analyzed the following user journeys on the Client app...
      </p>

      <div className="aud-journeys__panel">
        <div className="aud-journeys__cols">
          <div className="aud-journeys__col">
            {JOURNEYS_LEFT.map((label, i) => (
              <div className="aud-journeys__row" key={label}>
                <span className="aud-journeys__num">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="aud-journeys__label">{label}</span>
              </div>
            ))}
          </div>
          <div className="aud-journeys__col">
            {JOURNEYS_RIGHT.map((label, i) => (
              <div
                className={`aud-journeys__row${i === JOURNEYS_RIGHT.length - 1 ? ' aud-journeys__row--last' : ''}`}
                key={label}
              >
                <span className="aud-journeys__num">
                  {String(i + 8).padStart(2, '0')}
                </span>
                <span className="aud-journeys__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------- screen findings (1804:77570 / 1804:77690) --- */

/* Homepage 2 and Home Products 3 are the same page with different
   screens and findings, so they share a body and differ only here.
   Every offset is Figma's, measured from the card's top left. */
const SCREEN_PAGES = {
  homepage: {
    flow: 'HOME PAGE',
    module: 'Loan Products',
    titleTop: 75.67,
    screen: hpScreen,
    module_: hpModule,
    // Module (1804:77680): the wide shot behind the phone.
    moduleBox: { top: 75.78, h: 281.539 },
    moduleImg: { top: -200.74, h: 690.046, w: 310.646 },
    // The phone mock, and the card that floats over it.
    phone: { pageTop: -8.53, pageH: 458.63, imgTop: 7.54, imgH: 491.08 },
    float: { top: 35.04, h: 302.421, imgTop: -21.04, imgH: 188.3 },
    leads: [
      { src: hpLeadA, left: 397.46, top: 216.3, w: 203.752, h: 16.059 },
      { src: hpLeadB, left: 397.96, top: 216.3, w: 203.25, h: 163.604 },
    ],
    findings: [
      {
        tone: 'improvement',
        left: 50.18,
        top: 196.11,
        heuristic: 'Recognition Rather Than Recall',
        title: 'Lack of Clear Value Propositions',
        badge: 'Content',
        badgeTone: 'content',
        body: 'The generic taglines for loan offerings (e.g., “Unlock Your Dream…”) don’t communicate specific benefits, features, or eligibility. Users may feel unsure about which product suits them, leading to confusion or drop-offs.',
        solution:
          'Use clear, benefit-driven descriptions tailored to each loan type, e.g., “Instant approval on gold loans up to ₹2L with minimal paperwork”',
      },
      {
        tone: 'minor',
        left: 50.69,
        top: 337.63,
        heuristic: 'Aesthetic and Minimalist Design',
        title: 'Contrast Not Up to the Standard',
        badge: 'PRESENTATION',
        badgeTone: 'presentation',
        body: 'The subtext under ‘Personal loan’ suffers from poor color contrast, which impacts readability. This does not meet WCAG contrast standards, affecting accessibility and overall user experience.',
        solution:
          'WCAG are guidelines that ensure web content is accessible and usable for people with disabilities. Ensure the subtext meets at least the WCAG 2.1 AA requirement of a 4.5:1 contrast ratio (per SC 1.4.3) by using a color such as #666666.',
      },
    ],
  },

  forex: {
    flow: 'Products for You',
    module: 'Apply Forex',
    titleTop: 45.67,
    screen: fxScreen,
    module_: fxModule,
    moduleBox: { top: 29.11, h: 257.45 },
    moduleImg: { top: -25.09, h: 689.544, w: 310.295 },
    phone: { pageTop: -7.53, pageH: 457.627, imgTop: 0, imgH: 502.856 },
    float: null,
    leads: [
      { src: fxLeadA, left: 397.46, top: 157.83, w: 203.752, h: 49.432 },
      { src: fxLeadB, left: 398.47, top: 157.83, w: 202.748, h: 176.903 },
    ],
    findings: [
      {
        tone: 'minor',
        left: 50.19,
        top: 166.11,
        heuristic: 'Consistency and Standards',
        title: 'Inconsistent Heading Text on Forex Page',
        badge: 'Content',
        badgeTone: 'content',
        body: 'Clicking on the Forex option from the home page changes the heading to “Apply Forex,” which appears to be a typo or unclear phrasing. This inconsistency can confuse users and reduce the professional feel of the app.',
      },
      {
        tone: 'minor',
        left: 51.19,
        top: 262.47,
        heuristic: 'Visibility of System Status',
        title: 'Fields Lack Visual Distinction',
        badge: 'PRESENTATION',
        badgeTone: 'presentation',
        body: 'Prefilled and disabled fields appear visually similar, causing confusion about which fields are editable. This blurs user understanding of what can be interacted with, leading to potential errors or frustration.',
        solution:
          'Use clear visual cues such as distinct background shading, border styles, or icons to differentiate disabled fields from prefilled but editable ones. This improves clarity and guides user interaction effectively.',
      },
    ],
  },
}

function ScreenPage({ page }) {
  return (
    <div className="rk-page">
      <ReportGrid faint />
      <div className="aud-screen__sheet" />

      {/* Module (…) — the wide shot the phone is lifted out of. */}
      <div
        className="aud-screen__module"
        style={{
          '--top': `${page.moduleBox.top}px`,
          '--h': `${page.moduleBox.h}px`,
        }}
      >
        <img
          src={page.module_}
          alt=""
          style={{
            '--img-top': `${page.moduleImg.top}px`,
            '--img-h': `${page.moduleImg.h}px`,
            '--img-w': `${page.moduleImg.w}px`,
          }}
        />
      </div>

      {/* Screen (…) — the white plate, then the phone clipped to it. */}
      <div className="aud-screen__plate" />
      <div className="aud-screen__phone">
        <div
          className="aud-screen__page"
          style={{
            '--top': `${page.phone.pageTop}px`,
            '--h': `${page.phone.pageH}px`,
          }}
        >
          <img
            src={page.screen}
            alt=""
            style={{
              '--img-top': `${page.phone.imgTop}px`,
              '--img-h': `${page.phone.imgH}px`,
            }}
          />
        </div>
        {page.float && (
          <div
            className="aud-screen__float"
            style={{
              '--top': `${page.float.top}px`,
              '--h': `${page.float.h}px`,
            }}
          >
            <img
              src={page.module_}
              alt=""
              style={{
                '--img-top': `${page.float.imgTop}%`,
                '--img-h': `${page.float.imgH}%`,
              }}
            />
          </div>
        )}
      </div>

      <ReportFooter kicker="UX Audit" />

      <ReportTitle
        flow={page.flow}
        module={page.module}
        tags
        className="aud-screen__title"
        style={{ '--top': `${page.titleTop}px` }}
      />

      {page.findings.map((finding) => (
        <ReportImpact
          key={finding.title}
          finding={finding}
          tone={finding.tone}
          className="aud-screen__finding"
          style={{ '--x': `${finding.left}px`, '--y': `${finding.top}px` }}
        />
      ))}

      {/* The leader lines from each card out to the screen. */}
      {page.leads.map((lead) => (
        <img
          className="aud-screen__lead"
          key={lead.src + lead.top}
          src={lead.src}
          alt=""
          style={{
            '--x': `${lead.left}px`,
            '--y': `${lead.top}px`,
            '--w': `${lead.w}px`,
            '--h': `${lead.h}px`,
          }}
        />
      ))}
    </div>
  )
}

/** Homepage 2 (1804:77570) */
export function ReportAuditHomepage() {
  return <ScreenPage page={SCREEN_PAGES.homepage} />
}

/** Home Products 3 (1804:77690) */
export function ReportAuditForex() {
  return <ScreenPage page={SCREEN_PAGES.forex} />
}

/* ----------------------------------------- Recommendations (1804:77805) --- */

const RECOMMENDATIONS = [
  {
    icon: recShapes,
    title: 'Visual Consistency',
    text: 'Ensure that icons, elements and illustrations across the platform follow a consistent style in terms of stroke, fill, color palette, and tone. This enhances visual harmony, strengthens brand identity, and creates a more polished and intuitive user experience.',
  },
  {
    icon: recExpand,
    title: 'CTA (Call To Action)',
    text: 'Create a design system for CTAs covering all states - primary, secondary, default, hover, disabled, filled, outlined, etc. - to ensure consistency, handle all scenarios, and deliver a predictable, accessible experience.',
  },
  {
    icon: recVariable,
    title: 'Standardize Input Fields',
    text: 'Input fields are central to the platform’s UX, yet many appear pre-filled, confusing users. Define clear styles for all states: default, focused, error, disabled, and success, to improve clarity and usability.',
  },
  {
    icon: recPalette,
    title: 'Colors',
    text: 'Define a clear color system in the design guidelines, including primary shades, neutrals (grays), and state-based colors (e.g., success, error, warning, disabled). This ensures consistency, accessibility, and a unified visual language across the platform.',
  },
  {
    icon: recStack,
    title: 'Ensure Consistency Across Forms',
    text: 'Forms vary drastically in visual style, some resemble mobile UI, others appear web-adapted. Establish a unified visual language to ensure a cohesive experience across screens.',
  },
  {
    icon: recNav,
    title: 'Remove Footers',
    text: 'Because some screens are adapted from web pages, footers appear randomly on certain forms or pages, causing inconsistency and clutter. Footers should be eliminated from the app UI entirely to maintain a clean, app-appropriate experience.',
  },
]

/** The prioritized recommendations list. */
export function ReportAuditRecommendations() {
  return (
    <div className="rk-page">
      <ReportGrid />
      <ReportFooter kicker="UX Audit" />

      <ReportTitle
        flow="presentation"
        module="Recommendations"
        className="aud-recs__title"
      />
      <p className="aud-recs__blurb">
        Our recommendations to enhance visual aesthetics for a more intuitive
        and consistent experience.
      </p>

      <div className="aud-recs__grid">
        {RECOMMENDATIONS.map((rec) => (
          <div className="aud-rec" key={rec.title}>
            <div className="aud-rec__meta">
              <span className="aud-rec__icon">
                <img src={rec.icon} alt="" />
              </span>
              <span className="aud-rec__chip">
                <img src={recStar} alt="" />
                Must Have
              </span>
            </div>
            <div className="aud-rec__text">
              <p className="aud-rec__title">{rec.title}</p>
              <p className="aud-rec__body">{rec.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------- the basics structure (1804:77979) --- */

/* The annotated example: each label points at a part of the card
   above with its own hand-drawn arrow. */
const BASICS_NOTES = [
  {
    title: 'Issue Title',
    text: 'A brief heading about the issue',
    left: 6.58,
    top: 50.72,
    width: 87.66,
    arrow: { src: arrow5, left: 63.71, top: 41.95, w: 74.434, h: 56.913, iw: 72.025, ih: 24.124, deg: -149.99 },
  },
  {
    title: 'Issue Categorisation',
    text: 'The issues are also categorised on the basis of the following',
    left: 244.8,
    top: 10.96,
    width: 118.968,
    badges: true,
    arrow: { src: arrow1, left: 195.04, top: 27.55, w: 49.482, h: 52.753, iw: 43.87, ih: 47.641, deg: 172.82 },
  },
  {
    title: 'Heuristic Principle',
    text: 'Here the heuristic principle which was violated or neglected is mentioned',
    left: 445.19,
    top: 59.48,
    width: 87.973,
    arrow: { src: arrow2, left: 394.79, top: 77.33, w: 46.893, h: 10.283, iw: 46.699, ih: 4.479, deg: 172.82 },
  },
  {
    title: 'Complexity of Issue',
    text: 'Denoting how complex is the issues by using different colours. There are three levels of complexity for these issues',
    left: 433.29,
    top: 142.45,
    width: 112.706,
    tags: true,
    arrow: { src: arrow3, left: 390.41, top: 156.22, w: 38.408, h: 29.287, iw: 34.457, ih: 17.104, deg: 156.82 },
  },
  {
    title: 'Proposed Solution',
    text: 'This is a proposed solution/recommendation which can help resolve the issue mentioned',
    left: 244.63,
    top: 182.21,
    width: 108.636,
    arrow: { src: arrow4, left: 176.73, top: 159.04, w: 61.968, h: 32.432, iw: 61.373, ih: 31.246, deg: -178.89 },
  },
  {
    title: 'Issue Definition',
    text: 'Here the issue is elaborated and explained in good detail',
    left: 6.26,
    top: 126.96,
    width: 87.973,
    arrow: { src: arrow6, left: 62.61, top: 98.31, w: 71.537, h: 70.996, iw: 52.907, ih: 51.429, deg: -149.99 },
  },
]

const BASICS_BADGES = [
  { label: 'NAVIGATION', tone: 'navigation' },
  { label: 'PRESENTATION', tone: 'presentation' },
  { label: 'INTERACTION', tone: 'interaction' },
  { label: 'Content', tone: 'content' },
]

/* The severity legend: what each of the four levels means. */
const BASICS_LEGEND = [
  {
    tone: 'critical',
    title: 'Critical Issues',
    body: 'This is for issues that are so crucial it affects the main product functionality, impedes core features or blocks the journey altogether. These issues hamper the usability of the product on the highest scale.',
  },
  {
    tone: 'major',
    title: 'Major Issues',
    body: 'These are issues which have a major usability impact on the product as they deviate from expectations and disrupt the experience. While these bugs need immediate attention, they do not cause the product to crash or make it unusable.',
  },
  {
    tone: 'minor',
    title: 'Minor Issues',
    body: 'Minor issues don’t significantly impact the usability of a product on the vast majority of users. They only affect minor app functionality. Their impact on the overall application’s functionality is still quite low.',
  },
  {
    tone: 'improvement',
    title: 'Improvements or ‘Could be better’',
    body: 'These are areas of improvement rather than ‘issues’. They work well as they are, but adhering to a usability guideline or standard can advance design and experience a lot more ',
  },
]

/** How to read the report: the anatomy of a finding, then the
 *  severity legend. This page is a narrower 562px card. */
export function ReportAuditBasics() {
  return (
    <div className="rk-page aud--basics">
      <div className="aud-basics__panel aud-basics__panel--anatomy">
        <div className="aud-basics__grid" aria-hidden="true" />

        <ReportImpact
          size="md"
          tone="major"
          className="aud-basics__example"
          finding={{
            heuristic: 'Consistency and Standards',
            title: 'Major Issues',
            badge: 'NAVIGATION',
            badgeTone: 'navigation',
            body: 'Minor issues don’t significantly impact the usability of a product on the vast majority of users. They only affect minor app functionality. Their impact on the overall application’s functionality is still quite low.',
            solution:
              'Our inputs on how this issue can be improved upon or potentially solved.',
          }}
        />

        {BASICS_NOTES.map((note) => (
          <div
            className="aud-basics__note"
            key={note.title}
            style={{ '--x': `${note.left}px`, '--y': `${note.top}px` }}
          >
            <p className="aud-basics__note-title">{note.title}</p>
            <p
              className="aud-basics__note-text"
              style={{ '--w': `${note.width}px` }}
            >
              {note.text}
            </p>
            {note.badges && (
              <div className="aud-basics__note-badges">
                {BASICS_BADGES.map((badge) => (
                  <span
                    className={`rk-badge rk-badge--${badge.tone} rk-badge--xs`}
                    key={badge.label}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            )}
            {note.tags && (
              <ReportSeverityKey size="xs" className="aud-basics__note-tags" />
            )}
          </div>
        ))}

        {BASICS_NOTES.map((note) => (
          <span
            className="aud-basics__arrow"
            key={`${note.title}-arrow`}
            style={{
              '--x': `${note.arrow.left}px`,
              '--y': `${note.arrow.top}px`,
              '--w': `${note.arrow.w}px`,
              '--h': `${note.arrow.h}px`,
            }}
          >
            <img
              src={note.arrow.src}
              alt=""
              style={{
                '--iw': `${note.arrow.iw}px`,
                '--ih': `${note.arrow.ih}px`,
                '--deg': `${note.arrow.deg}deg`,
              }}
            />
          </span>
        ))}
      </div>

      <div className="aud-basics__panel aud-basics__panel--legend">
        <div className="aud-basics__grid" aria-hidden="true" />
        <div className="aud-basics__legend">
          {BASICS_LEGEND.map((entry) => (
            <ReportImpact
              key={entry.tone}
              size="sm"
              tone={entry.tone}
              finding={{
                heuristic:
                  'This section highlights which Heuristic Principle is lacking or neglected',
                heuristicLabel: false,
                title: entry.title,
                badge: 'BADGe',
                badgeTone: 'grey',
                body: entry.body,
                solution:
                  'Our inputs on how this issue can be improved upon or potentially solved.',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
