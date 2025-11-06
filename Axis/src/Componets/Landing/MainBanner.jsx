import React from "react";
import about from "../../assets/Landing/about_img.png.svg"
import Button from "../../Common/button";

const MainBanner = () => {
  return (
    <section className="bg-white-50 py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* ===== سمت چپ: متن ===== */}
        
        <div className="text-center md:text-right">
           
            <button className="mb-6 px-6 py-2 bg-[#EFEEFE] text-blue rounded-full shadow-md ">
درباره ما بیشتر بدانید      </button>
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug text-center md:text-right">
  هزارن <span className="bg-yellow-300 px-2 rounded">دوره‌های</span>
  <br />
  برتر اکنون در یک مکان
</h2>


          <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">
صندوق ورودی مشترک بصری 
 
این کار را برای اعضای تیم آسان می کند
<br/>
سازماندهی و اولویت بندی در مورد پایه پلتفرم وب
          </p>

          <ul className="space-y-3 mb-8 text-gray-700">
            <li className="flex items-center font-bold justify-center md:justify-end gap-2">
            
              <span>بهترین مربیان</span>
            </li>
            <li className="flex items-center font-bold justify-center md:justify-end gap-2">
              
              <span>از هر کجا به کلاس خود دستسرسی داشته باشید</span>
            </li>
            <li className="flex items-center font-bold justify-center md:justify-end gap-2">
            
              <span>برنامه دوره ای انعطاف پذیر</span>
            </li>
          </ul>
        <section className="text-gray-900 ">
      <Button>رایگان ازمایش کنید</Button>
    </section>
        </div>

        {/* ===== سمت راست: عکس ===== */}
        <div className="flex justify-center">
          
            <img
              src={about}
              alt="آموزش آنلاین"
              className="object-cover w-full h-full"
            />
          </div>
 </div>
    </section>
  );
}
export default  MainBanner;
