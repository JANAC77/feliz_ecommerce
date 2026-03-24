import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="custom-header">
      {/* Top Bar */}
      <div className="top-bar">
        <p>
          Welcome Feliz Interiors, Based On <span>India</span>
        </p>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container header-row">
          <div className="logo-box">
            <img src="/images/logo.png" alt="logo" />
            <h2 className="company-name">
              FELIZ <span>INTERIORS</span>
            </h2>
          </div>

          <nav className="nav-menu">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Service</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </nav>

          {/* EMPTY RIGHT SPACE (for balance like Mint UI) */}
          <div></div>
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
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
