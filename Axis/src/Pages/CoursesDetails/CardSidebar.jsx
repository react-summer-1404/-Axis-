import React from 'react'

const CardSidebar = () => {
  return ( 
    <div>
    <div class="bg-gradient-to-br from-orange-400 to-red-600 min-h-[400px] relative overflow-hidden">
    <div class="absolute top-10 left-10 space-y-4">
        <img src="laravel-logo.png" alt="Laravel Logo" class="w-12 h-12"/>
        <span class="bg-white text-orange-600 px-4 py-1 rounded-full font-bold shadow-md">Expert</span>
        <span class="bg-orange-600 text-white px-4 py-1 rounded-full font-bold shadow-md">Laravel Pro</span>
    </div>

    <img src="man-image.png" alt="Happy Developer" class="absolute bottom-0 right-0 h-full object-cover"/>
</div>

<div class="p-6">
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold">حل تعارضات بین طراحان و مهندسان</h1>
        <div class="flex items-center text-gray-600">
            <span class="text-yellow-500 text-xl">⭐</span>
            <span class="mr-1">(4.5 امتیاز)</span>
        </div>
    </div>
    
    <div class="flex items-center text-sm text-gray-500 space-x-4 space-x-reverse">
        <span>توسط محسن</span>
        <span>2,250 دانش‌آموز</span>
        <span>24/07/2024</span>
    </div>
    
    <div class="mt-6 flex space-x-3 space-x-reverse">
        <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">بررسی اجمالی</button>
        </div>
</div>
</div>
  )
}

export default CardSidebar