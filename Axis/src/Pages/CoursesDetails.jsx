import React from 'react'
import HeaderDetails from './CoursesDetails/HeaderDetails'
import Sidebar from './CoursesDetails/Sidebar'
import CardSidebar from './CoursesDetails/CardSidebar'
import { useParams } from 'react-router-dom';
import Details from './Details';
import CourseCard from '../Common/CardCourse/CourseCard';



const CoursesDetails = () => {
  const { id } = useParams();
  if (!id) {
    return <div>شناسه دوره برای نمایش جزئیات یافت نشد.</div>;
}
  return (
    <div>
    <HeaderDetails />
    <div className='flex justify-end gap-11'> 
    <div className='flex-grow'>
              
                 <CourseCard courseId={id}/> 
                </div>
                {/* <Details courseId={id}/>  */}
      <CardSidebar courseId={id}/>  
     <Sidebar />
     
    </div>
    </div>
  )
}

export default CoursesDetails