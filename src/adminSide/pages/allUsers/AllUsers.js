import React, { useEffect, useState } from 'react'
import {auth, db } from "../../../clientSide/config/firebase"
import { getDocs, collection,doc,deleteDoc } from "firebase/firestore/lite"
import { Link } from 'react-router-dom'
import "./AllUsers.css"

export default function AllUsers() {
  //SerchUser
  const [searchUser,setSearchUser] = useState("")
  console.log("searchUser ",searchUser)
 
  //useState
  const [users, setUsers] = useState([])

  console.log("UserS ",users)

  const[userId,setUsersId]=useState({})
  //UseEffect
  useEffect(() => {
    fetchData()
  }, [])

  //ChangeHandler
//  const changeHandler =(e)=>{
  //  setSearchUser({...searchUser,[e.target.name]:e.target.value})
  //}
  //FetchData
  const fetchData = async () => {
    let arry = []
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      arry.push({...doc.data(),id:doc.id})
      setUsers(arry)
      setUsersId(doc.id)
      console.log("All Users ", arry)
      console.log("id ",doc.id)
   //   setUsersId(doc.id)
    });

   
  }

  const deleteUser=async(item)=>{
    const {id}=item
    console.log("id:",id)
    await deleteDoc(doc(db, "users", id));
    let newAllUser=users.filter((item)=>{
      console.log("item.id :",item.id)
      return id!==item.id
    })
    setUsers(newAllUser)
  }


  
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h3>All Users</h3>
          </div>
          <div className="col-md-4">
            
             
              <input type="text"  className="form-control" placeholder='Search User First Name Only'  onChange={(e)=>setSearchUser(e.target.value)} />
            
          </div>
        </div>
      </div>

      <div className="container-fluid table-responsive">
        <div className="row justify-content-center text-center">
          <div className="col">
          <table className="table table-bordered table-striped">
                  <tr>
                    <th scope="col">No.</th>
                 
                    <th scope="col">First Name</th >
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone No</th >
                    <th scope="col">Best Man Side</th>
                    <th scope="col">Actions</th>
                    <th></th>
                  </tr>

                  
                  {

              users.filter((value)=>{
                if (!searchUser) {
                  return value
                } else if (value.fname.toLowerCase().includes(searchUser.toLocaleLowerCase())) {
                  return value
                }
              }).map((item,index)=>{
                return <tr>
                
                 <th scope="row">{index+1}</th>
                 
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.phoneNo}</td>
                <td>{item.bestManHand}</td>

               <td> <Link className='btn btn-outline-warning ' to={`viewUser/${item.id}`}>View</Link></td>
                <td><button className='btn btn-outline-danger  ' onClick={()=>{deleteUser(item)}}>Delete</button></td>
                  
                
         
              </tr>
              
              })
            }
                </table>
                                            
          </div>
      
        </div>
      </div>
    </>
  )
}
