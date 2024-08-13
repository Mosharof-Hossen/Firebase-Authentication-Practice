import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import AuthProvider from './ContextProvider/AuthProvider.jsx'
import Order from './Components/Order.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import Profile from './Components/Profile.jsx'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/orders",
        element: <PrivateRoute> <Order></Order> </PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
