import React from 'react'
import { useState, useEffect } from "react"
import { Link, useNavigate, } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore/lite"
import { auth, db } from '../../../config/firebase';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { UserIdContext } from '../../../context/UserIdContext';
import { ClientAuthContext } from '../../../../context/ClientAuthContext';
export default function UpdateProfile() {

     //ClientAuth
  const{setClientAuth}=useContext(ClientAuthContext)

   // const [check, setCheck] = useState(false)

    //console.log("Check ",check)

   // const chackHandler=()=>{
     //   if (user.gender==="male") {
       //      setCheck(true)
        //}
       // else{
         //   setCheck(false)
        //}
    //}
    //getData
    useEffect(() => {
        getOneUser();
      //  chackHandler()
    }, [])

    //getUserFunction
    const getOneUser = async () => {
        const docRef = doc(db, "users", userIdE);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());

            setUser(docSnap.data())

            console.log("snape Data ", user)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const { userIdE } = useContext(UserIdContext)
    //    console.log("eamil id:",userIdE)
    //isAuthChanged
    const { isAuth, setIsAuth } = useContext(AuthContext);
    console.log("isAuth ", isAuth)

    //UseNavigate

    const navigate = useNavigate("")

    // useState

    const [user, setUser] = useState({
        fname:"",
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
    const handlerChange = (e) => {
        setUser(s=>({ ...s, [e.target.name]: e.target.value }))
    }

    console.log("User s ",user)
    //hanlderSubmit
    const handlerUpdate = async (e) => {
        e.preventDefault();
         const {fname,lname,age,gender,phoneNo,bestManHand}=user

          if (!fname||!lname||!age||!gender||!phoneNo||!bestManHand) {
        return alert("fill all fieald")
         }
        // console.log("user :",user)
        const washingtonRef = doc(db, "users", userIdE);

         //Set the "capital" field of the city 'DC'
        await updateDoc(washingtonRef, {
        fname ,
        lname,
        age,
        gender,
        phoneNo,
        bestManHand,

           capital: true
           
           
        });
        alert("Update SuccessFull ")
         navigate('/dashbord/profile')
    
        
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
                        <h1 className=' text-center text-white'>Update Profile</h1>

                        <div className="container-fluid text-white">
                            <form>

                                <div className="row mt-2 ">

                                    <div className="col ">
                                        <label for="fname" className="form-label">First Name:</label>

                                        <input type="text"  name='fname' defaultValue={user.fname} className="form-control" id="fname"  onChange={handlerChange} />



                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col ">
                                        <label for="lname" className="form-label">Last Name:</label>
                                        <input type="text"  name='lname' className="form-control" id="lname" placeholder='Enter last Name' onChange={handlerChange} value={user.lname} />
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <label for="age" className="form-label">Date of Birth:</label>
                                        <input type="date"  name='age' defaultValue={user.age} className="form-control" id="age" placeholder='Enter last Name' onChange={handlerChange} />
                                    </div>
                                </div>

                                <div className="row mt-2 mt-2">
                                    <div className="col">
                                        <h5>Gender:</h5>
                                        <input className="form-check-input ms-2" type="radio" checked={ user.gender ==="male"? true :false} name="gender"   value="male" id="male" onChange={handlerChange} />
                                        <label className="form-check-label ms-2" for="male" >
                                            Male
                                        </label>

                                        <input className="form-check-input ms-2" checked={user.gender ==="female"? true :false} type="radio" name="gender"  value="female"  id="female" onChange={handlerChange} />
                                        <label className="form-check-label ms-2" for="female" >
                                            Female
                                        </label>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <label for="phoneNo" className="form-label">Phone No:</label>
                                        <input type="number" defaultValue={user.phoneNo} name='phoneNo' className="form-control" id="phoneNo" placeholder='ex03000000000' onChange={handlerChange} />
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <label for="inputState" className="form-label">Best man Hand</label>
                                        <select id="inputState" defaultValue={user.bestManHand} className="form-select" name='bestManHand' onChange={handlerChange}>
                                            <option selected >{user.bestManHand}</option>
                                            <option>Right</option>
                                            <option>Left</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-warning" type="button" onClick={handlerUpdate}>Update</button>

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
