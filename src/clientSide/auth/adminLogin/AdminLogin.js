import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link,useNavigate } from 'react-router-dom';
import { AdminAuthContext } from '../../../context/AdminAuthContext';
export default function AdminLogin() {

    //AdminAuth
    const {isAuth,setIsAuth}=useContext(AdminAuthContext)
    console.log("adminAuth ",isAuth)
    
    const navigate=useNavigate("")

    const [admin, setAdmin]=useState({
        adminUserName:"",
        adminPassword:"",
    })
    //HabdlerChange
    const handlerChange=(e)=>{
        setAdmin({...admin,[e.target.name]:e.target.value})
    }

    //login
    const handlerLogin=(e)=>{
        e.preventDefault();
        if (admin.adminUserName==="awaisilyas800@gmail.com" && admin.adminPassword==="Ronaldo7") {
            navigate("/admin")
            setIsAuth(true)
        }
        else{
            alert("only Access For Admin")
        }
    }

  return (
 
    <>

    <div className="container-fluid bg-warning">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className=" col-md-4 text-center text-light">
                        <h1> Admin Login</h1>

                        <div className="row justify-content-center bg-light h-50" style={{borderRadius:"20px"}}>
                            <div className=" col">
                                <form>
                                    <div className="row g-3 mt-2">
                                        <div className="col">
                                        <TextField
                                                id="standard-Email-input"
                                                label="Email"
                                                type="Email"
                                                autoComplete="current-Email"
                                                variant="standard"
                                                name='adminUserName'
                                                onChange={handlerChange}
                                                
                                            />
                                            
                                        </div>
                                    </div>

                                    <div className="row g-3 mt-1">
                                        <div className="col">
                                            <TextField
                                                id="standard-password-input"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                variant="standard"
                                                name='adminPassword'
                                                onChange={handlerChange}
                                            />



                                        </div>
                                    </div>

                
                                    <div className="d-grid gap-2 mb-2 mt-2">
                                        <button className="btn btn-outline-success" type="button" onClick={handlerLogin} >Login</button>
                                    </div>

                                    <div className="d-grid gap-2 mb-2 ">
                                        
                                             <Link to="/" className='btn btn-outline-info'>Home </Link>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}
