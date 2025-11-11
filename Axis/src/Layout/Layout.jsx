import React from 'react'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div> 
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
    
    </div>
  )
}

export default Layout