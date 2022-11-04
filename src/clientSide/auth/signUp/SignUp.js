import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,  } from '../../config/firebase';
export default function SignUp() {
   
    //    const [stateId,setId]=useState("");
    const intialState = {
        email: "",
        password: ""
    }

    //UseNavigate

    const navigate = useNavigate("")

    const [stateUser, setStateUser] = useState(intialState);

    //handleChange function

    const handlerChange = e => {
        setStateUser({ ...stateUser, [e.target.name]: e.target.value })
    }

    //handlerSubmit function
    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log("stateUser,", stateUser)
        const { email, password } = stateUser

        if (!email || !password) {
            return alert("Please fill All Field")
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                console.log("User Registered")
                console.log("userCrede ", userCredential)
                console.log("user ", user)
                console.log("user.uid ", user.uid)
                
                
                // ...
                 navigate("/login")

            })
            .catch((error) => {
                console.error(error)
                // ..
                alert(error)
            });
    }

    return (
        <>
            <div className="container-fluid bg-info">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className=" col-md-4 text-center text-light">
                        <h1>SignUp</h1>

                        <div className="row justify-content-center bg-light h-50" style={{ borderRadius: "20px" }}>
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
                                                name="password"
                                                onChange={handlerChange}
                                            />



                                        </div>
                                    </div>

                            
                                    <div className="d-grid gap-2 mb-2 mt-3">
                                        <button className="btn btn-outline-warning" type="button" onClick={handlerSubmit}>SignUp</button>
                                    </div>

                                    <div className="d-grid gap-2 mb-2">
                                        <Link className="btn btn-outline-success" type="button" to="/login" >Already Register</Link>
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
