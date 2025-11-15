import React, { useState } from 'react';
import { Edit } from 'lucide-react'; 
import ThemeToggle from '../../Common/Button/ThemeToggle';
import Home from '../../assets/Courses/iconCourses/Frame (1).svg'

const MainInformation = () => {
  const [isEditing, setIsEditing] = useState(true); 
  
  const [formData, setFormData] = useState({
    fullName: '', nationalId: '', email: '', birthDate: '', gender: '', aboutMe: '',
    phoneNumber: '', telegram: '', linkedin: '', address: '', latitude: '', longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const EditableInfoPair = ({ label, name, type = 'text', rows = 1 }) => {
    return (
        <div className="flex justify-between w-full mb-6 items-start">
            <label htmlFor={name} className="text-gray-900 text-base font-medium ml-4 whitespace-nowrap">
                {label}:
            </label>
            
            <div className="w-2/3 flex justify-start">
              {isEditing ? (
                  rows > 1 ? (
                      <textarea
                          id={name}
                          name={name}
                          value={formData[name]}
                          onChange={handleChange}
                          rows={rows}
                          placeholder="--" 
                          className="w-full text-left bg-transparent border-b border-dashed border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                      />
                  ) : (
                      <input
                          id={name}
                          name={name}
                          type={type}
                          value={formData[name]}
                          onChange={handleChange}
                          placeholder="--" 
                          className="w-full text-right bg-transparent border-b border-dashed border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors"
                      />
                  )
              ) : (
                  <span className="text-gray-800 text-right">
                      {formData[name] || '--'}
                  </span>
              )}
            </div>
        </div>
    );
  };
  
  return (
    <div className="p-6 md:p-10 font-sans min-h-screen rtl text-right rounded-full ">
      <div className="flex justify-end items-center mb-8 gap-3">
       <ThemeToggle/>
       <img src={Home}/> 
      </div>

      <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-2xl shadow-xl 
                  bg-[#C8C1ED26] border border-gray-200">
        
        <div className="absolute top-56">
         <img src='../../../src/assets/Courses/DashboardIcon/Frame.svg'/> 
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 ">
          
          <div className="flex flex-col md:order-1 ">
              <EditableInfoPair label="نام و نام خانوادگی" name="fullName" />
              <EditableInfoPair label="کد ملی" name="nationalId" />
              <EditableInfoPair label="ایمیل" name="email" type="email" />
              <EditableInfoPair label="تاریخ تولد" name="birthDate" />
              <EditableInfoPair label="جنسیت" name="gender" />

              <div className="flex justify-between w-full mb-6 items-start">
                  <label htmlFor="aboutMe" className="text-gray-900 text-base font-medium ml-4 whitespace-nowrap">
                      درباره من:
                  </label>
                  <textarea
                      id="aboutMe"
                      name="aboutMe"
                      value={formData.aboutMe}
                      onChange={handleChange}
                     
                    
                      className="w-2/3 text-right bg-transparent border-b border-dashed border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                  />
              </div>
          </div>
          
          <div className="flex flex-col md:order-2">
              <EditableInfoPair label="شماره همراه" name="phoneNumber" type="tel" />
              <EditableInfoPair label="تلگرام" name="telegram" />
              <EditableInfoPair label="لینکدین" name="linkedin" />
              <EditableInfoPair label="آدرس" name="address" />

              <div className="mt-8">
   
                  <div className="w-40 h-40 overflow-hidden rounded-full float-left mb-4 border border-gray-200 ">
                      <img 
                        src="../../../src/assets/Courses/DashboardIcon/Ellipse 51.svg" 
                        alt="موقعیت جغرافیایی"
                        className="w-full h-full object-cover"
                      />
                       
                  </div>
           
                 <div className='flex items-center  gap-4 flex-col '>
                 <EditableInfoPair label="طول جغرافیایی" name="latitude" />
                 <EditableInfoPair label="عرض جغرافیایی" name="longitude" />
                 </div>
              </div>
          </div>

        </div>

        <div className="flex justify-center mt-12"dir='ltr'>
          <button 
            onClick={() => setIsEditing(prev => !prev)}
            className="flex items-center space-x-2 
                            bg-[#FFC224] hover:bg-yellow-600 text-[#161439] 
                            font-bold py-2 px-7 rounded-full shadow-lg 
                            transition transform hover:scale-105">
            <Edit className="w-5 h-5" />
            <span>{isEditing ? 'ذخیره' : 'ویرایش'}</span>
          </button>
        </div>

      </div> 
    </div>
  );
};

export default MainInformation;