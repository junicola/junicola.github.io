import React from 'react'
import './Experience.css'

export default function Experience({ experience }) {
  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <h2 className="section-title">{experience.title}</h2>

        <div className="experience__timeline">
          {experience.items.map((item, i) => (
            <div key={i} className="experience__item">
              {/* Left: period */}
              <div className="experience__period">
                <span>{item.period}</span>
                <div className="experience__dot" />
              </div>

              {/* Right: card */}
              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <span
                      className="experience__company"
                      style={{ color: item.companyColor }}
                    >
                      {item.company}
                    </span>
                  </div>
                  <span className="experience__date">{item.dateRange}</span>
                </div>

                <p className="experience__description">{item.description}</p>

                <div className="experience__bottom">
                  <ul className="experience__highlights">
                    {item.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                  <div className="experience__tags">
                    {item.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Timeline vertical line */}
          <div className="experience__line" />
        </div>
      </div>
    </section>
  )
}
