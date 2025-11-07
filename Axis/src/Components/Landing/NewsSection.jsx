import React from "react";
import card from '../../assets/Landing/card.svg'
const NewsSection = () => {
  const news = [
    {
      id: 1,
      image: "/images/news1.jpg",
      title: "توسعه فردی: از ایده‌پردازی تا اجرا",
      date: "25 مهر 1403",
      desc: "با شرکت در دوره‌های جدید، مهارت‌های نرم و سخت خود را تقویت کنید و در مسیر رشد فردی قدم بگذارید.",
    },
    {
      id: 2,
      image: "/images/news1.jpg",
      title: "یادگیری طراحی رابط کاربری به روش نوین",
      date: "20 مهر 1403",
      desc: "آشنایی با اصول UX/UI و ایجاد تجربه کاربری حرفه‌ای برای پروژه‌های وب و موبایل.",
    },
    {
      id: 3,
      image: "/images/news1.jpg",
      title: "برگزاری وبینار بین‌المللی توسعه وب",
      date: "15 مهر 1403",
      desc: "در وبینار جدید ما، با متخصصین جهانی در زمینه توسعه وب آشنا شوید و سوالات خود را مطرح کنید.",
    },
    {
      id: 4,
      image: "/images/news1.jpg",
      title: "شروع ترم جدید با آموزش‌های بروز",
      date: "10 مهر 1403",
      desc: "کلاس‌های جدید ما با محتوای به‌روز آغاز شد؛ همین حالا مسیر یادگیری‌ات را شروع کن!",
    },
  ];

  return (
<section className="py-10 px-8 md:px-16 text-center">
  <h4 className="inline-block text-indigo-500 font-medium mb-2 bg-[#EFEEFE] rounded-full px-4 py-2">
    اخبار و وبلاگ ها
  </h4>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        آخرین خبرها ما
      </h2>

      {/* کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-100"
          >
            {/* تصویر */}
            <img
              src={card}
              className="w-full h-44 object-cover"
            />
            {/* متن */}
            <div className="p-5 text-right">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
                {item.desc}
              </p>
              <div className="flex items-center justify-between text-gray-400 text-sm mt-4">
                <span>{item.date}</span>
                <button className="text-indigo-600 font-medium hover:underline">
                  ادامه مطلب
                </button>
              </div>

              {/* آیکون‌ها */}
              <div className="flex items-center justify-between mt-4 border-t pt-3 text-gray-500 text-sm">
                <div className="flex gap-3">
                  <span className="flex items-center gap-1">
                    👍 <span>120</span>
                  </span>
                  <span className="flex items-center gap-1">
                    💬 <span>40</span>
                  </span>
                  <span className="flex items-center gap-1">
                    👁️ <span>230</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
