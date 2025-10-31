import React from 'react'
import HeaderDetails from './CoursesDetails/HeaderDetails'
import Sidebar from './CoursesDetails/Sidebar'
import CardSidebar from './CoursesDetails/CardSidebar'

const CoursesDetails = () => {
  return (
    <div>
    <HeaderDetails/>
    <div className='flex justify-end gap-11'> 
    <CardSidebar/>
    <Sidebar/>
    
    </div>
    </div>
  )
}

export default CoursesDetails