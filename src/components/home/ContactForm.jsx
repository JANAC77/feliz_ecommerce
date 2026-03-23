import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedIn: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We will get back to you within 24 hours.`)
    setFormData({ name: '', email: '', interestedIn: '' })
  }

  const services = [
    'Modular Kitchen',
    'Wardrobes & Dressing',
    'Study Tables',
    'Cots & Beds',
    'TV Units',
    'Turn-Key Segment',
    'Office Segment',
    'Complete Home Interior'
  ]

  return (
    <section className="contact-form-section">
      <div className="container">
        <div className="form-wrapper">
          <div className="form-header">
            <h2>PROJECTS</h2>
            <h3>HOW CAN WE HELP YOU?</h3>
          </div>
          
          <div className="form-container">
            <div className="form-card">
              <h4>Make Appointment</h4>
              <p>Leave your information here and get reply from our expert in 24 hours, don't hesitate to ask.</p>
              
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <select
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({...formData, interestedIn: e.target.value})}
                    required
                  >
                    <option value="">Interested in</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>
          
         
        </div>
      </div>
  
    </section>
  )
}

export default ContactForm