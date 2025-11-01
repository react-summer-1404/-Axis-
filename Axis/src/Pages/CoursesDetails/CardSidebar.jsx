// import React from 'react';
import cardImage from '../../assets/Courses/MainCourses/courses_details.jpg.svg';  
import TextSidebar from './TextSidebar';
import React, { useState } from 'react';


const CardSidebar = () => {
    const [activeTab, setActiveTab] = useState('بررسی اجمالی');
    return (
        <div className="lg:max-w-4xl md:max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden my-10 border border-gray-100">
            <div className="relative ">
                <img 
                    className="w-full h-auto object-cover rounded-t-xl" 
                    src={cardImage} 
                    alt="تصویر کارت" 
                />
            </div>
            <div className="flex justify-start gap-3 items-center px-6 py-4  border-gray-100" dir='rtl'> 
                <button 
                    className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-full transition duration-150 ease-in-out"
                >
                   توسعه
                </button>
                <div className="p-1 cursor-pointer transition duration-150 ease-in-out hover:bg-yellow-50">
                    <svg 
                        className="w-5 h-5 text-yellow-500" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.695h3.462c.969 0 1.371 1.24.588 1.81l-2.817 2.042a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.683-1.538 1.118l-2.817-2.042a1 1 0 00-1.176 0l-2.817 2.042c-.783.565-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.029 8.724c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.695l1.07-3.292z"
                        /> 
                    </svg>
                </div>
            </div>
            <div className=" text-right pr-3"> 
                <h2 className="text-xl  text-gray-900 mb-2 leading-8">
                    حل تعارضات بین طراحان و مهندسان
                </h2>
                     
                <div className="flex items-center justify-end space-x-4  text-gray-600 text-sm mb-4">
                    <div className="flex items-center pt-2">
                        <span className="mr-1">2,250 دانشجو</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.394 2.08a1 1 0 00-.788 0L.242 5.996a.998.998 0 00-.012 1.968l9.55 3.183a1.001 1.001 0 00.364 0l9.55-3.183a.998.998 0 00-.012-1.968L10.394 2.08zM4.095 9.06l-.99.33L10 12l6.895-2.61l-.99-.33L10 11.233 4.095 9.06zM20 7.996c-.021.088-.046.176-.075.264L10 11.85 0 8.26V18a2 2 0 002 2h16a2 2 0 002-2V7.996zm-16 9.004H2V8.996l8-2.667 8 2.667V17h-2V13a2 2 0 00-2-2H8a2 2 0 00-2 2v4z"></path>
                        </svg>
                    </div>

                    <div className="flex items-center pt-2 pr-3">
                        <span className="mr-1">24/07/2024</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    
                    <div className="flex items-center pt-2">
                        <span className="mr-1">محمد محسن</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                </div>
                    
                <div className="flex justify-end space-x-3  mt-8  pb-7 "> 
                    
                    {['بررسی اجمالی', 'برنامه تحصیلی', 'مربیان', 'نظرات کاربران'].reverse().map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                text-sm font-medium w-28 p-2 rounded-full transition duration-150 ease-in-out 
                                whitespace-nowrap focus:outline-none 
                                
                                ${activeTab === tab 
                                    ? 'bg-[#5751E1] text-[#FFFFFF] shadow-md' // *استایل تب فعال: *
                                    : 'bg-[#E6E9EF] text-[#6D6C80]'        // استایل حالت عادی
                                }
                                 `}
                                >
                            {tab}
                        </button>
                    ))}
                </div>
             
        {activeTab === 'بررسی اجمالی' && (
         <TextSidebar/>
          )}

                <div className="max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto flex justify-between items-center mt-8 px-2 md:px-0">
                <div className="flex space-x-2 pl-2">
                    
                  {/* دکمه راست */}
                    <button className="w-10 h-10 rounded-full bg-[#5751E1] hover:bg-blue-700 text-white flex items-center justify-center transition duration-150 ease-in-out shadow-md">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>

                  {/* چپ */}
                    <button className="w-10 h-10 rounded-full bg-[#5751E1] hover:bg-indigo-700 text-white flex items-center justify-center transition duration-150 ease-in-out shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                </div>

                <div className="text-lg font-bold px-6 py-2 rounded-full bg-yellow-400 text-gray-800 shadow-md cursor-pointer transition duration-150 ease-in-out hover:bg-yellow-500">
                    دوره‌های مرتبط
                </div>
            </div>
            
            </div>
        </div>
    );
};

export default CardSidebar;
