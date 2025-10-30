import React from 'react'
import LevelIcon from '../../assets/Courses/iconCourses/SVG.svg'
import DurationIcon from '../../assets/Courses/iconCourses/SVG (1).svg'
import LessonsIcon from '../../assets/Courses/iconCourses/SVG (2).svg'
import TestsIcon from '../../assets/Courses/iconCourses/SVG (3).svg'
import CertIcon from '../../assets/Courses/iconCourses/SVG (4).svg'
import GraduateIcon from '../../assets/Courses/iconCourses/SVG (5).svg'
import Payment from '../../assets/Courses/iconCourses/payment.png.svg'
const Sidebar = () => {

  const courseIcons = [
     LevelIcon,
    DurationIcon,
    LessonsIcon,
    TestsIcon,
     CertIcon,
     GraduateIcon,
    ];

  const courseDetails = [
    { label: 'مرحله', value: 'کارشناس' },
    { label: 'مدت زمان', value: '11h 20m' },
    { label: 'درس ها', value: '12' },
    { label: 'آزمون ها', value: '145' },
    { label: 'گواهینامه ها', value: 'بله' },
    { label: 'فارغ التحصیل', value: '25K' },
  ];

  const socialLinks = [
    { icon: 'F', className: 'hover:bg-blue-600', link: '#' }, 
    { icon: 'T', className: 'hover:bg-sky-500', link: '#' }, 
    { icon: 'W', className: 'hover:bg-green-500', link: '#' }, 
    { icon: 'I', className: 'hover:bg-pink-600', link: '#' }, 
    { icon: 'Y', className: 'hover:bg-red-600', link: '#' }, 
  ];

  return (
   
    <div >
    <div className="w-full lg:w-80 lg:mr-24 lg:mt-10 p-4 space-y-6 lg:sticky lg:top-8 border border-gray-300 rounded-xl" dir="rtl">
      
      {/* { Course Price */} 
      <div className="bg-[#5751E1] text-white rounded-xl p-5 shadow-lg">
        <h3 className="text-sm mb-2 opacity-80">هزینه این دوره:</h3>
        <p className="text-3xl font-extrabold">180.000 تومان</p>
      </div>

      {/* { Course Details */} 
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
        
        {/* Section */}
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">دوره شامل:</h3>
        <ul className="space-y-3">
          {courseDetails.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-gray-700 text-sm">
              <span className="flex items-center">
               
                <span className="ml-2 w-5 h-5 text-violet-500 text-center text-lg font-mono">
                <img 
                        src={courseIcons[index]} 
                        alt={item.label}
                        className="w-full h-full text-violet-500"
                    />
                </span>
                {item.label}
              </span>
              <span className="font-semibold">{item.value}</span>
            </li>
          ))}
        </ul>

        <hr className="my-6" />

        {/* Section: پرداخت امن */}
        <h3 className="text-md font-bold text-gray-800 mb-3">پرداخت امن:</h3>
        <div className="flex justify-center p-3 border rounded-lg bg-gray-50">
          <span className="text-xs text-gray-500">
           <img src={Payment}/> 
          </span>
        </div>

        <hr className="my-6" />

        {/* Section: به اشتراک بگذارید */}
        <h3 className="text-md font-bold text-gray-800 mb-3">این دوره را به اشتراک بگذارید:</h3>
        <div className="flex justify-center space-x-2 space-x-reverse">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 transition duration-200 ${social.className}`}
            >
              <span className="text-xl font-bold uppercase">{social.icon}</span>
            </a>
          ))}
        </div>

        <hr className="my-6" />

        {/* Button: ثبت نام در دوره */}
        <button className="w-full flex items-center justify-center p-3 bg-yellow-500 text-gray-900 rounded-full font-bold text-lg hover:bg-yellow-600 transition duration-300 shadow-md">
          <span className="ml-2">ثبت نام در دوره</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
        </button>
      </div>
    </div>
   
    </div>
  );
};

export default Sidebar;
