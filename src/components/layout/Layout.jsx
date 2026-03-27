import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from '../home/WhatsAppFloat'
import CallFloat from '../home/CallFloat'


const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <CallFloat />
    </>
  )
}

export default Layout