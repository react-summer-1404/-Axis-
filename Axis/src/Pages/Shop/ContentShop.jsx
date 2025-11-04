import React from 'react'

const ContentShop = () => {
  return (
    <div dir='rtl'> 
   <diV className=' flex justify-between relative py-10 top-8 pr-[20%] pl-[20%]'>
   <span className='dark:text-gray-200'> نمایش
          <span  className="text-indigo-600 font-semibold"> 6 </span> 
            نتیجه در کل
          {/* search */}
          <div className="relative w-full md:w-64 left-64 bottom-8">
          <input
            type="text"
            placeholder="جستجو"
            className="w-[90%] p-2 pr-8 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-[#F7F7F9]"
          />
          </div>
          </span>
   </diV>
   </div>
  )
}

export default ContentShop