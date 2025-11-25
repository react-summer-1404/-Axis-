import { useState, useEffect, useCallback } from 'react';

export const useFavoriteNews = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM5OTE0OTIsImV4cCI6MTc2NDAyNzQ5Mn0.TE0ABN7NtF2AOpmjpvCCE7n3Yfn7xaY8ITTUzG2xTxs";
    
    const API_URL = 'https://sepehracademy.liara.run/SharePanel/GetMyFavoriteNews';

    const fetchFavoriteNews = useCallback(async () => {
        
        setLoading(true);
        setError(null); 

        try {
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorBody = await response.text();
                let errorDetails = `خطای سرور (${response.status})`;
                try {
                    const errorJson = JSON.parse(errorBody);
                    errorDetails = errorJson.message || errorDetails;
                } catch (e) {
                    console.log(e)
                    errorDetails = `${errorDetails}: ${errorBody.substring(0, 100)}...`;
                }

                throw new Error(`خطای HTTP: ${errorDetails}`);
            }

            const data = await response.json();
            console.log('دیتای دریافت شده:', data);

            const favoriteNewsList = data.myFavoriteNews;

            if (!favoriteNewsList || !Array.isArray(favoriteNewsList)) {
                throw new Error('ساختار پاسخ API نامعتبر است یا لیست محتوا یافت نشد.');
            }

            setNews(favoriteNewsList);

        } catch (err) {
            setError(err.message || 'خطایی نامشخص در دریافت اطلاعات رخ داد.');
            console.error('خطا در واکشی اخبار مورد علاقه:', err);
        } finally {
            setLoading(false);
        }
    }, []); 

    useEffect(() => {
        fetchFavoriteNews();
    }, [fetchFavoriteNews]); 

    return { news, loading, error };
};