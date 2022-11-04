import React from 'react'
import chairMan from "../../../assets/teamImages/ChairManSemi.jpg";
import coch from "../../../assets/teamImages/CochYasir.jpg";
import mentor from "../../../assets/teamImages/MentorJunti.jpg";
export default function About() {
  return (
    <>
      <div className="container-fluid  ">
        <div className="row justify-content-center ">
          <div className="col text-center  ">
            <h3>About us</h3>
          </div>

          <div className="row justify-content-center  ">
            <div className="col text-center  ">
              <img src={chairMan} width="200px" />
              <h3>Chairman Naveed Semi</h3>
            </div>
          </div>

          <div className="row justify-content-between  ">
            <div className="col-md-4 text-center  ">
              <img src={coch} width="200px" />
              <h3>Coch Rana Yasir</h3>
            </div>
            <div className="col-md-4 text-center  ">
              <img src={mentor} height="320px" width="250px" />
              <h3>Mentor Nadeem Junti</h3>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
