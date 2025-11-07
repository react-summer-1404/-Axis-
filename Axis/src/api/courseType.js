
const STATIC_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjE4MDU2MzksImV4cCI6MTc2MTg0MTYzOX0.qdXnrvDYXN_24wrrXXENsBPK498agFofUFruijeJsjE"; 


const COURSE_TYPE_API_URL = 'https://sepehracademy.liara.run/CourseType/GetCourseTypes'; 

/**
 * 
 * @returns {Array<Object>} 
 */
export async function getCourseTypes() {
    const token = STATIC_TOKEN; 

    try {
        const response = await fetch(COURSE_TYPE_API_URL, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                
                'Authorization': `Bearer ${token}` 
            }
        });
        
    
        if (response.status === 401 || response.status === 403) {
            throw new Error('توکن منقضی یا نامعتبر است.');
        }

        if (!response.ok) {
            throw new Error(`خطای سرور با کد: ${response.status}`);
        }

        
        return response.json(); 
        
    } catch (error) {
        console.error('خطا در فراخوانی API CourseType:', error.message);
        throw error;
    }
}