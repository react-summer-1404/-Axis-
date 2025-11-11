import React from "react";
import Button from "../../Common/button";
import Heropic from "../../assets/Landing/hero.svg"
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
   <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white  dark:bg-blue-950">


  <div className="flex-1 flex justify-center md:justify-start dark:bg-blue-950">
    <img
      src={Heropic}
      alt="banner"
      className="w-[300px] md:w-[500px] h-auto"
    />
  </div>


  <div className="flex-1 text-right mt-8 md:mt-0 md:pr-10 dark:bg-blue-950">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 leading-snug">
      هرگز از{" "}
      <span className="bg-[#FFC224] text-gray-900 px-2 py-1 rounded">
        یادگیری
      </span>{" "}
      دست نکشید، زندگی هرگز از آموزش دست نمی‌کشد
    </h1>

    <p className="mt-4 text-gray-600 dark:text-gray-200 text-lg md:text-xl">
      هر سفر آموزشی و یادگیری، منحصر به فرد است؛ ما به شما کمک خواهیم کرد.
    </p>

    <div className="mt-6">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition">
    <Link to='course'>     رایگان آزمایش کنید </Link> 
      </button>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
