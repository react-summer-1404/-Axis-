import React from 'react'


const Sidebar = () => {
  return (
  <div className="min-h-screen" >
      <div className="container mx-auto mt-6  bg-white rounded-3xl shadow-xl border ring-2 ring-gray-200">

        <div className="flex justify-end ">
          <aside className="w-80  bg-gradient-to-b from-purple-600 to-blue-700 text-white rounded-r-2xl p-6 space-y-14" dir="rtl">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-purple-400 ring-offset-2 ring-offset-purple-700">
                <img
       
                  alt="کاربر"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-lg font-bold">فلان فلانی خوش آمدید</h3>
            </div>

            <div className="space-y-2">
              {[
               
                "دوره‌های من",
                "دوره‌های رزرو شده",
                "دیدگاه‌های من",
                "علاقه‌مندی‌ها",
                "تنظیمات امنیتی"
              ].map((item) => (
                <button
                  key={item}
                  className="w-full text-right py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="w-full py-3 px-4 font-medium">
              خروج از حساب
            </button>
          </aside>
         
        </div>
      </div>
    </div>
  
  )
}

export default Sidebar