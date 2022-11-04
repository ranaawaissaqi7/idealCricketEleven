
import React from 'react'
import {Routes,Route} from "react-router-dom"
import Footer from '../../../component/frontendComponent/footer/Footer'
import FrontendSlider from '../../../component/frontendComponent/frontendSlider/FrontendSlider'
import Navbar from '../../../component/frontendComponent/navbar/Navbar'
import About from '../about/About'
import Home from '../home/Home'
import Team from '../team/Team'
export default function FrontendRouting() {
  return (
   <>
   <Navbar/>
   <FrontendSlider/>
   <main>
   <Routes>
    <Route path='/'>
      <Route index element={<Home/>} />
      <Route path='team' element={<Team/>} />
      <Route path='about' element={<About/>} />
    </Route>
   </Routes>
   </main>
   <Footer/>
   </>
  )
}
