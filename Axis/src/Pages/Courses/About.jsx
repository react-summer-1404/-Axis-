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

            {/* نحوه برگزاری */}

            <div className="bg-[#F7F7F9] rounded-2xl shadow p-4">
            <h2 className="text-base font-bold mb-3">نحوه برگزاری</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                  حضوری
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                  آنلاین
                </label>
              </li>
            </ul>
          </div>

          {/* سطح مهارت */}
          <div className="bg-[#F7F7F9] rounded-2xl shadow p-4">
            <h2 className="text-base font-bold mb-3"> سطح مهارت</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                  مبتدی‌
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                متوسط
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-blue-500" />
                   بالا
                </label>
              </li>
            </ul>
          </div>

              {/* مربیان */}
              <div className="bg-[#F7F7F9] rounded-2xl shadow p-4">
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
           </aside>


    </div>
  )
}

export default About