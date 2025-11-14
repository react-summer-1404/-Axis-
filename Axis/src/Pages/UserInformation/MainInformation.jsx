import React from 'react'
import Home from '../../assets/Courses/iconCourses/Frame (1).svg';
import ThemeToggle from '../../Common/Button/ThemeToggle';
const MainInformation = () => {
  return (

   <div className="p-6  font-sans min-h-screen " >
        <div className=" items-center mb-10  ">
          <div className="flex space-x-3 rtl:space-x-reverse gap-5 ">
          <button className='size-6 '>  <ThemeToggle/> </button>
          <img src={Home}/>
            
          </div>
        </div>
    </div>
  
  )
}

export default MainInformation