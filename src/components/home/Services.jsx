import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image41.jpg" alt="Modular Kitchen" />
            </div>
            <div className="service-content">
              <h3>Modular Interiors</h3> 
              <p>Functional kitchen, wardrobe and storage</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image40.jpeg" alt="Turn-Key Segment" />
            </div>
            <div className="service-content">
              <h3>Full Home Interiors</h3>
              <p>Turnkey interior solutions for your home</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img src="/images/image50.jpeg" alt="Office Segment" />
            </div>
            <div className="service-content">
              <h3>Luxury Interiors</h3>
              <p>Tailored interiors that redefine elegance</p>
            </div>
          </div>

           <div className="service-card">
            <div className="service-image">
              <img src="/images/image52.png" alt="Office Segment" />
            </div>
            <div className="service-content">
              <h3>Renovations</h3>
              <p>Expert solutions to upgrade your home</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

