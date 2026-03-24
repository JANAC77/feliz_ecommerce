import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will get back to you soon.')
    setFormData({ name: '', email: '', address: '', message: '' })
  }

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image2.jpeg" alt="Contact Us Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our design experts</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Us</h2>
              
              <div className="info-card">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Address</h4>
                  <p>1461, 5th Block, MS Ramaiah North City,<br />Manayata Tech Park, Nagavara,<br />Bengaluru, Karnataka 560077</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><FaPhone className="rotate-icon"/></div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 96200 00929</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>felizinteriors@gmail.com<br />feliz@email.feliz@gmail.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><FaClock /></div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 9:30 AM - 7:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Address / Residential/Business"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="5"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
          
          {/* Google Map */}
          <div className="map-container">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7773.771343185821!2d77.61783478392046!3d13.042948608424304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1461%2C%205th%20Block%2C%20MS%20Ramaiah%20North%20City%2C%20Manayata%20Tech%20Park%2C%20Nagavara%2C%20Bengaluru%2C%20Karnataka%20560077!5e0!3m2!1sen!2sin!4v1774341810535!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact