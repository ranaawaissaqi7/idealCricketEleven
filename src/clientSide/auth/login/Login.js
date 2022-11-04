import React from 'react'
import TextField from '@mui/material/TextField';
import { useState,useContext,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AuthContext';
import { UserIdContext } from '../../context/UserIdContext';
import { ClientAuthContext } from '../../../context/ClientAuthContext';
export default function Login() {
//ClientAuth
const {clientAuth,setClientAuth}=useContext(ClientAuthContext)
   const {setUserIdE,userIdE}=useContext(UserIdContext)

   console.log("ClientAuth ",clientAuth)
//isAuthChanged
const {isAuth,setIsAuth}=useContext(AuthContext)
console.log("isAuth ",isAuth)
    const intialState={
        email:"",
        password:""
    }
    
    //UseNavigate

    const navigate=useNavigate("")

    const [stateUser,setStateUser]=useState(intialState);

    //handleChange function

    const handlerChange=e=>{
        setStateUser({...stateUser,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                // const uid = user.uid;
                console.log("Usid ",user.uid)
                setUserIdE(user.uid)
                console.log(userIdE)
                
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])

    //handlerSubmit function
    const handlerLogin=(e)=>{
        e.preventDefault();
        console.log("stateUser,",stateUser)
        const {email,password}=stateUser
        if (!email || !password) {
            return alert("Please fill All Field")
        }
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            console.log("User Registered")
            console.log(userCredential)
            console.log(user)
            setIsAuth(true)
            setClientAuth(true)

            console.log("ClientAuth ",clientAuth)
            console.log(isAuth)
            // ...
            navigate("/dashbord")
        })
        .catch((error) => {
            console.error(error)
            // ..
         alert(error)
            
        });
    }
    
    return (
        <>
            <div className="container-fluid bg-danger">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className=" col-md-4 text-center text-light">
                        <h1>Login</h1>

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
                                                name='email'
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
                                                name='password'
                                                onChange={handlerChange}
                                            />



                                        </div>
                                    </div>

                                   
                                    <div className="d-grid gap-2 mb-2 mt-3">
                                        <button className="btn btn-outline-success" type="button" onClick={handlerLogin}>Login</button>
                                    </div>
                                    <div className="d-grid gap-2 mb-2">
                                        <Link className="btn btn-outline-warning" type="button" to="/signUp">Create a Acount</Link>
                                    </div>
                                    <div className="d-grid gap-2 mb-2">
                                        <Link className="btn btn-outline-info" type="button" to="/">Home</Link>
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
