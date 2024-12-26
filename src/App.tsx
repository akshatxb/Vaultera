import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./routes/Login"
import AuthProvider from "./contexts/AuthContext"
import PageNotFound from "./routes/PageNotFound"
import DashBoard from "./routes/DashBoard"
import LandingPage from "./routes/LandingPage"

function App() {

  const Router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/dashboard/*',
      element: <DashBoard />
    },
    {
      path: '*',
      element: <PageNotFound />,
    }
  ])

  return (
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>
  )
}

export default App
