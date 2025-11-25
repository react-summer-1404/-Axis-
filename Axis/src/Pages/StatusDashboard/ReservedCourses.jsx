import React, { useState, useMemo, useEffect } from 'react';
import { Trash2, Eye, Search, ChevronDown, ShoppingBag } from 'lucide-react'; 

import { fetchReservedCourses, mapReservedCourses } from '../../api/Dashboard/reservedCoursesAPI.js';

const getStatusClasses = (status) => {
    switch (status) {
        case 'تایید شده': return 'text-green-600 bg-green-100 border-green-200';
        case 'رد شده': return 'text-red-600 bg-red-100 border-red-200';
        default: return 'text-orange-500 bg-orange-100 border-orange-200'; 
    }
};

const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-11/12 max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

const ViewModal = ({ item, onClose }) => (
    <div className="rtl text-right">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">جزئیات رزرو</h3>
        <div className="space-y-3 text-gray-700">
            <p><strong>نام دوره:</strong> {item.courseName}</p>
            <p><strong>مدرس:</strong> {item.teacherName}</p>
            <p><strong>قیمت:</strong> {item.price} تومان</p>
            <p><strong>تاریخ رزرو:</strong> {item.reserverDate}</p>
            <p><strong>وضعیت:</strong> {item.status}</p>
        </div>
        <button onClick={onClose} className="mt-6 w-full py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">بستن</button>
    </div>
);

const DeleteModal = ({ item, onClose, onConfirm }) => (
    <div className="rtl text-center">
        <div className="flex justify-center mb-4 text-red-500"><Trash2 size={48} /></div>
        <h3 className="text-lg font-bold mb-2">لغو رزرو دوره</h3>
        <p className="text-gray-600 mb-6">آیا مطمئنید می‌خواهید رزرو دوره <strong>"{item.courseName}"</strong> را لغو کنید؟</p>
        <div className="flex justify-center gap-4">
            <button onClick={onClose} className="px-6 py-2 border rounded-xl hover:bg-gray-100 transition">انصراف</button>
            <button onClick={onConfirm} className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition">بله، حذف کن</button>
        </div>
    </div>
);

const ReservedCourses = () => {
    const [rawCourses, setRawCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [modal, setModal] = useState({ isOpen: false, type: null, item: null });
    
    const itemsPerPage = 5;

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const data = await fetchReservedCourses();
                setRawCourses(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, []);

    const displayedCourses = useMemo(() => {
        const mapped = mapReservedCourses(rawCourses);
        if (!searchTerm) return mapped;
        return mapped.filter(c => c.courseName.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [rawCourses, searchTerm]);

    const totalPages = Math.ceil(displayedCourses.length / itemsPerPage);
    const currentData = displayedCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    
    const openModal = (type, item) => setModal({ isOpen: true, type, item });
    const closeModal = () => setModal({ isOpen: false, type: null, item: null });

    const handleDelete = async () => {
        if (modal.item) {
            try {
               
                setRawCourses(prev => prev.filter(c => (c.reserveId || c.courseId) !== modal.item.id));
                closeModal();
            } catch (err) {
                console.log(err)
                alert("خطا در حذف رزرو");
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-[Inter] rtl">
            <div className="max-w-7xl mx-auto">
                
               
                <div className="flex items-center gap-2 mb-8">
                    <div className="bg-blue-100 p-2 rounded-full">
                        <ShoppingBag className="w-6 h-6 text-blue-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">دوره‌های رزرو شده</h1>
                </div>

              
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                    <div className="relative w-full sm:w-1/3">
                        <button className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-2xl border border-gray-200 text-gray-600 shadow-sm">
                            <span>جدید ترین</span>
                            <ChevronDown size={18} />
                        </button>
                    </div>
                    <div className="relative w-full sm:w-2/3">
                        <input 
                            type="text" 
                            placeholder="جستجو برای دوره ..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pr-12 pl-4 py-3 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-500" />
                    </div>
                </div>

              
                <div className="bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-100">
                    <table className="w-full min-w-[800px]">
                     
                        <thead className="bg-white">
                            <tr className="border-b-4 border-yellow-400 text-gray-700">
                                <th className="py-5 px-6 text-right font-bold">نام دوره</th>
                                <th className="py-5 px-6 text-right font-bold">مدرس دوره</th>
                                <th className="py-5 px-6 text-right font-bold">تاریخ شروع</th>
                                <th className="py-5 px-6 text-right font-bold">قیمت (تومان)</th>
                                <th className="py-5 px-6 text-center font-bold">وضعیت</th>
                                <th className="py-5 px-6 text-center font-bold"></th> {/* عملیات */}
                            </tr>
                        </thead>
                        <tbody className="text-gray-600">
                            {loading ? (
                                <tr><td colSpan="6" className="text-center py-10">در حال بارگذاری...</td></tr>
                            ) : currentData.length > 0 ? (
                                currentData.map((item, index) => (
                                    <tr key={index} className="hover:bg-purple-50 transition duration-200 border-b border-gray-50 last:border-none">
                                     
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                                  
                                                    <span className="text-cyan-400 text-xs">⚛</span> 
                                                </div>
                                                <span className="font-medium text-gray-800">{item.courseName}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">{item.teacherName}</td>
                                        <td className="py-4 px-6 font-mono text-sm">{item.reserverDate}</td>
                                        <td className="py-4 px-6 font-mono font-semibold">{item.price}</td>
                                        
                                     
                                        <td className="py-4 px-6 text-center">
                                            <span className={`px-3 py-1 rounded-xl text-xs font-bold border ${getStatusClasses(item.status)}`}>
                                                {item.status}
                                            </span>
                                        </td>

                                    
                                        <td className="py-4 px-6 text-center">
                                            <div className="flex items-center justify-center gap-3">
                                                <button onClick={() => openModal('view', item)} className="text-blue-600 hover:bg-blue-50 p-2 rounded-full transition">
                                                    <Eye size={20} />
                                                </button>
                                                <button onClick={() => openModal('delete', item)} className="text-red-500 hover:bg-red-50 p-2 rounded-full transition">
                                                    <Trash2 size={20} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center py-12 text-gray-400 text-lg">
                                        هیچ دوره رزرو شده‌ای یافت نشد.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

          
                {totalPages > 1 && (
                    <div className="flex justify-center mt-8 gap-2">
                        {pageNumbers.map(number => (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                                    currentPage === number 
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-300' 
                                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                            >
                                {number}
                            </button>
                        ))}
                    </div>
                )}

            </div>

          
            <CustomModal isOpen={modal.isOpen} onClose={closeModal}>
                {modal.type === 'view' && <ViewModal item={modal.item} onClose={closeModal} />}
                {modal.type === 'delete' && <DeleteModal item={modal.item} onClose={closeModal} onConfirm={handleDelete} />}
            </CustomModal>
        </div>
    );
};

export default ReservedCourses;