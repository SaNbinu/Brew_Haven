import './Header.css'

const navLinks = ['Home', 'Menu', 'About', 'Contact']

function Header() {
  return (
    <header className="header">
      <a href="#hero" className="header__logo">Brew Haven</a>

      <nav className="header__nav">
        <ul className="header__nav-list">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="header__nav-link">
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
