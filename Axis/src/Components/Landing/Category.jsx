import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


import { Paintbrush, DollarSign, Code, Megaphone, Heart, Briefcase } from "lucide-react";

const Category = () => {
  const swiperRef = useRef(null);

  const categories = [
    { id: 1, title: "طراحی گرافیکی", courses: 22, icon: <Paintbrush size={32} /> },
    { id: 2, title: "امور مالی", courses: 41, icon: <DollarSign size={32} /> },
    { id: 3, title: "توسعه", courses: 29, icon: <Code size={32} /> },
    { id: 4, title: "بازاریابی", courses: 31, icon: <Megaphone size={32} /> },
    { id: 5, title: "سبک زندگی", courses: 23, icon: <Heart size={32} /> },
    { id: 6, title: "مدیریت", courses: 19, icon: <Briefcase size={32} /> },
  ];

  return (
    <div className="px-6 md:px-20 py-16 bg-white text-center">
      <button className="mb-6 px-6 py-2 bg-[#EFEEFE] text-blue rounded-full shadow-md">
        دسته بندی های پرطرفدار
      </button>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        دسته‌بندی‌های <span className="text-gray">برتر</span>
      </h2>

      <p className="text-gray-500 mb-12">
        امروزه به دلیل آن که ارتباطات فضای مجازی رونق زیادی یافته است
      </p>

      <div className="w-full bg-gray-50 py-12 rounded-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              320: { slidesPerView: 1, centeredSlides: false },
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: true },
            }}
            className="mySwiper w-full"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>
                <div className="flex flex-col items-center">
           
                  <div className="w-20 h-20 flex items-center justify-center bg-[#EFEEFE] rounded-full shadow-sm text-indigo-600">
                    {cat.icon}
                  </div>

                  <p className="mt-3 text-lg font-semibold text-gray-800">
                    {cat.title}
                  </p>
                  <span className="text-sm text-gray-500">
                    {cat.courses} دوره
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-between w-full mt-6 px-10">
        <button
  className="flex items-center justify-center w-12 h-12 bg-[#FFC224] rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300"
  onClick={() => swiperRef.current.slidePrev()}
>
  &#8592;
</button>

<button
  className="flex items-center justify-center w-12 h-12 bg-[#FFC224] rounded-full shadow-lg hover:bg-yellow-400 hover:scale-110 transition-all duration-300"
  onClick={() => swiperRef.current.slideNext()}
>
  &#8594;
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
