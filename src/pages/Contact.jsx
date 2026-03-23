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
          <img src="/images/image2.jpg" alt="Contact Us Banner" />
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
                  <p>Mint Decor, No.13/221,<br />Kokkappilly P.O<br />Thiruvananthapuram, Kerala 695205</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><FaPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <p>Sales: 7902220704<br />Support: 9995406254</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email</h4>
                  <p>mintdecorindia@gmail.com<br />mint@email.mintdecor@gmail.com</p>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.7!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
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