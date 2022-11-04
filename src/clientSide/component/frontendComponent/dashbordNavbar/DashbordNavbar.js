import React from 'react'
import { Link } from 'react-router-dom'
export default function DashbordNavbar() {
  return (
   <>

<div className="container-fluid ">
    <div className="row justify-content-between">
      <div className=" col-md-3 bg-danger">
      <h4 className=' text-center'>Dashbord Menu</h4>
        <Link to="/" className='btn btn btn-outline-primary' >Home</Link> <br/>
        <Link to="/dashbord/createProfile" className='btn btn-outline-primary mt-2' >CreateProfile</Link><br/>
        <Link to="/dashbord/profile" className='btn btn-outline-primary mt-2'>Profile</Link>
      </div>
    </div>
  </div>

   </>
  )
}
