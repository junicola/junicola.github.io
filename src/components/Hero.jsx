import React from 'react'
import './Hero.css'
import pcImage from '../assets/hero-pc.png';

export default function Hero({ hero }) {
  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__text fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__name">{hero.name}</h1>
          <p className="hero__role">{hero.role}</p>
          <div className="hero__ctas">
            <a href="#projetos" className="btn btn--white">{hero.ctaProjects}</a>
            <a href="#contato" className="btn btn--pink">{hero.ctaContact}</a>
          </div>
        </div>

        <div className="hero__image fade-up" style={{ animationDelay: '0.5s' }}>
          <img class="float" src={pcImage} alt={hero.imageAlt} />
        </div>
      </div>
    </section>
  )
}
