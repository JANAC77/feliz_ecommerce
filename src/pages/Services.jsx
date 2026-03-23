import React from 'react'
import './Services.css'

const services = [
  { id: 1, title: 'Modular Kitchen', image: '/images/image1.jpg' },
  { id: 2, title: 'Wardrobes & Dressing Units', image: '/images/image2.jpg' },
  { id: 3, title: 'Study Tables', image: '/images/image3.jpg' },
  { id: 4, title: 'Cots', image: '/images/image3.jpg' },
  { id: 5, title: 'TV Units', image: '/images/image1.jpg' },
  { id: 6, title: 'Crockery Units', image: '/images/image2.jpg' },
  { id: 7, title: 'Turn-Key Segment', image: '/images/image2.jpg' },
  { id: 8, title: 'Office Segment', image: '/images/image1.jpg' }
]

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image1.jpg" alt="Services Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>Our Services</h1>
          <p>Premium interior design solutions for your dream home</p>
        </div>
      </div>

      {/* Services Section - One Heading with Multiple Images */}
      <div className="container">
        <div className="services-wrapper">
          {/* Single Heading */}
          <div className="services-header">
            <h2>What We Offer</h2>
            <p>Explore our comprehensive range of interior design services</p>
          </div>
          
          {/* Multiple Images Grid */}
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                </div>
                <h3>{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services