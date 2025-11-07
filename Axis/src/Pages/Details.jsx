import React from 'react'
import CoursesDetails from './DeatalAzma'

const Details = ( courseId, title, miniDescribe, imageAddress) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 hover:shadow-xl">
              
                <img src={imageAddress} alt={title} className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-gray-600 mt-2">{miniDescribe}</p>
                
                </div>
                <CoursesDetails/>
</div>
  )
}

export default Details