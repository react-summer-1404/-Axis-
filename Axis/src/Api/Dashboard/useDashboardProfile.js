
import { useState, useEffect } from 'react';
const FIXED_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM2Mzk5NDIsImV4cCI6MTc2MzY3NTk0Mn0.HE8LYFvJI22ePT5LsKPy-ifIrKYf3-PaDPuJq7rYjUc";

const API_URL_GET = 'https://sepehracademy.liara.run/SharePanel/GetProfileInfo'; 

export const useFetchProfile = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API_URL_GET, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${FIXED_AUTH_TOKEN}`,
                    },
                });
                if (!response.ok) {
                    throw new Error(`خطای ${response.status}: دریافت داده موفقیت‌آمیز نبود.`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading, error };
};