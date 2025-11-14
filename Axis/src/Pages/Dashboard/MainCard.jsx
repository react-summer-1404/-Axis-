import React, { useState } from 'react';
import DashboardCard from '../../Pages/Dashboard/DashboardCard'; 
import SectionHeader from '../../Pages/Dashboard/SectionHeader';

const initialSuggestedCourses = [

  { id: 1, title: "آموزش کامل کار با Figma", imageSrc: "/src/assets/figma.png", isSuggested: true },
  { id: 2, title: "آموزش Java Script", imageSrc: "/src/assets/js.png", isSuggested: true },
];

const initialRunningCourses = [
  { 
    id: 3, 
    title: "Tailwind css آموزش", 
    imageSrc: "/src/assets/tailwind.png", 
    instructor: "مهدی اصغری",
    badgeText: "۴۰٪ تخفیف"
  },
  { 
    id: 4, 
    title: "آموزش کار با API", 
    imageSrc: "/src/assets/api.png", 
    instructor: "محسن اسفندیاری"
  },
];


const MainCard = () => {

  const [suggestedCourses] = useState(initialSuggestedCourses);
  const [runningCourses] = useState(initialRunningCourses);
  
  return (

    <div dir="rtl" className="max-w-6xl mx-auto p-4 lg:p-8">

      <SectionHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestedCourses.map(course => (
          <DashboardCard 
            key={course.id} 
            title={course.title} 
            imageSrc={course.imageSrc} 
            isSuggested={course.isSuggested}
          />
        ))}
      </div>

      <hr className="my-8 border-gray-200" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {runningCourses.map(course => (
          <div key={course.id} className="relative"> 
            <DashboardCard 
              title={course.title} 
              imageSrc={course.imageSrc} 
              instructor={course.instructor}
              badgeText={course.badgeText}
              isSuggested={false} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainCard;