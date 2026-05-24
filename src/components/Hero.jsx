import React from 'react'
import './Hero.css'
import IsometricPc from '../assets/IsometricPc'
import StarsIcon from '../assets/StarsIcon'
import StarIcon from '../assets/StarIcon'

export default function Hero({ hero }) {
  const STARS = [
    { Icon: StarIcon, top: '10%', left: '5%', scale: 1.6, opacity: 0.5 },
    { Icon: StarsIcon, top: '15%', right: '8%', scale: 1, opacity: 0.8 },
    { Icon: StarIcon, top: '60%', left: '30%', scale: 1.4, opacity: 0.3 },
    { Icon: StarsIcon, top: '75%', right: '2%', scale: 1.2, opacity: 0.6 },
    { Icon: StarIcon, top: '20%', left: '10%', scale: 1.4, opacity: 0.8 },
    { Icon: StarIcon, top: '30%', left: '50%', scale: 1.4, opacity: 0.5 },
    { Icon: StarsIcon, top: '79%', left: '10%', scale: 1, opacity: 0.6 },
    { Icon: StarIcon, top: '68%', left: '45%', scale: 1.8, opacity: 0.8 },
    { Icon: StarIcon, top: '40%', left: '35%', scale: 1.2, opacity: 0.3 },
    { Icon: StarIcon, top: '20%', left: '55%', scale: 1.2, opacity: 0.3 },
    { Icon: StarsIcon, top: '15%', left: '35%', scale: 1.2, opacity: 0.6 },
  ]

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
          <div className="float">
            <IsometricPc />
          </div>
        </div>
      </div>
      <div className="hero__stars-overlay">
        {STARS.map(({ Icon, scale, opacity, ...pos }, i) => (
          <span key={i} style={{ position: 'absolute', ...pos, transform: `scale(${scale})`, opacity }}>
            <Icon />
          </span>
        ))}
      </div>
    </section>
  )
}
