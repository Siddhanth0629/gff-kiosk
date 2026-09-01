import bgRoom from '../assets/landing/bg-room.png'
import cardGlass from '../assets/case-studies/card-glass.png'
import cardSheen from '../assets/case-studies/card-sheen.png'
import heroInsurance from '../assets/case-studies/hero-insurance.png'
import heroInvestment from '../assets/case-studies/hero-investment.png'
import heroLending from '../assets/case-studies/hero-lending.png'
import heroNps from '../assets/case-studies/hero-nps.png'
import heroPayments from '../assets/case-studies/hero-payments.png'
import heroPersonalFinance from '../assets/case-studies/hero-personal-finance.png'
import heroRiskAudit from '../assets/case-studies/hero-risk-audit.png'
import heroSecurities from '../assets/case-studies/hero-securities.png'
import heroVentureCapital from '../assets/case-studies/hero-venture-capital.png'
import lightNarrow from '../assets/case-studies/light-narrow.svg'
import lightWide from '../assets/case-studies/light-wide.svg'
import { ScreenFooter, ScreenHeader } from '../components/ScreenChrome.jsx'
import './CaseStudies.css'

/* =================================================================
   Case Studies landing — Figma "Case study Landing" 237:96906
   (1080 x 1920). Figma node ids are kept in comments next to each
   block, same as Home.jsx.

   Reading order below is the visual grid order, not Figma's layer
   order — the ten cards never overlap (28px gutters both axes), so
   paint order between them is unobservable.
   ================================================================= */

// Grid slots inside the 856.705 x 1297.051 card well (237:96922).
// Three columns at x 0 / 294.9 / 589.8, four rows at y 0 / 331.26 /
// 662.53 / 993.79. A `wide` card spans two columns.
const CASES = [
  { key: 'personal-finance', label: 'Personal Finance Management', node: '237:96928', hero: heroPersonalFinance, wide: true },
  { key: 'lending', label: 'Lending', node: '237:96930', hero: heroLending },
  { key: 'securities', label: 'Securities', node: '237:96931', hero: heroSecurities },
  { key: 'investment', label: 'investment', node: '237:96923', hero: heroInvestment },
  { key: 'insurance', label: 'Insurance', node: '237:96924', hero: heroInsurance },
  { key: 'risk-audit', label: 'Risk & Audit', node: '237:96925', hero: heroRiskAudit },
  { key: 'banking', label: 'Banking', node: '237:96932', hero: heroInvestment },
  { key: 'nps', label: 'NPS', node: '237:96926', hero: heroNps },
  { key: 'venture-capital', label: 'Venture capital', node: '237:96927', hero: heroVentureCapital },
  { key: 'payments', label: 'Payments & Remittance', node: '237:96929', hero: heroPayments, wide: true },
]

function CaseCard({ item, onSelect }) {
  const { key, label, node, hero, wide } = item
  const light = wide ? lightWide : lightNarrow

  return (
    <button
      type="button"
      className={`cs-card cs-card--${wide ? 'wide' : 'narrow'} cs-card--${key}`}
      data-node-id={node}
      onClick={() => onSelect(key)}
    >
      {/* Figma puts a 10.876px background blur on the card frame. It
          lives on its own first-child layer, never on .cs-card: a
          backdrop-filter makes the element a backdrop root, and on the
          card it would isolate the artwork below and turn the
          screen / hard-light / lighten blends into no-ops. */}
      <span className="cs-card__blur" />

      <span className="cs-card__hero cs-card__hero--back">
        <img src={hero} alt="" />
      </span>

      <span className="cs-card__tint">
        <span className="cs-card__tint-crop">
          <img src={cardGlass} alt="" />
        </span>
      </span>

      <span className="cs-card__sheen">
        <span className="cs-card__sheen-crop">
          <img src={cardSheen} alt="" />
        </span>
      </span>

      <span className="cs-card__glass">
        <span className="cs-card__label cs-card__label--under" aria-hidden="true">
          {label}
        </span>
        <span className="cs-card__glass-fill" />
        {/* On the wide cards the lit copy of the label sits inside the
            glass clip, above the fill; on the narrow ones it sits
            outside the glass entirely. */}
        {wide && <span className="cs-card__label cs-card__label--over">{label}</span>}
      </span>

      <span className="cs-card__hero cs-card__hero--front">
        <img src={hero} alt="" />
      </span>

      <span className="cs-card__light">
        <span className="cs-card__light-crop">
          <img src={light} alt="" />
        </span>
      </span>

      {!wide && <span className="cs-card__label cs-card__label--over">{label}</span>}
    </button>
  )
}

function CaseStudies({
  onBack = () => {},
  onHome = onBack,
  onSelect = () => {},
}) {
  return (
    <div className="case">
      {/* Rotunda backdrop (237:96907) — the same 3088x4019 render the
          landing uses, here centred 150px above the frame centre and
          dimmed by a 60% black scrim. */}
      <div className="case__bg" aria-hidden="true">
        <div className="case__bg-crop">
          <img src={bgRoom} alt="" />
        </div>
        <div className="case__bg-scrim" />
      </div>

      <ScreenFooter />

      {/* Card well (237:96922) */}
      <div className="case__cards">
        {CASES.map((item) => (
          <CaseCard key={item.key} item={item} onSelect={onSelect} />
        ))}
      </div>

      <ScreenHeader title="Case Studies" onBack={onBack} onHome={onHome} />
    </div>
  )
}

export default CaseStudies
