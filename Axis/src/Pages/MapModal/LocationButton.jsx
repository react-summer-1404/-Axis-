import React, { useState } from 'react';
import MapModal from './MapModal'; 

const defaultCoords = { lat: "39°27'18.5\"N", lng: "67°51'45.4\"E" };

const LocationButton = ({ onLocationChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCoords, setCurrentCoords] = useState(defaultCoords);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const handleSelectLocation = (newCoords) => {
    setCurrentCoords(newCoords);
    if (onLocationChange) {
        onLocationChange(newCoords);
    }
    console.log(`New location selected:`, newCoords);
  };

  return (
    <>
  
      <div 
        className="w-40 h-40 bg-gray-200 rounded-full shadow-inner flex flex-col items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors p-2 text-center"
        onClick={handleOpenModal}
      >
        <span className="text-gray-700 text-lg font-semibold mb-1">نقشه</span>
        <span className="text-gray-500 text-xs">{(currentCoords.lat).substring(0, 10)}...</span>
        <span className="text-gray-500 text-xs">{(currentCoords.lng).substring(0, 10)}...</span>
        <span className="text-purple-500 text-2xl mt-1"> نفشه</span>
      </div>

  
      <MapModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        currentCoords={currentCoords}
        onSelectLocation={handleSelectLocation}
      />
    </>
  );
};

export default LocationButton;