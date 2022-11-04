import React, { useContext, useState } from 'react'
import{db} from "../../../clientSide/config/firebase";
import {collection, addDoc,deleteDoc,doc} from "firebase/firestore/lite"
import { PostIdContext } from '../../../context/PostIdContext';
export default function CreatePost() {
//postId
const{postId}=useContext(PostIdContext)
    //useState
    const [createPost,setCreatePost]=useState({
        fname:"",
        lname:"",
        detail:"",
        other:"",
        time:""
    })

    
    
    console.log("createPost ",createPost)

    //changeHandler
    const changeHandler=(e)=>{
        setCreatePost({...createPost,[e.target.name]:e.target.value})
    }

    //addDocument
    const addDocument=async(e)=>{
        e.preventDefault();
        
        const {fname,lname,detail,other,time}=createPost
        let upperCaseFname=fname.toUpperCase()

        let upperCaseLname=lname.toUpperCase()

        let upperCaseDetail=detail.toUpperCase()
        
        try {
            const docRef = await addDoc(collection(db, "postData"), {
              upperCaseFname,
              upperCaseLname,
              upperCaseDetail,
              other,
              time
            });
            console.log("Document written with ID: ", docRef.id);
            alert("Post Submit SuccessFully")
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    //deletePost
    const deletePost=async(postId)=>{
      await deleteDoc(doc(db, "postData", postId));
      alert("Delete Sucess ")
    }
    
  return (
   <>
    <div className="container-fluid ">
        <div className="row bg-dark ">
          <div className=" col-12 text-light">
            <h4 className=' text-center'>create Post</h4>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
              <form>
                
                <div className="row mt-2 ">
                
                  <div className="col ">
                    <label for="fname" className="form-label">First Name:</label>
                    
                   <input type="text"  name='fname'   className="form-control"    id="fname" placeholder='Enter First Name' onChange={changeHandler}/>
      
                
                   
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col ">
                    <label for="lname" className="form-label">Last Name:</label>
                    <input type="text" name='lname' className="form-control" id="lname" placeholder='Enter last Name'  onChange={changeHandler}/>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label for="age" className="form-label">VS:</label>
                    <input type="text" name='detail' className="form-control" id="age" placeholder='Enter Detail' onChange={changeHandler} />
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col ">
                    <label for="lname" className="form-label">Other:</label>
                    <input type="text" name='other' className="form-control" id="lname" placeholder='Enter Others'  onChange={changeHandler}/>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <label for="age" className="form-label">Match Time:</label>
                    <input type="datetime-local" name='time' className="form-control" id="age" placeholder='Enter Match Time' onChange={changeHandler} />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-success" type="button" onClick={addDocument}>Submit</button>

                    </div>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <div className="d-grid gap-2">
                      <button className="btn btn-outline-danger" type="button" onClick={()=>deletePost(postId)}>Delete Post</button>

                    </div>
                  </div>
                </div>
              </form>
            </div>
   </>
  )
}
