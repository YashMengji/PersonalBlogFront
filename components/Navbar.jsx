import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext.jsx'

function Navbar() {

  const showLogoutBtn = false;

  const {search, setSearch} = useBlog();

  return (
    <div className="nav-div">
      <div className="div-nav-left">
        <div className="div-nav-logo">
          <img src="/images/logo_img.png" className="nav-logo" />
        </div>
        <div className="div-nav-name">
          BlogSphere
        </div>
      </div>
      <div className="div-nav-middle">
        <div className="div-home">  
          <Link className="section-link" to="/home">
            <i className="fa-solid fa-house fa-xl"></i>
          </Link>
        </div>
        <input className="search-bar" type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="search-icon-button" >
          <img className="search-icon" src="/images/search.svg" />
        </button>
      </div>
      <div className="div-nav-right">
        <div className="div-bell-icon">
          <Link className="section-link" to="/createBlog">
            <i className="fa-solid fa-pen-to-square fa-xl"></i>
          </Link>
        </div>
        <div className="div-profile">
          {
            (showLogoutBtn) ? (
              // <Link className="section-link" to="/login">
                <button className="sign-in-btn" >
                  Logout
                </button>
              // </Link>
            ) : (
         
                <button className="sign-in-btn">
                  Welcome
                </button>
       
            )
          }
        </div>
      </div>
    </div>

  )
}

export default Navbar