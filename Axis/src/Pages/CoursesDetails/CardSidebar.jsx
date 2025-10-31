import React from 'react';
import cardImage from '../../assets/Courses/MainCourses/courses_details.jpg.svg';  

const CardSidebar = () => {
    return (
        <div className="max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden my-10 border border-gray-100">
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
            <div className=" text-right"> 
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

                    <div className="flex items-center pt-2">
                        <span className="mr-1">24/07/2024</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                    </div>
                    
                    <div className="flex items-center pt-2">
                        <span className="mr-1">محمد محسن</span>
                        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>

                </div>
                
           
                <p className="text-sm text-gray-500 mb-2">
                    یکی از بزرگ‌ترین چالش‌ها در تیم‌های محصول، تفاوت دیدگاه‌ها و تعارضات موجود بین طراحان و مهندسان است.
                </p>
                
                <p className="text-sm text-gray-500">
                    این دوره به مدیران محصول، طراحان و توسعه‌دهندگان کمک می‌کند تا با درک مشترک از اهداف، فرآیندها و ابزارها، به صورت هماهنگ‌تر کار کنند.
                </p>
            </div>
        </div>
    );
};

export default CardSidebar;
