import React from 'react'
import { createContext,useState } from 'react';
export const UserIdContext=createContext();
export default function UserIdContextProvider(props) {

    const[userId,setUserId]=useState("");
    const[userIdE,setUserIdE]=useState("");

  return (
   
   <UserIdContext.Provider value={{userId,setUserId,userIdE,setUserIdE}}>
    {props.children}
   </UserIdContext.Provider>

  )
}