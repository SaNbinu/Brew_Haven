import { useState, useEffect, useRef, useCallback } from 'react'
import './Header.css'

const navLinks = ['Home', 'Menu', 'About', 'Contact']

function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerRef = useRef(null)

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    burgerRef.current?.focus()
  }, [])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [menuOpen, closeMenu])

  return (
    <header className="header">
      <div className="header__container">
        <a href="#hero" className="header__logo">Brew Haven</a>

        <button
          ref={burgerRef}
          className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`header__nav ${menuOpen ? 'header__nav--visible' : ''}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeMenu()
          }}
        >
          <div className="header__nav-panel">
            <button
              className="header__nav-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <ul className="header__nav-list">
              {navLinks.map((link) => (
                <li key={link} className="header__nav-item">
                  <a
                    href={link === 'Home' ? '#hero' : `#${link.toLowerCase()}`}
                    className="header__nav-link"
                    onClick={closeMenu}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="header__theme-btn header__theme-btn--mobile"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

          </div>
        </nav>

        <div className="header__actions">
          <a href="#contact" className="header__order-btn">Order Now</a>
          <button
            className="header__theme-btn header__theme-btn--desktop"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
