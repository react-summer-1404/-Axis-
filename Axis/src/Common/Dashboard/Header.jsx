import React from 'react'
import Login from '../../assets/Courses/iconCourses/login btn.svg'
import Shopping from '../../assets/Courses/iconCourses/Shopping Bag.svg'

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700" dir='rtl'>
    <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">

      <div className='flex items-center flex-row-reverse gap-3 justify-end whitespace-nowrap md:pl-14' dir='rtl'>
        <div className='text-right'>
          <p className='text-lg font-bold text-gray-800 dark:text-gray-100'>نامبر وان</p>
          <p className='text-sm text-gray-600 dark:text-gray-100'>همیشه بهترین</p>
        </div>
        <div className='w-12 h-12 to-[#7572AB] from-[#5751E1] bg-gradient-to-br text-white rounded-full shadow-md flex items-center justify-center'>
          <span className='text-lg font-bold'>N1</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* سبد خرید */}
        <button className="relative  rounded-lg p-3">
          <img src={Shopping}/> 
          <span className="absolute bottom-1 right-1 w-7 h-7  bg-yellow-500 text-white text-lg rounded-full flex items-center justify-center font-bold">
            ۲
          </span>
        </button>

      {/*حساب کاربری*/}

        <button className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <img
             src={Login}
            alt="حساب کاربری"
          />
        </button>
       
      </div>

    </div>
  </header>
  )
}

export default Header