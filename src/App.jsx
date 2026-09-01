import { useLayoutEffect, useState } from 'react'
import CaseStudies from './pages/CaseStudies.jsx'
import CaseStudyList from './pages/CaseStudyList.jsx'
import Home from './pages/Home.jsx'
import LemonaideProcess from './pages/LemonaideProcess.jsx'
import Services from './pages/Services.jsx'
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
          />
        )}
        {screen === 'services' && (
          <Services onBack={() => setScreen('home')} />
        )}
        {screen === 'lemonaide-process' && (
          <LemonaideProcess onBack={() => setScreen('home')} />
        )}
      </div>
    </div>
  )
}

export default App
