import React, { useState, useMemo } from 'react';
import { initialCourses } from '../../api/Dashboard/courses.js';
import SelectedCoursesList from './SelectedCoursesList.jsx';
import Search from '../../assets/Courses/DashboardIcon/Button.svg'

const COURSES_PER_PAGE = 5; 

export default function CoursesList() {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest'); 
  const [currentPage, setCurrentPage] = useState(1);
  const [theme, setTheme] = useState('light'); 
  
 
 

 
  const filteredCourses = useMemo(() => {
    let results = initialCourses.filter(course =>
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
  }, [searchTerm, sortBy]);

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
  const headerBgClass = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const rowHoverClass = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';
  const searchBgClass = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';
  const searchIconClass = isDarkMode ? 'text-gray-400' : 'text-gray-500';
  const paginationActiveClass = isDarkMode ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white';
  const paginationInactiveClass = isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300';


  return (
    <div className={`min-h-screen p-4 md:p-10 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`} style={{ direction: 'ltr' }}>
      
  
      <div className={`shadow-xl rounded-xl p-4 md:p-8 w-full max-w-7xl mx-auto ${containerClass}`}>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          
          <div className="flex items-center space-x-2 space-x-reverse">
            
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-yellow-100 text-yellow-600'
              }`}
            >
              <span className="text-xl">
                {isDarkMode ? '🌙' : '☀️'}
              </span>
            </button>
  
            <div className={`flex items-center border rounded-full px-3 py-1 text-sm ${
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
          </div>
          
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
              className={`absolute left-0 top-1/2 -translate-y-1/2 `}
            >
              <span className={`text-xl ${searchIconClass}`}>
                <img src={Search}/>
              </span>
            </button>
          </div>
          
        </div>

        <div className="overflow-x-auto rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
      
            <thead className={`${headerBgClass}`}>
              <tr>
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-1/12">
                  مشاهده
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
                <th scope="col" className="px-6 py-3 text-right text-xs font-bold uppercase tracking-wider w-4/12">
                  نام دوره
                </th>
              </tr>
            </thead>
            
            <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
              {currentCourses.length > 0 ? (
                currentCourses.map((course) => (
                  <tr key={course.id} className={rowHoverClass}>
                    
       
                    <td className="px-6 py-3 whitespace-nowrap text-sm text-center">
                      <button className="text-indigo-600 hover:text-indigo-900 transition-colors">
                        👁️
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
                      <span className="text-2xl ml-2">{course.icon}</span>
                      <span>{course.name}</span>
                    </td>
                    
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
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

      </div>
      
    </div>
  );
}