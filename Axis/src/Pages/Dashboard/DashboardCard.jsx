import React from 'react';

const DashboardCard = ({ title, instructor, imageSrc, isSuggested, badgeText }) => {
  return (

    <div className="flex flex-row-reverse items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      

      <div className="w-16 h-16 ml-4 flex-shrink-0">
      
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover rounded-md" 
        />
      </div>

    
      <div className="flex-grow text-right"> 
        <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
        
   
        {isSuggested ? (
          <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
            مشاهده دوره <span aria-hidden="true">&larr;</span> 
          </a>
        ) : (
          <p className="text-sm text-gray-500">{instructor}</p>
        )}
      </div>


      {badgeText && (
        <span className="absolute top-0 right-0 transform translate-y-[-50%] bg-[#FFB600] text-gray-900 text-xs font-semibold px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
          {badgeText}
        </span>
      )}
    </div>
  );
};

export default DashboardCard;