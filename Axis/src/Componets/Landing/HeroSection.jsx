import React from "react";
import BannerImage from "../../assets/Landing/banner_img.png.svg"
import ShapeImage from "../../assets/Landing/banner_shape01.png.svg"
import user2 from "../../assets/Landing/banner_author01.png.svg"
import user1 from "../../assets/Landing/banner_author02.png.svg"

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16 bg-gradient-to-r from-purple-100 to-white relative overflow-hidden">
      

      <div className="flex-1 flex justify-center items-center relative">

        <img
          src={ShapeImage}
 
          className="absolute w-[300px] md:w-[500px] top-[90px] left-[60px] opacity-90"
        />

        <img
          src={BannerImage}
   
          className="relative w-[350px] md:w-[500px] z-10"
        />
<div className="absolute w-[175px] h-[89.28px] top-[27px] left-[436px] opacity-100 rounded-[6px] bg-white shadow-md flex flex-col items-end justify-center px-3 py-2 gap-3  z-10">
  <div className="absolute w-[175px] h-[89.28px] top-[20px] left-[10px] rounded-[6px] bg-gray-400 opacity-30"></div>

  <div className="flex items-center gap-2">
    <img
      src={user2}
      className="w-8 h-8 rounded-full object-cover"
    />
    <span className="text-gray-800 text-sm ">مریم</span>
  </div>
  <div className="flex items-center gap-2">
    <img
      src={user1}
      className="w-8 h-8 rounded-full object-cover"
    />
    <span className="text-gray-800 text-sm">حسین</span>
  </div>
</div>

      </div>

 
      <div className="flex-1 text-right mt-10 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-snug"> 
         هرگز از
         
        <span className=" mt-6 bg-yellow-200 text-white-900 p-2">یادگیری</span> {" "}
          <span className="block text-black-600 mt-2">
           دست نکش، زندگی هرگز از آموزش دست نمی‌کشد
          </span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          هر سفر آموزشی و یادگیری، منحصر به فرد است؛ ما به شما کمک خواهیم کرد.
        </p>
        <button className="mt-6 bg-blue-400 text-gray-900 px-6 py-3 rounded-full hover:bg-yellow-500 transition">
          رایگان آزمایش کنید
        </button>
      </div>
    </section>
  );
};

export default HeroSection;


