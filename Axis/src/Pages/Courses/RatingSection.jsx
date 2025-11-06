import React from 'react'

const RatingSection = () => {
  return (
    <div className="flex flex-col items-start gap-1 text-right bg-[#F7F7F9] h-24 rounded-2xl shadow p-4 dark:bg-[#cbcbed]">
      <h2 className="text-base font-bold mb-3">رتبه بندی ها</h2>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
             className={`w-5 h-5 ${
              i < 4 ? 'text-yellow-400' : 'text-gray-300'
            }`} 
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455 1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.966-3.38-2.455c-.784-.57-.38-1.81.588-1.81h4.175l1.286-3.966z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600">(23)</span>
      </div>
    </div>

  )
}

export default RatingSection