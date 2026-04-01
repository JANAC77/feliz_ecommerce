import React from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import AboutCompany from '../components/home/AboutCompany'
import Projects from '../components/home/Projects'
import ProcessSteps from '../components/home/ProcessSteps'
import Testimonials from '../components/home/Testimonials'
import OurClients from '../components/home/OurClients'
import ContactForm from '../components/home/ContactForm'


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutCompany />
      <Projects />
      <ProcessSteps />
      <Testimonials />
      <OurClients />
      <ContactForm />
    </>
  )
}

export default Home