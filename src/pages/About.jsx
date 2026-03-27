import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image17.webp" alt="About Us Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>About Us</h1>
          <p>Welcome to the world of Feliz</p>
        </div>
      </div>

      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src="/images/hero.jpeg" alt="Mint Decor Team" />
          </div>
          
          <div className="about-content">
             <p>
              Feliz Interiors is a premier residential interior design based in Bangalore, 
              dedicated to creating beautiful, functional homes that reflect our clients' personalities 
              and lifestyles. With over 10 years of experience, we've transformed over 470+ homes across Bangalore.
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
          </div>
          
          <div className="about-contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Nagavara, Bengaluru</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Call</h4>
                <p>+91 96200 00929</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Mail</h4>
                <p>felizinteriors@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About