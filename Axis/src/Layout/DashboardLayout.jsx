import React from 'react'
import Header from '../Common/Dashboard/Header'
import Sidebar from '../Common/Dashboard/Sidebar'
import Footer from '../Common/Dashboard/Footer'
import { Outlet } from 'react-router-dom';
import Content from '../Common/Dashboard/Content';
export const DashboardLayout = () => {
  return (
    <div >
      <header>
       <Header/>
      </header>

      <div className='container mx-auto mt-6  bg-white rounded-3xl shadow-xl border ring-2 ring-gray-200 flex justify-start gap-3'dir='rtl'>
        <aside  >
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
