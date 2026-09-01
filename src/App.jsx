import { useLayoutEffect, useState } from 'react'
import CaseStudies from './pages/CaseStudies.jsx'
import Home from './pages/Home.jsx'
import LemonaideProcess from './pages/LemonaideProcess.jsx'
import Services from './pages/Services.jsx'
import './App.css'

const KIOSK_W = 1080
const KIOSK_H = 1920

// Screen keys match the values Home's cards pass to onSelect.
const SCREENS = ['home', 'case-studies', 'services', 'lemonaide-process']

function App() {
  const [screen, setScreen] = useState('home')

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
          <CaseStudies onBack={() => setScreen('home')} />
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
