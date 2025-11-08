import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider ,  } from "react-router-dom"
import Courses from './Pages/Courses'
<<<<<<< HEAD
import Landing from './Componets/Landing'
import CoursesDetails from './Pages/CoursesDetails';
import Shop from './Pages/Shop/Shop';

=======
import Landing from './Components/Landing/Landing.jsx'
import Login from "./Pages/Auth/Login.jsx"
import Register from "./Pages/Auth/Register.jsx"
import VerifyCode from "./Pages/Auth/VerifyCode.jsx";
import ForgotPassword from "./Pages/Auth/ForgetPassword.jsx";
>>>>>>> 786f123bd33fee66af5dc68c86787b61a3912b2f

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
<<<<<<< HEAD
      {index: true, element: <Landing />},
      {path: "/courses", element: <Courses />},
      {path: "/coursesDetails/:id" , element: <CoursesDetails/> },
      {path : "/Shop" , element:<Shop/>}
     
=======
      { index: true, element: <Landing /> },
      { path: "/courses", element: <Courses /> },
>>>>>>> 786f123bd33fee66af5dc68c86787b61a3912b2f
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/verify-code", element: <VerifyCode /> },
  { path:"/forgot-password" ,element:<ForgotPassword />},

  { path: "*", element: <h1 style={{ textAlign: "center", marginTop: "40px" }}>صفحه مورد نظر یافت نشد </h1> },
]);
<<<<<<< HEAD



=======
>>>>>>> 786f123bd33fee66af5dc68c86787b61a3912b2f
export default function App() {
  return <RouterProvider router={router}/>
}
