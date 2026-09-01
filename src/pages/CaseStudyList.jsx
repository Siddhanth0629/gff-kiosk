import { useCallback, useEffect, useRef } from 'react'
import lyLogo from '../assets/case-studies/ly-logo.svg'
import arrowForward from '../assets/cs-list/arrow-forward.svg'
import backArrow from '../assets/cs-list/back-arrow.svg'
import dot from '../assets/cs-list/dot.svg'
import iconHome from '../assets/cs-list/icon-home.svg'
import indSecuritiesV1 from '../assets/cs-list/ind-securities-v1.svg'
import indSecuritiesV2 from '../assets/cs-list/ind-securities-v2.svg'
import { COMPOSITES, INDUSTRIES } from './caseStudyData.js'
import './CaseStudyList.css'

/* =================================================================
   Case studies — Figma "swipe" 881:63035 (1080 x 1920).

   Reached from the case-studies landing: tapping any domain opens
   this page scrolled to that domain's section. Ten industries and
   forty-seven cards live in a 1290px window that scrolls vertically;
   the chip row jumps between them.

   Content is in caseStudyData.js — this file is only the shapes.
   Like the LemonAIde screen this is light-themed and does not use the
   dark ScreenChrome; its nav sits inside the white card.
   ================================================================= */

/** The 68px logo row. Figma places every brand differently inside it,
 *  so `frame` positions the artwork and `crop` (when present) is an
 *  oversized image inside a clip. */
function Logo({ logo }) {
  if (!logo) return <span className="csl-logo" />
  return (
    <span className="csl-logo">
      <span className="csl-logo__frame" style={logo.frame}>
        {logo.crop ? (
          <span className="csl-logo__clip">
            <img src={logo.src} style={logo.crop} alt="" />
          </span>
        ) : (
          <img src={logo.src} style={{ objectFit: logo.fit ?? 'cover' }} alt="" />
        )}
      </span>
    </span>
  )
}

function CardLogo({ card }) {
  // SnapWork is set as type, not artwork (260:118436).
  if (card.wordmark) {
    return (
      <span className="csl-logo">
        <span className="csl-logo__wordmark">
          {card.wordmark.map((part) => (
            <span key={part.text} style={{ color: part.color }}>
              {part.text}
            </span>
          ))}
        </span>
      </span>
    )
  }

  // Uncia x Lendingkart is a row of three (1069:59674).
  if (card.logoRow) {
    return (
      <span className="csl-logo csl-logo--row">
        <img className="csl-logo__uncia" src={COMPOSITES.uncia} alt="" />
        <img className="csl-logo__dot10" src={COMPOSITES.contentaDot} alt="" />
        <span className="csl-logo__lendingkart">
          <img src={COMPOSITES.lendingkart} alt="" />
        </span>
      </span>
    )
  }

  // SBI Securities is two overlaid groups (3:218).
  if (card.sbi) {
    return (
      <span className="csl-logo">
        <span className="csl-logo__sbi">
          <img className="csl-logo__sbi-a" src={COMPOSITES.sbiA} alt="" />
          <img className="csl-logo__sbi-b" src={COMPOSITES.sbiB} alt="" />
        </span>
      </span>
    )
  }

  return <Logo logo={card.logo} />
}

function CsCard({ card, onOpen }) {
  return (
    <button type="button" className="csl-card" onClick={() => onOpen(card.brand)}>
      <span className="csl-card__inner">
        <CardLogo card={card} />

        <span className="csl-card__body">
          <span className="csl-card__text">
            <span className="csl-card__desc">{card.desc}</span>
            <span className="csl-card__tags">
              {card.tags.map((tag, i) => (
                <span className="csl-card__tag" key={tag}>
                  {i > 0 && <img className="csl-card__dot" src={dot} alt="" />}
                  {tag}
                </span>
              ))}
            </span>
          </span>
          <span className="csl-card__cta">
            Case Study
            <img src={arrowForward} alt="" />
          </span>
        </span>

        {/* 1140:308016 — Fibe alone carries an award badge. */}
        {card.award && (
          <span className="csl-card__award">
            <img className="csl-card__award-icon" src={card.award.icon} alt="" />
            <span className="csl-card__award-title">{card.award.title}</span>
            <span className="csl-card__award-caption">{card.award.caption}</span>
          </span>
        )}
      </span>
    </button>
  )
}

function CaseStudyList({ industry = 'pfm', onBack = () => {}, onHome = onBack, onOpen = () => {} }) {
  const scrollRef = useRef(null)
  const sectionRefs = useRef({})

  const jumpTo = useCallback((key, behavior = 'smooth') => {
    const el = sectionRefs.current[key]
    const scroller = scrollRef.current
    if (!el || !scroller) return
    scroller.scrollTo({ top: el.offsetTop, behavior })
  }, [])

  // Open on the domain that was tapped on the landing screen.
  useEffect(() => {
    jumpTo(industry, 'auto')
  }, [industry, jumpTo])

  return (
    <div className="csl">
      {/* Grids (881:63036) — 1px rules on a 31px pitch, full bleed;
          the white card is what hides them through the middle. */}
      <div className="csl__grid" aria-hidden="true" />

      <div className="csl__card">
        {/* Frame 2147226510 (1188:346042) */}
        <div className="csl__head">
          <div className="csl__head-top">
            <div className="csl__nav">
              <button type="button" className="csl__back" onClick={onBack}>
                {/* Figma stacks rotate(180deg) on scaleY(-1) — a flip. */}
                <span className="csl__back-icon">
                  <img src={backArrow} alt="" />
                </span>
                Go Back
              </button>
              <button
                type="button"
                className="csl__home"
                onClick={onHome}
                aria-label="Back to home page"
              >
                <img src={iconHome} alt="" />
              </button>
            </div>
            <h1 className="csl__title">Case studies</h1>
          </div>

          <div className="csl__chip-band">
            <div className="csl__chips">
              {INDUSTRIES.map((ind) => (
                <button
                  type="button"
                  className="csl__chip"
                  key={ind.key}
                  style={{ width: `${ind.chipWidth}px` }}
                  onClick={() => jumpTo(ind.key)}
                >
                  {ind.chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* All Industries (1188:345940) — the scrolling well. */}
        <div className="csl__scroll" ref={scrollRef}>
          {INDUSTRIES.map((ind) => (
            <section
              className="csl-ind"
              key={ind.key}
              ref={(el) => {
                sectionRefs.current[ind.key] = el
              }}
            >
              <div className="csl-ind__head">
                <span className="csl-ind__icon">
                  <img src={ind.icon} alt="" />
                  {/* The securities icon has two vector flourishes
                      layered over it (1188:345971 / :345972). */}
                  {ind.iconOverlay && (
                    <>
                      <img className="csl-ind__icon-v2" src={indSecuritiesV2} alt="" />
                      <img className="csl-ind__icon-v1" src={indSecuritiesV1} alt="" />
                    </>
                  )}
                </span>
                <h2
                  className="csl-ind__title"
                  style={ind.titleSize ? { fontSize: `${ind.titleSize}px` } : undefined}
                >
                  {ind.title}
                </h2>
              </div>

              <div className="csl-ind__cards">
                {ind.cards.map((card) => (
                  <CsCard key={card.brand} card={card} onOpen={onOpen} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer [Test] (881:63255) — the light variant. */}
      <div className="csl__footer">
        <span className="csl__footer-logo">
          <img src={lyLogo} alt="" />
        </span>
        <div className="csl__footer-text">
          <p className="csl__footer-name">Lemon Yellow LLP</p>
          <p className="csl__footer-site">lemonyellow.design</p>
        </div>
      </div>
    </div>
  )
}

export default CaseStudyList
