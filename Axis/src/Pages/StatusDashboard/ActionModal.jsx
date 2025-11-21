
 import React from "react";
 export const ActionModal = ({ isOpen, onClose, actionType, course, onConfirmStatusChange, onConfirmDelete }) => {
    if (!isOpen || !course) return null;

    let title, message, icon;
    let isStatusPending = course.status === "در انتظار تایید"; 

    if (actionType === 'view') {
        title = `جزئیات دوره: ${course.name}`;
        message = (
            <div className="text-right text-sm space-y-3">
                <p><strong>مدرس:</strong> {course.teacher}</p>
                <p><strong>قیمت:</strong> {course.price} تومان</p>
                <div className="flex items-center space-x-2 space-x-reverse">
                    <strong>وضعیت:</strong> <StatusBadge status={course.status} />
                </div>
                {isStatusPending && (
                    <p className="pt-2 text-red-600 font-semibold border-t border-gray-200 mt-3 pt-3">
                        این دوره منتظر تأیید شما برای انتشار است. با تأیید، وضعیت آن به "تایید شده" تغییر می‌کند.
                    </p>
                )}
            </div>
        );
        icon = '📝';
        
    } else if (actionType === 'delete') {
        title = 'تأیید حذف';
        message = (
            <p>آیا مطمئن هستید که می‌خواهید دوره <strong>{course.name}</strong> را حذف کنید؟ این دوره به سطل زباله منتقل می‌شود.</p>
        );
        icon = '🗑️';
    }

    const handleDeleteConfirmation = () => {
        onConfirmDelete(course.id); 
    };

    const handleApproval = () => {
        if (isStatusPending) {
            onConfirmStatusChange(course.id, "تایید شده"); 
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50 p-4" 
            onClick={onClose} 
            style={{ direction: 'rtl' }}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto p-6 space-y-4 transform transition-all duration-300 scale-100 opacity-100"
            onClick={(e) => e.stopPropagation()} 
          >
            
            <h3 className="text-2xl font-extrabold text-gray-800 border-b pb-3 flex items-center space-x-3 space-x-reverse">
                <span className="text-3xl ml-2">{icon}</span>
                {title}
            </h3>
            
            <div className="text-gray-700">
              {message}
            </div>
            
            <div className="flex justify-end space-x-4 space-x-reverse pt-2 border-t mt-4 pt-4">

              {actionType === 'view' && isStatusPending && (
                <button
                  onClick={handleApproval}
                  className="px-4 py-2 text-sm font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 shadow-md transition duration-150"
                >
                  تایید دوره
                </button>
              )}
                
              {actionType === 'delete' && (
                <button
                    onClick={handleDeleteConfirmation} 
                    className="px-4 py-2 text-sm font-bold rounded-lg text-white bg-red-600 hover:bg-red-700 shadow-md transition duration-150"
                >
                    انتقال به سطل زباله
                </button>
              )}

              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-bold rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition duration-150"
              >
                {actionType === 'view' ? 'بستن' : 'لغو'}
              </button>
              
            </div>
          </div>
        </div>
    );
};

