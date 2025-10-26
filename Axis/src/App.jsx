import Layout from './Layout/Layout'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Courses from './Pages/Courses'
import Landing from './Componets/Landing'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {index: true, element: <Landing />},
      {path: "/courses", element: <Courses />}
    ],
  },
]);


export default function App() {
  return <RouterProvider router={router}/>
}
