import React, { useState } from 'react';

const avatarOptions = [
  { id: 1, src: '/images/avatar-girl-main.png', alt: 'Chosen Avatar' },
  { id: 2, src: '/images/avatar-girl-small.png', alt: 'Small Girl Avatar' },
  { id: 3, src: '/images/avatar-woman.png', alt: 'Woman Avatar' },
  { id: 4, src: '/images/avatar-boy.png', alt: 'Boy Avatar' },
];

/**
 *
 * @param {boolean} isOpen 
 * @param {function} onClose 
 * @param {string} currentAvatarSrc 
 * @param {function} onSelectAvatar
 */
const AvatarModal = ({ isOpen, onClose, currentAvatarSrc, onSelectAvatar }) => {
  const [tempSelectedAvatar, setTempSelectedAvatar] = useState(
    avatarOptions.find(a => a.src === currentAvatarSrc) || avatarOptions[0]
  );

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectAvatar(tempSelectedAvatar.src);
    onClose();
  };

  const handleCancel = () => {

    setTempSelectedAvatar(avatarOptions.find(a => a.src === currentAvatarSrc) || avatarOptions[0]);
    onClose();
  };

  return (

    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={handleCancel}>
      
 
      <div 
        className="bg-gray-500 rounded-lg shadow-2xl relative w-full max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()} 
      >

        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 transition-colors"
          onClick={handleCancel}
        >
          &times;
        </button>


        <div className="p-6">

          <div className="flex justify-center mb-6 pt-10">
            <div className="relative w-40 h-40">
              <img 
                src={tempSelectedAvatar.src} 
                alt={tempSelectedAvatar.alt} 
                className="w-full h-full object-cover rounded-xl border-4 border-white shadow-xl"
              />
       
              <button
                className="absolute bottom-[-15px] right-[-15px] w-8 h-8 md:w-10 md:h-10 rounded-full bg-white text-green-500 flex items-center justify-center shadow-lg border-2 border-green-500 hover:bg-green-100 transition-colors"
                onClick={handleConfirm}
              >
                <span className="text-xl md:text-2xl font-bold">✓</span>
              </button>
            </div>
          </div>
          

          <div className="flex justify-center space-x-4">
            {avatarOptions.map((avatar) => (
              <div 
                key={avatar.id}
                className={`relative w-20 h-20 rounded-xl cursor-pointer transition-transform duration-200 ${
                  tempSelectedAvatar.id === avatar.id ? 'transform scale-110 shadow-lg ring-4 ring-white ring-offset-2 ring-offset-gray-500' : 'hover:scale-105'
                }`}
                onClick={() => setTempSelectedAvatar(avatar)}
              >
                <img 
                  src={avatar.src} 
                  alt={avatar.alt} 
                  className="w-full h-full object-cover rounded-xl"
                />
                
                {avatar.id === 2 && (
                    <div 
                        className="absolute top-[-5px] left-[-5px] w-6 h-6 rounded-full bg-white text-red-500 flex items-center justify-center shadow-md border border-red-500"
                        onClick={(e) => {
                            e.stopPropagation(); 
                          
                            alert('This avatar is locked or unavailable!');
                        }}
                    >
                        <span className="text-sm font-bold">✕</span>
                    </div>
                )}
                
   
                {avatar.id === 4 && (
                    <div className="absolute inset-0 rounded-xl bg-gray-400 bg-opacity-70 flex items-center justify-center hover:bg-opacity-50 transition-opacity">
                        <span className="text-4xl text-white font-light">+</span>
                    </div>
                )}
                
              </div>
            ))}
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default AvatarModal;