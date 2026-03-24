import React, { useState } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import './Projects.css'

const projects = [
  { id: 1, title: 'Modular Kitchen', category: 'kitchen', image: '/images/image3.jpeg' },
  { id: 2, title: 'Wooden & Creating Units', category: 'wooden', image: '/images/image4.jpeg' },
  { id: 3, title: 'Study Tables', category: 'study', image: '/images/image10.jpeg' },
  { id: 4, title: 'Cots', category: 'bed', image: '/images/image7.jpeg' },
  { id: 5, title: 'TV Units', category: 'tv', image: '/images/image8.jpeg' },
  { id: 6, title: 'Turn-Key Segment', category: 'turnkey', image: '/images/image13.jpeg' }
]

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="projects">
      <div className="container">
        <div className="section-header">
          <h2>PROJECT</h2>
          <h3>RECENTLY COMPLETED WORKS</h3>
          <p>Adapt to the new changing and highly demanding interior furnishing segment.</p>
          <div className="project-highlights">
            <span>State-of-the-art manufacturing facility.</span>
            <span>Well experienced management and key staff.</span>
          </div>
        </div>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-item" onClick={() => setSelectedImage(project)}>
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <FaSearchPlus />
                <p>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <h4>{selectedImage.title}</h4>
            <button className="modal-close" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects