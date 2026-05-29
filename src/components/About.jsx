import React from 'react'
import './About.css'
import PurpleBlur from '../assets/PurpleBlur'

export default function About({ about }) {
  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <h2 className="section-title">{about.title}</h2>
        <div className="about__inner">
          <p className="about__text">{about.text}</p>
          <div className="about__highlights">
            {about.highlights.map((item, i) => (
              <div key={i} className="about__highlight-card glass">
                <span className="about__highlight-emoji">{item.emoji}</span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="about__overlay-blur">
            <PurpleBlur />
          </div>
        </div>
      </div>
    </section>
  )
}
