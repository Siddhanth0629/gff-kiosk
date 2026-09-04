import lyLogo from '../assets/case-studies/ly-logo.svg'
import './ReportKit.css'

/* =================================================================
   Shared shell for the client-deliverable decks in the service
   detail strips — the UX Audit report (AuditReport) and the
   Usability Testing report (UsabilityReport), which are built from
   the same Figma components.

   Every page is a 963.556 x 542 spread drawn at the document's own
   scale, so the sizes here are Figma's fractional px rather than the
   round numbers the kiosk screens use.
   ================================================================= */

/**
 * Grids (…) — #EBEBEB hairlines. Figma ships a pair of SVGs per
 * page, the same drawing every time, so it is painted here instead.
 *
 * `board` is the full 1920 artboard grid on a 30px pitch; the
 * default is the report page's own 15.056px one.
 */
export function ReportGrid({ board = false, faint = false }) {
  return (
    <div
      className={`rk-grid${board ? ' rk-grid--board' : ''}${faint ? ' rk-grid--faint' : ''}`}
      aria-hidden="true"
    />
  )
}

/** Footer - Dark (…) — the byline strip, washed over the page. */
export function ReportFooter({ kicker }) {
  return (
    <div className="rk-footer">
      <span className="rk-footer__kicker">{kicker}</span>
      <span className="rk-footer__label">Created by</span>
      <span className="rk-footer__name">LEMON YELLOW LLP</span>
      <img className="rk-footer__logo" src={lyLogo} alt="" />
    </div>
  )
}

/* Tags (…) — the severity key a findings page carries. */
const SEVERITIES = ['critical', 'major', 'minor', 'improvement']

/** The four severities, as the key under a title or on the legend
 *  page, where `size` drops them to a fraction of the size. */
export function ReportSeverityKey({ size = 'md', className = '' }) {
  return (
    <div className={`rk-title__tags ${className}`.trim()}>
      {SEVERITIES.map((key) => (
        <span
          className={`rk-tag rk-tag--${key}${size === 'xs' ? ' rk-tag--xs' : ''}`}
          key={key}
        >
          {key}
        </span>
      ))}
    </div>
  )
}

/** Title (…) — flow name over module name, with the severity key. */
export function ReportTitle({
  flow,
  module,
  tags = false,
  className = '',
  style,
}) {
  return (
    <div className={`rk-title ${className}`.trim()} style={style}>
      {flow && <p className="rk-title__flow">{flow}</p>}
      <p className="rk-title__module">{module}</p>
      {tags && <ReportSeverityKey />}
    </div>
  )
}

/**
 * Legends on Impact (…) — one annotated finding.
 *
 * `tone` picks the severity palette; `size` picks the three type
 * scales Figma draws this card at across the decks.
 */
export function ReportImpact({
  finding,
  tone,
  size = 'lg',
  className = '',
  style,
}) {
  return (
    <div
      className={`rk-impact rk-impact--${size} rk-impact--${tone} ${className}`.trim()}
      style={style}
    >
      <div className="rk-impact__tab">
        {finding.heuristicLabel !== false && (
          <p className="rk-impact__tab-label">Heuristic affected:</p>
        )}
        <p className="rk-impact__tab-name">{finding.heuristic}</p>
      </div>

      <div className="rk-impact__context">
        <div className="rk-impact__head">
          <p className="rk-impact__title">{finding.title}</p>
          <span className={`rk-badge rk-badge--${finding.badgeTone}`}>
            {finding.badge}
          </span>
        </div>
        <p className="rk-impact__body">{finding.body}</p>
      </div>

      {finding.solution && (
        <>
          <span className="rk-impact__rule" />
          <div className="rk-impact__solution">
            <p className="rk-impact__solution-label">Proposed Solution</p>
            <p className="rk-impact__solution-body">{finding.solution}</p>
          </div>
        </>
      )}
    </div>
  )
}
