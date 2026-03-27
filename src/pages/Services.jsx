import React, { useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import './Services.css'

const services = [
  { id: 1, title: 'Modular Kitchen', image: '/images/image1.avif' },
  { id: 2, title: 'Wardrobes & Dressing Units', image: '/images/image42.jpeg' },
  { id: 3, title: 'Study Tables', image: '/images/image43.jpeg' },
  { id: 4, title: 'TV Units', image: '/images/image5.webp' },
  { id: 5, title: 'Crockery Units', image: '/images/image49.jpeg' },
  { id: 6, title: 'Turn-Key Segment', image: '/images/image48.jpeg' }
]

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (service) => {
    setSelectedImage(service)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  return (
    <div className="services-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image13.webp" alt="Services Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>Our Services</h1>
          <p>Premium interior design solutions for your dream home</p>
        </div>
      </div>

      <div className="container">
        <div className="services-wrapper">
          <div className="services-header">
            <h2>WHAT WE OFFER</h2>
            <p>Explore our comprehensive range of interior design services</p>
            <div className="services-highlights">
              <span>✓ Premium quality materials</span>
              <span>✓ Expert craftsmanship</span>
            </div>
          </div>
          
          {/* Services Grid with Visible Titles */}
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="service-item" 
                onClick={() => openModal(service)}
              >
                <div className="service-image-container">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <FaSearchPlus />
                    <p>Click to view</p>
                  </div>
                </div>
                <h3 className="service-title">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Modal for Image Popup - Same as Gallery */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h4>{selectedImage.title}</h4>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services