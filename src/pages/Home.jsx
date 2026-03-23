import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import AboutCompany from '../components/home/AboutCompany'
import Projects from '../components/home/Projects'
import Testimonials from '../components/home/Testimonials'
import ContactForm from '../components/home/ContactForm'
import WhatsAppFloat from '../components/home/WhatsAppFloat'

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutCompany />
      <Projects />
      <Testimonials />
      <ContactForm />
      <WhatsAppFloat />
    </>
  )
}

export default Home