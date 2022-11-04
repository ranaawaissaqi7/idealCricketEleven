import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from "../../../clientSide/config/firebase";
import { getDoc, doc } from "firebase/firestore/lite"
import { async } from '@firebase/util';
export default function ViewUser() {
    //useParams
    const { id } = useParams("")

    //useState
    const [user, setUser] = useState({})

    //useEffect

    useEffect(() => {
        getOneDocument()
    }, [])
    //getOneDocument
    const getOneDocument = async () => {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUser(docSnap.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }
    return (
        <>
            <div className="container-fluid vh-100 bg-warning">
                <div className="row ">
                    <div className="col">

                        <h2 className='text-center text-light'>View User</h2>

                        <div className="row  justify-content-center">
                            <div className="col-md-6">
                                <table className="table table-dark table-striped table-hover  ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>{id}</th>
                                        </tr>

                                        <tr>
                                            <th>First Name</th>
                                            <th>{user.fname}</th>
                                        </tr>

                                        <tr>
                                            <th>Last Name</th>
                                            <th>{user.lname}</th>
                                        </tr>
                                        <tr>
                                            <th>Age</th>
                                            <th>{user.age}</th>
                                        </tr>
                                        <tr>
                                            <th>Gender</th>
                                            <th>{user.gender}</th>
                                        </tr>
                                        <tr>
                                            <th>Phone No</th>
                                            <th>{user.phoneNo}</th>
                                        </tr>
                                        <tr>
                                            <th>Best Man Hand Side</th>
                                            <th>{user.bestManHand}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">

            </div>


        </>
    )
}
