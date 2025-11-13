import React from 'react'

 export const StatCard = ({ count, title, iconSrc, iconColor, countColor, titleColor }) => {
    return (
      <div className="flex flex-col items-center w-full min-h-[160px] relative">
        
 
        <div className={`
          flex items-center justify-center w-20 h-20 rounded-full 
          ${iconColor} 
          absolute top-0 transform -translate-y-1/2 
          z-10 shadow-lg
        `}>
   
          <img src={iconSrc} alt="Stat Icon" className="w-10 h-10 object-contain" />
        </div>
        

        <div className={`
          flex flex-col items-center justify-center p-6 pt-12 w-full h-full rounded-[15px] bg-white 
          relative 
          shadow-lg shadow-black/25
          transform transition duration-300 hover:shadow-xl
          border border-gray-100/50 
        `}>
          <div className={`text-4xl font-extrabold ${countColor} mb-1`}>{count} دوره</div>
          <div className={`text-xl font-normal ${titleColor}`}>{title}</div>
        </div>
      </div>
    );
  };
  
