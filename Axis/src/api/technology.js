
const STATIC_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjE4MDU2MzksImV4cCI6MTc2MTg0MTYzOX0.qdXnrvDYXN_24wrrXXENsBPK498agFofUFruijeJsjE"; 

const TECHNOLOGY_API_URL = 'https://sepehracademy.liara.run/Home/GetTechnologies'; 

/**
 * 
 * @returns {Array<Object>} 
 */
export async function getTechnologies() {

    const token = STATIC_TOKEN; 

    try {
        const response = await fetch(TECHNOLOGY_API_URL, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            }
        });
        
    
        if (response.status === 401 || response.status === 403) {
            
            throw new Error('توکن منقضی یا نامعتبر است. توکن ثابت را به‌روزرسانی کنید.');
        }

        if (!response.ok) {
            throw new Error(`خطای سرور: ${response.status}`);
        }

        return response.json(); 
        
    } catch (error) {
        console.error('خطا در دریافت تکنولوژی‌ها:', error.message);
        throw error;
    }
}