import React from 'react'

const TextSidebar = () => {
  return (
    <div className="mt-2 m-10 border rounded-lg p-7 shadow-md dark:border-blue-950">
      
    <h3 className="text-lg font-bold text-gray-800 mb-3 dark:text-white">شرح دوره</h3>
    <p className="text-base text-gray-600 mb-4 leading-relaxed dark:text-gray-200">
        امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است، طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت، اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار، برای رونق کار خود به دنبال طراحان حرفه‌ای برای طراحی سایتی مناسب و کارآمد هستند؛ لذا یادگیری روش‌های مناسب و به‌روز طراحی سایت، مورد توجه بسیاری از علاقه‌مندان و کارجویان قرار گرفته است.
    </p>

    <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3 dark:text-white">در این دوره چه چیزی یاد خواهید گرفت؟</h3>
    <p className="text-base text-gray-600 mb-4 leading-relaxed dark:text-gray-200">
    در حال حاضر جاوا اسکریپت یکی از محبوب‌ترین زبان‌های برنامه‌نویسی وب شناخته می‌شود و تقریبا
     توسط تمام مرورگرهای وب پشتیبانی می‌شود
     این زبان به طور معمول با اچ تی ام ال و سی اس اس برای ایجاد صفحات وب تعاملی و پویا به کار می‌رود
    </p>

    <ul className="space-y-3 mt-4 font-bold">
      
        {[
            'با رنگ و گرادیان و شبکه‌ کار کنید', 
            'تمام میانبرهای مفید', 
            'قادر به ایجاد بروشور، بروشور، تبلیغات باشید', 
            'نحوه کار با تصاویر و متن'
        ].map((item, index) => (
            <li key={index} className="flex items-center justify-end text-sm text-gray-700 dark:text-gray-200">
                <span className="mr-2">{item}</span>
                <div className="w-4 h-4 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"> </path>
                    </svg>
                </div>
            </li>
        ))}
    </ul>
    
   
    <p className="text-base text-gray-600 mt-6 leading-relaxed dark:text-gray-200">
        امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است، طراحی یک سایت به شکل مناسب و مورد پسند کاربران متفاوت، اهمیت بالایی یافته است. به همین جهت صاحبان سرمایه و کار، برای رونق کار خود به دنبال طراحان حرفه‌ای برای طراحی سایتی مناسب و کارآمد هستند؛ لذا یادگیری روش‌های مناسب و به‌روز طراحی سایت، مورد توجه بسیاری از علاقه‌مندان و کارجویان قرار گرفته است
    </p>

</div>

  )
}

export default TextSidebar