import React, { useState, useMemo, useEffect } from 'react';
import { Trash2, Eye, Rss, Search, ChevronDown, Home } from 'lucide-react'; 
import { useFavoriteNews } from '../../api/Dashboard/useFavoriteNews.js'; 

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

const ViewNewsModal = ({ newsItem, onClose }) => (
    <div className="rtl">
        <div className="flex justify-between items-start border-b pb-3 mb-4 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">مشاهده خبر: {newsItem.title}</h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"><Rss className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold">عنوان:</span> {newsItem.title}</p>
            <p><span className="font-semibold">دسته‌بندی:</span> {newsItem.category}</p>
            <p><span className="font-semibold">تاریخ انتشار:</span> {newsItem.date} {newsItem.time}</p>
            <h3 className="font-semibold mt-4">متن کامل:</h3>
            <p className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg italic border-r-4 border-purple-500">{newsItem.fullText}</p>
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">بستن</button>
        </div>
    </div>
);

const DeleteNewsModal = ({ newsItem, onClose, onConfirm }) => (
    <div className="rtl text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">تایید حذف خبر</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">آیا مطمئنید که می‌خواهید خبر "{newsItem.title}" را از لیست **اخبار مورد علاقه** حذف کنید؟</p>
        <div className="flex justify-center space-x-4 space-x-reverse">
            <button onClick={onClose} className="px-5 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">انصراف</button>
            <button onClick={onConfirm} className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-md shadow-red-500/30">بله، حذف کن</button>
        </div>
    </div>
);



export default function MyFavoriteNewsList() {
   
    const { news, loading, error, refetch, removeNewsItem } = useFavoriteNews(); 

    const [searchTerm, setSearchTerm] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1);
    const [modalState, setModalState] = useState({ isOpen: false, type: null, newsItem: null });

    const contentPerPage = 7; 
    
    
    const filteredNews = useMemo(() => {
        if (!searchTerm) return news;

        const lowerCaseSearch = searchTerm.toLowerCase();

        return news.filter(item => 
            
            item.title.toLowerCase().includes(lowerCaseSearch) ||
            item.category.toLowerCase().includes(lowerCaseSearch)
        );
    }, [news, searchTerm]); 

  
    const totalPages = Math.ceil(filteredNews.length / contentPerPage);
    const currentContent = filteredNews.slice(
        (currentPage - 1) * contentPerPage, 
        currentPage * contentPerPage
    );
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    useEffect(() => {
        setCurrentPage(1); 
    }, [searchTerm]);

    const openModal = (type, newsItem) => setModalState({ isOpen: true, type, newsItem });
    const closeModal = () => setModalState({ isOpen: false, type: null, newsItem: null });
    
    const handleDeleteConfirm = async () => {
        if (modalState.newsItem) {
            const success = await removeNewsItem(modalState.newsItem.id); 
            if (success) {
                // 
            } else {
                alert("حذف خبر از سرور با شکست مواجه شد.");
            }
        }
        closeModal();
    };

    const renderModalContent = () => {
        switch (modalState.type) {
            case 'view': return <ViewNewsModal newsItem={modalState.newsItem} onClose={closeModal} />;
            case 'delete': return <DeleteNewsModal newsItem={modalState.newsItem} onClose={closeModal} onConfirm={handleDeleteConfirm} />;
            default: return null;
        }
    };
    

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 rtl flex justify-center items-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">در حال بارگذاری اخبار مورد علاقه... ⏳</p>
            </div>
        );
    }
    
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-[Inter] rtl flex flex-col items-center p-4 sm:p-8">
            <div className="w-full max-w-7xl">
                
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
                    <Rss className="inline w-8 h-8 ml-3 text-purple-600" />
                    اخبار مورد علاقه من
                </h1>

                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
                    
                    <div className="flex items-center space-x-4 space-x-reverse">
                        <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg cursor-pointer text-purple-600 dark:text-purple-400"><Home className="w-6 h-6" /></div>
                        <div className="relative">
                            <button className="flex items-center bg-white dark:bg-gray-800 p-3 rounded-xl shadow-lg text-gray-700 dark:text-gray-300 font-semibold text-sm">
                                جدید ترین 
                                <ChevronDown className="w-4 h-4 mr-1 text-purple-500" />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 max-w-xl relative">
                        <input
                            type="text"
                            placeholder="جستجو برای خبر مورد علاقه..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-4 pr-16 text-lg border border-gray-300 dark:border-gray-700 rounded-3xl focus:ring-purple-500 focus:border-purple-500 transition shadow-lg dark:bg-gray-700 dark:text-white rtl"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-purple-600 rounded-full shadow-md cursor-pointer">
                            <Search className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>

             
                {error && (
                    <div className="p-4 mb-6 text-lg text-red-700 bg-red-100 rounded-xl font-bold border-r-4 border-red-500 dark:bg-red-900/50 dark:text-red-300">
                        <p className="font-extrabold">خطا در بارگذاری داده‌ها:</p>
                        <p className="font-light mt-1 text-sm">{error}</p>
                        <button onClick={refetch} className="mt-2 text-sm text-purple-600 hover:underline dark:text-purple-400">تلاش مجدد</button>
                    </div>
                )}
                
               
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-x-auto border border-gray-100 dark:border-gray-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        
                        
                        <thead className="bg-purple-50 dark:bg-purple-900/30 text-right text-xs font-extrabold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                             <tr className="border-b-4 border-yellow-400">
                                <th scope="col" className="px-6 py-4 w-10"></th> 
                                <th scope="col" className="px-6 py-4">عنوان خبر</th>
                                <th scope="col" className="px-6 py-4 hidden sm:table-cell">دسته‌بندی</th>
                                <th scope="col" className="px-6 py-4 hidden lg:table-cell">زمان انتشار</th>
                                <th scope="col" className="relative px-6 py-4 w-32 text-center">عملیات</th> 
                            </tr>
                        </thead>
                        
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
                            {(currentContent.length > 0) ? (
                                currentContent.map((item, index) => (
                                    <tr key={item.id || index} className="hover:bg-purple-50/50 dark:hover:bg-gray-700/50 transition duration-150">
                                        
                                       
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center">
                                                <Rss className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                            </div>
                                        </td>
                                        
                                        <td className="px-6 py-4 font-medium max-w-xs truncate">{item.title}</td>
                                        <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{item.category}</td>
                                        <td className="px-6 py-4 font-mono hidden lg:table-cell">{item.date}, {item.time}</td>

                                        <td className="px-6 py-4 text-center">
                                            <div className="flex items-center justify-center space-x-3 space-x-reverse">
                                                <button 
                                                    onClick={() => openModal('view', item)} 
                                                    className="text-purple-500 hover:text-purple-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition" 
                                                    title="مشاهده خبر"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                                <button 
                                                    onClick={() => openModal('delete', item)} 
                                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition" 
                                                    title="حذف از لیست مورد علاقه"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-10 text-center text-lg text-gray-500 dark:text-gray-400">
                                        {error ? (
                                            "به دلیل خطای API، امکان نمایش داده‌ها وجود ندارد."
                                        ) : (
                                            "هیچ خبری در لیست مورد علاقه شما یا منطبق با جستجو وجود ندارد."
                                        )}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

               
                {(totalPages > 1 && !error) && (
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
}