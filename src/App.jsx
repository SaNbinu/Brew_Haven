import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Featured from './components/Featured.jsx'
import Menu from './components/Menu.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('brew-haven-theme') || 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light-theme', 'dark-theme')
    root.classList.add(theme === 'dark' ? 'dark-theme' : 'light-theme')
    localStorage.setItem('brew-haven-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleSelect = (index) => {
    if (index === selectedIndex) return
    setFading(true)
    setTimeout(() => {
      setSelectedIndex(index)
      setFading(false)
    }, 150)
  }

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Featured onSelect={handleSelect} />
        <Menu selectedIndex={selectedIndex} fading={fading} onSelect={handleSelect} />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default App
