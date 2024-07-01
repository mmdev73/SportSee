import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './pages/Layout'
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Layout />,
      errorElement:<Error />,
      children: [
        {
          path:'',
          element: <Error />
        },
        {
          path:'/user/:userIdParam',
          element: <Dashboard />
        },
      ]
    }
  ])
  return (
    <>
        <RouterProvider router={router} /> 
    </>
  )
}

export default App
