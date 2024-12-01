import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import CreateBlog from '../components/CreateBlog'
import ProtectedRoute from '../components/ProtectedRoute'
import Post from '../components/Post'

const createRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [ 
        {
          path: "/register", 
          element:<Register/>
        }, 
        {
          path: "/login", 
          element: <Login/>
        }, 
        {
          path: '/home',
          element: (
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: '/createBlog',
          element: (
            <ProtectedRoute>
              <CreateBlog/>
            </ProtectedRoute>
          ),
        },
        {
          path: "/posts/:id",
          element: (
            <ProtectedRoute>
              <Post/>
            </ProtectedRoute>
          ),
        }  
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createRouter}/>
  </StrictMode>,
)
