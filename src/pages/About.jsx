import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image3.jpg" alt="About Us Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>About Us</h1>
          <p>Welcome to the world of Mint Decors</p>
        </div>
      </div>

      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src="/images/image1.jpg" alt="Mint Decor Team" />
          </div>
          
          <div className="about-content">
            <p>
              We are in the interior designing and project execution services based at Kochi for more than one and a half decades. 
              We have successfully handled hundreds of well appreciated residential and commercial projects across Kerala.
            </p>
            <p>
              We observe and adapt the ever changing designing and interior furnishing trends into our system and provide services 
              to the extremely demanding furnishing sector. Our innovative skills and creative minds bring in well-defined 2D and 
              3D designs by understanding the tastes and needs of the clients.
            </p>
            <p>
              Effective utilization of the available space is the core in every interior design and we fully adhere to the principle.
            </p>
          </div>
          
          <div className="about-contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Thiruvananthapuram, Ernakulam</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <div>
                <h4>Call</h4>
                <p>+91 952237005, +91 9954062054</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Mail</h4>
                <p>mint.decorind@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About