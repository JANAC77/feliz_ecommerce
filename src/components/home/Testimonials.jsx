import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Vijayan and Family',
    location: 'Pathathittam, Ennakkulam',
    text: 'Very professional interior designers. The team was very prompt and passionate in understanding our needs and delivering on their promise. It was the best that choosing this decor was the best decision we took, while building our house.',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>OUR CUSTOMER WORDS</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <div className="stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials