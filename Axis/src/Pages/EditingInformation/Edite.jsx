import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import ThemeToggle from '../../Common/Button/ThemeToggle';
import Home from '../../assets/Courses/iconCourses/Frame (1).svg'
import AvatarButton from '../AvatarModal/AvatarButton';
import LocationButton from '../MapModal/LocationButton';


const BASE_URL = 'https://sepehracademy.liara.run'; 
const UPDATE_PROFILE_ENDPOINT = '/SharePanel/UpdateProfileInfo'; 

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


const InputField = React.memo(({ label, placeholder, icon, dir = 'rtl', name, value, onChange }) => (
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
                name={name} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder}
                className={classNames(
                    "block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm",
                    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
                    dir === 'rtl' ? "text-right" : "text-left",
                    "bg-white border"
                )}
                style={{ paddingRight: dir === 'rtl' && icon ? '2.5rem' : '0.75rem', paddingLeft: '0.75rem', direction: dir }}
            />
        </div>
    </div>
));


const TextareaField = React.memo(({ label, placeholder, name, value, onChange }) => (
    <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {label}
        </label>
        <textarea
            rows="6"
            name={name} 
            value={value} 
            onChange={onChange} 
            className={classNames(
                "block w-full rounded-lg border-gray-300 shadow-sm transition duration-150 ease-in-out sm:text-sm resize-none",
                "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            )}
            placeholder={placeholder}
            style={{ direction: 'rtl', textAlign: 'right' }}
        >
        </textarea>
    </div>
));


const SelectField = React.memo(({ label, name, value, onChange, options }) => (
    <div>
        <label className="text-sm font-medium text-gray-700 block mb-1">
            {label}
        </label>
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className={classNames(
                    "block w-full rounded-lg border-gray-300 shadow-sm sm:text-sm appearance-none h-[40px] px-3", // h-[40px] ارتفاع ثابت
                    "focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                )}
                style={{ direction: 'rtl', textAlign: 'right', paddingRight: '0.75rem' }}
            >
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                &#9660;
            </div>
        </div>
    </div>
));


export default function Edite() {
 
    const [formData, setFormData] = useState({
        FirstName: '', 
        LastName: '', 
        NationalCode: '', 
        Mobile: '', 
        BirthDate: '', 
        Email: '', 
        Telegram: '', 
        LinkedIn: '', 
        Gender: 'male', 
        Address: '', 
        Description: '' 
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);



    const authToken = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM2Mzk5NDIsImV4cCI6MTc2MzY3NTk0Mn0.HE8LYFvJI22ePT5LsKPy-ifIrKYf3-PaDPuJq7rYjUc"; // مثال: 'Bearer eyJhbGciOiJIUzI1Ni...'

 
    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
  
        setError(null);
        setSuccess(false);
    }, []);


    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);


        const payload = {
            FirstName: formData.FirstName,
            LastName: formData.LastName,
            NationalCode: formData.NationalCode,
            Mobile: formData.Mobile,
            BirthDate: formData.BirthDate,
            Email: formData.Email,
            Telegram: formData.Telegram,
            LinkedIn: formData.LinkedIn,
            Gender: formData.Gender === 'male' ? 0 : 1, 
            Address: formData.Address,
            AboutMe: formData.Description, 
          
        };

        try {
            const response = await axios.put(`${BASE_URL}${UPDATE_PROFILE_ENDPOINT}`, payload, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': authToken, 
                },
            });

            console.log('API Response:', response.data);

            if (response.data.IsSuccess) {
                setSuccess(true);
    
        
            } else {
        
                setError(response.data.Message || 'خطا در ذخیره اطلاعات. لطفاً دوباره تلاش کنید.');
            }

        } catch (err) {
            console.error('API Error:', err);

    
            if (err.response) {
           
                setError(`خطا: ${err.response.status} - ${err.response.data.Message || 'خطای سرور.'}`);
            } else if (err.request) {
            
                setError('خطا: عدم پاسخ از سرور. اتصال اینترنت خود را بررسی کنید.');
            } else {
              
                setError('خطای ناشناخته در ارسال درخواست.');
            }
        } finally {
            setLoading(false);
        }
    }, [formData, authToken]);


    const genderOptions = useMemo(() => [
        { value: 'male', label: 'مرد' },
        { value: 'female', label: 'زن' },
    ], []);


    return (
    
        <form onSubmit={handleSubmit} className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center items-start" style={{ direction: 'ltr' }}>
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl p-6 md:p-10 border border-gray-200">

                <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <div className="flex items-center space-x-4 ">
                        <img src={Home} alt="Home Icon" />
                        <ThemeToggle />
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="text-3xl text-purple-600">👤</span>
                        <h2 className="text-2xl font-bold text-gray-800">
                            ویرایش اطلاعات کاربری
                        </h2>
                    </div>
                </div>

                {success && (
                    <div className="mb-4 p-3 rounded-lg bg-green-100 text-green-700 text-sm font-medium text-right" dir="rtl">
                         اطلاعات شما با موفقیت ذخیره شد.
                    </div>
                )}
                {error && (
                    <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm font-medium text-right" dir="rtl">
                        ❌ {error}
                    </div>
                )}
    


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1  flex flex-col items-center order-1">
                        <div className='ml-32 mb-3'>
                            <AvatarButton />
                        </div>

                        <div dir='rtl'>
                            <TextareaField
                                label="درباره من"
                                name="Description" 
                                value={formData.Description}
                                onChange={handleInputChange}
                                placeholder="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و..."
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-6 order-2">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4" dir='rtl'>

                            <InputField label="نام" name="FirstName" value={formData.FirstName} onChange={handleInputChange} placeholder="نام" dir="rtl" />
                            <InputField label="نام خانوادگی" name="LastName" value={formData.LastName} onChange={handleInputChange} placeholder="نام خانوادگی" dir="rtl" />

                            <InputField label="کد ملی" name="NationalCode" value={formData.NationalCode} onChange={handleInputChange} placeholder="کد ملی" dir="rtl" />
                            <InputField label="شماره همراه" name="Mobile" value={formData.Mobile} onChange={handleInputChange} placeholder="شماره همراه" dir="rtl" />

                            <InputField
                                label="تاریخ تولد"
                                name="BirthDate"
                                value={formData.BirthDate}
                                onChange={handleInputChange}
                                placeholder="مثال: 1370/01/01"
                                icon={<span className="text-xl">📅</span>}
                                dir="rtl"
                            />
                            <InputField label="ایمیل" name="Email" value={formData.Email} onChange={handleInputChange} placeholder="example@domain.com" dir="ltr" /> {/* ایمیل LTR */}

                            <InputField label="تلگرام" name="Telegram" value={formData.Telegram} onChange={handleInputChange} placeholder="@your_telegram_id" dir="ltr" />
                            <InputField label="لینکدین" name="LinkedIn" value={formData.LinkedIn} onChange={handleInputChange} placeholder="linkedin.com/in/..." dir="ltr" />

                            <SelectField
                                label="جنسیت"
                                name="Gender"
                                value={formData.Gender}
                                onChange={handleInputChange}
                                options={genderOptions}
                            />
                        </div>
                    </div>


                    <div className="lg:col-span-3 space-y-6 mt-4 order-3" dir='rtl'>

                        <div className="flex flex-col md:flex-row justify-between ml-20">

                            <div className="w-full md:w-2/4">
                                <InputField
                                    label="آدرس"
                                    name="Address"
                                    value={formData.Address}
                                    onChange={handleInputChange}
                                    placeholder="آدرس دقیق شما"
                                    dir="rtl"
                                />
                            </div>

                            <LocationButton />
                        </div>


                        <div className="flex justify-start space-x-4 pt-4" dir='ltr'>
                            <button
                                type="button"
                                className="flex items-center justify-center px-6 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150"
                            >
                                <span className="ml-2 text-red-500">✖</span>
                                لغو
                            </button>
                            <button
                                type="submit"
                                disabled={loading} 
                                className="flex items-center justify-center px-6 py-2 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 disabled:opacity-50"
                            >
                                <span className="mr-2">{loading ? '⏳' : '✅'}</span>
                                {loading ? 'در حال ذخیره‌سازی...' : 'ذخیره تغییرات'}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
}