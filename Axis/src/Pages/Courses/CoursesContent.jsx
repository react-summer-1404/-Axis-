import React from 'react'
import Tablist from '../../assets/Courses/iconCourses/Tablist → Tab.svg'
import Tablist2 from '../../assets/Courses/iconCourses/Tablist → Tab (1).svg'
const CoursesContent = () => {
  return (
    <div dir='rtl'>
    <div className=' flex justify-between relative py-10 top-8 pr-[20%] pl-[20%]'>
        <sapn> نمایش 250 از 250 </sapn>

        {/* select */}
        <div className='flex gap-3 text-gray-500 relative' > مرتب سازی براساس :
            <select className='text-black p-3 border bg-white relative bottom-2 rounded-md border-[#DCDBE5] text-sm font-medium'>
                <option >محبوب ترین ها</option>
                <option> جدید ترین ها</option>
            </select>
            <select  className='text-black p-3 border bg-white relative bottom-2 rounded-md border-[#DCDBE5] text-sm font-medium'> 
            <option> نزولی </option>
            <option> افزایشی </option>
            </select>
        </div>

        {/* icon */}
    
         <img src={Tablist} className='size-9 absolute left-[16%] ' />
         <img src={Tablist2} className='size-9 absolute left-[13%] '/> 
    
    </div>
    <div className='border-t-orange-600 border'> kk</div>
    </div>
  )
}

export default CoursesContent