
 export const DeletedCoursesList = ({ courses, isDarkMode, onRestore }) => {
    const listBgClass = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200';
    const textColor = isDarkMode ? 'text-gray-200' : 'text-gray-700';
    const restoreBtnClass = isDarkMode ? 'bg-green-600 hover:bg-green-500' : 'bg-green-500 hover:bg-green-600';

    if (courses.length === 0) {
        return (
            <div className={`p-8 text-center rounded-lg border-2 border-dashed ${isDarkMode ? 'border-gray-600 text-gray-400' : 'border-gray-300 text-gray-500'}`}>
                <p className="text-xl mb-2">🗑️</p>
                <p>سطل زباله خالی است. دوره حذف شده‌ای وجود ندارد.</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <h2 className={`text-2xl font-extrabold mb-6 ${textColor}`}>دوره‌های حذف شده ({courses.length})</h2>
            <p className="text-sm text-gray-500 mb-4">دوره‌های زیر موقتاً حذف شده‌اند و می‌توانند بازگردانده شوند.</p>
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
                                <p className="text-sm text-gray-500">مدرس: {course.teacher} | تاریخ: {course.date}</p>
                            </div>
                        </div>
              
                        <div className="flex items-center">
                            <button
                                onClick={() => onRestore(course.id)}
                                className={`px-4 py-2 text-sm font-bold rounded-lg text-white ${restoreBtnClass} transition-transform hover:scale-[1.03] shadow-md`}
                                title="بازگرداندن به لیست اصلی"
                            >
                                ↩️ بازگردانی
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

