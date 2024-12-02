import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BlogContext from '../contexts/BlogContext'
import { useNavigate, useLocation } from 'react-router-dom'

function App() {

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === "/") {
      navigate('/home');
    }
  }, [location.pathname])

  return (
    <>
      <BlogContext>
        <Navbar/>
        <Outlet/>
      </BlogContext>
    </>
  )
}

export default App
