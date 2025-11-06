import React from "react";
import newsletter from "../../assets/Landing/newsletter_img.png.svg"

const SearchBanner = () => {
  return (
    <section className="bg-[#4F46E5] text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* بخش متن و فرم */}
        <div className="flex flex-col items-start space-y-6">
          {/* تیتر */}
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed">
            می‌خواهید از دوره‌های جدید در جریان باشید؟
          </h2>

          {/* فیلد ایمیل و دکمه در یک خط */}
          <div className="flex flex-col sm:flex-row-reverse items-center w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="ایمیل خود را تایپ کنید"
              className="flex-grow bg-[#5B55E3] text-white placeholder-gray-200 px-5 py-3 rounded-full outline-none focus:ring-2 focus:ring-yellow-400 transition w-full"
            />
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition whitespace-nowrap">
              اکنون مشترک شوید
            </button>
          </div>
        </div>

        {/* بخش تصویر */}
        <div className="flex justify-center md:justify-end">
          <img
            src={newsletter}
            className="w-72 md:w-80 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
