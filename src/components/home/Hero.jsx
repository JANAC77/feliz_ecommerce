import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <video autoPlay muted loop playsInline className="hero-video">
          <source src="/images/hero.mp4" type="video/mp4" />

        </video>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>FELIZ</h1>
          <p className="hero-tagline">
         A highly creative, well-respected, and well-appreciated residential interior design studio specializing in transforming houses into dream homes. We combine innovative design with functional excellence to create spaces that reflect your personality and lifestyle.          </p>
        </div>
        <div className="hero-image">
          <img src="/images/hero1.jpg" alt="Luxury Interior Design" />
        </div>
      </div>
    </section>
  )
}

export default Hero