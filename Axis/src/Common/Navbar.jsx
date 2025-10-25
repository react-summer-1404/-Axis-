// import React from 'react'
import ImgIcon from '../assets/Navbar/SVG.png'
import Button from '../assets/Navbar/Button.svg'
import Header from '../assets/Navbar/Header.svg'
import Like from '../assets/Navbar/Header (1).svg'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';

const Navbar = () => { 
  const [isOpen, setIsOpen] = useState(false);

  const HamburgerIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
  );

  const CloseIcon = (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );

  const NavLinks = (
    <div className='flex gap-5 relative left-10 whitespace-nowrap'>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'>
        <Link to='/'>صفحه اصلی</Link>
      </p>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'>
        <Link to="/courses"> دوره ها</Link>
      </p>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'>ایونت ها</p>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'> فروشگاه</p>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'>وبلاگ </p>
      <p className='hover:text-[#5751E1] cursor-pointer dark:text-gray-300 dark:hover:text-[#5751E1]'>مربیان</p>
    </div>
  );

  const SearchBox = (
    <div className='border rounded-full relative  flex w-full lg:w-[400px] h-[50px] p-3 border-gray-300 dark:bg-slate-100 mt-4 lg:mt-0'>
      <div className='flex items-center w-full '>
        <select className="px-1 py-1 pr-7 si text-right focus:outline-none relative top-0 right-0 bg-white dark:bg-slate-100 rounded-l-full" dir='rtl'>
          <option >دسته‌بندی‌ها</option>
          <option>برنامه‌نویسی</option>
          <option>طراحی</option>
        </select>
        <input type='search' placeholder='جستجو برای دوره...' dir='rtl' className='flex-grow px-2 focus:outline-none dark:bg-slate-100'/>
        <img src={ImgIcon} className='w-5 h-5 ml-2  absolute  right-0 mt-1  mr-3'   />
         <img src={Button} className='size-11' />
      </div>
    </div>
  );

  const Logo = (
    <Link to="/">
      <div className='flex items-center flex-row-reverse gap-3 justify-end whitespace-nowrap md:pl-14' dir='rtl'>
        <div className='text-right'>
          <p className='text-lg font-bold text-gray-800 dark:text-gray-100'>نامبر وان</p>
          <p className='text-sm text-gray-600 dark:text-gray-100'> همیشه بهترین</p>
        </div>
        <div className='w-12 h-12 to-[#7572AB] from-[#5751E1] bg-gradient-to-br text-white rounded-full shadow-md flex items-center justify-center '>
          <span className='text-lg font-bold'>N1</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div id='' className='bg-white dark:bg-gray-900 shadow-md border-b flex flex-row-reverse sm:flex-row'dir='rtl'>
      <div className='container mx-auto px-4'>
        {/*دکمه همبرگری، آیکون‌ها، حساب کاربری */}
        <div className='h-[120px] flex items-center justify-between whitespace-nowrap'>
          {/* لوگو در سمت راست در هر دو حالت */}
          <div className='order-3 lg:order-none'>
            {Logo}
          </div>

          {/* منو، جستجو  */}
          <div className='hidden lg:flex items-center justify-center flex-1 h-full'>
            {/* منو */}
            <div className='flex flex-row gap-6' dir='rtl'>
              {NavLinks}
            </div>
            
            {/* نوار جستجو در کنار منو */}
            <div className='ml-12'>
              {SearchBox}
            </div>
          </div>
          
          {/* آیکون‌ها و دکمه حساب کاربری  */}
          <div className='flex items-center gap-4 order-1 lg:order-none'>
             <img src={Header} className='size-10' alt="Header icon"/> 
             <img src={Like} className='size-10' alt="Like icon"/> 
            
            <div className='border w-36 h-11 rounded-full pt-2 bg-[#FFC224] font-bold text-center border-[#06235B30] cursor-pointer'>
              حساب کاربری
            </div>

            {/* دکمه همبرگری/بستن در موبایل  */}
            <button
              className='text-gray-800 dark:text-white lg:hidden mr-2'
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? CloseIcon : HamburgerIcon}
            </button>
          </div>
        </div>

        {/* isOpen */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          } border-t`}
        >
          {/* منوی موبایل (عمودی) */}
          <div className='flex flex-col gap-3 pb-4' dir='rtl'>
            {NavLinks}
          </div>
          
          {/* نوار جستجوی موبایل */}
          <div className='mb-4'>
            {SearchBox}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;