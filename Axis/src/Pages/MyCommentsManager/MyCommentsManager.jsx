import React, { useState, useMemo, useCallback } from 'react';
import { Trash2, Eye, Search, Home, Plus, X, ChevronDown } from 'lucide-react';

const initialComments = [
  { id: 1, course: "آموزش کامل و جامع Tailwind CSS (پروژه محور)", category: "دوره آموزشی", status: "در انتظار تایید", date: "۱۴۰۳/۰۴/۰۷", time: "۱۴:۳۷", content: "واقعا دوره عالی بود و از سادگی و قدرت Tailwind لذت بردم. امیدوارم آموزش‌های بیشتری در این زمینه قرار دهید. سرعت لود کامپوننت‌ها خیلی خوب بود." },
  { id: 2, course: "بررسی ۱۰ ابزار برتر هوش مصنوعی برای طراحان وب", category: "اخبار و مقالات", status: "تایید شده", date: "۱۴۰۳/۰۳/۰۸", time: "۱۵:۳۸", content: "این مقاله به من کمک کرد تا ابزارهای جدیدی را برای بهبود گردش کار Figma خود کشف کنم. بسیار کاربردی و به‌روز بود. متشکرم از تیم تولید محتوا." },
  { id: 3, course: "آموزش عمیق و پیشرفته NextJS به همراه App Router", category: "دوره آموزشی", status: "رد شده", date: "۱۴۰۳/۰۳/۰۲", time: "۱۴:۲۷", content: "من واقعاً منتظر این دوره بودم! امیدوارم مباحث SSR و Caching را به صورت کامل و عملی پوشش دهد. تاریخ انتشار کی است؟" },
  { id: 4, course: "محصول جدید: پکیج آیکون‌های مینیمال", category: "محصول", status: "تایید شده", date: "۱۴۰۳/۰۲/۲۸", time: "۰۹:۱۰", content: "آیکون‌ها طراحی بسیار تمیز و مدرنی دارند. من آن‌ها را برای پروژه جدیدم خریداری کردم و کاملاً راضی هستم." },
  { id: 5, course: "وبینار رایگان: آینده توسعه دهندگان فرانت‌اند در ۲۰۲۵", category: "سایر", status: "در انتظار تایید", date: "۱۴۰۳/۰۲/۰۱", time: "۱۸:۰۰", content: "آیا امکان دریافت اسلایدهای وبینار وجود دارد؟ بحث‌های مطرح شده درباره Vue و React بسیار روشنگر بود." },
  { id: 6, course: "مقایسه Vue 3 و React Hooks", category: "اخبار و مقالات", status: "رد شده", date: "۱۴۰۳/۰۱/۱۵", time: "۱۱:۴۵", content: "با عرض احترام، فکر می‌کنم در بخش عملکرد، اطلاعات مقاله کمی قدیمی است و نیاز به به‌روزرسانی دارد." },
  { id: 7, course: "دوره جامع TypeScript از صفر تا صد", category: "دوره آموزشی", status: "تایید شده", date: "۱۴۰۲/۱۲/۲۴", time: "۲۲:۰۵", content: "بهترین دوره TypeScript که تا به حال دیده‌ام! توضیحات مدرس بسیار واضح و دقیق است. حتماً پیشنهاد می‌شود." },
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
            <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"><X className="w-5 h-5" /></button>
        </div>
        <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p><span className="font-semibold">درس/مقاله:</span> {comment.course}</p>
            <p><span className="font-semibold">دسته بندی:</span> {comment.category}</p>
            <p><span className="font-semibold">تاریخ ارسال:</span> {comment.date} در {comment.time}</p>
            <p><span className="font-semibold">وضعیت:</span> <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusClasses(comment.status)}`}>{comment.status}</span></p>
            <p className="font-semibold pt-2">متن کامل دیدگاه:</p>
            <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border dark:border-gray-600 max-h-48 overflow-y-auto text-base">
                {comment.content}
            </div>
        </div>
        <div className="flex justify-end mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">بستن</button>
        </div>
    </div>
);


const DeleteCommentModal = ({ comment, onClose, onConfirm }) => (
    <div className="rtl text-center">
        <div className="flex justify-center mb-4"><Trash2 className="w-12 h-12 text-red-500" /></div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">تایید حذف دیدگاه</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
            آیا مطمئن هستید که می‌خواهید دیدگاه مربوط به <span className="font-semibold text-purple-600">"{comment.course}"</span> را برای همیشه حذف کنید؟ این عمل قابل بازگشت نیست.
        </p>
        <div className="flex justify-center space-x-4 space-x-reverse">
            <button onClick={onClose} className="px-5 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition">انصراف</button>
            <button onClick={onConfirm} className="px-5 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition">بله، حذف کن</button>
        </div>
    </div>
);


const AddCommentForm = ({ onSubmit, onClose }) => {
    const [formData, setFormData] = useState({ course: '', category: 'دوره آموزشی', content: '' });
    const [error, setError] = useState('');
    const categories = ['دوره آموزشی', 'اخبار و مقالات', 'محصول', 'سایر'];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.course.trim() || !formData.content.trim()) {
            setError('لطفاً عنوان دوره/مقاله و متن دیدگاه را وارد کنید.');
            return;
        }
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="rtl">
            <div className="flex justify-between items-start border-b pb-3 mb-4 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">نوشتن دیدگاه جدید</h2>
                <button onClick={onClose} type="button" className="p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            
            <div className="space-y-4">
          
                <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">عنوان دوره / مقاله</label>
                    <input 
                        type="text" 
                        id="course" 
                        value={formData.course} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-purple-500 focus:border-purple-500" 
                        placeholder="مثال: آموزش کامل NextJS" 
                    />
                </div>
                
            
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">دسته بندی</label>
                    <select 
                        id="category" 
                        value={formData.category} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-purple-500 focus:border-purple-500"
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </div>
                
           
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">متن دیدگاه</label>
                    <textarea 
                        id="content" 
                        rows="4" 
                        value={formData.content} 
                        onChange={handleChange} 
                        className="w-full px-3 py-2 border dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-purple-500 focus:border-purple-500" 
                        placeholder="نظر شما چیست؟"
                    ></textarea>
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            </div>
            
            <div className="flex justify-end space-x-4 space-x-reverse mt-6">
                <button 
                    type="button" 
                    onClick={onClose} 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                    انصراف
                </button>
                <button 
                    type="submit" 
                    className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md shadow-purple-500/30"
                >
                    ارسال دیدگاه
                </button>
            </div>
        </form>
    );
};



const MyCommentsManager = () => {
  const [comments, setComments] = useState(initialComments);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('جدیدترین'); 
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 4;

  const [modalState, setModalState] = useState({ isOpen: false, type: null, comment: null });


  const filteredComments = useMemo(() => {

    let currentComments = comments.filter(c =>
      c.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.status.includes(searchTerm) 
    );

   
    currentComments.sort((a, b) => {
     
      return sortOrder === 'جدیدترین' ? b.id - a.id : a.id - b.id;
    });

    return currentComments;
  }, [comments, searchTerm, sortOrder]);


  const indexOfLastComment = currentPage * commentsPerPage;
  const currentComments = filteredComments.slice(indexOfLastComment - commentsPerPage, indexOfLastComment);
  const totalPages = Math.ceil(filteredComments.length / commentsPerPage);

  const openModal = (type, comment = null) => setModalState({ isOpen: true, type, comment });
  const closeModal = () => setModalState({ isOpen: false, type: null, comment: null });

  
  const handleDeleteConfirm = useCallback(() => {
    if (modalState.comment) {
      setComments(prev => prev.filter(c => c.id !== modalState.comment.id));
    }
    closeModal();
  }, [modalState.comment]);
  

  const handleAddComment = useCallback((newCommentData) => {
      const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;
      const now = new Date();
     
      const dateString = now.toLocaleDateString('fa-IR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '/');
      const timeString = now.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false });
      
      const commentToAdd = {
          id: newId,
          status: 'در انتظار تایید', 
          date: dateString,
          time: timeString,
          ...newCommentData
      };
      
      setComments(prev => [commentToAdd, ...prev]);
      closeModal();
  }, [comments]);



  const renderModalContent = () => {
    switch (modalState.type) {
      case 'view': return <ViewCommentModal comment={modalState.comment} onClose={closeModal} />;
      case 'delete': return <DeleteCommentModal comment={modalState.comment} onClose={closeModal} onConfirm={handleDeleteConfirm} />;
      case 'add': return <AddCommentForm onSubmit={handleAddComment} onClose={closeModal} />;
      default: return null;
    }
  };
  
  return (

    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-8 font-[Inter] rtl">
      <div className="max-w-7xl mx-auto">
        
     
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white hidden sm:block">پنل مدیریت دیدگاه‌های من</h1>
          <button
              onClick={() => openModal('add')}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl text-sm font-medium hover:bg-purple-700 transition shadow-lg shadow-purple-500/50"
          >
              <Plus className="w-4 h-4 ml-2" />
              <span>نوشتن دیدگاه جدید</span>
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 mb-6 transition-all duration-300">
            <div className="flex flex-col sm:flex-row items-center gap-4">
                
          
                <div className="relative w-full sm:w-40 order-1 sm:order-none">
                    <select
                        value={sortOrder}
                        onChange={(e) => { setSortOrder(e.target.value); setCurrentPage(1); }}
                        className="appearance-none w-full px-4 py-2 bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-xl text-sm font-medium hover:bg-purple-100 transition border border-purple-200 dark:border-purple-800"
                    >
                        <option value="جدیدترین">جدیدترین</option>
                        <option value="قدیمی‌ترین">قدیمی‌ترین</option>
                    </select>
                    <ChevronDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-500 pointer-events-none" />
                </div>

                <div className="relative flex-grow order-2 sm:order-none">
                    <input
                        type="text"
                        placeholder="جستجو بر اساس عنوان دوره/مقاله، وضعیت یا محتوا..."
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="w-full pl-12 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-purple-500 focus:border-purple-500 bg-gray-50 dark:bg-gray-700 dark:text-white text-sm transition"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                </div>

            </div>
        </div>

     
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-purple-50 dark:bg-purple-900/30 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              <tr>
                <th scope="col" className="px-6 py-3 w-10">#</th>
                <th scope="col" className="px-6 py-3">عنوان دوره/مقاله</th>
                <th scope="col" className="px-6 py-3 hidden sm:table-cell">دسته بندی</th>
                <th scope="col" className="px-6 py-3">وضعیت</th>
                <th scope="col" className="px-6 py-3 w-32 hidden md:table-cell">تاریخ و زمان</th>
                <th scope="col" className="relative px-6 py-3 w-20 text-center">عملیات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
              {currentComments.length > 0 ? (
                currentComments.map((comment) => (
                  <tr key={comment.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition duration-150">
                    <td className="px-6 py-4 font-semibold text-purple-600 dark:text-purple-400">#{comment.id}</td>
                    <td className="px-6 py-4 font-medium max-w-xs truncate">{comment.course}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 hidden sm:table-cell">{comment.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusClasses(comment.status)}`}>
                        {comment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-xs hidden md:table-cell">
                        {comment.date} <span className="font-bold text-gray-400 dark:text-gray-500">|</span> {comment.time}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center space-x-3 space-x-reverse">
                        <button onClick={() => openModal('view', comment)} className="text-blue-500 hover:text-blue-700 p-1 rounded-full hover:bg-blue-50/20 transition" title="مشاهده جزئیات"><Eye className="w-5 h-5" /></button>
                        <button onClick={() => openModal('delete', comment)} className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50/20 transition" title="حذف دیدگاه"><Trash2 className="w-5 h-5" /></button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6" className="px-6 py-10 text-center text-lg text-gray-500 dark:text-gray-400">هیچ دیدگاهی با فیلترهای اعمال شده یافت نشد.</td></tr>
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
                  className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full mx-1 transition duration-200 ${currentPage === i + 1 ? 'bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/50' : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
        )}
        
    
        <CustomModal isOpen={modalState.isOpen} onClose={closeModal}>
            {renderModalContent()}
        </CustomModal>
        
      </div>
    </div>
  );
};

export default MyCommentsManager;