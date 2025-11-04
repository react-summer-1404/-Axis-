import React from 'react'

const HeaderShop = () => {
  return (
    <div className='border w-[1440] h-[100px] bg-[#EFEBF9] flex justify-center  items-center  flex-col gap-2 cursor-pointer'>
    <span className='text-2xl font-bold '> سبد خرید</span>

    <div className='flex gap-3 text-sm ' dir='rtl'> 
    <span> صفحه اصلی </span> 
    <span> خرید</span>  
    </div>
   
  </div>
  )
}

export default HeaderShop