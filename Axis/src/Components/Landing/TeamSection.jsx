import React from 'react';
import Button from '../../Common/button';
import sofia from '../../assets/Landing/sofia.svg';
import  ronald  from '../../assets/Landing/ronald.svg';
import  mia  from '../../assets/Landing/mia.svg';
import  danis  from '../../assets/Landing/danis.svg';
const TeamSection = () => {
  return (
    <div className="bg-blue-50 py-16 px-8 dark:bg-blue-950">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:w-2/3">
          <div className="flex flex-col items-center text-center">
            <img src={sofia}
            className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl dark:text-white">سوفیا آوا</h3>
            <p className="text-gray-500   dark:text-white">بازاریابی دیجیتال</p>
            <div className="flex space-x-3 mt-4  dark:text-white">
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={ronald}
            className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl  dark:text-white">رونالد اس استنتون</h3>
            <p className="text-gray-500  dark:text-white">طراحی وب سایت</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={mia} 
             className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl  dark:text-white">اولیویا میا</h3>
            <p className="text-gray-500  dark:text-white">طراحی وب سایت</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <img src={danis} 
             className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl  dark:text-white">دنیس ال تزنر</h3>
            <p className="text-gray-500  dark:text-white">رهبر طراحی UX</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-blue-500"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>


        <div className="lg:w-1/3 mt-12 lg:mt-0 text-center lg:text-right">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">کلاس‌های برتر ما و مربیان خبره در یک مکان</h2>
          <p className="text-lg text-gray-600 mx-auto max-w-2xl  dark:text-white">
          هنگامی که یک چاپگر ناشناس یک گالری از نوع و کتاب نمونه درهم درست شده باقی نمانده است فقط پنج قرن
          </p>
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full">همه مربیان را ببینید</button>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;