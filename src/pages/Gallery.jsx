import React, { useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import './Gallery.css'

const projects = [
  { id: 1, title: 'Modular Kitchen', category: 'kitchen', image: '/images/image1.jpg' },
  { id: 2, title: 'Wooden & Creating Units', category: 'wooden', image: '/images/image2.jpg' },
  { id: 3, title: 'Study Tables', category: 'study', image: '/images/image3.jpg' },
  { id: 4, title: 'Cots', category: 'bed', image: '/images/image1.jpg' },
  { id: 5, title: 'TV Units', category: 'tv', image: '/images/image3.jpg' },
  { id: 6, title: 'Turn-Key Segment', category: 'turnkey', image: '/images/image2.jpg' },
  { id: 7, title: 'Wardrobe Design', category: 'wardrobe', image: '/images/image1.jpg' },
  { id: 8, title: 'Living Room', category: 'living', image: '/images/image2.jpg' }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', 'Kitchen', 'Bedroom', 'Living', 'Wardrobe', 'Study']

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase())

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image3.jpg" alt="Gallery Banner" />
        </div>
        <div className="banner-overlay"></div>
        <div className="container banner-content">
          <h1>Our Gallery</h1>
          <p>Explore our recently completed works</p>
        </div>
      </div>

      <div className="container">
        <div className="gallery-wrapper">
          <div className="gallery-header">
            <h2>RECENTLY COMPLETED WORKS</h2>
            <p>Adapt to the new changing and highly demanding interior furnishing segment.</p>
            <div className="gallery-highlights">
              <span>✓ State-of-the-art manufacturing facility</span>
              <span>✓ Well experienced management and key staff</span>
            </div>
          </div>
        
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="gallery-item" onClick={() => setSelectedImage(project)}>
                <img src={project.image} alt={project.title} />
                <div className="gallery-overlay">
                  <FaSearchPlus />
                  <p>{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Modal for Image Popup */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h4>{selectedImage.title}</h4>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery