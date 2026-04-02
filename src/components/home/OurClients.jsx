import React from 'react'
import './OurClients.css'

const clients = [
  { id: 1, image: '/images/client1.jpeg' },
  { id: 2, image: '/images/client2.jpeg' },
  { id: 3, image: '/images/client3.jpeg' },
  { id: 4, image: '/images/client4.jpeg' },
  { id: 5, image: '/images/client5.jpeg' },
  { id: 6, image: '/images/client6.jpeg' },
  { id: 7, image: '/images/client7.jpeg' },
  { id: 8, image: '/images/client8.jpeg' }
  ]

const OurClients = () => {
  return (
    <section className="our-clients">
      <div className="container">
        <div className="section-header">
          <h2>Our Clients</h2>
        </div>

        <div className="clients-scroll">
          <div className="scroll-track">
            {/* First set of client images */}
            {clients.map((client) => (
              <div key={client.id} className="client-image">
                <img src={client.image} alt="Client" />
              </div>
            ))}
            {/* Duplicate for seamless scrolling */}
            {clients.map((client) => (
              <div key={`dup-${client.id}`} className="client-image">
                <img src={client.image} alt="Client" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurClients