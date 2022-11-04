import React from 'react'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import "./Navbar.css";
export default function Navbar() {
  const {isAuth,}=useContext(AuthContext)
  console.log("isAuth ",isAuth)
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-light position-sticky top-0 zi">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <h1 className="navbar-brand" >Logo</h1>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/team">Team</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/about">About</Link>
        </li>
        {
          !isAuth ? <li className="nav-item">
          <Link className="nav-link " to="/login">Login</Link>
        </li>
           :<li className="nav-item">
           <Link className="nav-link " to="/dashbord">Dashbord</Link>
         </li>
        }
           <li className="nav-item">
          <Link className="nav-link " to="/adminLogin">Admin</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
   </>
  )
}
