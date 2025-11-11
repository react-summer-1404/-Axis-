import React from 'react'
import Header from '../Common/Dashboard/Header'
import Sidebar from '../Common/Dashboard/Sidebar'
import Footer from '../Common/Dashboard/Footer'
import { Outlet } from 'react-router-dom';
export const DashboardLayout = () => {
  return (
    <div >
      <header>
       <Header/>
      </header>

      <div >
        <aside >
          <Sidebar/>
        </aside>

        <main >
          <Outlet /> 
          
        </main>

        </div>
            <Footer/>
      
      </div>
  )
}
