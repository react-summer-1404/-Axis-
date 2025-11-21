import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Trash2, Eye, List, Heart, MessageSquare } from 'lucide-react';


const initialComments = [
    { id: 7, course: "دوره جامع TypeScript از صفر تا صد", category: "دوره آموزشی", status: "تایید شده", date: "۱۴۰۲/۱۲/۲۴", content: "بهترین دوره TypeScript که تا به حال دیده‌ام!...", author: "دکتر محمدحسین بحرالعلومی" },
    { id: 6, course: "مقایسه Vue 3 و React Hooks", category: "اخبار و مقالات", status: "رد شده", date: "۱۴۰۳/۰۱/۱۵", content: "با عرض احترام، فکر می‌کنم در بخش عملکرد...", author: "محمد رضا سالاری" },
    { id: 5, course: "وبینار رایگان: آینده توسعه دهندگان فرانت‌اند", category: "سایر", status: "در انتظار تایید", date: "۱۴۰۳/۰۲/۰۱", content: "آیا امکان دریافت اسلایدهای وبینار وجود دارد؟...", author: "دکتر محمدحسین بحرالعلومی" },
    { id: 4, course: "محصول جدید: پکیج آیکون‌های مینیمال", category: "محصول", status: "تایید شده", date: "۱۴۰۳/۰۲/۲۸", content: "آیکون‌ها طراحی بسیار تمیز و مدرنی دارند...", author: "محمد رضا سالاری" },
    { id: 3, course: "بررسی ۱۰ ابزار برتر هوش مصنوعی", category: "اخبار و مقالات", status: "تایید شده", date: "۱۴۰۳/۰۳/۰۸", content: "این مقاله به من کمک کرد...", author: "دکتر محمدحسین بحرالعلومی" },
    { id: 2, course: "آموزش عمیق و پیشرفته NextJS", category: "دوره آموزشی", status: "رد شده", date: "۱۴۰۳/۰۳/۰۲", content: "من واقعاً منتظر این دوره بودم...", author: "محمد رضا سالاری" },
    { id: 1, course: "آموزش کامل و جامع Tailwind CSS", category: "دوره آموزشی", status: "در انتظار تایید", date: "۱۴۰۳/۰۴/۰۷", content: "واقعا دوره عالی بود...", author: "دکتر محمدحسین بحرالعلومی" },
];



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

const ViewCommentModal = ({ comment, onClose }) => (
    <div className="rtl">
        <div className="flex justify-between items-start border-b pb-3 mb-4 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">مشاهده دیدگاه: #{comment.id}</h2>
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"><List className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold">عنوان:</span> {comment.course}</p>
            <p><span className="font-semibold">وضعیت:</span> <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getStatusClasses(comment.status)}`}>{comment.status}</span></p>
            <p className="border-t pt-3 mt-3 dark:border-gray-700"><span className="font-semibold">متن کامل:</span> {comment.content}</p>
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">بستن</button>
        </div>
    </div>
);

const DeleteCommentModal = ({ comment, onClose, onConfirm }) => (
    <div className="rtl text-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">تایید حذف دیدگاه</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">آیا مطمئنید که می‌خواهید دیدگاه "{comment.course}" را حذف کنید؟</p>
        <div className="flex justify-center space-x-4 space-x-reverse">
            <button onClick={onClose} className="px-5 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">انصراف</button>
            <button onClick={onConfirm} className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition shadow-md shadow-red-500/30">بله، حذف کن</button>
        </div>
    </div>
);


const CommentsTable = ({ 
    comments, 
    setComments, 
    activeView, 
    setActiveView, 
    favoriteCommentIds, 
    toggleFavorite,
    openModal,
    setFavoriteCommentIds
}) => {
    
    const showFavorites = activeView === 'favorites';
    const commentsPerPage = 7; 


    const displayedComments = useMemo(() => {
        let currentComments = [...comments];

  
        if (showFavorites) {
            currentComments = currentComments.filter(comment => favoriteCommentIds.includes(comment.id));
        }
        
   

        return currentComments;
    }, [comments, showFavorites, favoriteCommentIds]);


    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastComment = currentPage * commentsPerPage;
    const currentComments = displayedComments.slice(indexOfLastComment - commentsPerPage, indexOfLastComment);
    const totalPages = Math.ceil(displayedComments.length / commentsPerPage);

    const [modalState, setModalState] = useState({ isOpen: false, type: null, comment: null });
    const closeLocalModal = () => setModalState({ isOpen: false, type: null, comment: null });

    const openDeleteModal = (comment) => setModalState({ isOpen: true, type: 'delete', comment });
    const handleDeleteConfirm = useCallback(() => {
        if (modalState.comment) {
            setComments(prev => prev.filter(c => c.id !== modalState.comment.id));
            setFavoriteCommentIds(prev => prev.filter(id => id !== modalState.comment.id)); 
        }
        closeLocalModal();
    }, [modalState.comment, setComments, setFavoriteCommentIds]);

    const navItems = [
        { id: 'all', label: 'همه دیدگاه‌ها', icon: List, count: comments.length },
        { id: 'favorites', label: 'علاقه‌مندی‌ها', icon: Heart, count: favoriteCommentIds.length },
    ];

    return (
        <>
        
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 sm:p-6 mb-8 border border-gray-100 dark:border-gray-700">
                <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4">
                    
           
                    <div className="flex flex-wrap gap-2 text-sm font-medium">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setActiveView(item.id); setCurrentPage(1); }} 
                                className={`flex items-center px-4 py-2 rounded-xl transition duration-200 ${activeView === item.id 
                                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/50' 
                                    : 'text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-purple-50 dark:hover:bg-purple-900/30'
                                }`}
                            >
                                <item.icon className="w-4 h-4 ml-2" />
                                {item.label}
                                <span className={`mr-2 px-2 py-0.5 text-xs font-bold rounded-full ${activeView === item.id ? 'bg-white text-purple-600' : 'bg-white/30 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300'}`}>
                                    {item.count}
                                </span>
                            </button>
                        ))}
                    </div>

                 
                </div>
            </div>

          
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-x-auto border border-gray-100 dark:border-gray-700">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-purple-50 dark:bg-purple-900/30 text-right text-xs font-extrabold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                        <tr>
                            <th scope="col" className="px-6 py-4 w-10">#</th>
                            <th scope="col" className="px-6 py-4">عنوان دوره/مقاله</th>
                            <th scope="col" className="px-6 py-4 hidden sm:table-cell">دسته بندی</th>
                            <th scope="col" className="px-6 py-4 hidden lg:table-cell">نویسنده</th>
                            <th scope="col" className="px-6 py-4">وضعیت</th>
                            <th scope="col" className="px-6 py-4 w-32 hidden md:table-cell">تاریخ انتشار</th>
                            <th scope="col" className="relative px-6 py-4 w-32 text-center">عملیات</th> 
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
                        {currentComments.length > 0 ? (
                            currentComments.map((comment, index) => (
                                <tr key={comment.id} className="hover:bg-purple-50/50 dark:hover:bg-gray-700/50 transition duration-150">
                                    <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">#{comment.id}</td>
                                    <td className="px-6 py-4 font-medium max-w-xs truncate">{comment.course}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{comment.category}</td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden lg:table-cell">{comment.author}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusClasses(comment.status)}`}>
                                            {comment.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">
                                        {comment.date}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center space-x-3 space-x-reverse">
                                            
                                      
                                            <button onClick={() => openModal('view', comment)} className="text-purple-500 hover:text-purple-700 p-2 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition" title="مشاهده جزئیات"><Eye className="w-5 h-5" /></button>
                                            
                                            <button 
                                                onClick={() => toggleFavorite(comment.id)} 
                                                className={`p-2 rounded-full transition ${favoriteCommentIds.includes(comment.id) 
                                                    ? 'text-red-500 hover:text-red-600 bg-red-50 dark:bg-red-900/30' 
                                                    : 'text-gray-400 hover:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`} 
                                                title={favoriteCommentIds.includes(comment.id) ? "برداشتن از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}
                                            >
                                                <Heart className={`w-5 h-5 ${favoriteCommentIds.includes(comment.id) ? 'fill-red-500' : 'fill-none'}`} />
                                            </button>
                                            
                                   
                                            <button onClick={() => openDeleteModal(comment)} className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 transition" title="حذف دیدگاه"><Trash2 className="w-5 h-5" /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-10 text-center text-lg text-gray-500 dark:text-gray-400">
                                    {showFavorites ? 'هنوز هیچ دیدگاهی به عنوان علاقه‌مندی ذخیره نشده است.' : 'هیچ دیدگاهی برای نمایش وجود ندارد.'}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

   
            {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl mx-1 transition duration-200 ${currentPage === i + 1 
                                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' 
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
            
   
            <CustomModal isOpen={modalState.isOpen && modalState.type === 'delete'} onClose={closeLocalModal}>
                <DeleteCommentModal comment={modalState.comment} onClose={closeLocalModal} onConfirm={handleDeleteConfirm} />
            </CustomModal>
        </>
    );
};


const Favorite = () => {

    const [comments, setComments] = useState(initialComments);
    const [modalState, setModalState] = useState({ isOpen: false, type: null, comment: null });

    const [activeView, setActiveView] = useState('all'); 

 
    const [favoriteCommentIds, setFavoriteCommentIds] = useState(() => {
        try {
            const savedFavorites = localStorage.getItem('favoriteCommentIds');
            return savedFavorites ? JSON.parse(savedFavorites) : [];
        } catch (error) {
            console.error("خطا در بارگذاری علاقه‌مندی‌ها از حافظه محلی:", error);
            return [];
        }
    });


    useEffect(() => {
        try {
            localStorage.setItem('favoriteCommentIds', JSON.stringify(favoriteCommentIds));
        } catch (error) {
            console.error("خطا در ذخیره علاقه‌مندی‌ها در حافظه محلی:", error);
        }
    }, [favoriteCommentIds]);

    const toggleFavorite = useCallback((commentId) => {
        setFavoriteCommentIds(prev =>
            prev.includes(commentId) ? prev.filter(id => id !== commentId) : [...prev, commentId]
        );
    }, []);

    const openModal = (type, comment = null) => setModalState({ isOpen: true, type, comment });
    const closeModal = () => setModalState({ isOpen: false, type: null, comment: null });
    

    const renderModalContent = () => {
        switch (modalState.type) {
            case 'view': return <ViewCommentModal comment={modalState.comment} onClose={closeModal} />;
            default: return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 font-[Inter] rtl flex flex-col items-center p-4 sm:p-8">
            <div className="w-full max-w-7xl">
                
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
                    <MessageSquare className="inline w-8 h-8 ml-3 text-purple-600" />
                    پنل مدیریت دیدگاه‌ها
                </h1>

                <CommentsTable
                    comments={comments}
                    setComments={setComments}
                    activeView={activeView}
                    setActiveView={setActiveView}
                    favoriteCommentIds={favoriteCommentIds}
                    toggleFavorite={toggleFavorite}
                    openModal={openModal} 
                    setFavoriteCommentIds={setFavoriteCommentIds} 
                />
            </div>
            
     
            <CustomModal isOpen={modalState.isOpen && modalState.type !== 'delete'} onClose={closeModal}>
                {renderModalContent()}
            </CustomModal>
            
        </div>
    );
};

export default Favorite ;