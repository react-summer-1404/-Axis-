import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0B032D] text-gray-300 pt-14 pb-6 px-6 md:px-20 text-right" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">در تماس باشید</h3>
          <p className="text-sm mb-4">
            ما را در شبکه‌های اجتماعی دنبال کنید:
          </p>


          <div className="flex gap-4 justify-start mb-5">
 
            <a href="#" className="hover:text-pink-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
            </a>
   
            <a href="#" className="hover:text-sky-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M9.04 15.44 8.83 19c.4 0 .57-.17.78-.37l1.87-1.8 3.88 2.85c.71.4 1.22.19 1.4-.66l2.55-11.96.01-.01c.23-1.06-.38-1.48-1.08-1.22L3.45 10.37c-1.03.4-1.02.97-.18 1.22l4.57 1.43 10.6-6.69-9.4 9.11z" />
              </svg>
            </a>
 
            <a href="#" className="hover:text-red-500 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M21.8 8s-.2-1.4-.8-2c-.8-.9-1.6-.9-2-1C16.5 4.7 12 4.7 12 4.7h-.1s-4.5 0-7 .3c-.4 0-1.2 0-2 1-.6.6-.8 2-.8 2S0 9.7 0 11.5v1c0 1.8.2 3.5.2 3.5s.2 1.4.8 2c.8.9 1.9.9 2.4 1 1.7.2 7.2.3 7.2.3s4.5 0 7-.3c.4 0 1.6 0 2.4-1 .6-.6.8-2 .8-2s.2-1.7.2-3.5v-1c0-1.8-.2-3.5-.2-3.5zM9.6 14.8V9.2l5.2 2.8-5.2 2.8z" />
              </svg>
            </a>
          </div>


          <div className="flex gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-28"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="w-28"
            />
          </div>
        </div>


        <div>
          <h3 className="text-white text-lg font-semibold mb-4">شرکت ما</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">با ما همکاری کنید</a></li>
            <li><a href="#" className="hover:text-white">پادکست‌ها</a></li>
            <li><a href="#" className="hover:text-white">وبلاگ</a></li>
            <li><a href="#" className="hover:text-white">تماس با ما</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white text-lg font-semibold mb-4">لینک های مفید</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">آموزش‌ها</a></li>
            <li><a href="#" className="hover:text-white">خدمات مشاوره</a></li>
            <li><a href="#" className="hover:text-white">درباره ما</a></li>
            <li><a href="#" className="hover:text-white">Quikbit Plus</a></li>
          </ul>
        </div>


        <div>
          <h3 className="text-white text-lg font-semibold mb-4">آکادمی </h3>
          <p className="text-sm leading-7 mb-4">
            مکانی برای یادگیری مهارت‌های کار از راه دور، آموزش مهارت‌های دیجیتال
            و پیشرفت شغلی در دنیای امروز.
          </p>
          <p className="text-sm">آدرس: ساری، جاده دریا، ساختمان سپهر، طبقه ۲</p>
          <p className="text-sm mt-1">تلفن: </p>
        </div>
      </div>


      <div className="bg-[#070020] text-gray-500 text-center text-xs mt-8 py-3 rounded-md">
      </div>
    </footer>
  );
};

export default Footer;
