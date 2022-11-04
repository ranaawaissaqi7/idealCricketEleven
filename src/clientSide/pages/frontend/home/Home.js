import React, { useContext, useEffect, useState } from 'react'
import { db } from "../../../config/firebase"
import { collection, getDocs } from "firebase/firestore/lite"
import { PostIdContext } from '../../../../context/PostIdContext'


export default function Home() {
  //useState
  const [postData, setPostData] = useState({})
  const {setPostId}=useContext(PostIdContext)
  //useEffect
  useEffect(() => {
    getDocuments()
  }, [])
  //getDocuments
  const getDocuments = async () => {
    const querySnapshot = await getDocs(collection(db, "postData"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      setPostData(doc.data())
      setPostId(doc.id)
      console.log("postData ", postData)
    });
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center  vh-100 ">
          <div className="col text-center  ">
            <h3>Home</h3>

            <div className="row justify-content-center">
              <div className="col-4 text-center text-warning ">
                <h2>New Post</h2>
              </div>
            </div>
            <div className="row bg-danger">
              <div className="col-4  text-center image  ">
                <h3>{postData.upperCaseFname}</h3>
              </div>

              <div className=" col-4 text-center  ">
                <h3>{postData.upperCaseDetail}</h3>
              </div>

              <div className="col-4  text-center  ">
                <h3>{postData.upperCaseLname}</h3>
              </div>
            </div>

            <div className="row bg-dark mt-1">
              <div className="col-8 text-white  text-center">
                <p>{postData.other}</p>
              </div>
              <div className="col-4 text-white  text-center">
                <p> {postData.time}</p>
              </div>

             
            </div>

          </div>
        </div>


      </div>
    </>
  )
}
