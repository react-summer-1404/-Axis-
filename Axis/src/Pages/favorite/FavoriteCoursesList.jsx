import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { List, Heart, MessageSquare, Trash2, Eye } from 'lucide-react'; 

import { fetchFavoriteCourses, mapFavoriteCourses } from '../../api/Dashboard/favoriteCoursesAPI.js'; 


const getStatusClasses = (status) => {
    switch (status) {
        case 'تایید شده': return 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/50 border-green-200';
        case 'رد شده': return 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/50 border-red-200';
        default: return 'text-yellow-700 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/50 border-yellow-200';
    }
};

const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}>
            <div 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg mx-auto transform transition-all duration-300 scale-100" 
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

const ViewCourseModal = ({ course, onClose }) => (
    <div className="rtl">
        <div className="flex justify-between items-start border-b pb-3 mb-4 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">مشاهده جزئیات دوره: #{course.id}</h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"><List className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold">عنوان:</span> {course.name}</p>
            <p><span className="font-semibold">مدرس:</span> {course.teacher}</p>
            <p><span className="font-semibold">قیمت:</span> {course.price} تومان</p>
            <p><span className="font-semibold">تاریخ آپدیت:</span> {course.date}</p>
          
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">بستن</button>
        </div>
    </div>
);

const DeleteFavoriteModal = ({ course, onClose, onConfirm }) => (
    <div className="rtl text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">تایید حذف از علاقه‌مندی‌ها</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">آیا مطمئنید که می‌خواهید دوره "{course.name}" را از لیست علاقه‌مندی‌های خود **حذف کنید**؟</p>
        <div className="flex justify-center space-x-4 space-x-reverse">
            <button onClick={onClose} className="px-5 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">انصراف</button>
            <button onClick={onConfirm} className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-md shadow-red-500/30">بله، حذف کن</button>
        </div>
    </div>
);

const FavoriteCoursesListStyled = () => {
    const [rawApiCourses, setRawApiCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalState, setModalState] = useState({ isOpen: false, type: null, course: null });

    const activeView = 'favorites';
    const coursesPerPage = 7; 

    // --- واکشی داده‌های API ---
    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchFavoriteCourses();
                setRawApiCourses(data);
            } catch (err) {
                setError(err.message || "خطا در بارگذاری دوره‌های مورد علاقه.");
                setRawApiCourses([]);
            } finally {
                setLoading(false);
            }
        };
        loadCourses();
    }, []); 

    const displayedCourses = useMemo(() => {
    
        return mapFavoriteCourses(rawApiCourses);
    }, [rawApiCourses]); 

    const removeFavoriteLocally = useCallback((courseId) => {
        setRawApiCourses(prev => prev.filter(c => c.id !== courseId));
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCourse = currentPage * coursesPerPage;
    const currentCourses = displayedCourses.slice(indexOfLastCourse - coursesPerPage, indexOfLastCourse);
    const totalPages = Math.ceil(displayedCourses.length / coursesPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    const openModal = (type, course = null) => setModalState({ isOpen: true, type, course });
    const closeModal = () => setModalState({ isOpen: false, type: null, course: null });
    
    const handleDeleteConfirm = useCallback(() => {
        if (modalState.course) {
            
            removeFavoriteLocally(modalState.course.id);
        }
        closeModal();
    }, [modalState.course, removeFavoriteLocally]);

    const renderModalContent = () => {
        switch (modalState.type) {
            case 'view': return <ViewCourseModal course={modalState.course} onClose={closeModal} />;
            case 'delete': return <DeleteFavoriteModal course={modalState.course} onClose={closeModal} onConfirm={handleDeleteConfirm} />;
            default: return null;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 rtl flex justify-center items-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">در حال بارگذاری دوره‌های مورد علاقه... ⏳</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 rtl flex justify-center items-start p-8">
                <div className="p-6 w-full max-w-4xl mt-10 bg-red-100 border-r-4 border-red-500 text-red-700 rounded-lg shadow-md">
                    <p className="font-bold">خطا در بارگذاری داده‌ها:</p>
                    <p className='mt-2'>{error}</p>
                </div>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-[Inter] rtl flex flex-col items-center p-4 sm:p-8">
            <div className="w-full max-w-7xl">
                
               
                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 mb-8 border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4">
                        <div className="flex flex-wrap gap-2 text-sm font-medium">
                            
                            <button
                                className={`flex items-center px-4 py-2 rounded-xl transition duration-200 bg-purple-600 text-white shadow-md shadow-purple-500/50`}
                            >
                                <Heart className="w-4 h-4 ml-2" />
                                علاقه‌مندی‌ها
                                <span className={`mr-2 px-2 py-0.5 text-xs font-bold rounded-full bg-white text-purple-600`}>
                                    {displayedCourses.length}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-x-auto border border-gray-100 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-purple-50 dark:bg-purple-900/30 text-right text-xs font-extrabold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                            <tr>
                                
                                <th scope="col" className="px-6 py-4">نام دوره</th>
                                <th scope="col" className="px-6 py-4 hidden sm:table-cell">مدرس</th>
                                <th scope="col" className="px-6 py-4 hidden lg:table-cell">تاریخ آپدیت</th>
                                <th scope="col" className="px-6 py-4">قیمت (تومان)</th>
                                <th scope="col" className="relative px-6 py-4 w-32 text-center">عملیات</th> 
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
                            {currentCourses.length > 0 ? (
                                currentCourses.map((course, index) => (
                                    <tr key={course.id || index} className="hover:bg-purple-50/50 dark:hover:bg-gray-700/50 transition duration-150">
                                        <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">#{course.id}</td>
                                        
                                        
                                        <td className="px-6 py-4 font-medium max-w-xs truncate flex items-center">
                                            <Heart className="w-4 h-4 ml-2 text-red-500 fill-red-500" />
                                            {course.name}
                                        </td>
                                        
                                        
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{course.teacher}</td>
                                        
                                        
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden lg:table-cell">{course.date}</td>
                                        
                                        
                                        <td className="px-6 py-4 font-mono font-bold">
                                            {course.price}
                                        </td>
                                        
                                      
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center space-x-3 space-x-reverse">
                                                
                                               
                                                <button 
                                                    onClick={() => openModal('view', course)} 
                                                    className="text-purple-500 hover:text-purple-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition" 
                                                    title="مشاهده جزئیات دوره"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                                
                                                
                                                <button 
                                                    onClick={() => openModal('delete', course)} 
                                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition" 
                                                    title="حذف از علاقه‌مندی‌ها"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-10 text-center text-lg text-gray-500 dark:text-gray-400">
                                        هنوز هیچ دوره‌ای به عنوان علاقه‌مندی ذخیره نشده است.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                        {pageNumbers.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl mx-1 transition duration-200 ${currentPage === page 
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' 
                                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700'
                                }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            
            <CustomModal isOpen={modalState.isOpen} onClose={closeModal}>
                {renderModalContent()}
            </CustomModal>
            
        </div>
    );
};

export default FavoriteCoursesListStyled;