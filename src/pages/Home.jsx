import bgRoom from '../assets/landing/bg-room.png'
import cardFrames from '../assets/landing/card-frames.png'
import flagIndia from '../assets/landing/flag-india.png'
import flagUae from '../assets/landing/flag-uae.svg'
import flagUsa from '../assets/landing/flag-usa.png'
import heroCaseStudies from '../assets/landing/hero-case-studies.png'
import heroLemonade from '../assets/landing/hero-lemonade.png'
import heroServices from '../assets/landing/hero-services.png'
import lyLogo from '../assets/landing/ly-logo.svg'
import kyooriusV1 from '../assets/landing/awards/kyoorius-v1.svg'
import kyooriusV2 from '../assets/landing/awards/kyoorius-v2.svg'
import kyooriusV3 from '../assets/landing/awards/kyoorius-v3.svg'
import kyooriusV4 from '../assets/landing/awards/kyoorius-v4.svg'
import logoBusinessTitans from '../assets/landing/awards/logo-business-titans.png'
import logoClutch from '../assets/landing/awards/logo-clutch.png'
import logoCycleKiKahani from '../assets/landing/awards/logo-cycle-ki-kahani.png'
import logoDnaParis from '../assets/landing/awards/logo-dna-paris.png'
import logoIbda2023 from '../assets/landing/awards/logo-ibda-2023.png'
import logoIbda2026 from '../assets/landing/awards/logo-ibda-2026.png'
import logoKyoorius from '../assets/landing/awards/logo-kyoorius.png'
import logoSecureHimalaya from '../assets/landing/awards/logo-secure-himalaya.svg'
import textBusinessTitans from '../assets/landing/awards/text-business-titans.svg'
import textClutch from '../assets/landing/awards/text-clutch.svg'
import textCycleKiKahani from '../assets/landing/awards/text-cycle-ki-kahani.svg'
import textDnaParis from '../assets/landing/awards/text-dna-paris.svg'
import textIbda2023 from '../assets/landing/awards/text-ibda-2023.svg'
import textIbda2026 from '../assets/landing/awards/text-ibda-2026.svg'
import textKyoorius from '../assets/landing/awards/text-kyoorius.svg'
import textSecureHimalaya from '../assets/landing/awards/text-secure-himalaya.svg'
import './Home.css'

const STATS = [
  { key: 'industries', value: '20+', label: 'Industries' },
  { key: 'brands', value: '135+', label: 'Brands' },
  { key: 'users', value: '500M+', label: 'Users' },
  // The last column is ruled off from the three to its left (1783:72684).
  { key: 'testimonials', value: '78+', label: 'Testimonials', ruled: true },
]

/* Awards strip — Figma component `awards` 1902:82908. Every badge is a
   180px-tall box of its own width; the mark and the caption inside sit
   at the percentage insets Figma gave them, so each stays pinned to its
   box whatever the box measures. Captions ship as vector text exports
   (Gilroy outlined), which is how the file draws them. */
const AWARDS = [
  {
    key: 'ibda-2026',
    caption: 'IBDA, 2026 — Best Design Project, Winner',
    width: 207.692,
    logo: { src: logoIbda2026, inset: '0 25.72% 38.62% 25.72%' },
    text: { src: textIbda2026, inset: '80.42% 0 -0.51% 0' },
  },
  {
    key: 'dna-paris',
    caption: 'DNA Paris Awards, 2026 — UI Design, Honorable Mention',
    width: 180,
    logo: { src: logoDnaParis, inset: '0 17.26% 42.89% 17.26%' },
    text: { src: textDnaParis, inset: '70.2% 0 -0.04% 0' },
  },
  {
    key: 'kyoorius',
    caption: 'Kyoorius, 2022 — Baby Blue Elephant',
    width: 148.846,
    logo: {
      src: logoKyoorius,
      inset: '0 0 33.93% 0',
      fit: 'cover',
      // The year sits on the badge as four separate glyph vectors.
      marks: [
        { src: kyooriusV1, inset: '23.42% 56.43% 63.06% 35.71%' },
        { src: kyooriusV2, inset: '23.42% 46.43% 62.16% 44.29%' },
        { src: kyooriusV3, inset: '23.42% 38.57% 63.06% 54.29%' },
        { src: kyooriusV4, inset: '23.42% 30% 63.06% 62.14%' },
      ],
    },
    // Figma nests a second box inside this caption that bleeds 0.37% right
    // and 1.48% below the first; both are folded into one inset here.
    text: { src: textKyoorius, inset: '80.36% 2.864% -0.29% 3.21%' },
  },
  {
    key: 'ibda-2023',
    caption: "IBDA, 2023 — India's Best Design Project",
    width: 195.577,
    logo: { src: logoIbda2023, inset: '0 27.83% 23.81% 27.84%', fit: 'crop' },
    text: { src: textIbda2023, inset: '79.17% -0.01% 0.8% 0' },
  },
  {
    key: 'secure-himalaya',
    caption:
      'Secure Himalaya, 2018 — Winner, an initiative by Govt. of India & UNDP',
    width: 180,
    logo: { src: logoSecureHimalaya, inset: '0 35.67% 40.76% 35.67%' },
    text: { src: textSecureHimalaya, inset: '67.56% 0 0 0' },
  },
  {
    key: 'business-titans',
    caption:
      'Business Titans, 2023 — Excellence in the Category of UI UX Design Agency',
    width: 214.615,
    logo: { src: logoBusinessTitans, inset: '0 10.4% 46.43% 10.4%' },
    text: { src: textBusinessTitans, inset: '68.4% 0 0 0' },
  },
  {
    key: 'clutch',
    caption: 'Clutch, 2022 — Top Design Agency, India',
    width: 183.462,
    logo: { src: logoClutch, inset: '0 22.25% 38.69% 22.26%', fit: 'cover' },
    text: { src: textClutch, inset: '81.15% -0.01% 0 0' },
  },
  {
    key: 'cycle-ki-kahani',
    caption:
      'Cycle Ki Kahani, 2019 — 3rd Prize, an initiative by Govt. of India & PCRA',
    width: 183.462,
    logo: { src: logoCycleKiKahani, inset: '0 2.89% 50% 0', fit: 'cover' },
    text: { src: textCycleKiKahani, inset: '67.64% 0.87% 0 0.87%' },
  },
]

function Award({ award, hidden }) {
  const { logo, text } = award
  const fit = logo.fit ?? 'fill'

  return (
    <div className="home__award" style={{ width: `${award.width}px` }}>
      <span
        className={`home__award-logo home__award-logo--${fit}`}
        style={{ inset: logo.inset }}
      >
        <img src={logo.src} alt="" />
        {logo.marks?.map((mark) => (
          <span
            key={mark.src}
            className="home__award-mark"
            style={{ inset: mark.inset }}
          >
            <img src={mark.src} alt="" />
          </span>
        ))}
      </span>
      <span className="home__award-text" style={{ inset: text.inset }}>
        {/* The caption is drawn by the vector export; the alt carries it
            for anyone who cannot see it. The marquee's second pass is
            aria-hidden so it is not announced twice. */}
        <img src={text.src} alt={hidden ? '' : award.caption} />
      </span>
    </div>
  )
}

function Home({ onSelect = () => {} }) {
  return (
    <div className="home">
      {/* Rotunda backdrop (Figma 3:22624) */}
      <div className="home__bg" aria-hidden="true">
        <div className="home__bg-crop">
          <img src={bgRoom} alt="" />
        </div>
        <div className="home__bg-scrim" />
      </div>

      {/* Bottom gradient block: headline + awards (3:22626) */}
      <div className="home__bottom">
        <div className="home__title">
          <h1 className="home__title-lead">
            The future belongs to products designed with intent.
          </h1>
          <p className="home__title-sub">
            We&rsquo;ve seen it, shaped it and built it with leading brands.
          </p>
        </div>

        <p className="home__awards-heading">Awards &amp; Recognition</p>

        {/* 1902:82908 — 1080px window over a 1948.654px row of badges, so
            it scrolls. Figma lays the first five out a second time past
            the eighth, which is the loop's seam; the track below repeats
            the whole set instead, and slides one set width per cycle. */}
        <div className="home__awards">
          <div className="home__awards-track">
            {AWARDS.map((award) => (
              <Award key={award.key} award={award} />
            ))}
            {AWARDS.map((award) => (
              <Award key={`${award.key}-loop`} award={award} hidden />
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies card (3:22644) */}
      <button
        type="button"
        className="home__card home__card--case"
        onClick={() => onSelect('case-studies')}
      >
        <span className="home__card-inner">
          <span className="home__card-bg">
            <span className="home__card-bg-crop">
              <img src={cardFrames} alt="" />
            </span>
          </span>
          <span className="home__card-light" />
          <span className="home__card-hero">
            <span className="home__card-hero-crop">
              <img src={heroCaseStudies} alt="" />
            </span>
          </span>
          <span className="home__card-label">
            <span>Case</span>
            <span>Studies</span>
          </span>
          <span className="home__card-press" />
        </span>
      </button>

      {/* Our Services card (3:22649) */}
      <button
        type="button"
        className="home__card home__card--services"
        onClick={() => onSelect('services')}
      >
        <span className="home__card-inner">
          <span className="home__card-bg">
            <span className="home__card-bg-crop">
              <img src={cardFrames} alt="" />
            </span>
          </span>
          <span className="home__card-light" />
          <span className="home__card-hero">
            <span className="home__card-hero-crop">
              <img src={heroServices} alt="" />
            </span>
          </span>
          <span className="home__card-label">
            <span>Our</span>
            <span>Services</span>
          </span>
          <span className="home__card-press" />
        </span>
      </button>

      {/* The LemonAIde Process card (3:22654) */}
      <button
        type="button"
        className="home__card home__card--lemonade"
        onClick={() => onSelect('lemonaide-process')}
      >
        <span className="home__card-inner">
          <span className="home__card-bg">
            <span className="home__card-bg-crop">
              {/* NOTE: Figma node 3:22655 has its own gold-frame fill, but
                  that asset exports as a fully transparent PNG. Cropped from
                  the shared sheet's third frame as a stand-in — see README. */}
              <img src={cardFrames} alt="" />
            </span>
          </span>
          <span className="home__card-light" />
          <span className="home__card-hero">
            <span className="home__card-hero-tilt">
              <img src={heroLemonade} alt="" />
            </span>
          </span>
          <span className="home__card-label">
            <span>The LemonAIde Process</span>
          </span>
          <span className="home__card-press" />
        </span>
      </button>

      {/* Brand lockup (1783:72657) — painted above the cards, as in Figma */}
      <div className="home__brand">
        <div className="home__logo">
          <img src={lyLogo} alt="Lemon Yellow" />
        </div>
        <p className="home__wordmark">Lemon Yellow</p>
        <div className="home__location">
          <p className="home__tagline">A global design agency</p>
          <div className="home__flags">
            <span className="home__flag">
              <img src={flagIndia} alt="India" />
            </span>
            <span className="home__flag home__flag--uae">
              <img src={flagUae} alt="United Arab Emirates" />
            </span>
            <span className="home__flag">
              <img src={flagUsa} alt="United States" />
            </span>
          </div>
        </div>
      </div>

      {/* Stat row (1783:72674) */}
      <div className="home__stats">
        {STATS.map((stat) => (
          <div
            key={stat.key}
            className={`home__stat${stat.ruled ? ' home__stat--ruled' : ''}`}
          >
            <p className="home__stat-value">{stat.value}</p>
            <p className="home__stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
