// src/pages/Courses.jsx
// src/pages/CoursesPage.jsx
// import React from 'react'
import React, { useState } from "react";
import RatingSection from "./RatingSection";
import PriceFilter from "./PriceFilter";
import TechnologyList from "../../Componets/TechnologyList";
import CourseLevelList from "../../Componets/CourseLevelList";
import CourseTypeList from "../../Componets/CourseTypeList";
const About = () => {
  const [showMore, setShowMore] = useState(false);


  return (
    <div>
          <aside className="w-full md:w-72 flex flex-col gap-4 pr-7 ">
          {/* دسته‌بندی‌ها */}
          <div className="bg-[#F7F7F9] rounded-2xl shadow p-4 dark:bg-[#cbcbed] ">
            <h2 className="text-base font-bold mb-3">دسته‌بندی‌ها</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
             <TechnologyList/>
            </ul>

            {/* نمایش بیشتر / کمتر */}
            <button
              className="text-blue-600 text-sm mt-3"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "نمایش کمتر -" : "نمایش بیشتر +"}
            </button>
          </div>

            {/* نحوه برگزاری */}

            <div className="bg-[#F7F7F9] rounded-2xl shadow p-4 dark:bg-[#cbcbed]">
            <h2 className="text-base font-bold mb-3">نحوه برگزاری</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <CourseTypeList/>
            </ul>
          </div>

          {/* سطح مهارت */}
          <div className="bg-[#F7F7F9] rounded-2xl shadow p-4 dark:bg-[#cbcbed]">
            <h2 className="text-base font-bold mb-3"> سطح مهارت</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <CourseLevelList/>
            </ul>
          </div>

              {/* مربیان */}
              <div className="bg-[#F7F7F9] rounded-2xl shadow p-4 dark:bg-[#cbcbed]">
            <h2 className="text-base font-bold mb-3"> مربیان </h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                   دیوید میلار (10)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                  وید وارن (13)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                 جنی ویلسون(22)
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                  جیکوب جونز(42)
                </label>
              </li>
            </ul>
          </div>
          <RatingSection/>
          <PriceFilter/>
           </aside>
    </div>
  )
}

export default About