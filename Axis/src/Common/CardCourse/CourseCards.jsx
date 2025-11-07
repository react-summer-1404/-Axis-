
import React, { useState, useEffect } from 'react';
import { getCoursesWithPagination } from '../../api/coursePagination';
 import CourseCard from '../../Common/CardCourse/CourseCard'; 

function CourseCards() {
    const [courses, setCourses] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const pageNumber = 1;
    const rowsOfPage = 12; 

    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCoursesWithPagination(pageNumber, rowsOfPage); 
                if (data && Array.isArray(data.courseFilterDtos)) {
                    setCourses(data.courseFilterDtos);
                    setTotalCount(data.totalCount);
                } else {
                    throw new Error('ساختار داده‌های دوره نامعتبر است.');
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []); 

    if (loading) return <div style={{ textAlign: 'center' }}>در حال بارگذاری دوره‌ها...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center' }}>خطا: {error}</div>;

    return (
        <section style={{ padding: '20px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
            ({totalCount}) 
            </h2>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '20px', 
                justifyContent: 'center' 
            }}>
               
                {courses.map((courseApiItem) => (
                    <CourseCard
                        key={courseApiItem.courseId}
                    
                    
                        course={{
                        
                            title: courseApiItem.title, 
                            price: courseApiItem.cost, 
                            date: new Date(courseApiItem.startTime).toLocaleDateString('fa-IR'), 

                            
                            level: courseApiItem.levelName, 
                            type: courseApiItem.technologyList.trim().split(' ')[0] || 'تکنولوژی', 

                            rating: courseApiItem.courseRate.avg ? courseApiItem.courseRate.avg.toFixed(1) : 0,
                            
                        
                            difficulty: courseApiItem.levelName, 
                            participants: courseApiItem.currentRegistrants, 
                            instructor: courseApiItem.teacherName,
                            
                        
                            likes: courseApiItem.likeCount,
                            dislikes: courseApiItem.dissLikeCount, 
                            image: courseApiItem.tumbImageAddress 
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

export default CourseCards;