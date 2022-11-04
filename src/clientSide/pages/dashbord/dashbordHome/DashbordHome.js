import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite"
import { auth, db } from '../../../config/firebase';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { UserIdContext } from '../../../context/UserIdContext';
import { ClientAuthContext } from '../../../../context/ClientAuthContext';
export default function DashbordHome() {
  //ClientAuth
  const{setClientAuth}=useContext(ClientAuthContext)
  // loader State
  const [isLoading,setIsLoading]=useState(false)
  //userEmail Id
  const { userIdE } = useContext(UserIdContext)
  console.log("id ", userIdE)
 
  const { isAuth, setIsAuth } = useContext(AuthContext);
  console.log("isAuth ", isAuth)

  //state
  const [getUser, setGetUser] = useState("")

  console.log("getUser ", getUser)

  //UseNavigate

  const navigate = useNavigate("")
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

  //getUserFunction
  const getOneUser = async () => {
    const docRef = doc(db, "users", userIdE);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setGetUser(docSnap.data())
      setIsLoading(true)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    getOneUser();
  }, [])

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
            <h1 className=' text-center text-white '> WellCome to Home</h1>

            

          </div>
        </div>
      </div>
    </>
  )
}
