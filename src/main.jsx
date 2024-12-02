import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import App from './App'
import Home from '../components/Home'
import CreateBlog from '../components/CreateBlog'
import Post from '../components/Post'

const createRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [ 
        {
          path: '/home',
          element: (
            <Home />
          ),
        },
        {
          path: '/createBlog',
          element: (
            <CreateBlog/>
          ),
        },
        {
          path: "/posts/:id",
          element: (
            <Post/>     
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
