import React, { useState } from 'react'
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Gallery.css'

const projects = [
  { id: 1, title: 'Modular Kitchen', category: 'kitchen', image: '/images/hero.jpeg' },
  { id: 2, title: 'Wooden Wardrobe', category: 'wardrobe', image: '/images/image1.avif' },
  { id: 3, title: 'Study Table with Bookshelf', category: 'study', image: '/images/image3.avif' },
  { id: 4, title: 'Luxury Bed with Storage', category: 'bedroom', image: '/images/image4.avif' },
  { id: 5, title: 'Wall Mounted TV Unit', category: 'living', image: '/images/image5.webp' },
  { id: 6, title: 'Complete Home Interior', category: 'turnkey', image: '/images/image7.webp' },
  { id: 7, title: 'Walk-in Wardrobe Design', category: 'wardrobe', image: '/images/image8.webp' },
  { id: 8, title: 'Modern Living Room', category: 'living', image: '/images/image9.webp' },
  { id: 9, title: 'Dining Table with Chairs', category: 'dining', image: '/images/image10.webp' },
  { id: 10, title: 'Home Office Desk', category: 'study', image: '/images/image11.webp' },
  { id: 11, title: 'Wall Mounted Bookshelf', category: 'storage', image: '/images/image12.webp' },
  { id: 12, title: 'Luxury Sofa Set', category: 'living', image: '/images/image13.webp' },
  { id: 13, title: 'Coffee Table Design', category: 'living', image: '/images/image14.webp' },
  { id: 14, title: 'Dressing Table with Mirror', category: 'bedroom', image: '/images/image15.webp' },
  { id: 15, title: 'Shoe Rack with Seating', category: 'storage', image: '/images/image16.webp' },
  { id: 16, title: 'Wall Paneling Design', category: 'wall', image: '/images/image18.webp' },
  { id: 17, title: 'False Ceiling with Lights', category: 'ceiling', image: '/images/image19.webp' },
  { id: 18, title: 'Kids Bedroom Design', category: 'bedroom', image: '/images/image20.webp' },
  { id: 19, title: 'Pooja Room Design', category: 'pooja', image: '/images/image21.jpeg' },
  { id: 20, title: 'Balcony Garden Design', category: 'outdoor', image: '/images/image22.jpeg' },
  { id: 21, title: 'Modular Kitchen with Island', category: 'kitchen', image: '/images/image23.jpeg' },
  { id: 22, title: 'Master Bedroom Suite', category: 'bedroom', image: '/images/image24.jpeg' },
  { id: 23, title: 'TV Unit with Storage', category: 'living', image: '/images/image25.jpeg' },
  { id: 24, title: 'Study Room Design', category: 'study', image: '/images/image26.jpeg' },
  { id: 25, title: 'Corner Wardrobe Design', category: 'wardrobe', image: '/images/image27.jpeg' },
  { id: 26, title: 'Dining Room Interior', category: 'dining', image: '/images/image28.jpeg' },
  { id: 27, title: 'Wall Art & Decor', category: 'wall', image: '/images/image29.jpeg' },
  { id: 28, title: 'False Ceiling Design', category: 'ceiling', image: '/images/image30.jpeg' },
  { id: 29, title: 'Shoe Cabinet Design', category: 'storage', image: '/images/image31.jpeg' },
  { id: 30, title: 'Office Workstation', category: 'office', image: '/images/image32.jpeg' },
  { id: 31, title: 'Traditional Pooja Unit', category: 'pooja', image: '/images/image33.jpeg' },
  { id: 32, title: 'Minimalist TV Unit', category: 'living', image: '/images/image34.jpeg' },
  { id: 33, title: 'Loft Bed Design', category: 'bedroom', image: '/images/image35.jpeg' },
  { id: 34, title: 'Wall Cabinet with Lights', category: 'storage', image: '/images/image36.jpeg' },
  { id: 35, title: 'Glass Door Wardrobe', category: 'wardrobe', image: '/images/image37.jpeg' },
  { id: 36, title: 'Corner Study Desk', category: 'study', image: '/images/image38.jpeg' }
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