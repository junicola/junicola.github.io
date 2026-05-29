import React from 'react'
import './ProjectCard.css'

export default function ProjectCard({ name, description, tech, url, image }) {
  return (
    <a
      href={url}
      onClick={() => gtag('event', 'click', { event_category: 'project', event_label: name })}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card glass"
    >
      <div className="project-card__thumb">
        <img src={image} alt={name} />
        <span className="project-card__ext-icon" aria-hidden>↗</span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__name">{name}</h3>
        <p className="project-card__description">{description}</p>
        <div className="project-card__tags">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}
