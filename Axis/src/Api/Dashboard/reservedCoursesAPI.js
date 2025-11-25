const API_URL = 'https://sepehracademy.liara.run/SharePanel/GetMyCoursesReserve';
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjM5OTE0OTIsImV4cCI6MTc2NDAyNzQ5Mn0.TE0ABN7NtF2AOpmjpvCCE7n3Yfn7xaY8ITTUzG2xTxs"; 

export async function fetchReservedCourses() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data || []; 

    } catch (error) {
        console.error("Error fetching reserved courses:", error);
        throw error;
    }
}

export const mapReservedCourses = (apiData) => {
    return apiData.map(item => ({
        id: item.reserveId || item.courseId || Math.floor(Math.random() * 10000),
        courseName: item.courseName || "نام دوره نامشخص",
        teacherName: item.teacherName || "نامشخص",
        reserverDate: item.reserverDate ? new Date(item.reserverDate).toLocaleDateString('fa-IR') : "۱۴۰۳/۰۱/۰۱",
        price: item.cost ? Number(item.cost).toLocaleString('fa-IR') : "۰",
        status: item.accept ? "تایید شده" : "در انتظار تایید",
        studentId: item.studentId
    }));
};

export async function deleteReservedCourseAPI(id) {
    const DELETE_URL = `https://sepehracademy.liara.run/SharePanel/DeleteCourseReserve`; 
    
    const response = await fetch(DELETE_URL, {
        method: 'DELETE', 
        headers: {
            'Authorization': `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }) 
    });

    if (!response.ok) {
        throw new Error("خطا در حذف رزرو");
    }
    return true;
}