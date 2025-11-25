
const FRESH_AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM5OTE0OTIsImV4cCI6MTc2NDAyNzQ5Mn0.TE0ABN7NtF2AOpmjpvCCE7n3Yfn7xaY8ITTUzG2xTxs"; 

const BASE_URL = "https://sepehracademy.liara.run"; 
const API_PATH = "/SharePanel/GetMyFavoriteCourses";
const API_URL = `${BASE_URL}${API_PATH}?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=`;

export async function fetchFavoriteCourses() {
    if (!FRESH_AUTH_TOKEN || FRESH_AUTH_TOKEN.length < 10 || FRESH_AUTH_TOKEN.includes('/*')) {
        throw new Error("لطفاً توکن احراز هویت را در فایل favoriteCoursesAPI.js وارد کنید.");
    }

    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${FRESH_AUTH_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const statusMessage = response.status === 500 
                ? "خطای داخلی سرور (500). توکن یا سرور مشکل دارد." 
                : `خطای HTTP: ${response.status}.`;
            throw new Error(statusMessage);
        }

        const data = await response.json();
        return data.favoriteCourseDto || [];
    } catch (err) {
        console.error("Error fetching favorite courses:", err);
        throw err;
    }
}

export function mapFavoriteCourses(rawCourses) {
    return rawCourses.map(course => ({
        id: course.id, 
        name: course.title || 'بدون عنوان', 
        teacher: course.instructor || 'نامشخص', 
        date: course.lastUpdate || '---', 
        price: course.price || '0', 
        icon: '',
    }));
}