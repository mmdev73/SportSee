import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Layout from './routes/Layout'
import Dashboard from "./routes/Dashboard"
import Error from "./routes/Error"

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
