import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image2.jpg" alt="Modular Kitchen" />
            </div>
            <div className="service-content">
              <h3>MODULAR KITCHEN</h3>
              <p className="service-award">Interior Designers' Choice 2016 Winner</p>
              <p>Creative kits, Coloured TIPS, ceramic wall cabinets, wooden shelves.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image1.jpg" alt="Turn-Key Segment" />
            </div>
            <div className="service-content">
              <h3>Turn-Key Segment</h3>
              <p>Turn-key solutions for interiors</p>
              <ul>
                <li>Interior design services</li>
                <li>Interior design software</li>
                <li>Interior design tools</li>
                <li>Interior design materials</li>
                <li>Interior design accessories</li>
              </ul>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image3.jpg" alt="Office Segment" />
            </div>
            <div className="service-content">
              <h3>Office Segment</h3>
              <p>Modern office furniture & furnishings</p>
              <ul>
                <li>Furniture for businesses, DIY shops, home offices</li>
                <li>Office supplies</li>
                <li>Office equipment</li>
                <li>Office accessories</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services