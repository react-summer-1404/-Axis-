import React, { useState, useEffect } from 'react';

const BASE_URL = "https://sepehracademy.liara.run"; 
const FIXED_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM5OTE0OTIsImV4cCI6MTc2NDAyNzQ5Mn0.TE0ABN7NtF2AOpmjpvCCE7n3Yfn7xaY8ITTUzG2xTxs";
const API_URL = `${BASE_URL}/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`;

const PAGE_NUMBER = 1;
const ROWS_PER_PAGE = 10;


const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            setError(null);

            const url = `${API_URL}?PageNumber=${PAGE_NUMBER}&RowsPerPage=${ROWS_PER_PAGE}`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${FIXED_AUTH_TOKEN}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                
                setCourses(data.listMyCourses || []); 
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError("خطا در بارگذاری دوره‌ها. لطفا آدرس API را بررسی کنید.");
                setCourses([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []); 

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <p className="text-xl text-indigo-600">در حال بارگذاری دوره‌ها... ⏳</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-100 border-l-4 border-red-500 text-red-700">
                <p className="font-bold">خطا:</p>
                <p>{error}</p>
            </div>
        );
    }
    
    if (courses.length === 0) {
        return (
            <div className="p-6 text-center bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600">هنوز دوره‌ای برای شما ثبت نشده است. 😞</p>
            </div>
        );
    }


    return (
        <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-xl">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b-2 pb-2">📚 دوره‌های من</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div 
                        key={course.id} 
                        className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1 border border-gray-200"
                    >
                        <h3 className="text-xl font-semibold text-indigo-700 mb-2">{course.title || 'بدون عنوان'}</h3> 
                        <p className="text-sm text-gray-600 mb-1">استاد: {course.instructor || 'نامشخص'}</p>
                        <p className="text-xs text-gray-400">آخرین به‌روزرسانی: {course.lastUpdate || '---'}</p>
                        <button className="mt-3 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-150 text-sm">
                            مشاهده دوره
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCourses;