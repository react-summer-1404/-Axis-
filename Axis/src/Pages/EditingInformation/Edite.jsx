import React from 'react';
import ThemeToggle from '../../Common/Button/ThemeToggle';
import Home from '../../assets/Courses/iconCourses/Frame (1).svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const InputField = ({ label, placeholder, icon, dir = 'rtl' }) => (
    <div className="flex flex-col space-y-1">
        <label className="text-sm font-medium text-gray-700">
            {label}
        </label>
        <div className="relative">
            {icon && (
                <span className={classNames(
                    "absolute top-1/2 transform -translate-y-1/2 text-gray-400",
                    dir === 'ltr' ? "right-3" : "left-3" 
                )}>
                    {icon}
                </span>
            )}
            <input
                type="text"
                placeholder={placeholder}
                className={classNames(
                    "block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm",
                    // جلوه تمرکز (Focus) آبی رنگ
                    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                    dir === 'rtl' ? "text-right" : "text-left",
                    "bg-white border"
                )}
                style={{ paddingRight: dir === 'rtl' && icon ? '2.5rem' : '0.75rem', paddingLeft: '0.75rem', direction: dir }}
            />
        </div>
    </div>
);

const TextareaField = ({ label, placeholder }) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <textarea
            rows="6"
            className={classNames(
                "block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm resize-none",
                "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            )}
            placeholder={placeholder}
            style={{ direction: 'rtl', textAlign: 'right' }}
        >
        </textarea>
    </div>
);


export default function Edite() { 
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center items-start" style={{ direction: 'ltr' }}>
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl p-6 md:p-10 border border-gray-200">
        
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <div className="flex items-center space-x-4 "> 
            <img src={Home}/>
            <ThemeToggle/>
           
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <span className="text-3xl text-purple-600">👤</span>
            <h2 className="text-2xl font-bold text-gray-800">
              ویرایش اطلاعات کاربری
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-1 space-y-6 flex flex-col items-center order-1">
        
            <div className="relative w-40 h-40 rounded-full border-4 border-white shadow-lg cursor-pointer">
              <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-4xl text-gray-500">📷</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-3xl text-white">📷</span>
              </div>
            </div>


            <div dir='rtl'> 
            <TextareaField 
                label="درباره من"
                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و..."
            />
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6 order-2">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4"dir='rtl'>
              
        
              <InputField label="نام" placeholder="" dir="rtl" />
              <InputField label="نام خانوادگی" placeholder="" dir="rtl" />
              
    
              <InputField label="کد ملی" placeholder="" dir="rtl" />
              <InputField label="شماره همراه" placeholder="" dir="rtl" />
              
    
              <InputField 
                  label="تاریخ تولد" 
                  placeholder="" 
                  icon={<span className="text-xl">📅</span>} 
                  dir="rtl" 
              />
              <InputField label="ایمیل" placeholder="" dir="ltr" /> {/* ایمیل LTR */}

    
              <InputField label="تلگرام" placeholder="" dir="ltr" />
              <InputField label="لینکدین" placeholder="" dir="ltr" />
              
    
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  جنسیت
                </label>
                <div className="relative">
                    <select
                        className={classNames(
                            "block w-full rounded-lg border-gray-300 shadow-sm sm:text-sm appearance-none",
                            "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        )}
                        style={{ direction: 'rtl', textAlign: 'right', paddingRight: '0.75rem' }}
                    >
                        <option value="male">مرد</option>
                        <option value="female">زن</option>
                    </select>

                    <div className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        &#9660; 
                    </div>
                </div>
              </div>
            </div>
          </div>

          
 
          <div className="lg:col-span-3 space-y-6 mt-4 order-3"dir='rtl'>
            
       
            <div className="flex flex-col md:flex-row justify-between ml-20">
              
    
              <div className="w-full md:w-2/4">
                <InputField 
                  label="آدرس" 
                  placeholder="" 
                  dir="rtl" 
                />
              </div>

              <div className="w-40 h-40 bg-gray-200 rounded-full shadow-inner flex items-center justify-center">
                <span className="text-gray-500 text-sm">نقشه (Placeholder)</span>
              </div>
            </div>

    
            <div className="flex justify-start space-x-4   pt-4" dir='ltr'>
              <button
                type="button"
                className="flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
              >
                <span className="ml-2 text-red-500">✖</span>
                لغو
              </button>
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150"
              >
                <span className="mr-2">✅</span>
                ذخیره تغییرات
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}