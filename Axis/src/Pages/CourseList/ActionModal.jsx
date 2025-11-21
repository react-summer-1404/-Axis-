import React from 'react';

const ActionModal = ({ isOpen, onClose, actionType, course }) => {
  if (!isOpen || !course) return null;

  let title, message, confirmButtonClass, confirmButtonText, icon;

  if (actionType === 'view') {
    title = `جزئیات دوره: ${course.name}`;
    message = (
      <div className="text-right text-sm space-y-2">
        <p><strong>مدرس:</strong> {course.teacher}</p>
        <p><strong>قیمت:</strong> {course.price} تومان</p>
        <p><strong>وضعیت:</strong> <span className="font-bold">{course.status}</span></p>
        <p className="pt-2 text-gray-600">اینجا باید جزئیات کامل و دکمه‌های مدیریتی (مانند "تایید دوره") قرار گیرد.</p>
      </div>
    );
    confirmButtonClass = 'bg-blue-600 hover:bg-blue-700';
    confirmButtonText = 'تایید / بستن';
    icon = '';
    
  } else if (actionType === 'delete') {
    title = 'تأیید حذف';
    message = (
      <p>آیا مطمئن هستید که می‌خواهید دوره <strong>{course.name}</strong> را حذف کنید؟ این عمل غیر قابل بازگشت است.</p>
    );
    confirmButtonClass = 'bg-red-600 hover:bg-red-700';
    confirmButtonText = 'حذف کن';
    icon = '';
  }

  const handleConfirm = () => {
    console.log(`${actionType} confirmed for course ID: ${course.id}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose} style={{ direction: 'rtl' }}>
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto p-6 space-y-4"
        onClick={(e) => e.stopPropagation()} 
      >
        
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 flex items-center space-x-2 space-x-reverse">
            <span className="text-2xl ml-2">{icon}</span>
            {title}
        </h3>
        
        <div className="text-gray-700">
          {message}
        </div>
        
        <div className="flex justify-end space-x-4 space-x-reverse pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-150"
          >
            لغو
          </button>
          <button
            onClick={handleConfirm}
            className={`px-4 py-2 text-sm font-medium rounded-lg text-white ${confirmButtonClass} transition duration-150`}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionModal;