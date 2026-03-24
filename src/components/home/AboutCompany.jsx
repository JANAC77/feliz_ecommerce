import React from 'react'
import './AboutCompany.css'

const AboutCompany = () => {
  return (
    <section className="about-company">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <img src="/images/image2.jpeg" alt="About Feliz" />
            <div className="experience-badge">
              <span>10+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="about-content">
            <h2>ABOUT COMPANY</h2>
            <h3>Welcome To FELIZ INTERIOR Designing Team</h3>
            <p>
              We are a team of designers who have been working together for over 10 years. We specialise in designing and manufacturing bespoke interior design solutions for our clients. Our team is made up of experienced designers who have a wealth of knowledge and expertise in the field of interior design.
            </p>
            <p>
              We are committed to providing our clients with the highest quality products and services. If you are looking for a designer to help you create the perfect space, then we would love to hear from you. Contact us today to find out how we can help you achieve your interior design goals.
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