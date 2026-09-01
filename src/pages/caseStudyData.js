/* =================================================================
   Case-study listing content — Figma "swipe" 881:63035.

   Ten industries, forty-seven cards. Each card is a brand logo, a
   one-line description and a list of tags; the logo is the only
   fiddly part, because Figma places and crops every brand's artwork
   differently inside the shared 68px-tall logo row. `frame` is that
   placement and `crop` is the oversized inner image where one is
   used; a card with neither just fills its frame.

   `chipWidth` is Figma's measured width for each sector chip. It is
   pinned rather than left to the text because the Gilroy fallback is
   wider, which pushes the row from two wraps to three.
   ================================================================= */

import indBanking from '../assets/cs-list/ind-banking.png'
import indInsurance from '../assets/cs-list/ind-insurance.png'
import indInvestment from '../assets/cs-list/ind-investment.png'
import indLending from '../assets/cs-list/ind-lending.png'
import indNps from '../assets/cs-list/ind-nps.png'
import indPfm from '../assets/cs-list/ind-pfm.png'
import indPr from '../assets/cs-list/ind-pr.png'
import indRisk from '../assets/cs-list/ind-risk.png'
import indSecurities from '../assets/cs-list/ind-securities.png'
import indVc from '../assets/cs-list/ind-vc.png'

import lgAbcd from '../assets/cs-list/lg-abcd.png'
import lgAbhi from '../assets/cs-list/lg-abhi.png'
import lgAlfardan from '../assets/cs-list/lg-alfardan.png'
import lgArthaone from '../assets/cs-list/lg-arthaone.png'
import lgBetalabs from '../assets/cs-list/lg-betalabs.png'
import lgClearstreet from '../assets/cs-list/lg-clearstreet.png'
import lgContentaDot from '../assets/cs-list/lg-contenta-dot.svg'
import lgCredopay from '../assets/cs-list/lg-credopay.png'
import lgEmf from '../assets/cs-list/lg-emf.svg'
import lgExperian from '../assets/cs-list/lg-experian.png'
import lgFibe from '../assets/cs-list/lg-fibe.png'
import lgFibeAward from '../assets/cs-list/lg-fibe-award.png'
import lgFintoo from '../assets/cs-list/lg-fintoo.svg'
import lgGlobex from '../assets/cs-list/lg-globex.png'
import lgGosree from '../assets/cs-list/lg-gosree.png'
import lgHdfcmf from '../assets/cs-list/lg-hdfcmf.png'
import lgHomefirst from '../assets/cs-list/lg-homefirst.png'
import lgIcicidirect from '../assets/cs-list/lg-icicidirect.png'
import lgIcicinps from '../assets/cs-list/lg-icicinps.png'
import lgIcicisec from '../assets/cs-list/lg-icicisec.png'
import lgIndiashelter from '../assets/cs-list/lg-indiashelter.png'
import lgIsg from '../assets/cs-list/lg-isg.png'
import lgJio from '../assets/cs-list/lg-jio.svg'
import lgJuliusbaer from '../assets/cs-list/lg-juliusbaer.svg'
import lgKotak from '../assets/cs-list/lg-kotak.png'
import lgLendingkart from '../assets/cs-list/lg-lendingkart.png'
import lgMahindra from '../assets/cs-list/lg-mahindra.png'
import lgMotilal from '../assets/cs-list/lg-motilal.png'
import lgMuthoot from '../assets/cs-list/lg-muthoot.png'
import lgOmnenest from '../assets/cs-list/lg-omnenest.svg'
import lgOmnivore from '../assets/cs-list/lg-omnivore.png'
import lgPhongsavanh from '../assets/cs-list/lg-phongsavanh.png'
import lgPinelabs from '../assets/cs-list/lg-pinelabs.png'
import lgRubix from '../assets/cs-list/lg-rubix.png'
import lgRxil from '../assets/cs-list/lg-rxil.png'
import lgSbisecA from '../assets/cs-list/lg-sbisec-a.svg'
import lgSbisecB from '../assets/cs-list/lg-sbisec-b.svg'
import lgShah from '../assets/cs-list/lg-shah.png'
import lgTataneu from '../assets/cs-list/lg-tataneu.png'
import lgTicfin from '../assets/cs-list/lg-ticfin.svg'
import lgTss from '../assets/cs-list/lg-tss.png'
import lgUncia from '../assets/cs-list/lg-uncia.svg'
import lgVayana from '../assets/cs-list/lg-vayana.png'
import lgWorldbank from '../assets/cs-list/lg-worldbank.png'
import lgXtracash from '../assets/cs-list/lg-xtracash.png'

const px = (n) => `${n}px`
/** A logo frame inside the 68px row. */
const f = (left, top, width, height) => ({
  left: px(left),
  top: px(top),
  width: px(width),
  height: px(height),
})
/** Same, but vertically centred on the row as Figma does for some. */
const fc = (left, width, height, nudge = 0) => ({
  left: px(left),
  top: `calc(50% + ${nudge}px)`,
  width: px(width),
  height: px(height),
  transform: 'translateY(-50%)',
})

// Tata Neu recurs in four industries with identical placement.
const tataNeu = { src: lgTataneu, frame: f(13, 7, 74, 54) }
const tataNeuCard = {
  brand: 'Tata Neu',
  logo: tataNeu,
  desc: "Six-year partnership transforming Tata Neu's digital experience with consistent UI design.",
  tags: ['App Design', 'Website Design', 'Design System'],
}
const jio = { src: lgJio, frame: fc(59.7, 127.551, 54.4) }
const jioCard = {
  brand: 'Jio Financial Services',
  logo: jio,
  desc: "Scaled Jio Finance's design capability with 20+ embedded designers on long-term retainer.",
  tags: ['User Research', 'Competition Analysis', 'App Design'],
}

export const INDUSTRIES = [
  {
    key: 'pfm',
    chipWidth: 80.135,
    chip: 'PFM',
    title: 'Personal Finance Management',
    icon: indPfm,
    titleSize: 40,
    cards: [
      {
        brand: 'ArthaOne',
        logo: { src: lgArthaone, frame: f(13, 23, 171, 22) },
        desc: 'Crafted brand identity and an engaging app for holistic personal wealth management.',
        tags: ['UX Workshop', 'User Research', 'App Design'],
      },
      {
        brand: 'Experian',
        logo: { src: lgExperian, frame: f(8, 7, 144, 48), crop: { left: '-0.13%', top: '0', width: '100.25%', height: '100%' } },
        desc: 'Enabled credit access while strengthening financial credibility and reliability.',
        tags: ['App Design', 'UX Writing', 'Design System'],
      },
      {
        brand: 'Aditya Birla Capital Digital',
        logo: { src: lgAbcd, frame: f(0, 0, 83, 68), crop: { left: '0', top: '-13.38%', width: '100%', height: '123.79%' } },
        desc: 'Audited spend analyser journey, improving feature usage and user satisfaction.',
        tags: ['UX Audit', 'User Research', 'Competition Analysis'],
      },
      {
        brand: 'Fintoo',
        logo: { src: lgFintoo, frame: f(0, 10, 117, 47.769), fit: 'fill' },
        desc: 'Redesigned finance advisory app into an AI-enabled one-stop platform for personal financial planning.',
        tags: ['User Research', 'Competition Analysis', 'SaaS Design'],
      },
      {
        brand: 'SnapWork',
        wordmark: [
          { text: 'Snap', color: '#f28c40' },
          { text: 'Work', color: '#262626' },
        ],
        desc: "Designed key screens for SnapWork's new PY user journeys into product reality.",
        tags: ['App Design', 'Design System', 'Content Writing'],
      },
      tataNeuCard,
    ],
  },
  {
    key: 'lending',
    chipWidth: 121.135,
    chip: 'Lending',
    title: 'Lending',
    icon: indLending,
    cards: [
      {
        brand: 'Muthoot Finance',
        logo: { src: lgMuthoot, frame: f(0, 2, 191.779, 63) },
        desc: 'Improved Muthoot app through UX audit, usability testing, and competition analysis.',
        tags: ['UX Audit', 'Usability Testing', 'Proof of Concept'],
      },
      {
        brand: 'HomeFirst',
        logo: { src: lgHomefirst, frame: f(0, 0, 207, 68), crop: { left: '-5.29%', top: '-25.16%', width: '86.58%', height: '150.31%' } },
        desc: 'Created a refreshed HomeFirst website carrying warmth through seamless design.',
        tags: ['Website Design', 'Motion Design', 'Content Writing'],
      },
      {
        brand: 'India Shelter Home Loans',
        logo: { src: lgIndiashelter, frame: f(0, 0, 204, 68), crop: { left: '-1.78%', top: '0', width: '87.16%', height: '100%' } },
        desc: 'Designed a loan origination system that simplified processes for agents and customers.',
        tags: ['App Design', 'Full Stack Development', 'Visual Design'],
      },
      {
        brand: 'Fibe',
        logo: { src: lgFibe, frame: f(0, 0, 207, 68), crop: { left: '-16.02%', top: '-1.09%', width: '79.51%', height: '121%' } },
        award: { icon: lgFibeAward, title: 'IBDA', caption: "India's Best Design Project, 2023" },
        desc: 'Redesigned app and website, strengthening presence and enabling funding success.',
        tags: ['UX Workshop', 'User Research', 'Visual Design'],
      },
      {
        brand: 'Gosree Finance Limited',
        logo: { src: lgGosree, frame: f(0, 0, 204, 68), fit: 'contain' },
        desc: "Redesigned MSME lender's website with clean, modern parent-brand aligned identity.",
        tags: ['Website Design', 'Motion Design', 'Content Writing'],
      },
      {
        brand: 'RXIL',
        logo: { src: lgRxil, frame: f(0, 0, 204, 68), crop: { left: '5.59%', top: '12.5%', width: '54.31%', height: '75.84%' } },
        desc: "Redesigned RXIL's website with contemporary design, improving MSME financing accessibility.",
        tags: ['Website Design', 'Motion Design', 'Content Writing'],
      },
      {
        brand: 'Mahindra Finance',
        logo: { src: lgMahindra, frame: f(0, 0, 204, 68), crop: { left: '0', top: '18%', width: '72.13%', height: '68.56%' } },
        desc: 'Transformed dealer web portal into mobile app for improved sales and performance tracking.',
        tags: ['User Research', 'App Design', 'Data Visualisation'],
      },
      {
        brand: 'Xtra Cash',
        logo: { src: lgXtracash, frame: f(0, 0, 204, 68), crop: { left: '2.25%', top: '16.18%', width: '57.44%', height: '71.24%' } },
        desc: 'Created interactive website for African audience, boosting brand visibility and partnerships.',
        tags: ['Website Design', 'Motion Design', 'Content Writing'],
      },
      {
        brand: 'Uncia',
        logo: { src: lgUncia, frame: fc(0, 170.172, 47, 0.5), fit: 'fill' },
        desc: 'Revamped website with deep UX research and strong visual design, modernising brand credibility.',
        tags: ['User Research', 'Competition Analysis', 'Website Design'],
      },
      {
        brand: 'Uncia × Lendingkart',
        logoRow: true,
        desc: "Modernised Uncia's lending platform for its partner, Lendingkart, with intuitive UX for lending journeys.",
        tags: ['Workshop', 'UI/UX Design', 'Design System', 'Dev Handoff'],
      },
      {
        brand: 'Vayana',
        logo: { src: lgVayana, frame: f(0, 0, 204, 68), crop: { left: '0', top: '20.41%', width: '87.7%', height: '60.67%' } },
        desc: 'Redesigned their loan origination system, simplifying loan applications and seamless loan tracking.',
        tags: ['SaaS Design', 'UX Writing', 'Visual Design'],
      },
    ],
  },
  {
    key: 'securities',
    chipWidth: 140.135,
    chip: 'Securities',
    title: 'Securities',
    icon: indSecurities,
    iconOverlay: true,
    cards: [
      {
        brand: 'Motilal Oswal',
        logo: { src: lgMotilal, frame: f(1, 6, 129, 62) },
        desc: "Redesigned Motilal Oswal's digital apps, delivering consistency and stronger investor experience.",
        tags: ['User Research', 'Competition Analysis', 'App Design'],
      },
      {
        brand: 'ICICI Securities',
        logo: { src: lgIcicisec, frame: f(0, 0, 204, 68), crop: { left: '-5.06%', top: '-48.99%', width: '110.11%', height: '196.16%' } },
        desc: "Redesigned ICICIdirect's platform, creating clear journeys for retail and HNI investors.",
        tags: ['User Research', 'App Design', 'Design System'],
      },
      {
        brand: 'SBI Securities',
        sbi: true,
        desc: "Leading end-to-end redesign of SBI Securities' portal to improve UX and attract new investors.",
        tags: ['UX Audit', 'User Research', 'Competition Analysis'],
      },
      jioCard,
      {
        brand: 'OmneNEST',
        logo: { src: lgOmnenest, frame: fc(0, 153.637, 40.8, 0.4), fit: 'fill' },
        desc: "Designed and developed OmneNEST's client SaaS platform.",
        tags: ['User Research', 'Competition Analysis', 'SaaS Design', 'Design System'],
      },
      {
        brand: 'Julius Bär',
        logo: { src: lgJuliusbaer, frame: fc(35.9, 154.273, 30.855, -4.35), fit: 'fill' },
        desc: "Embedded a dedicated designer driving continuous UX evolution for Julius Bär's SaaS platform.",
        tags: ['User Research', 'Competition Analysis', 'App Design'],
      },
      {
        brand: 'Shah Investors Home Ltd',
        logo: { src: lgShah, frame: fc(0, 151, 53), fit: 'contain' },
        desc: 'End-to-End design for securities platform.',
        tags: ['Logo', 'Brand Guidelines', 'User Research', 'App Design', 'Web Design', 'Design System'],
      },
    ],
  },
  {
    key: 'investment',
    chipWidth: 154.135,
    chip: 'Investment',
    title: 'Investments',
    icon: indInvestment,
    cards: [
      {
        brand: 'HDFC Mutual Fund',
        logo: { src: lgHdfcmf, frame: f(5.5, 10, 120, 50), crop: { left: '3.1%', top: '0', width: '95%', height: '96%' } },
        desc: 'Redesigned web-application, simplifying trading journeys and boosting investor confidence.',
        tags: ['Web-App Design', 'Data Visualisation', 'Design System'],
      },
      {
        brand: 'ICICI Direct Money',
        logo: { src: lgIcicidirect, frame: f(5.5, 10, 50, 50) },
        desc: "Revamped ICICIdirect's trading and investment website, improving usability and engagement.",
        tags: ['User Research', 'App Design', 'Design System'],
      },
      tataNeuCard,
      {
        brand: 'Edelweiss MF',
        logo: { src: lgEmf, frame: f(0, 15, 191, 37.794), fit: 'fill' },
        desc: 'Redesigned landing page and built frontend, improving discoverability and conversion.',
        tags: ['Web Page Design', 'Frontend Development'],
      },
    ],
  },
  {
    key: 'insurance',
    chipWidth: 140.135,
    chip: 'Insurance',
    title: 'Insurance',
    icon: indInsurance,
    cards: [
      {
        brand: 'ABHI',
        logo: { src: lgAbhi, frame: fc(16.1, 123.774, 61.2), crop: { left: '-127.1%', top: '0', width: '227.1%', height: '100%' } },
        desc: "Embedded full design team elevating UX across ABHI's health insurance website and mobile app.",
        tags: ['User Research', 'Competition Analysis', 'App Design'],
      },
      jioCard,
      tataNeuCard,
    ],
  },
  {
    key: 'risk',
    chipWidth: 162.135,
    chip: 'Risk & Audit',
    title: 'Risk & Audit',
    icon: indRisk,
    cards: [
      {
        brand: 'Rubix',
        logo: { src: lgRubix, frame: fc(8, 129, 50), crop: { left: '-4.65%', top: '0', width: '104.65%', height: '100%' } },
        desc: 'Redesigned their SaaS platform with a strategy to drive adoption, retention, and revenue.',
        tags: ['User Research', 'SaaS Design', 'Design System'],
      },
      {
        brand: 'TSS',
        logo: { src: lgTss, frame: fc(7, 76, 76, -1.5) },
        desc: 'Conducted a workshop that helped them discover their product and formulate strategy.',
        tags: ['Design Thinking Workshop'],
      },
      {
        brand: 'Clear Street',
        logo: { src: lgClearstreet, frame: fc(9, 187, 36), crop: { left: '-0.73%', top: '0', width: '96.83%', height: '100%' } },
        desc: 'Designed risk dashboards to streamline complex data with clarity, usability, and improved decision-making.',
        tags: ['Design Thinking Workshop', 'App Design', 'Design System'],
      },
      {
        brand: 'TicFin',
        logo: { src: lgTicfin, frame: f(0, 14, 77, 41), fit: 'fill' },
        desc: 'Redesigned and developed the Indian TicFin newsletter, improving reach and experience.',
        tags: ['User Research', 'Competition Analysis', 'Website Design', 'Design System', 'Backend Dev', 'Testing'],
      },
    ],
  },
  {
    key: 'banking',
    chipWidth: 123.135,
    chip: 'Banking',
    title: 'Banking',
    icon: indBanking,
    cards: [
      {
        brand: 'Kotak',
        logo: { src: lgKotak, frame: f(0, 12, 134, 44), fit: 'contain' },
        desc: "Redesigned complex digital journeys for corporate banking, driving Kotak's digital transformation.",
        tags: ['App Design', 'UX Writing', 'Design System'],
      },
      {
        brand: 'Phongsavanh Bank',
        logo: { src: lgPhongsavanh, frame: f(0, 0, 204, 68), fit: 'contain' },
        desc: 'Created intuitive multi-currency wallet, blending user insights with business goals.',
        tags: ['User Research', 'App Design', 'Design System'],
      },
      {
        brand: 'World Bank',
        logo: { src: lgWorldbank, frame: fc(0, 129, 60, 0.5), fit: 'contain' },
        desc: "Designed logo and brand guidelines for World Bank's Traceability DPI initiative.",
        tags: ['Visual Design'],
      },
    ],
  },
  {
    key: 'nps',
    chipWidth: 78.135,
    chip: 'NPS',
    title: 'NPS',
    icon: indNps,
    cards: [
      {
        brand: 'ICICI NPS',
        logo: { src: lgIcicinps, frame: fc(9, 187, 36) },
        desc: 'Revamped the application from onboarding to post-login, refining journeys and attracting young users.',
        tags: ['Competition Analysis', 'App Design', 'Design System'],
      },
    ],
  },
  {
    key: 'vc',
    chipWidth: 204.135,
    chip: 'Venture Capital',
    title: 'Venture Capital',
    icon: indVc,
    cards: [
      {
        brand: 'Omnivore',
        logo: { src: lgOmnivore, frame: fc(9, 141, 39, 0.5), crop: { left: '0', top: '0.89%', width: '100%', height: '94.37%' } },
        desc: 'Designed and developed a website for a VC backing nature-positive startups and enterprises globally.',
        tags: ['Website Design', 'Visual Design', 'Content Writing'],
      },
      {
        brand: 'Betalabs',
        logo: { src: lgBetalabs, frame: fc(4, 96, 54), crop: { left: '3.97%', top: '0', width: '93.61%', height: '100%' } },
        desc: 'Redesigned website and digital identity, highlighting future-ready solutions, boosting credibility.',
        tags: ['Frontend Development'],
      },
    ],
  },
  {
    key: 'pr',
    chipWidth: 291.135,
    chip: 'Payments & Remittance',
    title: 'Payments & Remittance',
    icon: indPr,
    cards: [
      {
        brand: 'ISG',
        logo: { src: lgIsg, frame: f(11, 9, 72, 50) },
        desc: "Redesigned and developed ISG's website, improving navigation, usability, and digital credibility.",
        tags: ['Website Design', 'Visual Design', 'Content Writing'],
      },
      {
        brand: 'Pine Labs — Pluspay',
        logo: { src: lgPinelabs, frame: f(9.5, 13, 148, 40) },
        desc: 'Redesigned key screens within existing design language, improving clarity and product cohesion.',
        tags: ['UI Design', 'Visual Design', 'Motion Design'],
      },
      {
        brand: 'CredoPay',
        logo: { src: lgCredopay, frame: f(11, 9, 185, 50), crop: { left: '-2.74%', top: '-112.8%', width: '102.74%', height: '345.72%' } },
        desc: 'Redesigned and developed their website while elevating brand experience.',
        tags: ['Website Design', 'Visual Design', 'Content Writing'],
      },
      {
        brand: 'Globex',
        logo: { src: lgGlobex, frame: f(14, 16, 111, 35) },
        desc: 'Designed a travel card app with a clean look, easing multi-currency management.',
        tags: ['Competition Analysis', 'App Design', 'Design System'],
      },
      {
        brand: 'Alfardan Exchange',
        logo: { src: lgAlfardan, frame: f(9, 11, 147, 46) },
        desc: 'Created SEO-driven content for their website redesign, strengthening brand dominance in UAE.',
        tags: ['Website Design', 'Visual Design', 'Content Writing'],
      },
      tataNeuCard,
    ],
  },
]

/* Assets used by the three composite logos, which the component draws
   itself rather than through the shared frame/crop shape. */
export const COMPOSITES = {
  uncia: lgUncia,
  lendingkart: lgLendingkart,
  contentaDot: lgContentaDot,
  sbiA: lgSbisecA,
  sbiB: lgSbisecB,
}
