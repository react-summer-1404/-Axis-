import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'
import HeroSection from '../Components/Landing/HeroSection'

const Layout = () => {
  return (
    <div className=' '>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout


