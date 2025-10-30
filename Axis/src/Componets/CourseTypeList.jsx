
import React, { useState, useEffect } from 'react';
import { getCourseTypes } from '../api/courseType'; 

function CourseTypeList() {
    const [types, setTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCourseTypes();                
                if (Array.isArray(data)) {
                    setTypes(data); 
                } else {
                    setTypes(data.types || data.data || []);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };


        fetchData();
    }, []); 

 
    if (loading) return <div>در حال بارگذاری انواع دوره‌ها...</div>;
    if (error) return <div style={{ color: 'red', fontWeight: 'bold' }}>خطا: {error}</div>;

  
    return (
        <section>
            <div className="type-list">
                {types.map((type, index) => (
                    <div 
                        key={type.id || index} 
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '10px' 
                        }}
                    >
                        <input 
                            type="checkbox" 
                            id={`type-${type.id || index}`} 
                            style={{ marginRight: '10px' }} 
                        />
                        <label htmlFor={`type-${type.id || index}`}>
                            {type.courseTypeName || type.title || `نوع دوره ${type.id || index + 1}`}
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CourseTypeList;