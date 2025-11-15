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

      <div className='container mx-auto mt-6  bg-white rounded-3xl shadow-xl border ring-2 ring-gray-200 flex justify-start gap-3'dir='rtl'>
        <aside  >
          <Sidebar/>
        </aside>
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50 rounded-2xl" >
          <Outlet /> 
         
        </main>

        </div>
            <Footer/>
      
      </div>
  )
}
