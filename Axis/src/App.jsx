import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Courses from './Pages/Courses'
import Landing from './Components/Landing/Landing.jsx'
import Login from "./Pages/Auth/Login.jsx"
import Register from "./Pages/Auth/Register.jsx"
import VerifyCode from "./Pages/Auth/VerifyCode.jsx";
import ForgotPassword from "./Pages/Auth/ForgetPassword.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      { index: true, element: <Landing /> },
      { path: "/courses", element: <Courses /> },
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
