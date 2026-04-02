import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaSpinner, FaCheckCircle } from 'react-icons/fa'
import './ContactForm.css'

// Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interestedIn: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        interestedIn: formData.interestedIn,
        time: new Date().toLocaleString(),
        to_email: 'mintdecorindia@gmail.com'
      }

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus({
          type: 'success',
          message: `Thank you ${formData.name}! We will get back to you within 24 hours.`
        })
        // Reset form
        setFormData({ name: '', email: '', interestedIn: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' })
        }, 5000)
      }
    } catch (error) {
      console.error('Email send error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Something went wrong. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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
              
              {/* Status Message */}
              {submitStatus.message && (
                <div className={`status-message ${submitStatus.type}`}>
                  {submitStatus.type === 'success' && <FaCheckCircle />}
                  {submitStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <select
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Interested in</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="spinner" /> Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm