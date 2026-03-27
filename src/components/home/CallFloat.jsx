import React, { useState } from 'react'
import { FaPhoneAlt, FaTimes } from 'react-icons/fa'
import './CallFloat.css'

const CallFloat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleCall = () => {
    window.location.href = 'tel:+919620000929'
  }

  return (
    <div className="call-float">
      {!isOpen && (
        <button className="call-button" onClick={() => setIsOpen(true)}>
          <FaPhoneAlt /> 
        </button>
      )}
      
      {isOpen && (
        <div className="call-chat">
          <div className="call-chat-header">
            <div className="call-chat-header-info">
              <FaPhoneAlt className="call-icon" />
              <div>
                <strong>Feliz Interiors</strong>
                <p>Call us for free consultation</p>
              </div>
            </div>
            <button className="close-call-chat" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="call-chat-body">
            <div className="call-message">
              <p>Need help with your home interiors? Call us now for a free consultation!</p>
            </div>
            <button className="call-yes-btn" onClick={handleCall}>
              Call Now → +91 96200 00929
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CallFloat
