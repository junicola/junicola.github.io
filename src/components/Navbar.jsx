import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar({ nav, lang, onToggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const sectionIds = ['hero', 'about', 'projects', 'experience', 'contact']

  return (
    <header className="navbar glass">
      <div className="navbar__inner">
        <a href="#hero" className="navbar__logo">
          <img src="/code-logo.png" alt={nav.logoAlt} />
        </a>
        <nav className="navbar__links">
          {nav.links.map((link, i) => (
            <a key={link} href={`#${sectionIds[i]}`} className="navbar__link">
              {link}
            </a>
          ))}
        </nav>
        <div className="navbar__right">
          <button className="navbar__lang" onClick={onToggleLang} data-lang={lang} aria-label="Toggle language">
            <span className={lang === 'pt' ? 'active' : ''}>PT</span>
            <div className="navbar__lang-thumb" />
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
          </button>
          <button
            className={`navbar__burger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav className={`navbar__drawer${menuOpen ? ' open' : ''}`}>
        {nav.links.map((link, i) => (
          <a
            key={link}
            href={`#${sectionIds[i]}`}
            className="navbar__drawer-link"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}
