import React from 'react'
import {Routes,Route} from "react-router-dom";
import DashbordNavbar from '../../../component/frontendComponent/dashbordNavbar/DashbordNavbar';
import CreateProfile from '../createProfile/CreateProfile';
import DashbordHome from '../dashbordHome/DashbordHome';
import Profile from '../profile/Profile';
import UpdateProfile from '../upDateProfile/UpdateProfile';
export default function DashbordRouting() {
  return (
   <>
   
   <Routes>
    <Route path='/'>
        <Route index element ={<DashbordHome/>}/>
        <Route path='createProfile' element ={<CreateProfile/>}/>
        <Route path='profile' element ={<Profile/>}/>
        <Route path='updateProfile' element ={<UpdateProfile/>}/>
    </Route>
   </Routes>
   </>
  )
}
