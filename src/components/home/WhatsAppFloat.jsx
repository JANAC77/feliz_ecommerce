import React, { useState } from 'react'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'
import './WhatsAppFloat.css'

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/919036709253?text=Hi! I would like to schedule a FREE site visit for my home interior design.', '_blank')
  }

  return (
    <div className="whatsapp-float">
      {!isOpen && (
        <button className="whatsapp-button" onClick={() => setIsOpen(true)}>
          <FaWhatsapp />
        </button>
      )}
      
      {isOpen && (
        <div className="whatsapp-chat">
          <div className="chat-header">
            <div className="chat-header-info">
              <FaWhatsapp className="whatsapp-icon" />
              <div>
                <strong>Feliz Interiors</strong>
                <p>Typically replies within minutes</p>
              </div>
            </div>
            <button className="close-chat" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message">
              <p>Can I ask you a few quick questions to schedule a FREE site visit?</p>
            </div>
            <button className="chat-yes-btn" onClick={handleWhatsApp}>
              Yes, sure!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WhatsAppFloat