import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Courses from './Pages/Courses'
import Landing from './Componets/Landing'
import CoursesDetails from './Pages/CoursesDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {index: true, element: <Landing />},
      {path: "/courses", element: <Courses />},
      {path: "/coursesDetails" , element: <CoursesDetails/> }
     
    ],
  },
]);



export default function App() {
  return <RouterProvider router={router}/>
}
