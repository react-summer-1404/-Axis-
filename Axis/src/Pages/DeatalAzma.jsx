import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const BASE_API_URL = 'https://sepehracademy.liara.run/Home/GetCourseDetails?CourseId=t1'; 


const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjI1MDU5MzksImV4cCI6MTc2MjU0MTkzOX0.uqs_VkV8gqDthfcUKCSOKsOiayCIm0vB7DeTc2ugxD0"

function CoursesDetails() {
    
    const { id } = useParams(); 

    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchCourseDetail = async () => {
            if (!id) return; 

            try {
                setLoading(true);
                setError(null);
                
                const url = `${BASE_API_URL}?courseId=${id}`;

                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
            
                        'Authorization': `Bearer ${AUTH_TOKEN}`,
                        'Content-Type': 'application/json' 
                    }
                });

                if (!response.ok) {
                    throw new Error(`خطای شبکه: ${response.status}`);
                }

                const data = await response.json();
                setCourseData(data);
            } catch (err) {
                console.error("خطا در واکشی جزئیات دوره:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourseDetail();
    }, [id]); 

    if (loading) {
        return <div className="text-center p-12 text-blue-600 text-2xl">...درحال بارگذاری جزئیات دوره</div>;
    }

    if (error) {
        return <div className="text-center p-12 text-red-600 text-xl">خطا در بارگذاری: {error}</div>;
    }

    if (!courseData) {
         return <div className="text-center p-12 text-gray-500 text-xl">جزئیات دوره‌ای یافت نشد.</div>;
    }
    
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">{courseData.title}</h1>
            <p className="text-xl text-gray-600 mb-6">{courseData.miniDescribe}</p>

            <img 
                src={courseData.imageAddress} 
                alt={courseData.title} 
                className="w-full h-96 object-cover rounded-xl shadow-lg mb-8"
            />
            
            <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-lg mb-4 leading-relaxed">{courseData.describe}</p>

    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-4 mt-4">
                    <DetailItem title="استاد" value={courseData.teacherName} />
                    <DetailItem title="سطح" value={courseData.courseLevelName} />
                    <DetailItem title="هزینه" value={`${courseData.cost} تومان`} />
                    <DetailItem 
                        title="تکنولوژی‌ها" 
                        value={courseData.courseTech.map(t => t.tech.techName).join(', ')} 
                    />
                </div>
            </div>
        </div>
    );
}

const DetailItem = ({ title, value }) => (
    <div>
        <h4 className="font-semibold text-gray-500 text-sm">{title}</h4>
        <p className="text-gray-800 text-lg font-medium">{value}</p>
    </div>
);

export default CoursesDetails;