
//import Home from '../pages/home/Home'
import { Routes,Route } from 'react-router-dom'
import AllUsers from '../pages/allUsers/AllUsers'
import AdminNavbar from "../adminComponent/adminNavbar/AdminNavbar";
import Home from '../pages/home/Home';
import ViewUser from '../pages/viewUser/ViewUser';
import CreatePost from '../pages/createPost/CreatePost';
export default function AdminRouting() {

  return (
    <>
    <AdminNavbar />
     <Routes>
        <Route path='/'>
        <Route index element={<Home/>} />
        <Route path='allUsers' element={<AllUsers/>} />
        <Route path='createPost' element={<CreatePost/>} />
        <Route path='allUsers/viewUser/:id' element={<ViewUser/>}/>
        </Route>
    </Routes>
    
 
    </>
  )
}
