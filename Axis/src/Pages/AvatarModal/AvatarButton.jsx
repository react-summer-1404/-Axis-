import React, { useState, useEffect } from 'react';
import AvatarModal from './AvatarModal';
import { getProfileInfo } from './api'; 

const AvatarButton = () => {
  const defaultAvatar = '/images/default-user.png'; 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAvatarSrc, setSelectedAvatarSrc] = useState(defaultAvatar);

  useEffect(() => {
    const fetchCurrentAvatar = async () => {
      try {
        const data = await getProfileInfo();
   
        if (data.userImage && data.userImage.length > 0) {
            const correctSrc = data.userImage[0].puctureAddress || data.userImage[0].pictureAddress;
            setSelectedAvatarSrc(correctSrc);
        }
      } catch (error) {
        console.error("Error loading avatar:", error);
      }
    };
    fetchCurrentAvatar();
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  
  const handleSelectAvatar = (newSrc) => {
    setSelectedAvatarSrc(newSrc);
 
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-1 space-y-6 flex flex-col items-center order-1">
        
     
        <div 
          className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg cursor-pointer group"
          onClick={handleOpenModal}
        >
          <img 
            src={selectedAvatarSrc} 
            alt="User Profile Avatar" 
            className="w-full h-full rounded-full object-cover"
            onError={(e) => { e.target.src = defaultAvatar; }} 
          />
          
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <span className="text-3xl text-white"></span>
          </div>
        </div>

      </div>

      <AvatarModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        currentAvatarSrc={selectedAvatarSrc}
        onSelectAvatar={handleSelectAvatar}
      />
    </div>
  );
};

export default AvatarButton;