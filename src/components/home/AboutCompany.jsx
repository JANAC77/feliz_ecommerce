import React from 'react'
import './AboutCompany.css'

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/images/image2.avif" alt="About Feliz" />
            <div className="experience-badge">
              <span>10+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="about-content">
            <h2>ABOUT COMPANY</h2>
            <h3>Welcome To FELIZ INTERIOR Designing Team</h3>
            <p>
              Feliz Interiors is a premier residential interior design studio based in Bangalore, 
              dedicated to creating beautiful, functional homes that reflect our clients' personalities 
              and lifestyles. With over 10 years of experience, we've transformed over 1000 homes across Bangalore.
            </p>
            <p>
              We believe that every home has a story to tell. Our team of expert designers works closely with 
              you to understand your vision, needs, and preferences, bringing your dream home to life with 
              precision and creativity.
            </p>
            <p>
              From concept to completion, we handle every aspect of your home interior project - space planning, 
              material selection, furniture design, lighting, and project management. We use only premium quality 
              materials and work with trusted partners to ensure your home is built to last.
            </p>
            <div className="expertise-badge">
              <span>EXPERIENCED & WELL KNOWLEDGEABLE INTERIOR DESIGNERS.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany