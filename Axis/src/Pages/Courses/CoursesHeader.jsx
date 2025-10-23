import React from 'react'

const CoursesHeader = () => {
  return (
    <div className='border w-[1440] h-[100px] bg-[#EFEBF9] flex justify-center  items-center  flex-col gap-2 cursor-pointer'>
      <span className='text-2xl font-bold '>همه دوره ها </span>

      <div className='flex gap-3 text-sm ' dir='rtl'> 
      <span> صفحه اصلی </span> 
      <span>دوره های آموزشی</span>  
      </div>
     
    </div>
  )
}
 
export default CoursesHeader