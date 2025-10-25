import React from 'react';
import CoursesImg from '../../assets/Courses/MainCourses/course_thumb03.jpg.svg'



const CourseCard = ({ course }) => {
  
  if (!course) return null;

  return (
    <div className="max-w-100 relative bottom-14 left-5 m-4 md:max-w-sm mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden  border border-gray-100 dark:bg-gray-200 dark:border-[#ffff] dark:hover:shadow-gray-600">
      {/* بخش تصویر */}
      <div className="relative  pr-2 pl-2 pt-3 pb-3 sm:h-56 bg-gradient-to-r overflow-hidden border rounded-md">
        <img
          className="w-full h-full object-cover opacity-80"
          src={CoursesImg}
          alt={course.title}
        />
        {/* آیکون لایک/علاقه */}
        <button className="absolute top-3 right-3 p-2 bg-white/70 rounded-full text-red-500 hover:text-red-700 transition duration-150">
          {/* آیکون قلب   */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </button>
        {/* آیکون و برچسب‌های Exp و Laravel Pro (برای شبیه‌سازی) */}
        <div className="absolute top-3 left-3 flex flex-col space-y-2">
            <span className="text-white text-xs font-bold px-3 py-1 bg-gray-800/80 rounded-lg shadow-md transform -rotate-6">
                Exp
            </span>
            <span className="text-white text-xs font-bold px-3 py-1 bg-red-600/80 rounded-lg shadow-md transform rotate-3">
                Laravel Pro
            </span>
        </div>
      </div>

      {/* بخش اطلاعات */}
      <div className="p-4 sm:p-5 text-right space-y-3">
        {/* عنوان دوره */}
        <h2 className=" font-bold text-black">
          {course.title}
        </h2>

        {/* برچسب ها و رتبه بندی */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex space-x-2 space-x-reverse">
            <span className="px-3 py-1 bg-[#EFEFF1] text-dark rounded-full font-medium dark:bg-[#EFEFF1] text-[#161439]">
              {course.level} {/* مبتدی */}
            </span>
            <span className="px-3 py-1 bg-[#EFEFF1] text-dark rounded-full font-medium dark:bg-[#EFEFF1] text-[#161439]">
              {course.type} {/* بک اند */}
            </span>
          </div>
          {/* رتبه بندی */}
          <div className="flex items-center text-yellow-500">
            <span className="ml-1 text-gray-700 dark:text-[#888888] font-semibold">{course.rating}</span>
            {/* آیکون ستاره */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
        </div>

        {/* جزئیات بیشتر (سطح، شرکت کنندگان، مدرس) */}
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400  pt-3 mt-3 border-gray-100 dark:border-gray-700" dir='ltr'>
          <div className="flex items-center space-x-2 space-x-reverse" dir='rtl'>
            {/* آیکون لایه ها (سطح متوسط) */}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m-8-4v10l-8 4m0-10l8 4"/>
            </svg>
            <span className="font-medium">{course.difficulty}</span> {/* متوسط */}
          </div>
          <div className="flex items-center space-x-2 space-x-reverse" dir='rtl' >
            {/* آیکون افراد (شرکت کنندگان) */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.55.8 2.39 1.8 2.96 2.76.08.14.07.28.05.42-.04.28-.15.53-.32.75-.17.22-.38.4-.63.55H22v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span className="font-medium">{course.participants}</span>
          </div>
        </div>

        {/* دکمه لایک/دیسلایک و مدرس */}
        <div className="flex items-center justify-between pt-3  border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-4 space-x-reverse text-sm font-semibold">
            {/* تعداد لایک و دیسلایک */}
            <div className="flex items-center">
              <button className="flex items-center p-2 bg-gray-500 rounded-lg text-black hover:bg-gray-400 transition dark:bg-gray-200 dark:hover:bg-gray-300">
                <span className="ml-1">{course.likes}</span>
                {/* آیکون شصت رو به بالا */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.5-.54 1.81-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <button className="flex items-center p-2 bg-gray-500 rounded-lg text-black hover:bg-gray-400 transition dark:bg-gray-200 dark:hover:bg-gray-300">
                <span className="ml-1">{course.dislikes}</span>
                {/* آیکون شصت رو به پایین */}
                <svg className="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.5-.54 1.81-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* نام مدرس */}
          <div className="flex items-center text-gray-700 dark:text-gray-500">
            {/* آیکون کلاه فارغ التحصیلی */}
          
            <span className="font-medium">{course.instructor}</span>
          </div>
        </div>

        {/* قیمت و تاریخ */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700" dir='ltr'>
          <p className="text-sm font-extrabold text-[#5751E1]" dir='rtl'>
            {course.price} هزار تومان
          </p>
          <div className="flex items-center text-gray-500 dark:text-gray-400" dir='rtl'>
            {/* آیکون تقویم */}
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-4 14v-4m0 0H8m4 0h4m-4-4h.01M3 7h18a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"/>
            </svg>
            <span className="text-sm">{course.date}</span>
          </div>
        </div>
      </div>
  
    </div>
  );
};

export default CourseCard;