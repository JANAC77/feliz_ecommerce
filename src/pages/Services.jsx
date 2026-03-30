import React, { useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import './Services.css'

const services = [
  {
    id: 1,
    title: 'Modular Kitchen',
    image: '/images/image53.jpg',
    description: 'Transform your kitchen into a modern, functional space with our premium modular kitchen solutions. We design and install custom kitchens that combine style, durability, and practicality.'
  },
  {
    id: 2,
    title: 'Wardrobes & Dressing Units',
    image: '/images/image54.jpg',
    description: 'Create organized and stylish storage solutions with our custom wardrobes and dressing units. Perfect for bedrooms and walk-in closets.'
  },
  {
    id: 3,
    title: 'Study Tables',
    image: '/images/image55.jpg',
    description: 'Enhance productivity with our ergonomic study tables designed for comfort and functionality. Perfect for home offices and study spaces.'
  },
  {
    id: 4,
    title: 'TV Units',
    image: '/images/image56.jpg',
    description: 'Make a statement in your living room with our custom TV units that blend functionality with contemporary design.'
  },
  {
    id: 5,
    title: 'Crockery Units',
    image: '/images/image57.jpg',
    description: 'Organize your kitchenware elegantly with our custom crockery units that combine functionality with aesthetic appeal.'
  },
  {
    id: 6,
    title: 'Turn-Key Segment',
    image: '/images/image58.jpeg',
    description: 'Experience complete home transformation with our comprehensive turn-key interior solutions. From concept to completion, we handle everything.'
  }
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
      
      {/* Simple Modal for Service Details */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content simple-service-modal" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p className="service-description">{selectedImage.description}</p>
            <button className="modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services