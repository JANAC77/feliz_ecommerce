import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="/images/image1.jpg" alt="Hero Background" />
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1>FELIZ</h1>
          <p className="hero-tagline">
            A highly creative, well-respected and well appreciated interior furnishing manufacturers and projects association Company
          </p>
          <button className="special-offer-btn">Get Special Offer →</button>
        </div>
        <div className="hero-image">
          <img src="/images/image1.jpg" alt="Luxury Interior Design" />
        </div>
      </div>
    </section>
  )
}

export default Hero