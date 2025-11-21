import React, { useState, useEffect, useCallback } from 'react';
import { Edit, Save, Loader2, XCircle } from 'lucide-react'; 
import ThemeToggle from '../../Common/Button/ThemeToggle';
import Home from '../../assets/Courses/iconCourses/Frame (1).svg';
import { Link } from 'react-router-dom';
import { useFetchProfile } from '../../api/Dashboard/useDashboardProfile.js'; 


const API_URL_UPDATE = 'https://sepehracademy.liara.run/SharePanel/UpdateProfile'; 


const FIXED_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM2Mzk5NDIsImV4cCI6MTc2MzY3NTk0Mn0.HE8LYFvJI22ePT5LsKPy-ifIrKYf3-PaDPuJq7rYjUc";


const MainInformation = () => {
    const { data: profileData, loading: fetchLoading, error: fetchError } = useFetchProfile();
    

    const [isEditing, setIsEditing] = useState(false); 
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState(null);
    const [saveSuccess, setSaveSuccess] = useState(false);


    const [formData, setFormData] = useState({
        fullName: '', nationalId: '', email: '', birthDate: '', gender: '', aboutMe: '',
        phoneNumber: '', telegram: '', linkedin: '', address: '', latitude: '', longitude: '',
    });


    useEffect(() => {
        if (profileData) {
          
            setFormData({
                fullName: [profileData.fName, profileData.lName].filter(Boolean).join(' ') || '',
                nationalId: profileData.nationalCode || '',
                email: profileData.email || profileData.gmail || '',
                birthDate: profileData.birthDay ? new Date(profileData.birthDay).toISOString().split('T')[0] : '', 
                gender: profileData.gender !== null ? (profileData.gender ? 'مرد' : 'زن') : '', 
                aboutMe: profileData.userAbout || '',
                phoneNumber: profileData.phoneNumber || '',
                telegram: profileData.telegramLink || '',
                linkedin: profileData.linkdinProfile || '',
                address: profileData.homeAdderess || '',
                latitude: profileData.latitude || '',
                longitude: profileData.longitude || '',
            });
        }
    }, [profileData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSave = useCallback(async () => {
        setIsSaving(true);
        setSaveError(null);
        setSaveSuccess(false);

        const nameParts = formData.fullName.trim().split(/\s+/);
        const fName = nameParts[0] || '';
        const lName = nameParts.slice(1).join(' ') || '';

        const payload = {
            id: profileData.id, 
            fName: fName,
            lName: lName,
            nationalCode: formData.nationalId,
            phoneNumber: formData.phoneNumber,
       
            homeAdderess: formData.address,
            userAbout: formData.aboutMe,
            linkdinProfile: formData.linkedin,
            telegramLink: formData.telegram,
        
        };

        try {
            const response = await fetch(API_URL_UPDATE, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${FIXED_AUTH_TOKEN}`,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'ذخیره داده موفقیت‌آمیز نبود.');
            }

       
            setIsEditing(false);
            setSaveSuccess(true);
        } catch (error) {
            setSaveError(error.message);
        } finally {
            setIsSaving(false);
        }
    }, [formData, profileData]);


  
    const handleButtonClick = () => {
        if (isEditing) {
            handleSave(); 
        } else {
   
            setIsEditing(true);
            setSaveSuccess(false); 
        }
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


 
    if (fetchLoading) {
        return (
            <div className="p-10 font-sans min-h-screen flex justify-center items-center bg-gray-50">
                <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
                <p className="mr-2 text-indigo-600">در حال بارگذاری اطلاعات پروفایل...</p>
            </div>
        );
    }

    if (fetchError) {
        return (
             <div className="p-10 font-sans min-h-screen flex flex-col justify-center items-center bg-red-50">
                <XCircle className="w-8 h-8 text-red-600 mb-2" />
                <p className="text-red-600">خطا در بارگذاری: {fetchError}</p>
            </div>
        );
    }


    return (
        <div className="p-6 md:p-10 font-sans min-h-screen rtl text-right">
            <div className="flex justify-end items-center mb-8 gap-3">
               <ThemeToggle/>
          
               <Link to='/'>
                    <img src={Home} alt="خانه" className="w-6 h-6"/>
                </Link>
            </div>

            <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-2xl shadow-xl 
                      bg-[#C8C1ED26] border border-gray-200">
                
     
                {saveSuccess && (
                    <div className="p-3 mb-4 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                         اطلاعات با موفقیت ذخیره شد.
                    </div>
                )}
                {saveError && (
                    <div className="p-3 mb-4 bg-red-100 text-red-700 rounded-lg text-sm font-medium">
                         خطا در ذخیره: {saveError}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 ">
                    
                    <div className="flex flex-col md:order-1 ">
                        <EditableInfoPair label="نام و نام خانوادگی" name="fullName" />
                        <EditableInfoPair label="کد ملی" name="nationalId" />
                        <EditableInfoPair label="ایمیل" name="email" type="email" />
                        <EditableInfoPair label="تاریخ تولد" name="birthDate" type="date" /> 
                        <EditableInfoPair label="جنسیت" name="gender" />

                        <div className="flex justify-between w-full mb-6 items-start">
                            <label htmlFor="aboutMe" className="text-gray-900 text-base font-medium ml-4 whitespace-nowrap">
                                درباره من:
                            </label>
                            {isEditing ? (
                                <textarea
                                    id="aboutMe"
                                    name="aboutMe"
                                    value={formData.aboutMe}
                                    onChange={handleChange}
                                    placeholder="چیزی در مورد خودتان بنویسید..."
                                    className="w-2/3 text-right bg-transparent border-b border-dashed border-gray-300 focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                                />
                            ) : (
                                <span className="text-gray-800 text-right w-2/3">
                                    {formData.aboutMe || '--'}
                                </span>
                            )}
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
                    
                            <div className='flex items-center gap-4 flex-col '>
                            <EditableInfoPair label="طول جغرافیایی" name="latitude" />
                            <EditableInfoPair label="عرض جغرافیایی" name="longitude" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-12" dir='ltr'>
                    <button 
                        onClick={handleButtonClick}
                        disabled={isSaving}
                        className={`flex items-center space-x-2 
                                ${isSaving ? 'bg-gray-400' : isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-[#FFC224] hover:bg-yellow-600'}
                                text-[#161439] font-bold py-2 px-7 rounded-full shadow-lg 
                                transition transform hover:scale-105 disabled:opacity-75`}
                    >
                        {isSaving ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                <span>در حال ذخیره...</span>
                            </>
                        ) : isEditing ? (
                            <>
                                <Save className="w-5 h-5" />
                                <span>ذخیره</span>
                            </>
                        ) : (
                            <>
                                <Edit className="w-5 h-5" />
                           <Link to='/Dashboard/EditingInformation'>      <span>ویرایش</span> </Link>  
                            </>
                        )}
                    </button>
                   
                </div>
            </div> 
        </div>
    );
};

export default MainInformation;