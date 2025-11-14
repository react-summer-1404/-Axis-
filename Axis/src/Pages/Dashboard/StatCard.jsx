import React from 'react'

 export const StatCard = ({ count, title, iconSrc,  titleColor }) => {
    return (
      <div className="flex flex-col items-start w-full min-h-[160px] relative">
        
 
        <div className='absolute left-4 z-10'>
   
          <img src={iconSrc} alt="Stat Icon" className="relative bottom-6" />
        </div>
        

        <div className={`
          flex flex-col items-center justify-center p-6 pt-12 w-full h-full rounded-[15px] bg-white 
          relative 
          shadow-lg shadow-black/25
          transform transition duration-300 hover:shadow-xl
          border border-gray-100/50 
        `}dir='rtl'>
          <div className={`text-3xl font-thin mb-1 text-[#5751E1]`}>{count} دوره</div>
          <div className={`text-xl font-normal ${titleColor}`}>{title}</div>
        </div>
      </div>
    );
  };
  
