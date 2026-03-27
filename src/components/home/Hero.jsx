import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/hero.jpeg" alt="Hero Background" />
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>FELIZ</h1>
          <p className="hero-tagline">
         A highly creative, well-respected, and well-appreciated residential interior design studio specializing in transforming houses into dream homes. We combine innovative design with functional excellence to create spaces that reflect your personality and lifestyle.          </p>
        </div>
        <div className="hero-image">
          <img src="/images/image39.jpeg" alt="Luxury Interior Design" />
        </div>
      </div>
    </section>
  )
}

export default Hero