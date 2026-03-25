import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", label: "Home", end: true },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Service" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header className={`custom-header ${isScrolled ? "header-scrolled" : ""}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <p>
      Welcome to Feliz Interiors - Premium Residential Interior Designers in Bangalore, <span>India</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container header-row">
          {/* Logo */}
          <Link to="/" className="logo-box">
            <img src="/images/logo.png" alt="logo" />
            <h2 className="company-name">
              FELIZ <span>INTERIORS</span>
            </h2>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop Navigation */}
          <nav className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Empty div for balance */}
          <div className="empty-space"></div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="contact-bar">
        <div className="container contact-row">
          <div className="contact-item">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Nagavara, Bengaluru</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <FaPhone className="rotate-icon" />
            <div>
              <h4>Call</h4>
              <p>+91 96200 00929</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-item">
            <FaEnvelope />
            <div>
              <h4>Mail</h4>
              <p>felizinteriors@gmail.com</p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
