import bgRoom from '../assets/landing/bg-room.png'
import cardFrames from '../assets/landing/card-frames.png'
import flagIndia from '../assets/landing/flag-india.png'
import flagUae from '../assets/landing/flag-uae.svg'
import flagUsa from '../assets/landing/flag-usa.png'
import heroCaseStudies from '../assets/landing/hero-case-studies.png'
import heroLemonade from '../assets/landing/hero-lemonade.png'
import heroServices from '../assets/landing/hero-services.png'
import lyLogo from '../assets/landing/ly-logo.svg'
import './Home.css'

const STATS = [
  { key: 'industries', value: '20+', label: 'Industries' },
  { key: 'brands', value: '135+', label: 'Brands' },
  { key: 'users', value: '500M+', label: 'Users' },
]

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

      {/* Bottom gradient block: brand + stats (3:22626) */}
      <div className="home__bottom">
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

        <div className="home__stats">
          {STATS.map((stat) => (
            <div
              key={stat.key}
              className={`home__stat home__stat--${stat.key}`}
            >
              <p className="home__stat-value">{stat.value}</p>
              <p className="home__stat-label">{stat.label}</p>
            </div>
          ))}
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

      {/* Headline (1027:82505) — painted above the cards, as in Figma */}
      <div className="home__title">
        <h1 className="home__title-lead">
          The future belongs to products designed with intent.
        </h1>
        <p className="home__title-sub">
          We&rsquo;ve seen it, shaped it and built it with leading brands.
        </p>
      </div>
    </div>
  )
}

export default Home
