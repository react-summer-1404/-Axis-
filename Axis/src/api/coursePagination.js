
const STATIC_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50cyI6W3sicGhvbmUiOiIwOTA1IDk2NyAzODA5IiwiaWQiOjczLCJpc1VzZSI6dHJ1ZX1dLCJpYXQiOjE3NjE4MDU2MzksImV4cCI6MTc2MTg0MTYzOX0.qdXnrvDYXN_24wrrXXENsBPK498agFofUFruijeJsjE"; 

const BASE_URL = 'https://sepehracademy.liara.run/Home/GetCoursesWithPagination'; 

/**
 * 
 * @param {number} pageNumber 
 * @param {number} rowsOfPage 
 * @returns {Object} 
 */
export async function getCoursesWithPagination(pageNumber = 1, rowsOfPage = 12) {
    const token = STATIC_TOKEN; 
    
    
    const fullUrl = `${BASE_URL}?PageNumber=${pageNumber}&RowsOfPage=${rowsOfPage}&SortingCol=Active&SortType=DESC&TechCount=0`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            
                'Authorization': `Bearer ${token}` 
            }
        });
        
        if (!response.ok) {
            throw new Error(`خطای سرور با کد: ${response.status}`);
        }

        
        const data = await response.json(); 
        
        
        return data; 
        
    } catch (error) {
        console.error('خطا در دریافت لیست دوره‌ها:', error.message);
        throw error;
    }
}