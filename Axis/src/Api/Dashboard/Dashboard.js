import { useState, useEffect } from 'react';


const FIXED_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM2Mzk5NDIsImV4cCI6MTc2MzY3NTk0Mn0.HE8LYFvJI22ePT5LsKPy-ifIrKYf3-PaDPuJq7rYjUc";

const API_URL = 'https://sepehracademy.liara.run/SharePanel/GetProfileInfo'; 

export const useDashboardProfile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json',
       
                        'Authorization': `Bearer ${FIXED_AUTH_TOKEN}`, 
                    },
                });
                
                if (!response.ok) {
                    if (response.status === 401) {
                         throw new Error('خطا: توکن منقضی یا نامعتبر است.');
                    }
                    throw new Error(`خطای سرور: ${response.status}`);
                }
                
                const result = await response.json();
                
                setData(result); 
                setError(null);
                
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); 

    return { data, loading, error };
};