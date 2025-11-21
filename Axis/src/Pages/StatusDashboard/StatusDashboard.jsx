import React, { useState, useMemo } from 'react';

const initialCourses = [
  { id: 1, name: "آموزش Tailwind CSS", teacher: "دکتر محمدحسین بحرالعلومی", price: "۵۰,۰۰۰", date: "۱۴۰۳/۰۳/۱۸", status: "در انتظار تایید", icon: "⚛️" },
  { id: 2, name: "آموزش کامل کار با Figma", teacher: "دکتر محمدحسین بحرالعلومی", price: "۵۰,۰۰۰", date: "۱۴۰۳/۰۳/۱۸", status: "در انتظار تایید", icon: "🎨" },
  { id: 3, name: "آموزش Next.js و Full Stack", teacher: "محمد رضا ساداتی", price: "۲,۵۰,۰0۰", date: "۱۴۰۳/۰۳/۰۱", status: "تایید شده", icon: "🚀" },
  { id: 4, name: "آموزش Front-End پیشرفته", teacher: "دکتر محمدحسین بحرالعلومی", price: "۲,۵۰,۰0۰", date: "۱۴۰۳/۰۲/۲۵", status: "در انتظار تایید", icon: "💻" },
  { id: 5, name: "مقدمات هوش مصنوعی", teacher: "علی رضایی", price: "۸۰,۰۰۰", date: "۱۴۰۳/۰۴/۰۵", status: "تایید شده", icon: "🤖" },
  { id: 6, name: "یادگیری SQL و PostgreSQL", teacher: "ندا کریمی", price: "۱,۵۰,۰0۰", date: "۱۴۰۳/۰۱/۱۰", status: "تایید شده", icon: "💾" },
  { id: 7, name: "طراحی UI/UX با Sketch", teacher: "هادی احمدی", price: "۶۰,۰۰۰", date: "۱۴۰۳/۰۵/۰۱", status: "در انتظار تایید", icon: "📐" },
  { id: 8, name: "آموزش React Hooks", teacher: "دکتر محمدحسین بحرالعلومی", price: "۹۰,۰۰۰", date: "۱۴۰۳/۰۵/۱۰", status: "تایید شده", icon: "💡" },
];

const COURSES_PER_PAGE = 5; 


const StatusBadge = ({ status }) => {
  let classes = 'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full ';
  let text = status;

  if (status === "تایید شده") {
    classes += 'bg-green-100 text-green-800';
  } else if (status === "در انتظار تایید") {
    classes += 'bg-orange-100 text-orange-800';
  } else {
    classes += 'bg-gray-100 text-gray-800';
  }

  return (
    <span className={classes}>
      {text}
    </span>
  );
};


const DeletedCoursesList = ({ courses, isDarkMode, onRestore }) => {
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
                        {/* اطلاعات دوره */}
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


const SelectedCoursesList = ({ courses, isDarkMode, onRemove }) => {
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

const ActionModal = ({ isOpen, onClose, actionType, course, onConfirmStatusChange, onConfirmDelete }) => {
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

export default function CoursesList() {
    
 
    const STATUS_OPTIONS = useMemo(() => [
        { key: 'All', label: 'همه دوره‌ها', statuses: ['تایید شده', 'در انتظار تایید'] },
        { key: 'ApprovedOnly', label: 'فقط تایید شده', statuses: ['تایید شده'] },
        { key: 'PendingOnly', label: 'فقط در انتظار تایید', statuses: ['در انتظار تایید'] },
    ], []);

 
    const [courses, setCourses] = useState(initialCourses);
    const [selectedCourses, setSelectedCourses] = useState([]); 
    const [currentView, setCurrentView] = useState('main'); 
    const [deletedCourses, setDeletedCourses] = useState([]); 

    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('newest');
    const [statusFilter, setStatusFilter] = useState('All'); 
    const [currentPage, setCurrentPage] = useState(1);
    const [theme, setTheme] = useState('light');


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalActionType, setModalActionType] = useState(null); 
    const [selectedCourse, setSelectedCourse] = useState(null);



    const handleSelectCourse = (course) => {
        if (currentView === 'deleted') return; 

        if (!selectedCourses.some(c => c.id === course.id)) {
            setSelectedCourses(prevSelected => [course, ...prevSelected]); 
        }
        setCurrentView('selected');
    };

    const handleRemoveFromSelected = (courseId) => {
        const newSelected = selectedCourses.filter(c => c.id !== courseId);
        setSelectedCourses(newSelected);
        if (newSelected.length === 0) { 
            setCurrentView('main');
        }
    };
    
   
    const handleDeleteCourse = (courseId) => {
        const courseToDelete = courses.find(c => c.id === courseId);
        if (!courseToDelete) return;

        setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
        setSelectedCourses(prevSelected => prevSelected.filter(course => course.id !== courseId));
        setDeletedCourses(prevDeleted => [courseToDelete, ...prevDeleted]); 
        
        handleCloseModal();
        setCurrentPage(1); 
    };
    
    const handleRestoreCourse = (courseId) => {
        const courseToRestore = deletedCourses.find(c => c.id === courseId);
        if (!courseToRestore) return;
        
        setDeletedCourses(prevDeleted => prevDeleted.filter(course => course.id !== courseId));
        setCourses(prevCourses => [courseToRestore, ...prevCourses]);
    };

   
    const handleStatusChange = (courseId, newStatus) => {
        setCourses(prevCourses => 
            prevCourses.map(course => 
                course.id === courseId ? { ...course, status: newStatus } : course
            )
        );
        setSelectedCourses(prevSelected => prevSelected.map(course => 
            course.id === courseId ? { ...course, status: newStatus } : course
        ));
        handleCloseModal();
    };
    
 
    const handleOpenModal = (type, course) => {
        setModalActionType(type);
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

  
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalActionType(null);
        setSelectedCourse(null);
    };

 
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    const isDarkMode = theme === 'dark';
    

    const filteredCourses = useMemo(() => {
        
     
        const currentStatuses = STATUS_OPTIONS.find(opt => opt.key === statusFilter)?.statuses || STATUS_OPTIONS[0].statuses;
        
        let results = courses.filter(course => currentStatuses.includes(course.status));

        results = results.filter(course => 
            course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
        );

        results.sort((a, b) => {
            if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
            if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
            if (sortBy === 'price') {
                const priceA = parseInt(a.price.replace(/,/g, ''));
                const priceB = parseInt(b.price.replace(/,/g, ''));
                return priceA - priceB;
            }
            return 0;
        });

        return results;
    }, [searchTerm, sortBy, courses, statusFilter, STATUS_OPTIONS]); 

   
    const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
    const currentCourses = useMemo(() => {
        const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
        return filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
    }, [filteredCourses, currentPage]);
    
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  
    const containerClass = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';
    const headerBgClass = isDarkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-700';
    const rowHoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
    const searchBgClass = isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300';
    const paginationActiveClass = isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white';
    const paginationInactiveClass = isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300';


    return (
        <div className={`min-h-screen p-4 md:p-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} style={{ direction: 'rtl' }}>
            
          
            <div className={`shadow-xl rounded-xl p-4 md:p-8 w-full max-w-7xl mx-auto ${containerClass}`}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">

                    <div className="flex flex-wrap items-center space-x-4 space-x-reverse">
                        
                        <button 
                            onClick={() => setCurrentView(currentView === 'selected' ? 'main' : 'selected')}
                            className={`flex items-center px-4 py-2 rounded-full font-bold transition-colors duration-200 mb-2 md:mb-0 ${
                                currentView === 'selected' 
                                    ? 'bg-indigo-600 text-white shadow-lg' 
                                    : isDarkMode ? 'bg-gray-700 text-indigo-400 hover:bg-gray-600' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                            }`}
                        >
                            {currentView === 'selected' ? 'بازگشت به جدول اصلی' : `وضعیت (${selectedCourses.length})`}
                        </button>

                        <button 
                            onClick={() => setCurrentView(currentView === 'deleted' ? 'main' : 'deleted')}
                            className={`flex items-center px-4 py-2 rounded-full font-bold transition-colors duration-200 mb-2 md:mb-0 ${
                                currentView === 'deleted' 
                                    ? 'bg-red-600 text-white shadow-lg' 
                                    : isDarkMode ? 'bg-gray-700 text-red-400 hover:bg-gray-600' : 'bg-red-100 text-red-700 hover:bg-red-200'
                            }`}
                        >
                            {currentView === 'deleted' ? 'بازگشت به جدول اصلی' : `حذف شده (${deletedCourses.length})`}
                        </button>
                        
                        <button 
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors duration-200 mb-2 md:mb-0 ${
                                isDarkMode ? 'bg-gray-600 text-yellow-300' : 'bg-yellow-100 text-yellow-600'
                            }`}
                        >
                            <span className="text-xl">
                                {isDarkMode ? '🌙' : '☀️'}
                            </span>
                        </button>

                        {currentView === 'main' && (
                            <>
                                <div className={`flex items-center border rounded-full px-3 py-1 text-sm mb-2 md:mb-0 ${
                                    isDarkMode ? 'border-gray-700' : 'border-gray-300'
                                }`}>
                                    <span className={`ml-2 text-xl ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                        📑
                                    </span>
                                    <select 
                                        value={statusFilter} 
                                        onChange={(e) => {
                                            setStatusFilter(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className={`outline-none border-none bg-transparent cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                    >
                                  
                                        {STATUS_OPTIONS.map(option => (
                                            <option key={option.key} value={option.key} className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                
                                <div className={`flex items-center border rounded-full px-3 py-1 text-sm mb-2 md:mb-0 ${
                                    isDarkMode ? 'border-gray-700' : 'border-gray-300'
                                }`}>
                                    <span className={`ml-2 text-xl ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                        {sortBy === 'newest' ? '⌄' : '≡'} 
                                    </span>
                                    <select 
                                        value={sortBy} 
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className={`outline-none border-none bg-transparent cursor-pointer ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
                                    >
                                        <option value="newest" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>جدید ترین</option>
                                        <option value="oldest" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>قدیمی ترین</option>
                                        <option value="price" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>قیمت</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    
                    {currentView === 'main' && (
                        <div className="relative w-full md:w-2/3 max-w-xl">
                            <input
                            type="text"
                            placeholder="جستجو برای دوره .."
                            value={searchTerm}
                            onChange={(e) => {
                                setSearchTerm(e.target.value);
                                setCurrentPage(1); 
                            }}
                            className={`w-full py-3 pr-4 pl-12 rounded-full text-right shadow-md transition duration-150 ease-in-out ${searchBgClass}`}
                            />
                            <button
                            className={`absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${isDarkMode ? 'bg-indigo-600 hover:bg-indigo-500' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                            >
                            <span className={`text-xl text-white`}>🔍</span>
                            </button>
                        </div>
                    )}
                    
                </div>

       
                {currentView === 'selected' ? (
                
                    <SelectedCoursesList 
                        courses={selectedCourses} 
                        isDarkMode={isDarkMode} 
                        onRemove={handleRemoveFromSelected}
                    />
                ) : currentView === 'deleted' ? (
            
                    <DeletedCoursesList 
                        courses={deletedCourses} 
                        isDarkMode={isDarkMode}
                        onRestore={handleRestoreCourse}
                    />
                ) : (
                 
                    <>
                
                        <div className="overflow-x-auto rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                         
                                <thead className={`${headerBgClass}`}>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-1/12">
                                        عملیات 
                                        </th> 
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-1/12">
                                        وضعیت 
                                        </th> 
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-2/12">
                                        قیمت (تومان)
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-2/12">
                                        تاریخ شروع
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-3/12">
                                        مدرس دوره
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-3/12">
                                        نام دوره
                                        </th>
                                    </tr>
                                </thead>
                                
                                <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                                    {currentCourses.length > 0 ? (
                                        currentCourses.map((course) => (
                                            <tr 
                                                key={course.id} 
                                                className={`cursor-pointer ${rowHoverClass}`}
                                                onClick={() => handleSelectCourse(course)} 
                                            >
                                                
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-center flex items-center justify-center space-x-2 space-x-reverse">
                                                    <button 
                                                        className="text-red-500 hover:text-red-700 transition-colors text-lg p-1"
                                                        onClick={(e) => { e.stopPropagation(); handleOpenModal('delete', course); }}
                                                    >
                                                        🗑️
                                                    </button>


                                                    <button 
                                                        className="text-indigo-600 hover:text-indigo-900 transition-colors text-lg p-1"
                                                        onClick={(e) => { e.stopPropagation(); handleOpenModal('view', course); }} 
                                                    >
                                                        👁️
                                                    </button>
                                                </td>
                                                
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-center">
                                                    <StatusBadge status={course.status} />
                                                </td>
                                                
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right font-mono">
                                                    {course.price}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right">
                                                    {course.date}
                                                </td>
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right">
                                                    {course.teacher}
                                                </td>
                                                
                                                <td className="px-6 py-3 whitespace-nowrap text-sm text-right font-medium flex items-center justify-end space-x-2 space-x-reverse">
                                                    <span className="text-2xl ml-2">{course.icon}</span>
                                                    <span>{course.name}</span>
                                                </td>
                                                
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                                            دوره ای با این مشخصات یافت نشد.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>

                    
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-6">
                                <nav className="relative z-0 inline-flex rounded-full shadow-sm -space-x-px" aria-label="Pagination">
                                    
                                    {pageNumbers.map((page) => (
                                        <button
                                        key={page}
                                        onClick={() => setCurrentPage(page)}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border-2 rounded-full mx-1 transition-colors ${
                                            page === currentPage
                                            ? `${paginationActiveClass} border-indigo-600 shadow-md`
                                            : `${paginationInactiveClass} border-gray-300`
                                        }`}
                                        >
                                        {page}
                                        </button>
                                    ))}
                                    
                                </nav>
                            </div>
                        )}
                    </>
                )}

            </div>
            
      
            <ActionModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                actionType={modalActionType}
                course={selectedCourse}
                onConfirmStatusChange={handleStatusChange} 
                onConfirmDelete={handleDeleteCourse} 
            />
        </div>
    );
}