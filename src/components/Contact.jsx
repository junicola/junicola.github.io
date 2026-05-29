import React from 'react'
import './Contact.css'
import LinkedinIcon from '../assets/LinkedinIcon'
import EmailIcon from '../assets/EmailIcon'
import GithubIcon from '../assets/GithubIcon'
import PurpleBlur from '../assets/PurpleBlur'

const icons = { linkedin: LinkedinIcon, email: EmailIcon, github: GithubIcon }

export default function Contact({ contact }) {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <h2 className="section-title">{contact.title}</h2>
            {contact.subtitle.split('\n').map((line, i) => (
              <p key={i} className="contact__subtitle">{line}</p>
            ))}
            <p className="contact__closing">{contact.closing}</p>
          </div>
          <div className="contact__overlay-blur">
            <PurpleBlur />
          </div>
          <div className="contact__links">
            {contact.links.map((link) => {
              const Icon = icons[link.icon]
              return (
                <a
                  key={link.icon}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link-card"
                >
                  <div className="contact__link-icon">
                    {Icon && <Icon />}
                  </div>
                  <div className="contact__link-info">
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-handle">{link.handle}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
