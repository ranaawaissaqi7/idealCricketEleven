import React from 'react'
import { createContext,useState } from 'react';
export const AuthContext=createContext();
export default function AuthContextProvider(props) {

    const[isAuth,setIsAuth]=useState(false);

  return (
   
   <AuthContext.Provider value={{isAuth,setIsAuth}}>
    {props.children}
   </AuthContext.Provider>

  )
}
