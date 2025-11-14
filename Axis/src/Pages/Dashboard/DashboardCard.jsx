import React from 'react';

const DashboardCard = ({ title, instructor, imageSrc, isSuggested, DateText }) => {
  return (

    <div className="flex flex-row-reverse items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      

      <div className="w-24 h-16 ml-1 flex-shrink-0">
      
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full  rounded-md" 
        />
      </div>

    
      <div className="flex-grow text-right"> 
        <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
        
   
        {isSuggested ? (
          <a href="#" className="text-lg  text-[#5751E1] hover:text-blue-700 transition-colors">
            مشاهده دوره <span aria-hidden="true">&larr;</span> 
          </a>
        ) : (
          <p className="text-lg text-[#5751E1]">{instructor}</p>
        )}
      </div>


      {DateText && (
        <span className="absolute bottom-0 left-32 py-6 text-[#FFB800] text-xs font-semibold  whitespace-nowrap">
          {DateText}
        </span>
      )}
    </div>
  );
};

export default DashboardCard;