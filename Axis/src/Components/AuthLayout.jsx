import React from "react";
import illustration from "../assets/Auth/illustration.svg";
import home from '../assets/Auth/Frame (1).svg'
import { Link } from 'react-router-dom'
export default function AuthLayout({ title = "ثبت نام", subtitle, children }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#5751E1]  p-4">

      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        
   
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-8 md:px-16 py-10 bg-[#a19cffff] text-gray-800">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center md:text-right">
              <div className="mt-10 md:mt-16"></div>
            هرگز از{" "}
            <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-lg inline-block transform -rotate-1 hover:rotate-0 transition-transform">
              یادگیری
            </span>{" "}
            دست نکشید
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed text-center md:text-right">
            زندگی هرگز از آموزش دست نمی‌کشد
          </p>

          <div className="mt-8 w-full max-w-xs md:max-w-sm"> 
            <div className="flex justify-end">
          <Link to='/'>   <img src={home}/> </Link> 
          </div>
            <img
              src={illustration}
              alt="Learning illustration"
              className="w-full h-auto rounded-2xl py-4"
            />
          </div>
        </div>


        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 md:p-8 lg:p-12 bg-white  dark:[#020202ff]">
          <div className="w-full max-w-md text-center md:text-right">
     
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800   dark:text-gray-200 mb-2">{title}</h3>

      
            {subtitle ? (
              <p className="text-gray-500 mb-6">{subtitle}</p>
            ) : (
              <p className="text-gray-500 mb-6">
                برای ادامه لطفاً اطلاعات خود را وارد کنید
              </p>
            )}

          
            <div>{children}</div>

        
          </div>
        </div>
      </div>
    </div>
  );
}
