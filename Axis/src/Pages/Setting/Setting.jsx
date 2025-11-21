import React, { useState, useCallback, useMemo } from 'react';
import { Home, Sun, Moon, Eye, EyeOff, ChevronDown, ChevronUp, Mail, Save } from 'lucide-react';


const PasswordInputField = ({ label, value, onChange, placeholder, isError = false, type = 'password' }) => {
    const [showPassword, setShowPassword] = useState(false);

  
    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
    
    const hasEyeIcon = type === 'password';

    return (
        <div className="relative w-full flex-1 min-w-[200px] mb-4">
            <input
                type={inputType}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full p-3 pr-10 pl-4 text-sm text-gray-900 dark:text-white bg-gray-50 border-2 rounded-lg focus:ring-purple-500 focus:border-purple-500 transition duration-150 rtl placeholder:text-gray-400 
                ${isError ? 'border-red-400' : 'border-gray-300 dark:border-gray-600'}
                `}
            />
            
            {hasEyeIcon && (
                <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600 transition"
                    title={showPassword ? 'پنهان کردن رمز' : 'نمایش رمز'}
                >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
            )}
            
            <label className="absolute right-3 -top-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 transition rtl">
                {label}
            </label>
        </div>
    );
};



const Setting = () => {

    const [darkMode, setDarkMode] = useState(false);


    const [isPasswordExpanded, setIsPasswordExpanded] = useState(true);
    const [is2FAExpanded, setIs2FAExpanded] = useState(true);
    const [isEmailExpanded, setIsEmailExpanded] = useState(true);

    const [passwordFields, setPasswordFields] = useState({
        current: '', 
        new: '', 
        confirm: '',
    });

    const handlePasswordChange = useCallback((field) => (e) => {
        setPasswordFields(prev => ({ ...prev, [field]: e.target.value }));
    }, []);

 
    const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  
    const [recoveryEmail, setRecoveryEmail] = useState('example@gmail.com');

    const isReadyToSavePassword = useMemo(() => {
        const { current, new: newPass, confirm } = passwordFields;
       
        return current.length > 0 && newPass.length > 0 && confirm.length > 0;
    }, [passwordFields]);

    const handlePasswordSave = () => {
        if (isReadyToSavePassword) {
           
            console.log('ذخیره رمز عبور');
            alert('تغییرات رمز عبور با موفقیت ذخیره شد.');
        } else {
           
             alert('لطفاً هر سه فیلد رمز عبور را پر کنید.');
        }
    };
    
    const handleEmailSave = () => {
      
        console.log('ذخیره ایمیل بازیابی');
        alert('ایمیل بازیابی ذخیره شد.');
    };
    

 

    return (
        <div className={`min-h-screen font-[Inter] rtl ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
        
            <div className="flex justify-start items-center bg-white dark:bg-gray-800 p-3 border-b border-gray-200 dark:border-gray-700 shadow-sm">
                <Home className="w-6 h-6 ml-4 text-purple-600 cursor-pointer" title="خانه" />
                <button onClick={() => setDarkMode(false)} className="p-1 rounded-full text-yellow-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <Sun className="w-6 h-6" title="تم روشن" />
                </button>
                <button onClick={() => setDarkMode(true)} className="p-1 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                    <Moon className="w-6 h-6" title="تم تیره" />
                </button>
            </div>

            <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 pt-10">
                
       
                <div className="flex items-center justify-end mb-12">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        تنظیمات امنیتی
                    </h1>
                </div>

           
                <div className="mb-8">
                    <header 
                        className="flex justify-between items-center cursor-pointer pb-2" 
                        onClick={() => setIsPasswordExpanded(prev => !prev)}
                    >
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white rtl">
                            تغییر رمز عبور
                        </h2>
                        {isPasswordExpanded ? (
                            <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        )}
                    </header>
                    <div className="border-b-2 border-purple-200 dark:border-purple-700 mb-6 w-full"></div> {/* خط افقی شبیه به تصویر */}

                    <div className={`overflow-hidden transition-all duration-500 ${isPasswordExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                      
                        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                            <PasswordInputField
                                label="رمز عبور فعلی"
                                placeholder="رمز عبور فعلی"
                                value={passwordFields.current}
                                onChange={handlePasswordChange('current')}
                                type="password"
                            />
                            <PasswordInputField
                                label="رمز عبور جدید"
                                placeholder="رمز عبور جدید"
                                value={passwordFields.new}
                                onChange={handlePasswordChange('new')}
                                type="password"
                            />
                            <PasswordInputField
                                label="تکرار رمز عبور"
                                placeholder="تکرار رمز عبور"
                                value={passwordFields.confirm}
                                onChange={handlePasswordChange('confirm')}
                                type="password"
                            />
                        </div>
                        
                     
                        <div className="flex justify-center mt-6">
                            <button 
                                onClick={handlePasswordSave}
                                disabled={!isReadyToSavePassword}
                                className={`flex items-center px-8 py-3 font-extrabold text-gray-900 rounded-xl shadow-lg transition-all duration-300 
                                ${isReadyToSavePassword 
                                    ? 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-500/50' 
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed shadow-none'
                                }`}
                            >
                                <Save className="w-5 h-5 ml-2" />
                                ذخیره تغییرات
                            </button>
                        </div>
                    </div>
                </div>

             
                <div className="mb-8 mt-12">
                    <header 
                        className="flex justify-between items-center cursor-pointer pb-2" 
                        onClick={() => setIs2FAExpanded(prev => !prev)}
                    >
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white rtl">
                            تایید ورود دو مرحله‌ای
                        </h2>
                        {is2FAExpanded ? (
                            <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        )}
                    </header>
                    <div className="border-b-2 border-purple-200 dark:border-purple-700 mb-6 w-full"></div>

                    <div className={`overflow-hidden transition-all duration-500 ${is2FAExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <div className="flex items-center justify-end">
                            <label htmlFor="2fa-checkbox" className="text-gray-700 dark:text-gray-200 font-medium cursor-pointer ml-3">
                                مایل به ورود دو مرحله‌ای هستم
                            </label>
                        
                            <input
                                id="2fa-checkbox"
                                type="checkbox"
                                checked={is2FAEnabled}
                                onChange={(e) => setIs2FAEnabled(e.target.checked)}
                                className="h-5 w-5 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                                style={{ transform: 'scale(1.2)' }} 
                            />
                        </div>
                    </div>
                </div>

       
                <div className="mb-8 mt-12">
                    <header 
                        className="flex justify-between items-center cursor-pointer pb-2" 
                        onClick={() => setIsEmailExpanded(prev => !prev)}
                    >
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white rtl">
                            ایمیل بازیابی
                        </h2>
                        {isEmailExpanded ? (
                            <ChevronUp className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        ) : (
                            <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                        )}
                    </header>
                    <div className="border-b-2 border-purple-200 dark:border-purple-700 mb-6 w-full"></div>

                    <div className={`overflow-hidden transition-all duration-500 ${isEmailExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
                        <div className="flex justify-end mt-4 max-w-sm mx-auto">
                     
                            <div className="relative w-full">
                                <input
                                    type="email"
                                    value={recoveryEmail}
                                    onChange={(e) => setRecoveryEmail(e.target.value)}
                                    placeholder="example@gmail.com"
                                    className="w-full p-3 pr-4 pl-4 text-sm text-gray-900 dark:text-white bg-gray-50 border-2 rounded-xl border-gray-300 focus:ring-purple-500 focus:border-purple-500 transition duration-150 rtl placeholder:text-gray-400 text-center"
                                />
                                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
                                <label className="absolute right-3 -top-3 px-2 text-xs font-medium text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 transition rtl">
                                    ایمیل جدید
                                </label>
                            </div>
                        </div>
                    
                         <div className="flex justify-center mt-6">
                            <button 
                                onClick={handleEmailSave}
                                disabled={recoveryEmail.length === 0}
                                className={`flex items-center px-8 py-3 font-extrabold text-gray-900 rounded-xl shadow-lg transition-all duration-300 
                                ${recoveryEmail.length > 0 
                                    ? 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-500/50' 
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed shadow-none'
                                }`}
                            >
                                <Save className="w-5 h-5 ml-2" />
                                ذخیره تغییرات ایمیل
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Setting;