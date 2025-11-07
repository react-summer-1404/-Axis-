const getToken = () => {
    return"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjcyLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjI1MDU5MzksImV4cCI6MTc2MjU0MTkzOX0.uqs_VkV8gqDthfcUKCSOKsOiayCIm0vB7DeTc2ugxD0"; 
};

/**
 * 
 * @param {string} courseId 
 * @returns {Object} 
 */
export const getCourseDetail = async (courseId) => {
    
    
    const BASE_API_URL = "https://sepehracademy.liara.run/Home/GetCourseDetails?CourseId=t1"; 
    
    
    const url = `${BASE_API_URL}?CourseId=${courseId}`; 

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            
                'Authorization': `Bearer ${getToken()}`, 
            },
        });

        
        if (!response.ok) {
             const errorBody = await response.text();
             throw new Error(`خطای ${response.status} از سرور API: ${errorBody || response.statusText}`);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("خطا در فراخوانی جزئیات دوره:", error);
    
        if (error.message.includes('404')) {
            throw new Error(`دوره با شناسه ${courseId} یافت نشد (404). آدرس API را بررسی کنید.`);
        } else if (error.message.includes('401') || error.message.includes('403')) {
            throw new Error(`توکن دسترسی منقضی یا نامعتبر است. توکن جدید را در getCourseDetail جایگزین کنید.`);
        }
        throw error;
    }
};