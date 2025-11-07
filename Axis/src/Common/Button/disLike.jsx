import React from 'react'

const disLike = () => {
  return (
    <div className="flex items-center">
    <button className="flex items-center p-2 bg-gray-500 rounded-lg text-black hover:bg-gray-400 transition dark:bg-gray-200 dark:hover:bg-gray-300">
      <span className="ml-1"> </span>
      <svg className="w-4 h-4 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.5-.54 1.81-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
      </svg>
    </button>
    </div>
  )
}

export default disLike