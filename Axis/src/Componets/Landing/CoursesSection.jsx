
import React from "react";

const courses = [
  {
    id: 1,
    title: "آموزش طراحی رابط کاربری",
    teacher: "سارا محمدی",
    students: 150,
    price: "390,000 تومان",
    image: "https://via.placeholder.com/300x200.png?text=UI+Design",
    color: "from-green-400 to-teal-500",
  },
  {
    id: 2,
    title: "آموزش برنامه‌نویسی ری‌اکت",
    teacher: "علی احمدی",
    students: 230,
    price: "450,000 تومان",
    image: "https://via.placeholder.com/300x200.png?text=React",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    title: "آموزش دیجیتال مارکتینگ",
    teacher: "نیلوفر رضایی",
    students: 190,
    price: "420,000 تومان",
    image: "https://via.placeholder.com/300x200.png?text=Marketing",
    color: "from-pink-400 to-rose-500",
  },
  {
    id: 4,
    title: "آموزش تولید محتوا",
    teacher: "محمد کرمی",
    students: 120,
    price: "350,000 تومان",
    image: "https://via.placeholder.com/300x200.png?text=Content",
    color: "from-orange-400 to-red-500",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
        <div className="px-6 md:px-20   text-center flex justify-center">
            <button className="mb-6 px-6 py-2 bg-[#EFEEFE] text-blue rounded-full shadow-md ">
      دسته بندی های پرطرفدار
      </button>
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          بهترین دوره‌های آموزشی جهان را با ما کاوش کنید
        </h2>
        <p className="text-gray-500">
امروزه به دلیل آنکه ارتباطات فضای مجازی رونق زیادی یافته است
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`rounded-xl shadow-md overflow-hidden bg-gradient-to-br ${course.color} text-white transition-transform hover:-translate-y-2 hover:shadow-xl`}
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
              <p className="text-sm opacity-90 mb-3">مدرس: {course.teacher}</p>
              <div className="flex items-center justify-between text-sm">
                <span>{course.students} دانشجو</span>
                <span className="font-bold">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}