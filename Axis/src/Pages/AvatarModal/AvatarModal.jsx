import React, { useState, useEffect, useRef } from 'react';
import { getProfileInfo, uploadImage, deleteImage, selectImage } from './api';

const AvatarModal = ({ isOpen, onClose, currentAvatarSrc, onSelectAvatar }) => {
  const [avatarOptions, setAvatarOptions] = useState([]);
  const [tempSelectedAvatar, setTempSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null); 


  useEffect(() => {
    if (isOpen) {
      fetchImages();
    }
  }, [isOpen]);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const data = await getProfileInfo();
      if (data.userImage) {
        setAvatarOptions(data.userImage);
        
        const current = data.userImage.find(
             img => (img.puctureAddress || img.pictureAddress) === currentAvatarSrc
        );
        setTempSelectedAvatar(current || data.userImage[0]);
      }
    } catch (error) {
      console.log(error)
      console.error("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async () => {
    if (!tempSelectedAvatar) return;

    try {

      await selectImage(tempSelectedAvatar.id); 
      
      const src = tempSelectedAvatar.puctureAddress || tempSelectedAvatar.pictureAddress;
      onSelectAvatar(src);
      onClose();
    } catch (error) {
      console.log(error)
      alert("خطا در انتخاب عکس پروفایل");
    }
  };

  const handlePlusClick = () => {
    fileInputRef.current.click(); 
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      await uploadImage(file); 
      fetchImages(); 
    } catch (error) {
      console.log(error)
      alert("آپلود انجام نشد");
    }
  };

  const handleDeleteAvatar = async (e, id) => {
    e.stopPropagation(); 
    if (!confirm("آیا مطمئن هستید؟")) return;

    try {
      await deleteImage(id); 
      
      const newOptions = avatarOptions.filter(a => a.id !== id);
      setAvatarOptions(newOptions);
      
      if (tempSelectedAvatar && tempSelectedAvatar.id === id) {
        setTempSelectedAvatar(newOptions[0] || null);
      }
    } catch (error) {
      console.log(error)
      alert("خطا در حذف عکس");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      
      <div 
        className="bg-gray-500 rounded-lg shadow-2xl relative w-full max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <button
          className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="p-6">
          
          <div className="flex justify-center mb-6 pt-10">
            <div className="relative w-40 h-40">
              {tempSelectedAvatar ? (
                <img 
                  src={tempSelectedAvatar.puctureAddress || tempSelectedAvatar.pictureAddress} 
                  alt="Selected" 
                  className="w-full h-full object-cover rounded-xl border-4 border-white shadow-xl"
                  onError={(e) => {e.target.src = '/images/default-user.png'}}
                />
              ) : (
                <div className="w-full h-full bg-gray-300 rounded-xl flex items-center justify-center">Loading...</div>
              )}
              
              <button
                className="absolute bottom-[-15px] right-[-15px] w-10 h-10 rounded-full bg-white text-green-500 flex items-center justify-center shadow-lg border-2 border-green-500 hover:bg-green-100 transition-colors"
                onClick={handleConfirm}
              >
                <span className="text-2xl font-bold">✓</span>
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {loading ? <p className="text-white">در حال بارگذاری...</p> : (
              <>
          
                {avatarOptions.map((avatar) => (
                  <div 
                    key={avatar.id}
                    className={`relative w-20 h-20 rounded-xl cursor-pointer transition-transform duration-200 ${
                      tempSelectedAvatar?.id === avatar.id ? 'transform scale-110 shadow-lg ring-4 ring-white ring-offset-2 ring-offset-gray-500' : 'hover:scale-105'
                    }`}
                    onClick={() => setTempSelectedAvatar(avatar)}
                  >
                    <img 
                      src={avatar.puctureAddress || avatar.pictureAddress} 
                      alt="User Option" 
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {e.target.src = '/images/default-user.png'}}
                    />
                    
                    <div 
                        className="absolute top-[-5px] left-[-5px] w-6 h-6 rounded-full bg-white text-red-500 flex items-center justify-center shadow-md border border-red-500 z-10 hover:bg-red-100"
                        onClick={(e) => handleDeleteAvatar(e, avatar.id)}
                    >
                        <span className="text-sm font-bold">✕</span>
                    </div>
                  </div>
                ))}

                <div 
                    className="relative w-20 h-20 rounded-xl cursor-pointer transition-transform duration-200 bg-gray-600 flex items-center justify-center hover:bg-gray-700 border-2 border-dashed border-gray-400"
                    onClick={handlePlusClick}
                >
                    <span className="text-4xl text-white font-light">+</span>
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AvatarModal;