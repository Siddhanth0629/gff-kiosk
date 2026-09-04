import { useLayoutEffect, useState } from 'react'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyDetail from './pages/CaseStudyDetail.jsx'
import CaseStudyList from './pages/CaseStudyList.jsx'
import { CASE_STUDY_DETAILS } from './pages/caseStudyDetailData.js'
import Home from './pages/Home.jsx'
import LemonaideProcess from './pages/LemonaideProcess.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Services from './pages/Services.jsx'
import { SERVICE_DETAILS } from './pages/serviceDetailData.js'
import './App.css'

const KIOSK_W = 1080
const KIOSK_H = 1920

// Screen keys match the values Home's cards pass to onSelect.
const SCREENS = ['home', 'case-studies', 'services', 'lemonaide-process']

// The landing's ten domain cards map onto the case-study listing's ten
// industry sections; tapping one opens the list scrolled to it.
const DOMAIN_TO_INDUSTRY = {
  'personal-finance': 'pfm',
  lending: 'lending',
  securities: 'securities',
  investment: 'investment',
  insurance: 'insurance',
  'risk-audit': 'risk',
  banking: 'banking',
  nps: 'nps',
  'venture-capital': 'vc',
  payments: 'pr',
}

function App() {
  const [screen, setScreen] = useState('home')
  const [industry, setIndustry] = useState('pfm')
  const [service, setService] = useState('ux-workshop')
  const [brand, setBrand] = useState('ArthaOne')

  // Tapping a service card on the hub opens its detail screen, for
  // the services that have one built (serviceDetailData.js).
  const openService = (key) => {
    if (!SERVICE_DETAILS[key]) return
    setService(key)
    setScreen('service-detail')
  }

  // Tapping a brand card in the listing opens its walkthrough, for
  // the case studies that have one built (caseStudyDetailData.js).
  const openCaseStudy = (key) => {
    if (!CASE_STUDY_DETAILS[key]) return
    setBrand(key)
    setScreen('case-study-detail')
  }

  // Scale the 1080x1920 stage down to fit whatever viewport we're in.
  // Resolves to exactly 1 on the kiosk panel itself.
  useLayoutEffect(() => {
    const fit = () => {
      const scale = Math.min(
        window.innerWidth / KIOSK_W,
        window.innerHeight / KIOSK_H,
      )
      document.documentElement.style.setProperty('--kiosk-scale', scale)
    }

    fit()
    window.addEventListener('resize', fit)
    window.addEventListener('orientationchange', fit)
    return () => {
      window.removeEventListener('resize', fit)
      window.removeEventListener('orientationchange', fit)
    }
  }, [])

  const handleSelect = (key) => {
    if (SCREENS.includes(key)) setScreen(key)
  }

  return (
    <div className="kiosk">
      <div className="kiosk__stage">
        {screen === 'home' && <Home onSelect={handleSelect} />}
        {screen === 'case-studies' && (
          <CaseStudies
            onBack={() => setScreen('home')}
            onSelect={(key) => {
              setIndustry(DOMAIN_TO_INDUSTRY[key] ?? 'pfm')
              setScreen('case-study-list')
            }}
          />
        )}
        {screen === 'case-study-list' && (
          <CaseStudyList
            industry={industry}
            onBack={() => setScreen('case-studies')}
            onHome={() => setScreen('home')}
            onOpen={openCaseStudy}
          />
        )}
        {screen === 'case-study-detail' && (
          // Keyed on the brand so switching case studies remounts the
          // walkthrough rather than leaving it mid-strip.
          <CaseStudyDetail
            key={brand}
            brand={brand}
            onBack={() => setScreen('case-study-list')}
            onHome={() => setScreen('home')}
          />
        )}
        {screen === 'services' && (
          <Services onBack={() => setScreen('home')} onSelect={openService} />
        )}
        {screen === 'service-detail' && (
          // Keyed on the service so switching chips remounts the
          // screen rather than leaving the last one's strip scrolled
          // and its accordion open.
          <ServiceDetail
            key={service}
            service={service}
            onBack={() => setScreen('services')}
            onHome={() => setScreen('home')}
            onSelect={openService}
          />
        )}
        {screen === 'lemonaide-process' && (
          <LemonaideProcess onBack={() => setScreen('home')} />
        )}
      </div>
    </div>
  )
}

export default App
