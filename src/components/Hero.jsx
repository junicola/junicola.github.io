import React from 'react'
import './Hero.css'
import IsometricPc from '../assets/IsometricPc'
import StarsIcon from '../assets/StarsIcon'
import StarIcon from '../assets/StarIcon'

export default function Hero({ hero }) {
  const STARS = [
    { Icon: StarIcon, top: '12%', left: '5%', scale: 1.6, delay: '0.7s', duration: '3.4s' },
    { Icon: StarsIcon, top: '15%', right: '8%', scale: 1, delay: '0.8s', duration: '2s' },
    { Icon: StarIcon, top: '60%', left: '30%', scale: 1.4, delay: '2s', duration: '2.5s' },
    { Icon: StarsIcon, top: '75%', right: '2%', scale: 1.2, delay: '3s', duration: '4s' },
    { Icon: StarIcon, top: '20%', left: '10%', scale: 1.4, delay: '0.5s', duration: '5s' },
    { Icon: StarIcon, top: '30%', left: '50%', scale: 1.4, delay: '0.8s', duration: '2.6s' },
    { Icon: StarsIcon, top: '79%', left: '10%', scale: 1, delay: '4s', duration: '2s' },
    { Icon: StarIcon, top: '68%', left: '45%', scale: 1.8, delay: '2s', duration: '3s' },
    { Icon: StarIcon, top: '40%', left: '35%', scale: 1.2, delay: '5s', duration: '2.4s' },
    { Icon: StarIcon, top: '20%', left: '55%', scale: 1.2, delay: '0.2s', duration: '3.5s' },
    { Icon: StarsIcon, top: '15%', left: '35%', scale: 1.2, delay: '0.7s', duration: '3s' },
    { Icon: StarsIcon, top: '85%', left: '50%', scale: 1.2, delay: '0.7s', duration: '3s' },
  ]

  return (
    <section id="hero" className="hero">
      <div className="hero__inner container">
        <div className="hero__text fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__name">{hero.name}</h1>
          <p className="hero__role">{hero.role}</p>
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--white">{hero.ctaProjects}</a>
            <a href="#contact" className="btn btn--pink">{hero.ctaContact}</a>
          </div>
        </div>
        <div className="hero__image fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="float">
            <IsometricPc />
          </div>
        </div>
      </div>
      <div className="hero__stars-overlay">
        {STARS.map(({ Icon, scale, delay, duration, ...pos }, i) => (
          <span key={i + '_star'} style={{
            position: 'absolute',
            transform: `scale(${scale})`,
            animation: `twinkle ${duration} ease-in-out ${delay} infinite`,
            ...pos
          }}>
            <Icon />
          </span>
        ))}
      </div>
    </section>
  )
}
