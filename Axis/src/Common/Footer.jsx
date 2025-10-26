import React from 'react'

const Footer = () => {
  return (
     <footer className="w-full bg-[#06042E] text-gray-200" dir="rtl">
       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div div className="space-y-4 "> 
            <div className="flex items-center gap-3">
              {/* <div className="bg-[#7572AB] inline-flex items-center justify-center w-28 h-11 rounded-full text-white font-bold"> N1 </div> */}
              <div> 
              <h4 className="text-lg font-semibold mb-1 relative bottom-1">نامبر وان</h4>
                <p className="text-sm text-gray-300">هنگامی که یک جایگزین ناشناخته گالری از را تایپ کرده و آن را راه‌حل می‌بینید تا نمونه‌ای بسازید </p>
              </div>
             </div>
             <div className="text-sm text-gray-300 space-y-1 ">
              <p>استان مازندران، ساری، جاده فرح آباد</p>
               <p className="font-medium" > 9999999999 98+</p>
              </div>
          </div>
          <div className="space-y-3">
           <h5 className="text-sm font-semibold">شرکت ما</h5>
           <ul className="text-sm text-gray-300 space-y-2">
              <li><a className="hover:text-white" href="#">با ما تماس بگیرید</a></li>
             <li><a className="hover:text-white" href="#">معلم شوید</a></li>
               <li><a className="hover:text-white" href="#">وبلاگ</a></li>
                <li><a className="hover:text-white" href="#">شرایط</a></li>
                <li><a className="hover:text-white" href="#">ماموریت‌ها</a></li>
            </ul>
            </div>
            <div className="space-y-3">
            <h5 className="text-sm font-semibold">لینک های مفید</h5>
            <ul className="text-sm text-gray-300 space-y-2">
            <li><a className="hover:text-white" href="#">ارزش های ما</a></li>
            <li><a className="hover:text-white" href="#">هیئت مشاوران ما</a></li>
            <li><a className="hover:text-white" href="#">شرکای ما</a></li>
            <li><a className="hover:text-white" href="#">شرکت شدن در Future Learn</a></li>
            <li><a className="hover:text-white" href="#">Quizlet Plus</a></li>
            </ul>
            </div>
            <div className="space-y-4">
               <h5 className="text-sm font-semibold">در تماس باشید</h5>
               <p className="text-sm text-gray-300">هنگامی که یک جایگزین ناشناخته گالری از را تایپ کرده و آن را راه‌حل می‌بینید</p>
            <div className="text-sm text-gray-300">
                <p>ایمیل: info@example.com</p>
                <p> تلفن:  9999999 98+  </p>
            </div>
             
            <div className="flex items-center gap-3 mt-3">
              <a href="#" aria-label="facebook" className="p-2 rounded-md hover:bg-white/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.98 3.66 9.12 8.44 9.95v-7.05H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.19 2.23.19v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.9h-2.3V22C18.34 21.19 22 17.05 22 12.07z"/></svg>
              </a>
              <a href="#" aria-label="twitter" className="p-2 rounded-md hover:bg-white/5">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.92c-.63.28-1.3.48-2 .57a3.48 3.48 0 0 0-6 2.38c0 .27.03.54.09.79C8.7 9.58 6.1 8.14 4.37 6a3.48 3.48 0 0 0-.47 1.75c0 1.21.62 2.28 1.56 2.9a3.48 3.48 0 0 1-1.58-.44v.04c0 1.69 1.2 3.1 2.8 3.42-.29.08-.6.12-.91.12-.22 0-.43-.02-.64-.06.44 1.37 1.71 2.36 3.22 2.39A6.98 6.98 0 0 1 2 19.54 9.86 9.86 0 0 0 7.29 21c6.3 0 9.75-5.22 9.75-9.75V9.75c.67-.48 1.25-1.08 1.71-1.78-.6.27-1.24.45-1.9.55z"/></svg>
              </a>
              <a href="#" aria-label="instagram" className="p-2 rounded-md hover:bg-white/5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm12 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z"/></svg>
              </a>
              </div>
            <div className="hidden sm:block">
              <div className="flex gap-2 mt-3">
              <div className="w-32 h-10 bg-[#0f1724] border border-gray-700 rounded-md flex items-center justify-center text-xs">Google Play</div>
              <div className="w-32 h-10 bg-[#0f1724] border border-gray-700 rounded-md flex items-center justify-center text-xs">App Store</div>
            </div>
            </div>
            </div>
         </div>
       </div>
       <div className="bg-[#1f2146] border-t border-[#2e2b52]">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-4 text-center text-sm text-gray-400">
          © تمامی حقوق این سایت متعلق به تیم نامبر وان می‌باشد
          </div>
      </div>
     </footer>
  )
}

export default Footer