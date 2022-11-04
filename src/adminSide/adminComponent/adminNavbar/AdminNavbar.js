
import React, { useContext } from 'react'
import {Link, useNavigate, } from 'react-router-dom';
import { AdminAuthContext } from '../../../context/AdminAuthContext';
import "./AdminNavbar.css";
export default function AdminNavbar() {
  //AdminAuth

  const {setIsAuth}=useContext(AdminAuthContext)

  const navigate=useNavigate("")
  

  //LogoutHandler

  const logoutHandler=()=>{

    setIsAuth(false)
    navigate("/")
    
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light position-sticky top-0 zi">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h1 className="navbar-brand" >Logo</h1>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/admin">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/allUsers">All Users</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">HomeIdealPage</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/admin/createPost">CreatePost</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/adminLogin" onClick={logoutHandler}>Logout</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
