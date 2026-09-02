import backArrow from '../assets/case-studies/back-arrow.svg'
import iconHome from '../assets/case-studies/icon-home.svg'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import './ScreenChrome.css'

/* =================================================================
   Header and footer shared by the interior screens.

   Both are the same Figma component instance on every screen — the
   "header" / "Footer [Test]" pair (case studies 237:96933 / 237:96908,
   services I194:58122;1999:22028 / ;1999:22055). Only the title text
   and the footer's fill differ, so they live here rather than being
   duplicated per page.

   They are separate exports, not one <ScreenChrome>, because the
   screens interleave other layers between them: Figma paints the
   footer *below* the case-studies cards and below the services rings.
   ================================================================= */

export function ScreenHeader({ title, onBack = () => {}, onHome = onBack }) {
  return (
    <div className="chrome-header">
      <div className="chrome-nav">
        <button type="button" className="chrome-back" onClick={onBack}>
          {/* Figma stacks rotate(180deg) on scaleY(-1), which composes
              to a plain horizontal flip of the "arrow.forward" glyph. */}
          <span className="chrome-back__icon">
            <img src={backArrow} alt="" />
          </span>
          Go Back
        </button>
        <button
          type="button"
          className="chrome-home"
          onClick={onHome}
          aria-label="Back to home page"
        >
          <img src={iconHome} alt="" />
        </button>
      </div>
      <h1 className="chrome-title">{title}</h1>
    </div>
  )
}

/* One Figma component, three fills. `dark` is the case-studies
   footer (solid black behind a 2px blur), `translucent` the services
   one (rgba(0,0,0,0.5) behind 12px), and `plum` the case-study
   detail's (#531233, no blur, and 90px tall rather than 95). */
export function ScreenFooter({ variant = 'dark' }) {
  return (
    <div
      className={`chrome-footer${variant === 'dark' ? '' : ` chrome-footer--${variant}`}`}
    >
      <div className="chrome-brand">
        <span className="chrome-brand__logo">
          <img src={lyLogo} alt="" />
        </span>
        <div className="chrome-brand__text">
          <p className="chrome-brand__name">Lemon Yellow LLP</p>
          <p className="chrome-brand__site">lemonyellow.design</p>
        </div>
      </div>
    </div>
  )
}
