// src/pages/Courses.jsx
// src/pages/CoursesPage.jsx
// import React from 'react'
import React, { useState } from "react";
const About = () => {
  const [showMore, setShowMore] = useState(false);

  const categories = [
    "هنر و طراحی (8)",
    "تجارت (12)",
    "علم داده (7)",
    "توسعه (10)",
    "امور مالی (8)",
    "سلامت و تناسب اندام (8)",
    "سبک زندگی (9)",
    "بازاریابی (6)",
    "برنامه‌نویسی موبایل (4)",
    "مدیریت پروژه (5)",
  ];

  const visibleCategories = showMore ? categories : categories.slice(0, 7);

  return (
    <div>
          <aside className="w-full md:w-72 flex flex-col gap-4 pr-7">
          {/* دسته‌بندی‌ها */}
          <div className="bg-[#F7F7F9] rounded-2xl shadow p-4">
            <h2 className="text-base font-bold mb-3">دسته‌بندی‌ها</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {visibleCategories.map((item) => (
                <li key={item}>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2 accent-blue-500" />
                    {item}
                  </label>
                </li>
              ))}
            </ul>

            {/* نمایش بیشتر / کمتر */}
            <button
              className="text-blue-600 text-sm mt-3"
              onClick={() => setShowMore((prev) => !prev)}
            >
              {showMore ? "نمایش کمتر -" : "نمایش بیشتر +"}
            </button>
          </div>
           </aside>


    </div>
  )
}

export default About