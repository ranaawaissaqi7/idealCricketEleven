import React from 'react'
import img1 from "../../../assets/carasoulimage/img1.jpeg";
import img2 from "../../../assets/carasoulimage/img2.jpeg";
import img3 from "../../../assets/carasoulimage/img3.jpeg";
import img4 from "../../../assets/carasoulimage/img4.jpeg";
export default function FrontendSlider() {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col">
        
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
<div className="carousel-indicators">
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
</div>
<div className="carousel-inner">
  <div className="carousel-item active" data-bs-interval="10000">
    <img src={img1} className="d-block w-100" alt="1" />
    <div className="carousel-caption d-none d-md-block  text-white ">
      <h5>Ideal Cricket Club</h5>
      <p>County Cricket of Gally Godam of Jaranwala</p>
    </div>
  </div>
  <div className="carousel-item" data-bs-interval="2000">
    <img src={img2} className="d-block w-100" alt="img2" />
    <div className="carousel-caption d-none d-md-block text-white"  text-primary>
      <h5>SIdeal Cricket Club</h5>
      <p>SCounty Cricket of Gally Godam of Jaranwala</p>
    </div>
  </div>
  <div className="carousel-item">
    <img src={img3} className="d-block w-100" alt="img3" />
    <div className="carousel-caption d-none d-md-block  text-white">
      <h5>Ideal Cricket Club</h5>
      <p>County Cricket of Gally Godam of Jaranwala</p>
    </div>
  </div>
  <div className="carousel-item">
    <img src={img4} className="d-block w-100" alt="4" />
    <div className="carousel-caption d-none d-md-block  text-white">
      <h5>Ideal Cricket Club</h5>
      <p>County Cricket of Gally Godam of Jaranwala</p>
    </div>
  </div>
</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
</button>
</div>
      </div>
    </div>
  </div>
  )
}
