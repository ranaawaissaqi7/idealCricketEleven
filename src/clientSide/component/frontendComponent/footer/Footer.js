import React, { useState } from 'react'

export default function Footer() {
    const[year,setYear]=useState(new Date().getFullYear())

    console.log("year ",year)
  return (
 <>
 <div className="container-fluid bg-dark">
    <div className="row justify-content-center align-content-center">
        <div className="col text-light text-center">
            <h4>
                Copyright<span className='text-center'>&#169;</span> {year} Awais Developer

            </h4>
        </div>
    </div>
 </div>
 </>
  )
}
