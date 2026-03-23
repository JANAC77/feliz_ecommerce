import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone, FaBars, FaTimes, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`main-header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <img 
            src="/images/logo.png" 
            alt="Feliz Interiors Logo" 
            className="logo-image"
          />
          <div className="logo-text">
            <h2>FELIZ</h2>
            <span>INTERIORS</span>
          </div>
        </Link>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          {navLinks.map(link => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Address & Contact Bar - Below Navigation */}
      <div className="address-bar">
        <div className="container address-container">
          <div className="address-info">
            <span><FaMapMarkerAlt /> Thiruvaniyur, Ernakulam</span>
            <span><FaPhone /> 7902220705, 9995406254</span>
            <span><FaEnvelope /> mintdecorindia@gmail.com</span>
          </div>
          <div className="tagline">
            <span>Top Interior designers in Kerala</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header