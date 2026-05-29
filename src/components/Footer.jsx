import React from 'react'
import './Footer.css'

export default function Footer({ text }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__divider" />
        <p className="footer__text">{text}</p>
      </div>
    </footer>
  )
}
