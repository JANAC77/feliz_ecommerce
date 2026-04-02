import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Service', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' }
  ]

  const homeInteriors = [
    'Modular Kitchen',
    'Wardrobes',
    'TV Units',
    'Crockery Units',
    'Living Room Interiors',
    'Bedroom Interiors',
    
    'Bathroom Interiors'
  ]

  const servicesList = [
    'Full Home Interiors',
    'Luxury Interiors',
    'Renovation Services',
    'Custom Furniture'
  ]

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          {/* Logo + Address */}
          <div className="footer-col">

            <div className="footer-logo">
              <img src="/images/image51.png" alt="Feliz Interiors" />
            </div>

            {/* ADDRESS */}
            <div className="footer-section">
              <h4>ADDRESS</h4>
              <p>
                1461, 5th Block, MS Ramaiah North City,<br />
                Near Manyata Tech Park, Nagavara,<br />
                Bengaluru, Karnataka 560077
              </p>
            </div>

            {/* PHONE */}
            <div className="footer-section">
              <h4>PHONE</h4>
              <p>+91 96200 00929</p>
            </div>

            {/* EMAIL */}
            <div className="footer-section">
              <h4>EMAIL</h4>
              <p>felizinteriors1@gmail.com</p>
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

          {/* Home Interiors */}
          <div className="footer-col">
            <h4>Home Interiors</h4>
            <ul>
              {homeInteriors.map(item => (
                <li key={item}>
                  <Link to="#">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul>
              {servicesList.map(item => (
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
          <p>© 2026 Feliz Interiors. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
