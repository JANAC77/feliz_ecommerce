import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaTwitter, FaHouzz } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    'Modular Kitchen', 'Wardrobes', 'Bedroom Design', 'Living Room',
    'Pooja Unit', 'TV Unit', 'Vanity', 'Dining Room'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <h2>FELIZ</h2>
              <span>INTERIORS</span>
            </div>
            <p>Creating spaces that inspire, designs that last. We transform houses into homes with our premium interior design solutions.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaPinterestP /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaHouzz /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link}><Link to="#">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p className="address">
              21/37, 1st floor, Anand Arcade,<br />
              Service Rd, Near Kalamandir,<br />
              Aswath Nagar, Marathahalli,<br />
              Bengaluru, Karnataka 560037
            </p>
            <a href="tel:+919036709253" className="phone">+91 90367 09253</a>
            <a href="mailto:info@felizinteriors.com" className="email">info@felizinteriors.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Feliz Interiors. All rights reserved.</p>
          <p className="design-by">Design with ❤️ by Feliz Studio</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer