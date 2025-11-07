// import React from 'react'
import React, { useState, useEffect } from 'react';
import CourseCard from './CourseCard';
const CoursesApi = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const MOCK_API_URL = "https://68dbe40a445fdb39dc26fbfe.mockapi.io/courses/course"; 

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(MOCK_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center p-8">در حال بارگذاری...</div>;
  if (error) return <div className="text-center p-8 text-red-600">خطا: {error}</div>;
  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6 text-center dark:text-white"></h1>
    
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    
      {courses.length === 0 && <CourseCard course={{
          id: 'mock',
          title: "طراحی کامل گرافیک برای مبتدی ها",
          image: "https://via.placeholder.com/600x400.png?text=Course+Image",
          rating: "5", level: "مبتدی", type: "بک اند", difficulty: "متوسط",
          participants: "12", likes: "169", dislikes: "71", instructor: "محسن ...",
          price: "190 هزار تومان", date: "1403/4/21"
      }} />}
    </div>
  </div>
  )
}

export default CoursesApi
