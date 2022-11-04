import React, { useContext } from 'react'
import { AdminAuthContext } from '../../../../context/AdminAuthContext'
import chairMan from "../../../assets/teamImages/ChairManSemi.jpg";
import coch from "../../../assets/teamImages/CochYasir.jpg";
import mentor from "../../../assets/teamImages/MentorJunti.jpg";
import mubashir from "../../../assets/teamImages/Mubashir.jpg";
import saqi from "../../../assets/teamImages/Saqi.jpg";
import hafiz from "../../../assets/teamImages/Hafiz.jpg"
import awais from "../../../assets/teamImages/Awais.jpg";
import hamza from "../../../assets/teamImages/hamzaL.jpg"
import phani from "../../../assets/teamImages/phani.jpg";
import megra from "../../../assets/teamImages/megra.jpg"
import ahsan from "../../../assets/teamImages/ahsan.jpg";
import alihassan from "../../../assets/teamImages/baba.jpg"
import ali from "../../../assets/teamImages/ali.jpg"
import shabo from "../../../assets/teamImages/Shoaib.jpg";
import rabi from "../../../assets/teamImages/rabi.jpg"
import nasa from "../../../assets/teamImages/nasa.jpg"
import jazab from "../../../assets/teamImages/jazab.jpg"
import khana from "../../../assets/teamImages/khana.jpg";
import sharaz from "../../../assets/teamImages/sharaz.jpg"
import butt from "../../../assets/teamImages/butt.jpg";

import "./Team.css"

//import { useSelector } from 'react-redux'
export default function Team() {
  //const count = useSelector(state => state.counter.value)
  //console.log("cont ",count)
  const { isAuth } = useContext(AdminAuthContext)
  console.log("isAuth ", isAuth)
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center  ">
          <div className="col text-center  ">
            <h3>ideal Cricket Team</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid ">
      <div className="row  justify-content-md-between">
          <div className="col-md-3   text-center ">
            <img src={chairMan} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Naveed Semi</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={coch} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Rana Yasir</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={mentor} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Nadeem Junti</h3>
            
          </div>

          <div className="col-md-3   text-center ">
          <img src={mubashir} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Mubashir</h3>
          </div>
          
        </div>

        <div className="row  justify-content-md-between mt-1">
          <div className="col-md-3   text-center ">
            <img src={saqi} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Awais Saqi</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={hafiz} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Hafiz Arslan</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={awais} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Awais Umar</h3>
            
          </div>

          <div className="col-md-3   text-center ">
          <img src={hamza} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Hamza Lefti</h3>
          </div>
          
        </div>

        <div className="row  justify-content-md-between mt-1">
          <div className="col-md-3   text-center ">
            <img src={phani} width="200em" height="300em" className='imgRounded' ></img>
            <h3>irfan</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={megra} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Nadeem Raja</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={ahsan} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Ahsan</h3>
            
          </div>

          <div className="col-md-3   text-center ">
          <img src={alihassan} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Ali Hassan</h3>
          </div>
          
        </div>

        <div className="row  justify-content-md-between mt-1">
          <div className="col-md-3   text-center ">
            <img src={ali} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Rana Ali</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={rabi} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Rabi</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={shabo} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Shoaib</h3>
            
          </div>

          <div className="col-md-3   text-center ">
          <img src={nasa} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Abdullaha</h3>
          </div>
          
        </div>

        <div className="row  justify-content-md-between mt-1">
          <div className="col-md-3   text-center ">
            <img src={jazab} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Jazib</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={butt} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Butt</h3>
          </div>

          <div className="col-md-3   text-center ">
          <img src={khana} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Ahmer</h3>
            
          </div>

          <div className="col-md-3   text-center ">
          <img src={sharaz} width="200em" height="300em" className='imgRounded' ></img>
            <h3>Sharaz</h3>
          </div>
          
        </div>

      </div>
     
    </>
  )
}
