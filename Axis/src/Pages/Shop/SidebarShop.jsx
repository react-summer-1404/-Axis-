import React from 'react'
import Payment from '../../assets/Courses/iconCourses/payment.png.svg'
const Sidebar = () => {
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-lg p-4 font-sans text-right" >
      

    <div className='bg-indigo-600 rounded-lg p-3 text-white mb-4'>
      <p className="text-sm opacity-90 mb-1">جمع کل :</p>
      <p className="text-2xl font-bold">200.000 تومان</p>
    </div>
    

    <div className="mb-4">
      <p className="text-gray-700 text-sm font-semibold mb-2">اطلاعات :</p>
      <div className="flex justify-between items-center text-gray-800 text-base">
        <span className="font-bold">14</span>
        <div className="flex items-center space-x-2 space-x-reverse">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 text-gray-600" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth={2}
            style={{ transform: 'scaleX(-1)' }} 
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="text-sm text-gray-600">تعداد آیتم ها</span>
        </div>
      </div>
    </div>
    
    <hr className="my-3 border-gray-200" />

    <div className="mb-4">
      <p className="text-gray-700 text-xs font-semibold mb-2">پرداخت امن:</p>
      <div className="flex justify-center space-x-2 space-x-reverse h-6">
       <img src={Payment}/>
      </div>
    </div>

    <button 
      className="w-full flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-150 ease-in-out text-sm"
    
      style={{ flexDirection: 'row-reverse' }} 
    >
      <span className="mr-2">اقدام به پرداخت</span>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </button>

  </div>
  )
}

export default Sidebar