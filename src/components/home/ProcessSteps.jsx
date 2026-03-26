import React, { useState } from 'react'
import './ProcessSteps.css'
import { Link } from 'react-router-dom'
const steps = [
  {
    number: '1',
    title: 'Meet Your Designer',
    description: 'Share your ideas and floor plan to receive personalised 3D designs and an instant quote.',
    image: '/images/step_1.png'
  },
  {
    number: '2',
    title: 'Design Approval',
    description: 'Review and approve your custom 3D designs with our expert designers.',
    image: '/images/step_2.png'
  },
  {
    number: '3',
    title: 'Material Selection',
    description: 'Choose from premium finishes, materials, and color options.',
    image: '/images/step_3.png'
  },
  {
    number: '4',
    title: 'Factory Manufacturing',
    description: 'Your furniture is crafted in our advanced manufacturing unit.',
    image: '/images/step_4.png'
  },
  {
    number: '5',
    title: 'Professional Installation',
    description: 'Our team installs everything perfectly in your home.',
    image: '/images/step_5.png'
  },
  {
    number: '6',
    title: 'Final Handover',
    description: 'Move into your dream home with complete satisfaction.',
    image: '/images/step_6.png'
  }
]

const ProcessSteps = () => {

  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="process-steps">
      <div className="container">

        {/* HEADER */}
        <div className="steps-header">
          <h2>From Design to Move-In</h2>
        </div>

        {/* STEP LINE */}
        <div className="steps-line">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-circle ${index === activeStep ? 'active' : ''}`}
              onClick={() => setActiveStep(index)}
            >
              {step.number}
            </div>
          ))}
        </div>

        {/* CONTENT SECTION */}
        <div className="steps-content">

          {/* LEFT TEXT */}
          <div className="steps-text">
            <h3>{steps[activeStep].title}</h3>
            <p>{steps[activeStep].description}</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="steps-image">
            <img 
              src={steps[activeStep].image} 
              alt={steps[activeStep].title} 
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="steps-footer">
        <Link to="/contact">
          <button className="book-btn">
            BOOK FREE DESIGN SESSION
          </button>
          </Link>
        </div>
        

      </div>
    </section>
  )
}

export default ProcessSteps
