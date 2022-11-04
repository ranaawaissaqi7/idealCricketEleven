import React, { useContext } from 'react'
import { ClientAuthContext } from '../../context/ClientAuthContext'
import Login from '../auth/login/Login'

export default function ClientSidePrivateRouting(props) {
    const {clientAuth}=useContext(ClientAuthContext)
    const {MyComponent}=props
    if (!clientAuth) {
        return <Login/>
    }
    
  return (
    <MyComponent/>
  )
}
