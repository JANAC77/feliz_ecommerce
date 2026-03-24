import React, { useState } from 'react'
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Gallery.css'

const projects = [
  { id: 1, title: 'Modular Kitchen', category: 'kitchen', image: '/images/hero.jpeg' },
  { id: 2, title: 'Wooden & Creating Units', category: 'wooden', image: '/images/image2.jpeg' },
  { id: 3, title: 'Study Tables', category: 'study', image: '/images/image3.jpeg' },
  { id: 4, title: 'Cots', category: 'bed', image: '/images/image4.jpeg' },
  { id: 5, title: 'TV Units', category: 'tv', image: '/images/image5.jpeg' },
  { id: 6, title: 'Turn-Key Segment', category: 'turnkey', image: '/images/image7.jpeg' },
  { id: 7, title: 'Wardrobe Design', category: 'wardrobe', image: '/images/image8.jpeg' },
  { id: 8, title: 'Living Room', category: 'living', image: '/images/image9.jpeg' },
  { id: 9, title: 'Dining Table', category: 'dining', image: '/images/image10.jpeg' },
  { id: 10, title: 'Office Desk', category: 'office', image: '/images/image11.jpeg' },
  { id: 11, title: 'Bookshelf', category: 'storage', image: '/images/image12.jpeg' },
  { id: 12, title: 'Sofa Set', category: 'living', image: '/images/image13.jpeg' },
  { id: 13, title: 'Coffee Table', category: 'living', image: '/images/image14.jpeg' },
  { id: 14, title: 'Dressing Table', category: 'bedroom', image: '/images/image15.jpeg' },
  { id: 15, title: 'Shoe Rack', category: 'storage', image: '/images/image16.jpeg' },
  { id: 16, title: 'Wall Paneling', category: 'wall', image: '/images/image18.jpeg' },
  { id: 17, title: 'False Ceiling', category: 'ceiling', image: '/images/image19.jpeg' }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Number of items per page

  // Pagination logic
  const totalPages = Math.ceil(projects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of gallery when changing page
    window.scrollTo({
      top: document.querySelector('.gallery-wrapper').offsetTop - 100,
      behavior: 'smooth'
    })
  }

  // Generate page numbers
  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i)
      } else {
        pages.push(1)
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i)
        pages.push('...')
        pages.push(totalPages)
      }
    }
    return pages
  }

  return (
    <div className="gallery-page">
      {/* Banner Section */}
      <div className="page-banner">
        <div className="banner-bg">
          <img src="/images/image3.jpeg" alt="Gallery Banner" />
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

          {/* Items Counter */}
          <div className="gallery-counter">
            Showing {startIndex + 1} - {Math.min(endIndex, projects.length)} of {projects.length} projects
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid">
            {currentProjects.map(project => (
              <div key={project.id} className="gallery-item" onClick={() => setSelectedImage(project)}>
                <img src={project.image} alt={project.title} />
                <div className="gallery-overlay">
                  <FaSearchPlus />
                  <p>{project.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className="pagination-btn prev"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <FaChevronLeft /> Prev
              </button>
              
              <div className="pagination-numbers">
                {getPageNumbers().map((page, index) => (
                  <button
                    key={index}
                    className={`pagination-number ${page === currentPage ? 'active' : ''} ${page === '...' ? 'dots' : ''}`}
                    onClick={() => page !== '...' && handlePageChange(page)}
                    disabled={page === '...'}
                  >
                    {page}
                  </button>
                ))}
              </div>
              
              <button
                className="pagination-btn next"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next <FaChevronRight />
              </button>
            </div>
          )}
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