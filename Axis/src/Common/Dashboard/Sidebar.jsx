import React from 'react'
import Exits from '../../assets/Courses/iconCourses/Frame.svg'
import Sing from '../../assets/Courses/iconCourses/ax-kartoni-bamazeh-11 (1).svg'
import ThemeToggle from '../Button/ThemeToggle'
import Home from '../../assets/Courses/iconCourses/Frame (1).svg'

const Sidebar = () => {
  return (
  <div className="min-h-screen " >
      <div className="">
        <div className="">
       
          <aside className="w-80  bg-[#5751E1] text-white rounded-r-2xl p-6 space-y-24" >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ">
                <img
                src={Sing}
                  alt="کاربر"
                  className="w-full h-full object-cover "
                />
              </div>
              <h3 className="pt-9 text-lg ">فلان فلانی خوش آمدید</h3>
              <div className="mt-5 w-[267px] h-1 mx-auto rounded-full bg-gradient-to-r from-[#5751E1] via-[#FFC224] to-[#5751E1]"></div>
            </div>

            <div className="space-y-4">
              {[
                "داشبورد",
                "اطلاعات کاربری",
                "دوره‌های من",
                "دوره‌های رزرو شده",
                "دیدگاه‌های من",
                "علاقه‌مندی‌ها",
                "تنظیمات امنیتی"
              ].map((item) => (
                <button
                  key={item}
                  className="w-full text-right py-2 px-2 rounded-xl  flex justify-center transition text-lg hover:bg-white hover:text-black  "
                  
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="w-full py-3 px-4 font-medium flex flex-row justify-center gap-2" dir='ltr'>
            <p> خروج از حساب </p>
            <img src={Exits}/>  
            </button>
          </aside>
        
        </div>
      </div>
    
    </div>
  
  )
}

export default Sidebar