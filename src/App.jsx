import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BlogContext from '../contexts/BlogContext'

function App() {

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
