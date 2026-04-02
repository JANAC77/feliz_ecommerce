import React, { useState } from 'react'
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Gallery.css'

const projects = [
 
  { id: 1, title: 'Pooja Room Design', category: 'pooja', image: '/images/image21.jpeg' },
  { id: 2, title: 'Balcony Garden Design', category: 'outdoor', image: '/images/image22.jpeg' },
  { id: 3, title: 'Modular Kitchen with Island', category: 'kitchen', image: '/images/image23.jpeg' },
  { id: 4, title: 'Master Bedroom Suite', category: 'bedroom', image: '/images/image24.jpeg' },
  { id: 5, title: 'TV Unit with Storage', category: 'living', image: '/images/image25.jpeg' },
  { id: 6, title: 'Study Room Design', category: 'study', image: '/images/image26.jpeg' },
  { id: 7, title: 'Corner Wardrobe Design', category: 'wardrobe', image: '/images/image27.jpeg' },
  { id: 8, title: 'Dining Room Interior', category: 'dining', image: '/images/image28.jpeg' },
  { id: 9, title: 'Wall Art & Decor', category: 'wall', image: '/images/image29.jpeg' },
  { id: 10, title: 'False Ceiling Design', category: 'ceiling', image: '/images/image30.jpeg' },
  { id: 11, title: 'Shoe Cabinet Design', category: 'storage', image: '/images/image31.jpeg' },
  { id: 12, title: 'Office Workstation', category: 'office', image: '/images/image32.jpeg' },
  { id: 13, title: 'Traditional Pooja Unit', category: 'pooja', image: '/images/image33.jpeg' },
  { id: 14, title: 'Minimalist TV Unit', category: 'living', image: '/images/image34.jpeg' },
  { id: 15, title: 'Loft Bed Design', category: 'bedroom', image: '/images/image35.jpeg' },
  { id: 16, title: 'Wall Cabinet with Lights', category: 'storage', image: '/images/image36.jpeg' },
  { id: 17, title: 'Glass Door Wardrobe', category: 'wardrobe', image: '/images/image37.jpeg' },
  { id: 18, title: 'Corner Study Desk', category: 'study', image: '/images/image38.jpeg' },
  { id: 19, title: 'Bathroom Interior 1', category: 'bathroom', image: '/images/image59.jpeg' },
  { id: 20, title: 'Bathroom Interior 2', category: 'bathroom', image: '/images/image60.jpeg' },
  { id: 21, title: 'Bathroom Interior 3', category: 'bathroom', image: '/images/image61.jpeg' },
  { id: 22, title: 'Bathroom Interior 4', category: 'bathroom', image: '/images/image62.jpeg' },
  { id: 23, title: 'Bathroom Interior 5', category: 'bathroom', image: '/images/image63.jpeg' },
  { id: 24, title: 'Bathroom Interior 6', category: 'bathroom', image: '/images/image64.jpeg' },
  { id: 25, title: 'Bathroom Interior 7', category: 'bathroom', image: '/images/image65.jpeg' },
  { id: 26, title: 'Bathroom Interior 8', category: 'bathroom', image: '/images/image66.jpeg' },
  { id: 27, title: 'Bathroom Interior 9', category: 'bathroom', image: '/images/image67.jpeg' }
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
          <img src="/images/image5.webp" alt="Gallery Banner" />
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
            <h2>RECENTLY COMPLETED HOMES</h2>
            <p>Beautiful residential interiors designed with love and care</p>
            <div className="gallery-highlights">
              <span>✓ 1000+ Happy Homes</span>
              <span>✓ Premium Quality Materials</span>
              <span>✓ Expert Design Team</span>
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
                <img src={project.image} alt="Project image" />
                <div className="gallery-overlay">
                  <FaSearchPlus />
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
            <img src={selectedImage.image} alt="Project image" />
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery