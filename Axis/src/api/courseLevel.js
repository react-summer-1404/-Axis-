

const STATIC_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjE4MDU2MzksImV4cCI6MTc2MTg0MTYzOX0.qdXnrvDYXN_24wrrXXENsBPK498agFofUFruijeJsjE"; 

const COURSE_LEVEL_API_URL = 'https://sepehracademy.liara.run/CourseLevel/GetAllCourseLevel'; 

/**

  @returns {Array<Object>} 
 */
export async function getCourseLevels() {
    const token = STATIC_TOKEN; 

    try {
        const response = await fetch(COURSE_LEVEL_API_URL, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            
                'Authorization': `Bearer ${token}` 
            }
        });
        
        
        if (response.status === 401 || response.status === 403) {
            throw new Error('توکن منقضی یا نامعتبر است. مجدداً توکن را بررسی کنید.');
        }
         
        if (!response.ok) {
            throw new Error(`خطای سرور با کد: ${response.status}`);
        }


        return response.json(); 
        
    } catch (error) {
        console.error('خطا در فراخوانی API CourseLevel:', error.message);
        throw error;
    }
}