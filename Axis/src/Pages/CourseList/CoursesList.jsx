import React, { useState, useMemo, useEffect } from 'react';
import SearchIcon from '../../assets/Courses/DashboardIcon/Button.svg';
import ThemeToggle from '../../Common/Button/ThemeToggle.jsx';
import HomeIcon from '../../assets/Courses/DashboardIcon/Home - Copy.svg';
import EyesIcon from '../../assets/Courses/DashboardIcon/Group 128.svg';

const BASE_URL = "https://sepehracademy.liara.run"; 
const API_PATH = "/SharePanel/GetMyCourses";
const API_URL = `${BASE_URL}${API_PATH}?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`;

const FRESH_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM5OTE0OTIsImV4cCI6MTc2NDAyNzQ5Mn0.TE0ABN7NtF2AOpmjpvCCE7n3Yfn7xaY8ITTUzG2xTxs"; 

const COURSES_PER_PAGE = 5; 

export default function CoursesList() {
 
 const [searchTerm, setSearchTerm] = useState('');
 const [sortBy, setSortBy] = useState('newest'); 
 const [currentPage, setCurrentPage] = useState(1);
 const [theme, setTheme] = useState('light'); 
 
 const [apiCourses, setApiCourses] = useState([]);
 const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
  const fetchCourses = async () => {
  setLoading(true);
  setError(null);

  if (!FRESH_AUTH_TOKEN || FRESH_AUTH_TOKEN.length < 10 || FRESH_AUTH_TOKEN.includes('/*')) {
  setError("خطا: لطفاً توکن احراز هویت را در کد وارد کنید.");
  setLoading(false);
  return;
 }

  try {
  const response = await fetch(API_URL, {
  headers: {
  'Authorization': `Bearer ${FRESH_AUTH_TOKEN}`,
  'Content-Type': 'application/json',
  },
  });

 if (!response.ok) {
  const statusMessage = response.status === 500 
  ? "خطای داخلی سرور (500). توکن یا سرور مشکل دارد." 
  : `خطای HTTP: ${response.status}.`;
 throw new Error(statusMessage);
  }

  const data = await response.json();
 setApiCourses(data.listMyCourses || []); 
 } catch (err) {
  console.error("Error fetching courses:", err);
  setError(err.message || "خطا در بارگذاری دوره‌ها.");
  setApiCourses([]);
  } finally {
  setLoading(false);
  }
 };

  fetchCourses();
  }, []); 
  
 const filteredCourses = useMemo(() => {
  const mappedCourses = apiCourses.map(course => ({
  id: course.id, 
  name: course.title || 'بدون عنوان', 
  teacher: course.instructor || 'نامشخص', 
  date: course.lastUpdate || '---', 
 price: course.price || '0', 
 icon: '', 
  }));
 
 let results = mappedCourses.filter(course =>
 course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  course.teacher.toLowerCase().includes(searchTerm.toLowerCase())
  );

 results.sort((a, b) => {
  if (sortBy === 'newest') return new Date(b.date) - new Date(a.date);
  if (sortBy === 'oldest') return new Date(a.date) - new Date(b.date);
  if (sortBy === 'price') {
    const priceA = parseInt(String(a.price).replace(/,/g, '') || '0');
  const priceB = parseInt(String(b.price).replace(/,/g, '') || '0');
 return priceA - priceB;
  }
  });

  return results;
  }, [searchTerm, sortBy, apiCourses]);

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
 const currentCourses = useMemo(() => {
  const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
  return filteredCourses.slice(startIndex, startIndex + COURSES_PER_PAGE);
 }, [filteredCourses, currentPage]);
 
 const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };


  const isDarkMode = theme === 'dark';
  const containerClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800';
  const headerBgClass = isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'; 
 const rowBaseClass = isDarkMode ? 'bg-gray-800' : 'bg-[#C8C1ED1A]'; 
 const rowHoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-[#C8C1ED4D]'; 
const searchBgClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
 const searchIconClass = isDarkMode ? 'text-indigo-400' : 'text-indigo-600';
 const paginationActiveClass = 'bg-indigo-600 text-white shadow-lg'; 
const paginationInactiveClass = isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-[#E5E0F5] text-indigo-800 hover:bg-[#D5CCF5]';
 const sortSelectClass = isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800';


 return (
 <div className={`min-h-screen p-4 md:p-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`} style={{ direction: 'ltr' }}> 
 
 {error && (
 <div className="p-4 max-w-7xl mx-auto mb-6 bg-red-100 border-r-4 border-red-500 text-red-700 rounded-md">
 <p className="font-bold">خطا:</p>
 <p>{error}</p>
 </div>
)} 

{loading && ( <div className="flex justify-center items-center h-40">
 <p className="text-xl text-indigo-600">در حال بارگذاری دوره‌ها... ⏳</p>
</div>
)}


 {!loading && !error && ( <div className={`shadow-xl rounded-xl p-4 md:p-8 w-full max-w-7xl mx-auto ${containerClass}`}>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
  <div className="flex items-center gap-4">
 <button 
 className={`p-2 rounded-full shadow-md transition-colors ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
 >
     <img src={HomeIcon} alt="Home" className="w-6 h-6"/>
</button>
 
 <button 
className={`p-2 `}
onClick={toggleTheme}
 >
 <ThemeToggle theme={theme} />
 </button>

<div className={`flex items-center border rounded-lg px-3 py-2 text-sm shadow-sm ${
 isDarkMode ? 'border-gray-700' : 'border-gray-300 bg-white'
 }`}>
 <select 
 value={sortBy} 
onChange={(e) => setSortBy(e.target.value)}
 className={`outline-none border-none cursor-pointer ${sortSelectClass}`}
 >
<option value="newest" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>جدید ترین</option>
 <option value="oldest" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>قدیمی ترین</option>
 <option value="price" className={isDarkMode ? 'bg-gray-700' : 'bg-white'}>قیمت</option>
 </select>
 </div>
 </div>

 <div className="relative w-full md:w-2/3 max-w-xl flex items-center">
 <button
 className={`absolute left-1  rounded-full  shadow-lg`}
 >
<img src={SearchIcon} alt="Search" className="w-15 h-15"/>
 </button>
 <input
 type="text"
 placeholder="جستجو برای دوره .."
 value={searchTerm}
 onChange={(e) => {
 setSearchTerm(e.target.value);
 setCurrentPage(1);
}}
 
 className={`w-full py-3 pr-4 pl-24 rounded-full text-right transition duration-150 ease-in-out ${searchBgClass} ${isDarkMode ? 'text-white' : 'text-gray-800'} border`}
 />
 </div>
 </div>

 <div className="overflow-x-auto rounded-xl shadow-lg border-2 border-gray-100">
 <table className="min-w-full divide-y divide-gray-200">

<thead className={`${headerBgClass}`}>
 <tr>
 <th scope="col" className="px-6 py-3 text-right text-lg font-bold">مشاهده</th>
 <th scope="col" className="px-6 py-3 text-right text-lg font-bold">قیمت (تومان)</th>
 <th scope="col" className="px-6 py-3 text-right text-lg font-bold">تاریخ شروع</th>
 <th scope="col" className="px-6 py-3 text-right text-lg font-bold">مدرس دوره</th>
 <th scope="col" className="px-6 py-3 text-right text-lg font-bold">نام دوره</th>
</tr>
</thead>
 <tbody className={`divide-y divide-gray-100`}>
 {currentCourses.length > 0 ? (
 currentCourses.map((course, index) => (
 <tr key={course.id || index} className={`${rowBaseClass} ${rowHoverClass}`}>
 
 <td className="px-6 py-3 whitespace-nowrap text-sm text-center">
 <button className="text-indigo-600 hover:text-indigo-800 transition-colors">
<img src={EyesIcon} alt="View" className="w-5 h-5 mx-auto"/>
</button>
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
<span className={`text-xl ml-2 ${searchIconClass}`}>{course.icon}</span>
<span>{course.name}</span>
</td>
 
</tr>
 ))
 ) : (
 <tr>
<td colSpan="5" className={`px-6 py-4 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
 {apiCourses.length === 0 && !searchTerm 
? "هنوز دوره‌ای برای شما ثبت نشده است." 
: "دوره ای با این مشخصات یافت نشد."
 }
 </td>
 </tr>
 )}
 </tbody>
 </table>
</div>


{totalPages > 1 && (
 <div className="flex justify-center mt-6">
 <nav className="relative z-0 inline-flex rounded-full" aria-label="Pagination">
 
{pageNumbers.map((page) => (
 <button
 key={page}
onClick={() => setCurrentPage(page)} className={`relative inline-flex items-center px-4 py-2 text-sm font-medium border rounded-full mx-1 transition-colors ${
page === currentPage
? `${paginationActiveClass} border-indigo-600`
: `${paginationInactiveClass} border-transparent`
}`} >
 {page}
 </button>
 ))}
 
 </nav>
</div>
 )}

</div>
 )}
</div>
 );
}