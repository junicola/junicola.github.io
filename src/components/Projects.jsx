import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects section-padding">
      <div className="container">
        <div className="projects__header">
          <h2 className="section-title">{projects.title}</h2>
          <a href="https://github.com/junicola" className="projects__see-all" target="_blank">
            {projects.seeAll} <span>→</span>
          </a>
        </div>

        <div className="projects__grid">
          {projects.items.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
