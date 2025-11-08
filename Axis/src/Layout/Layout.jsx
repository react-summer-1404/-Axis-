import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroSection from '../Components/Landing/HeroSection'

const Layout = () => {
  return (
    <div className=' '>
        
        <Outlet />
        
    </div>
  )
}

export default Layout


