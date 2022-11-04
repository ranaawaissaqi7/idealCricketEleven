import React, { createContext, useState } from 'react'
export const AdminAuthContext=createContext()

export default function AdminAuthContextProvider(props) {
    const [isAuth,setIsAuth]=useState(false)

  return (
    <>
    <AdminAuthContext.Provider value={{isAuth,setIsAuth}}>
        {props.children}
    </AdminAuthContext.Provider>
    </>
  )
}
