import React from "react";
import letter from '../../assets/Landing/SVG.svg';
import madrak from '../../assets/Landing/SVG(1).svg';
import laptop from '../../assets/Landing/SVG(2).svg';
import people from '../../assets/Landing/SVG(3).svg';
import Student from '../../assets/Landing/student.svg';
import Teacher from '../../assets/Landing/teacher.svg';
import Button from "../../Common/button";

const LearningSection = () => {
  const features = [
    {
      title: "بازاریابی ایمیلی",
      desc: "بازاریابی ایمیلی ابزاری موثر برای ارتباط با مشتریان و افزایش فروش است.",
      img: letter,
    },
    {
      title: "دریافت گواهی آنلاین",
      desc: "گواهی آنلاین دریافت کنید و مدارک معتبر مهارت‌های خود را تکمیل کنید.",
      img: madrak,
    },
    {
      title: "هر چیزی یاد بگیر",
      desc: "هر چیزی یاد بگیرید و افق‌های جدیدی را به روی خودتان باز کنید.",
      img: laptop,
    },
    {
      title: "با کارشناسان بیاموزید",
      desc: "با کارشناسان بیاموزید و از تجربیات آنها بهره‌مند شوید.",
      img: people,
    },
  ];

  return (
    <section className="bg-[#282568]
text-white py-20 px-8 md:px-20 text-center">
      <h4 className="text-indigo-300 font-medium mb-3">برای یادگیری آماده شوید</h4>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        سفر یادگیری خود را از همین امروز شروع کنید
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-14">
        شهودی Groove اعضای maketeam صندوق ورودی را با هم به اشتراک گذاشت سازماندهی، اولویت بندی و.در این قسمت.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {features.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center space-y-3">
            {item.img && (
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mb-2"
              />
            )}
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

        <div className="bg-white text-gray-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-2xl font-bold">دانشجو شوید</h3>
            <p className="text-gray-600">
 به میلیون ها نفر از سراسر جهان بپیوندید
با هم یاد می گیرند یادگیری آنلاین.
            </p>
            <button className="mt-3 bg-[#5751E1]
text-white px-6 py-2 rounded-full hover:bg-[#2a1fa3] transition">
        درخواست
            </button>
          </div>
          <img src={Student} className="w-40 mt-6 md:mt-0" />
        </div>

        <div className="bg-white text-gray-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between shadow-lg">
          <div className="space-y-3 text-center md:text-right">
            <h3 className="text-2xl font-bold">مربی شوید</h3>
            <p className="text-gray-600">
              برای مثال بی اهمیت، کدام یک از ما متعهد می شویم
ورزش بدنی بله این اتفاق در اینجا می افتد.
            </p>
            <button className="mt- bg-[#5751E1] text-white px-6 py-2 rounded-full hover:bg-[#2a1fa3] transition">
         درخواست
            </button>
          </div>
          <img src={Teacher} className="w-40 mt-6 md:mt-0" />
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
