import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider ,  } from "react-router-dom"
import Courses from './Pages/Courses'

import Landing from './Componets/Landing'
import CoursesDetails from './Pages/CoursesDetails';
import Shop from './Pages/Shop/Shop';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[

      {index: true, element: <Landing />},
      {path: "/courses", element: <Courses />},
      {path: "/coursesDetails/:id" , element: <CoursesDetails/> },
      {path : "/Shop" , element:<Shop/>}
     
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify-code", element: <VerifyCode /> },
  { path:"/forgot-password" ,element:<ForgotPassword />},

  { path: "*", element: <h1 style={{ textAlign: "center", marginTop: "40px" }}>صفحه مورد نظر یافت نشد </h1> },
]);




export default function App() {
  return <RouterProvider router={router}/>
}
