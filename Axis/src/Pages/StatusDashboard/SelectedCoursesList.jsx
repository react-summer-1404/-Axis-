 import React from "react";
 export const SelectedCoursesList = ({ courses, isDarkMode, onRemove }) => {
    const listBgClass = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200';
    const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-700';
    const removeBtnClass = isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700';

    if (courses.length === 0) {
        return (
            <div className={`p-8 text-center rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-500'}`}>
                <p className="text-xl mb-2">📥</p>
                <p>لیست وضعیت خالی است. روی سطر دوره‌ها در جدول اصلی کلیک کنید تا آن‌ها را برای پیگیری اضافه کنید.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className={`text-2xl font-extrabold mb-6 ${textColor}`}>پیگیری وضعیت دوره‌های انتخاب شده ({courses.length})</h2>
            <div className="grid grid-cols-1 gap-4">
                {courses.map(course => (
                    <div 
                        key={course.id} 
                        className={`flex flex-col md:flex-row items-start md:items-center justify-between p-4 rounded-xl shadow-lg transition-shadow duration-300 border ${listBgClass}`}
                    >
                     
                        <div className="flex items-start space-x-3 space-x-reverse mb-3 md:mb-0">
                            <span className="text-3xl ml-2">{course.icon}</span>
                            <div>
                                <p className={`font-semibold text-lg ${textColor}`}>{course.name}</p>
                                <p className="text-sm text-gray-500">مدرس: {course.teacher} | قیمت: {course.price} تومان</p>
                            </div>
                        </div>
                        
            
                        <div className="flex items-center space-x-4 space-x-reverse">
                            <StatusBadge status={course.status} />
                            
                      
                            <button
                                onClick={() => onRemove(course.id)}
                                className={`p-1 rounded-full text-2xl ${removeBtnClass} transition-transform hover:scale-110`}
                                title="حذف از لیست وضعیت"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};