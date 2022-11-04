import React, { useContext } from 'react'
import AdminLogin from '../../clientSide/auth/adminLogin/AdminLogin'
import { AdminAuthContext } from '../../context/AdminAuthContext'

export default function PrivateRouting(props) {
  const {isAuth}=useContext(AdminAuthContext)
  const {Component}=props

  if (!isAuth) {
   return <AdminLogin/> 
  }

  return (
   <Component/>
  )
}
