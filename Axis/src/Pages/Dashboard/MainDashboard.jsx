
import React from 'react';
import {  Bell } from 'lucide-react';
import ThemeToggle from '../../Common/Button/ThemeToggle';
import Home from '../../assets/Courses/iconCourses/Frame (1).svg'
import { StatCard } from './StatCard';
import shoppingCartIcon from '../../assets/Courses/DashboardIcon/Group 87.svg'
import graduationCapIcon from '../../assets/Courses/DashboardIcon/Group 86.svg'



const ProgressCircle = ({ progress }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
   
       
    <div className="relative flex items-center justify-center w-36 h-36">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#f3f4f6"
          strokeWidth="10"
        />

        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="#FFC224" 
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>

      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-[#5751E1]">{progress}%</span>
      </div>
    </div>
   
  );
};

<StatCard/>

const MainDashboard = () => {

  return (

    <div className="p-6 md:p-10  font-sans min-h-screen rtl text-right rounded-full">
      <div className="flex justify-end items-center mb-10">
        <div className="flex space-x-3 rtl:space-x-reverse gap-5">
        <button className='size-6'>  <ThemeToggle/> </button>
        <img src={Home}/>
          
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"dir='ltr'>
        
        <div className="flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 mb-4 sm:mb-0 ml-4">
            <ProgressCircle progress={60} />
          </div>
          <div className="p-4 mr-4 text-sm text-gray-500">
            برای شرکت در دوره‌ها باید حداقل 80% از پروفایل خود را تکمیل کنید.
          </div>
        </div>

        <StatCard 
          count={2} 
          title={'رزرو کرده‌اید'} 
          iconSrc={shoppingCartIcon} 
       
          countColor={'text-indigo-600'} 
          titleColor={'text-gray-500'} 
        />
        
 
        <StatCard 
          count={4} 
          title={'شرکت کرده‌اید'} 
          iconSrc={graduationCapIcon} 
       
          countColor={'text-purple-600'} 
          titleColor={'text-gray-500'} 
        />
      </div>
      
 
      <div className="mt-10 p-6 bg-[#C8C1ED66] rounded-3xl relative shadow-lg">

        <div className="absolute bottom-48 left-0 p-4 transform translate-x-4">
          <div className="p-3 bg-[#5751E1] rounded-full text-white shadow-xl">
            <Bell size={26} fill="white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-6 mt-4">جدیدترین اخبار و مقالات</h3>
        
      
        <div className="space-y-4 text-gray-700">
          <div className="text-sm">
            <span className="text-gray-500 ml-4">۱۴۰۴ / ۱۱ / ۳۰</span>
            دوره آموزش جامع از پایه تا پیشرفته Next.js منتشر شد. <span className="text-red-600 font-bold">جدید</span>
          </div>
          <hr className="border-t border-dashed border-gray-400" />
          <div className="text-sm">
            <span className="text-gray-500 ml-4">۱۴۰۴ / ۱۱ / ۲۵</span>
            تخفیف ویژه دوره ری‌اکت را از دست ندهید.
          </div>
          <hr className="border-t border-dashed border-gray-400" />
          <div className="text-sm">
            <span className="text-gray-500 ml-4">۱۴۰۴ / ۱۱ / ۲۳</span>
            دوره آموزش tailwind روز به روز شد.
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default MainDashboard;