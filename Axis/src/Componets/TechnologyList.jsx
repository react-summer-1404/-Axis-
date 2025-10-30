// src/components/TechnologyList.jsx
import React, { useState, useEffect } from 'react';
import { getTechnologies } from '../api/technology'; 

function TechnologyList() {
    const [technologies, setTechnologies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTechnologies = async () => {
            setLoading(true);
            setError(null);
            try {
                
                const data = await getTechnologies(); 
                
                
                if (Array.isArray(data)) {
                    setTechnologies(data); 
                } else {
                    
                    setTechnologies(data.techs || data.data || []);
                }
            } catch (err) {
            
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTechnologies();
    }, []); 

    
    if (loading) return <div>در حال بارگذاری تکنولوژی‌ها...</div>;
    if (error) return <div style={{ color: 'red', fontWeight: 'bold' }}>خطا: {error}</div>;
    
    
    return (
        <section>
            <h2> لیست تکنولوژی‌های ا</h2>
            {technologies.length === 0 ? (
                <p>هیچ تکنولوژی‌ای یافت نشد</p>
            ) : (
                <ul>
                    {technologies.map((tech) => (
                      
                        <li key={tech.id}>
                            <input type="checkbox" id={tech.id} />
                            <label htmlFor={tech.id}>{tech.techName} ({tech.id})</label>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default TechnologyList;