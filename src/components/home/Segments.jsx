import React from 'react'
import './Segments.css'

const segments = [
  {
    title: 'Home Segment',
    features: ['Modular Kitchen', 'Wardrobes', 'Wall Units', 'Crockery Units', 'Living room furniture', 'Loft Coverings', 'Dressing Units']
  },
  {
    title: 'Office Segment',
    features: ['Modular Workstations', 'Furniture & Fixtures for showrooms', 'Filling Storage Units', 'Conference Tables']
  },
  {
    title: 'Turn-Key Segment',
    features: ['Turnkey Solutions for Showrooms', 'Complete Furniture and fixtures', 'Corporate and home segments']
  }
]

const Segments = () => {
  return (
    <section className="segments">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">OUR EXPERTISE</span>
          <h2>Complete Interior Solutions</h2>
          <p>Serving homes, offices, and turnkey projects with excellence</p>
        </div>
        <div className="segments-grid">
          {segments.map((segment, index) => (
            <div key={index} className="segment-card">
              <h3>{segment.title}</h3>
              <ul>
                {segment.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Segments