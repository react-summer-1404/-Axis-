import React from 'react'
import Exits from '../../assets/Courses/iconCourses/Frame.svg'

const Sidebar = () => {
  return (
  <div className="min-h-screen" >
      <div className="container mx-auto mt-6  bg-white rounded-3xl shadow-xl border ring-2 ring-gray-200">

        <div className="flex justify-end ">
          <aside className="w-80  bg-[#5751E1] text-white rounded-r-2xl p-6 space-y-14" dir="rtl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-purple-400 ring-offset-2 ring-offset-purple-700">
                <img
       
                  alt="کاربر"
                  className="w-full h-full object-cover "
                />
              </div>
              <h3 className="pt-9 text-lg ">فلان فلانی خوش آمدید</h3>
              <div className="mt-5 w-[267px] h-1 mx-auto rounded-full bg-gradient-to-r from-[#5751E1] via-[#FFC224] to-[#5751E1]"></div>
            </div>

            <div className="space-y-2">
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