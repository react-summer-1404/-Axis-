import React from 'react'
import Tablist from '../../assets/Courses/iconCourses/Tablist → Tab.svg'
import Tablist2 from '../../assets/Courses/iconCourses/Tablist → Tab (1).svg'
import About from './About'
const CoursesContent = () => {
  return (
    <div dir='rtl'>
    <div className=' flex justify-between relative py-10 top-8 pr-[20%] pl-[20%]'>

        <sapn > نمایش
          <span  className="text-indigo-600 font-semibold"> 250 </span> 
          نتیجه از  
          <sapn className="text-indigo-600 font-semibold"> 250</sapn>

          {/* search */}
          <div className="relative w-full md:w-64 left-64 bottom-8">
          <input
            type="text"
            placeholder="جستجو"
            className="w-[90%] p-2 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-[#F7F7F9]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-400 absolute top-3 right-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>
        </div>
          </sapn> 

        {/* select */}
        <div className='flex gap-3 text-gray-500 relative' > مرتب سازی براساس :
            <select className='text-black p-3 border bg-white relative bottom-2 rounded-md border-[#DCDBE5] text-sm font-medium  h-[80%]'>
                <option >محبوب ترین ها</option>
                <option> جدید ترین ها</option>
            </select>
            <select  className='text-black p-3 border bg-white relative bottom-2 rounded-md border-[#DCDBE5] text-sm font-medium h-[80%]'> 
            <option> نزولی </option>
            <option> افزایشی </option>
            </select>
        </div>

        {/* icon */}
    
         <img src={Tablist} className='size-9 absolute left-[16%] ' />
         <img src={Tablist2} className='size-9 absolute left-[13%] '/> 
    </div>
   <About/> 
    </div>
  )
}

export default CoursesContent