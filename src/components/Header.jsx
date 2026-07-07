import { useState } from 'react'
import './Header.css'

const navLinks = ['Home', 'Menu', 'About', 'Contact']

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <a href="#hero" className="header__logo">Brew Haven</a>

      <button
        className={`header__burger ${menuOpen ? 'header__burger--open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`header__nav ${menuOpen ? 'header__nav--visible' : ''}`}>
        <ul className="header__nav-list">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="header__nav-link"
                onClick={handleNavClick}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button className="header__order-btn">Order Now</button>
    </header>
  )
}

export default Header
