// src/pages/Courses.jsx
// src/pages/CoursesPage.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen p-8 font-[Vazirmatn] " dir='rtl'>
     
      
      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section (Course Cards) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Example Card */}
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f8f0b0b0a1a1?auto=format&fit=crop&w=600&q=80"
              alt="course"
              className="rounded-xl mb-4"
            />

            <h3 className="text-base font-bold mb-2">
              طراحی کامل گرافیک برای مبتدی‌ها
            </h3>

            <div className="flex items-center text-sm text-gray-500 mb-2">
              ⭐ <span className="ml-1">5</span> • متوسط • 12 درس
            </div>

            <div className="flex justify-between text-gray-500 text-sm mb-2">
              <span>مدرس: محسن</span>
              <span>۱۴۰۳/۴/۲۱</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-indigo-600 font-bold text-lg">
                ۱۹۰ هزار تومان
              </span>
              <div className="flex items-center gap-4 text-gray-600 text-sm">
                ❤️ 169 🔖 71
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <aside className="w-full md:w-72 flex flex-col gap-4">
          {/* دسته بندی ها */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-base font-bold mb-3">دسته‌بندی‌ها</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                "هنر و طراحی (8)",
                "تجارت (12)",
                "علم داده (7)",
                "توسعه (10)",
                "امور مالی (8)",
                "سلامت و تناسب اندام (8)",
                "سبک زندگی (9)",
              ].map((item) => (
                <li key={item}>
                  <label className="flex items-center">
                    <input type="checkbox" className="ml-2 accent-indigo-500" />
                    {item}
                  </label>
                </li>
              ))}
            </ul>
            <button className="text-indigo-600 text-sm mt-3">
              نمایش بیشتر +
            </button>
          </div>

          {/* نحوه برگزاری */}
          <div className="bg-white rounded-2xl shadow p-4">
            <h2 className="text-base font-bold mb-3">نحوه برگزاری</h2>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-indigo-500" />
                  حضوری
                </label>
              </li>
              <li>
                <label className="flex items-center">
                  <input type="checkbox" className="ml-2 accent-indigo-500" />
                  آنلاین
                </label>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
