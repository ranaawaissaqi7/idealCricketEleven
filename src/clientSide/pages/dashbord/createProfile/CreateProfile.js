import React, { useState } from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import {setDoc,doc} from "firebase/firestore/lite"
import { auth,db } from '../../../config/firebase';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { UserIdContext } from '../../../context/UserIdContext';
import { ClientAuthContext } from '../../../../context/ClientAuthContext';
export default function CreateProfile() {
   //ClientAuth
   const{setClientAuth}=useContext(ClientAuthContext)
   const {userIdE}=useContext(UserIdContext)
//    console.log("eamil id:",userIdE)
  //isAuthChanged
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("isAuth ", isAuth)

  //UseNavigate

  const navigate = useNavigate("")

  // useState

  const [user, setUser] = useState({
    fname: "",
    lname: "",
    age: "",
    gender: "",
    phoneNo: "",
    bestManHand: "",
  })

  //handleLogout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User has been loggedout")
        setIsAuth(false)
        setClientAuth(false)
        
        navigate("/")
      })
      .catch((error) => {
        console.error(error)
        alert(error)
      })
  }

  //handlerChange
  const handlerChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  //hanlderSubmit
  const handlerSubmit=async(e)=>{
    e.preventDefault();
    const {fname,lname,age,gender,phoneNo,bestManHand}=user
   
    if (!fname||!lname||!age||!gender||!phoneNo||!bestManHand) {
      return alert("fill all fieald")
    }
    console.log("user :",user)


    try {
       await setDoc(doc(db, "users",userIdE), {
        fname ,
        lname,
        age,
        gender,
        phoneNo,
        bestManHand,
      });
      //console.log("Document written with ID: ", docRef.id);
      //console.log("id ",docRef.id)
     // setUserId(docRef.id)
      navigate("/dashbord/profile")
    } catch (e) {
      console.error("Error adding document: ", e);
      alert(e)
    }
  }
  return (
    <>
      <div className="container-fluid ">
        <div className="row bg-dark ">
          <div className=" col-12 text-light">
            <h4 className=' text-center'>WellCome To Dashbord</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
        <div className="row justify-content-between">
          <div className=" col-4 col-md-3 bg-danger vh-100">

            <div className="d-grid ">
              <h4 className=' text-center text-white'>Dashbord Menu</h4>
              <Link to="/" className='btn btn btn-outline-warning' >Home</Link> <br />
              <Link to="/dashbord/createProfile" className='btn btn-outline-warning mt-2' >CreateProfile</Link><br />
              <Link to="/dashbord/profile" className='btn btn-outline-warning mt-2'>Profile</Link> <br />
              <Link to="/dashbord/updateProfile" className='btn btn-outline-warning mt-2'>Update Profile</Link> <br />
              <button className='btn btn-outline-warning mt-2' onClick={handleLogout}>Logout</button>

            </div>
          </div>

          <div className=" col-8 col-md-9 bg-info ">
            <h1 className=' text-center text-white'>Create Profile</h1>

            <div className="container-fluid text-white">
              <form>
                
                <div className="row mt-2 ">
                
                  <div className="col ">
                    <label for="fname" className="form-label">First Name:</label>
                    
                   <input type="text"  name='fname'   className="form-control"    id="fname" placeholder='Enter First Name' onChange={handlerChange}/>
      
                
                   
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col ">
                    <label for="lname" className="form-label">Last Name:</label>
                    <input type="text" name='lname' className="form-control" id="lname" placeholder='Enter last Name'  onChange={handlerChange}/>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label for="age" className="form-label">Date of Birth:</label>
                    <input type="date" name='age' className="form-control" id="age" placeholder='Enter last Name' onChange={handlerChange} />
                  </div>
                </div>

                <div className="row mt-2 mt-2">
                  <div className="col">
                    <h5>Gender:</h5>
                    <input className="form-check-input ms-2" type="radio" name="gender" value={"male"} id="male" onChange={handlerChange} />
                    <label className="form-check-label ms-2" for="male">
                      Male
                    </label>

                    <input className="form-check-input ms-2" type="radio" name="gender" value={"female"} id="female" onChange={handlerChange} />
                    <label className="form-check-label ms-2" for="female">
                      Female
                    </label>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label for="phoneNo" className="form-label">Phone No:</label>
                    <input type="number" name='phoneNo' className="form-control" id="phoneNo" placeholder='ex03000000000' onChange={handlerChange} />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label for="inputState" className="form-label">Best man Hand</label>
                    <select id="inputState" className="form-select" name='bestManHand' onChange={handlerChange}>
                      <option selected >select your best man hand</option>
                      <option>Right</option>
                      <option>Left</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-success" type="button" onClick={handlerSubmit}>Submit</button>

                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
