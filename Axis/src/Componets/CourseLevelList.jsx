
import React, { useState, useEffect } from 'react';
import { getCourseLevels } from '../api/courseLevel'; 

function CourseLevelList() {
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getCourseLevels(); 
                
                if (Array.isArray(data)) {
                    setLevels(data); 
                } else {
                    setLevels(data.levels || data.data || []);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 
    if (loading) return <div>در حال بارگذاری سطوح دوره‌ها...</div>;
    if (error) return <div style={{ color: 'red', fontWeight: 'bold' }}>خطا: {error}</div>;
    return (
        <section>
            {/* <h2>(Course Levels)</h2> */}
            <div className="level-list">
                {levels.map((level) => (
                    <div 
                        key={level.id}
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            marginBottom: '10px' 
                        }}
                    >
                        <input 
                            type="checkbox" 
                            id={`level-${level.id}`} 
                            style={{ marginRight: '10px' }} 
                        />
                        
                        <span 
                            style={{ 
                                marginRight: '10px', 
                                fontWeight: 'bold', 
                                color: 'blue',
                                marginLeft:'10px'
                            }}
                        >
                            {level.iconAddress ? level.iconAddress.toUpperCase() : '؟'}
                        </span>


                        <label htmlFor={`level-${level.id}`}>
                            {level.levelName}
                        </label>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default CourseLevelList;