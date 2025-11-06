import React from "react";
import man from '../../assets/Landing/man_mains.svg';

const MainSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-gradient-to-br from-[#f8f9ff] to-[#fafaff]">
      

      <div className="md:w-1/2 space-y-6 text-right">
        <h4 className="text-indigo-500 font-semibold">سؤالات متداول</h4>
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          شروع کن تمرین از مربیان <br /> حرفه‌ای جهان
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">
  صندوق ورودی مشترک بصری Groove 
  این کار را برای اعضای تیم آسان می کند
سازماندهی، اولویت بندی و.در این قسمت
        </p>

        <div className="space-y-3 mt-6">
          {[
            "نامبر وان می خواهد به شما چه چیزی دهد؟",
            "چرا ما را برای تحصیل خود انتخاب کنید؟",
            "چگونه خدماتی را برای شما ارائه می کنیم؟",
            "آیا برای دوره خود مقرون به صرفه هستید؟",
          ].map((q, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl p-4 shadow-sm cursor-pointer border border-gray-100"
            >
              <summary className="flex items-center justify-between text-gray-800 font-medium">
                {q}
         
                <svg
 
                  className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                صندوق ورودی مشترک بصری Groove سازماندهی اعضای تیم را آسان می کند در این قسمت نه تنها پنج قرن زنده ماند چاپگر ناشناخته یک گالری از نوع و درهم گرفت.
              </p>
            </details>
          ))}
        </div>
      </div>

   
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-36 h-36 bg-yellow-200 rounded-full -z-10 blur-2xl"></div>
          <img
            src={man}
            alt="student"
            className="w-72 md:w-80 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
