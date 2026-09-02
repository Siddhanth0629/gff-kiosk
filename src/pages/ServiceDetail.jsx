import { useState } from 'react'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import backArrow from '../assets/cs-list/back-arrow.svg'
import iconHome from '../assets/cs-list/icon-home.svg'
import sectionToggle from '../assets/services-detail/section-toggle.svg'
import { SERVICE_CHIPS, SERVICE_DETAILS } from './serviceDetailData.js'
import './ServiceDetail.css'

/* =================================================================
   Service detail — Figma "services-detail-workshop" 43:38737
   (1080 x 1920).

   Reached from Our Services: tapping the focused category's UX
   Workshop card opens this screen. One 960x1720 white card scrolls
   the whole page; the nav and chip band sit in a sticky bar that
   rides the hero and slides away with it (223:59436).

   Light-themed like the case-study list, so it carries its own nav
   and footer rather than the dark ScreenChrome. Copy and artwork are
   in serviceDetailData.js — this file is only the shapes.
   ================================================================= */

/** Renders one rich-text run: strings verbatim, `{ b }` in SemiBold. */
function Rich({ parts }) {
  return parts.map((part, i) =>
    typeof part === 'string' ? (
      part
    ) : (
      <strong key={i} className="svd-acc__strong">
        {part.b}
      </strong>
    ),
  )
}

/** The accordion's body: paragraphs, numbered lists, and the blank
 *  lines Figma sets as zero-width-space paragraphs. */
function Body({ blocks }) {
  return blocks.map((block, i) => {
    if (block.type === 'gap') return <div className="svd-acc__gap" key={i} />
    if (block.type === 'ol') {
      return (
        <ol className="svd-acc__list" key={i}>
          {block.items.map((item, j) => (
            <li key={j}>
              <Rich parts={item} />
            </li>
          ))}
        </ol>
      )
    }
    return (
      <p className="svd-acc__para" key={i}>
        <Rich parts={block.text} />
      </p>
    )
  })
}

/* Figma ships the resting state: every row clipped to 90px, so only
   the thumbnail and the title show. Expanding drops the fixed height
   and lets the body out; the thumbnail column keeps its full-height
   fill either way.

   The whole row is the target, but its body is lists and paragraphs —
   not legal inside a <button> — so the button is a transparent hit
   layer over the row rather than its wrapper. */
function Section({ section, open, onToggle }) {
  return (
    <div className={`svd-acc${open ? ' svd-acc--open' : ''}`}>
      <button
        type="button"
        className="svd-acc__hit"
        aria-expanded={open}
        aria-label={section.title}
        onClick={onToggle}
      />
      <div className="svd-acc__shot">
        <img src={section.image} alt="" />
      </div>
      <div className="svd-acc__main">
        <div className="svd-acc__head">
          <h2 className="svd-acc__title">{section.title}</h2>
          <img className="svd-acc__toggle" src={sectionToggle} alt="" />
        </div>
        <div className="svd-acc__body">
          <Body blocks={section.body} />
        </div>
      </div>
    </div>
  )
}

function ServiceDetail({
  service = 'ux-workshop',
  onBack = () => {},
  onHome = onBack,
  onSelect = () => {},
}) {
  const detail = SERVICE_DETAILS[service] ?? SERVICE_DETAILS['ux-workshop']
  const [open, setOpen] = useState(null)

  return (
    <div className="svd">
      {/* Grids (43:38738) — the same graph paper as the case-study
          list: 1px rules on a 31px pitch, first column at x 29 and
          first row at y 29.5. */}
      <div className="svd__grid" aria-hidden="true" />

      {/* Card (43:38836) — the scroller for the entire page. */}
      <div className="svd__card">
        <div className="svd__hero">
          <div className="svd__title">
            <h1 className="svd__heading">{detail.title}</h1>
            <p className="svd__lead">
              <Rich parts={detail.lead} />
            </p>
          </div>

          {/* images (43:38851) — the five "when to run this" cards. */}
          <div className="svd__cases">
            {detail.cases.map((item) => (
              <div className="svd-case" key={item.text}>
                <span className="svd-case__badge">
                  <img src={item.icon} alt="" />
                </span>
                <span className="svd-case__text">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Container (223:59436) — spans the hero but only paints
              the bar, so taps still reach the title and cards below. */}
          <div className="svd__sticky">
            <div className="svd__bar">
              <div className="svd__nav">
                <button type="button" className="svd__back" onClick={onBack}>
                  {/* Figma stacks rotate(180deg) on scaleY(-1) — a flip. */}
                  <span className="svd__back-icon">
                    <img src={backArrow} alt="" />
                  </span>
                  Go Back
                </button>
                <button
                  type="button"
                  className="svd__home"
                  onClick={onHome}
                  aria-label="Back to home page"
                >
                  <img src={iconHome} alt="" />
                </button>
              </div>

              <div className="svd__chips">
                {SERVICE_CHIPS.map((chip) => {
                  const active = chip.key === service
                  return (
                    <button
                      type="button"
                      key={chip.key}
                      className={`svd__chip${active ? ' svd__chip--active' : ''}`}
                      aria-current={active ? 'true' : undefined}
                      onClick={() => {
                        if (!active) onSelect(chip.key)
                      }}
                    >
                      {chip.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* accordion (43:38888) */}
        <div className="svd__accordion">
          {detail.sections.map((section) => (
            <Section
              key={section.key}
              section={section}
              open={open === section.key}
              onToggle={() => setOpen((k) => (k === section.key ? null : section.key))}
            />
          ))}
        </div>

        {/* deliverables (1571:80694) — the sideways photo strip. */}
        <div className="svd__gallery">
          {detail.gallery.map((shot) => (
            <figure
              className="svd-shot"
              key={shot.key}
              style={{ '--w': `${shot.width}px` }}
            >
              {shot.src ? (
                <img
                  className={`svd-shot__img${shot.anchor === 'top' ? ' svd-shot__img--top' : ''}`}
                  src={shot.src}
                  alt={shot.caption ?? ''}
                />
              ) : null}
              {shot.caption && (
                <figcaption className="svd-shot__caption">{shot.caption}</figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Footer [Test] (43:38902) — the light variant. */}
      <div className="svd__footer">
        <span className="svd__footer-logo">
          <img src={lyLogo} alt="" />
        </span>
        <div className="svd__footer-text">
          <p className="svd__footer-name">Lemon Yellow LLP</p>
          <p className="svd__footer-site">lemonyellow.design</p>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
