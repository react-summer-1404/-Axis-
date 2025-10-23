import React from 'react'
import ImgIcon from './img/SVG.png'
import Button from './img/Button.svg'
import Header from './img/Header.svg'
import Like from './img/Header (1).svg'
const Navbar = () => {
  return (
    <div className='h-[120px] w-[1550px] border m-auto relative ' >
        {/* logo */}
        <div  className='flex items-center flex-row-reverse gap-3 justify-end px-3 mt-7' dir='rtl'   > 
            <div className='text-right' > <p className='text-lg font-bold text-gray-800'>نامبر وان</p> 
            <p className='text-sm text-gray-600'> همیشه بهترین</p>
            </div>
            <div className='w-12 h-12 to-[#7572AB] from-[#5751E1] bg-gradient-to-br text-white rounded-full shadow-md flex items-center justify-center '>
                <span className='text-lg font-bold'>N1</span>
             </div>
            </div>

        {/* menu */}
        <div className=' flex flex-row gap-6 px-52 relative bottom-8 ' dir='rtl'> 
        <p className='hover:text-[#5751E1] '>صفحه اصلی</p>    
        <p className='hover:text-[#5751E1] '>دوره های اموزشی</p>
        <p className='hover:text-[#5751E1] '>ایونت ها</p>
        <p className='hover:text-[#5751E1] '> فروشگاه</p>
        <p className='hover:text-[#5751E1] '>وبلاگ </p>
        <p className='hover:text-[#5751E1] '>مربیان</p>
        </div>
        {/* search */}
        <div className='border rounded-full w-[400px] h-[50px] border-gray-300 absolute bottom-9 left-[350px] flex '>
          <div> 
          <select className="  px-1 py-1 text-right focus:outline-none  relative top-2 left-60 bg-white " dir='rtl'>
          <option>دسته‌بندی‌ها</option>
           <option>برنامه‌نویسی</option>
           <option>طراحی</option>
           </select>
          </div>
   
          <img src={ImgIcon} className=' absolute bottom-4 right-4' />
          <img src={Button} className='size-11 absolute  left-2 top-[2px]'/>
          <input type='search'  placeholder='جستجو برای دوره...' dir='rtl' className=' relative right-1 w-32 focus:outline-none'/>
         </div>
       <img src={Header} className='size-12 absolute top-9 left-[270px]'/> 
       <img src={Like} className='size-12 absolute top-9 left-[210px]' />

        <div className='border w-36 h-12 rounded-full pt-2  bg-[#FFC224] font-bold text-center absolute top-9 left-8 border-[#06235B30]'> حساب کاربری </div>
 




    </div>
  )
}

export default Navbar