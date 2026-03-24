import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const homeSegment = [
    'Modular Kitchen',
    'Wardrobes',
    'Wall Units',
    'Crockery Units',
    'Living room furniture',
    'Loft Coverings',
    'Dressing Units'
  ]

  const officeSegment = [
    'Modular Workstations',
    'Furniture & Fixtures for showrooms',
    'Filling Storage Units',
    'Conference Tables'
  ]

  const turnKeySegment = [
    'Turnkey Solutions for Showrooms',
    'Complete Furniture and fixtures',
    'Corporate and home segments'
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Address Section with Logo */}
          <div className="footer-col">
            <div className="footer-logo">
              <img 
                src="/images/logo.png" 
                alt="Mint Decor Logo" 
                className="footer-logo-img"
              />
              <div className="footer-logo-text">
                <h2>FELIZ</h2>
                <span>INTERIORS</span>
              </div>
            </div>
            <div className="address-section">
              <h4>ADDRESS</h4>
              <p>1461, 5th Block, MS Ramaiah North City,<br />
              Manayata Tech Park, Nagavara,<br />
              Bengaluru, Karnataka 560077</p>
            </div>
            <div className="contact-section">
              <h4>PHONE</h4>
              <p>+91 96200 00929</p>
            </div>
            <div className="contact-section">
              <h4>EMAIL</h4>
              <p>felizinteriors@gmail.com<br />marketing.feliz@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Segment */}
          <div className="footer-col">
            <h4>Home Segment</h4>
            <ul>
              {homeSegment.map(item => (
                <li key={item}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Segment */}
          <div className="footer-col">
            <h4>Office Segment</h4>
            <ul>
              {officeSegment.map(item => (
                <li key={item}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Turn-Key Segment */}
          <div className="footer-col">
            <h4>Turn-Key Segment</h4>
            <ul>
              {turnKeySegment.map(item => (
                <li key={item}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2026 All Rights Reserved by Mintdecor.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer