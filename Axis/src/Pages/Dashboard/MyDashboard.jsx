import React from 'react';
import { useDashboardProfile } from '../../api/Dashboard/Dashboard.js'; 


export default function MyDashboard() {
  
  const { data, loading, error } = useDashboardProfile(); 

  if (loading) {
    return (
      <div className="p-8 text-center text-blue-500">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
        در حال بارگذاری اطلاعات...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 m-8 bg-red-100 text-red-700 border border-red-400 rounded-lg">
        <p className="font-bold">خطا در اتصال به API:</p>
        <p>{error}</p>
      </div>
    );
  }
  
  const profileProgress = data.profileCompletionPercentage || 0; 

  
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
        
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
            {data.fName || 'کاربر'} {data.lName || 'محترم'} 
        </h2>
        <p className="text-gray-500 mb-6">{data.email}</p>

        <div className="p-4 border border-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-700">تکمیل پروفایل</h3>

                <span className="text-xl font-bold text-indigo-600">{profileProgress}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 

                className="h-4 rounded-full transition-all duration-700" 
                style={{ 
                    width: `${profileProgress}%`,
   
                    backgroundColor: profileProgress > 50 ? '#10B981' : '#F59E0B' 
                }} 
              ></div>
            </div>
            
            <p className="text-sm text-right mt-2 text-gray-500">
               اطلاعات بیشتر را وارد کنید تا پروفایل شما کامل شود.
            </p>
        </div>

        
      </div>
      
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          

        <div className="bg-blue-50 p-5 rounded-xl shadow-md">
            <p className="text-sm text-blue-700 mb-1">شماره تماس</p>
            <p className="text-xl font-bold">{data.phoneNumber || 'ثبت نشده'}</p>
        </div>
        
        <div className={`p-5 rounded-xl shadow-md ${data.twoStepAuth ? 'bg-green-100' : 'bg-red-100'}`}>
            <p className="text-sm mb-1 text-gray-700">احراز هویت دو مرحله‌ای</p>
            <p className="text-xl font-bold">{data.twoStepAuth ? 'فعال ' : 'غیرفعال '}</p>
        </div>
        
        <div className="bg-gray-100 p-5 rounded-xl shadow-md">
            <p className="text-sm text-gray-700 mb-1">نام کاربری</p>
            <p className="text-xl font-bold">{data.userName}</p>
        </div>

      </div>
      
    </div>
  );
}