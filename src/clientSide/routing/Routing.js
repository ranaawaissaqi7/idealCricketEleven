import React, { useContext } from 'react'
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Login from '../auth/login/Login';
import SignUp from '../auth/signUp/SignUp';
import DashbordRouting from '../pages/dashbord/dashbordRouting/DashbordRouting';
import FrontendRouting from '../pages/frontend/frontendRouting/FrontendRouting';
import AdminRouting from '../../adminSide/adminRouting/AdminRouting';
import AdminLogin from '../auth/adminLogin/AdminLogin';
import { AdminAuthContext } from '../../context/AdminAuthContext';
import PrivateRouting from '../../adminSide/privateRouting/PrivateRouting';
import ClientSidePrivateRouting from '../clientSidePrivateRouting/ClientSidePrivateRouting';
import { ClientAuthContext } from '../../context/ClientAuthContext';

export default function Routing() {
  //AdminAuthContext
  const {isAuth}=useContext(AdminAuthContext)

  //ClientAuthContext
  const {clientAuth}=useContext(ClientAuthContext)
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/*' element={<FrontendRouting/>} />
    
        <Route path='/dashbord/*' element={<ClientSidePrivateRouting MyComponent={DashbordRouting}/> } />
        <Route path='/login' element={ !clientAuth ?<Login/> :<Navigate to="/dashbord"/> } />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/adminLogin' element={ !isAuth ? <AdminLogin/> : <Navigate to="/admin"/> } />
        <Route path='/admin/*' element={<PrivateRouting Component={AdminRouting}/>} />

    </Routes>
    </BrowserRouter>
    </>
  )
}
