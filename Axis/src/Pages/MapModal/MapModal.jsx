import React, { useState } from 'react';

const defaultCoords = { lat: "39°27'18.5\"N", lng: "67°51'45.4\"E" };

/**
 * 
 * @param {boolean} isOpen 
 * @param {function} onClose 
 * @param {string} currentCoords 
 * @param {function} onSelectLocation 
 */
const MapModal = ({ isOpen, onClose, currentCoords, onSelectLocation }) => {
  
  const [tempCoords, setTempCoords] = useState(defaultCoords); 

  if (!isOpen) return null;


  const handleConfirm = () => {
  
    onSelectLocation(tempCoords); 
    onClose();
  };


  const handleCancel = () => {
    onClose();
  };

  return (

    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={handleCancel}>
      
   
      <div 
        className="bg-white rounded-xl shadow-2xl relative w-full max-w-2xl mx-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        

        <button
          className="absolute top-[-10px] right-[-10px] w-8 h-8 rounded-full bg-white text-gray-500 flex items-center justify-center shadow-lg border border-gray-300 hover:bg-gray-100 transition-colors z-10"
          onClick={handleCancel}
        >
          &times;
        </button>

     
        <div className="p-4 md:p-6 space-y-4">
          
     
          <div className="relative w-full h-96 rounded-lg overflow-hidden border border-gray-300 shadow-md">
            
         
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <img 
                src="Screenshot 2025-11-17 162729.jpg" 
                alt="Placeholder Map" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full text-red-600 text-5xl">
                📍
            </div>
            
        
            <div className="absolute bottom-4 left-4 text-sm bg-black bg-opacity-60 text-white px-3 py-1 rounded-md">
              {tempCoords.lat} , {tempCoords.lng}
            </div>

       
            <button
              className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white text-green-500 flex items-center justify-center shadow-2xl border-4 border-green-500 hover:bg-green-100 transition-colors"
              onClick={handleConfirm}
            >
              <span className="text-3xl font-bold">✓</span>
            </button>
            
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default MapModal;