import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row py-5 text-white gy-4'>
        <div className='col-md-4'>
          <h3>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='col-md-4'>
         <h3>AROUND THE WEB</h3>
         <div>
          <i className="fa-brands fa-facebook me-3 fs-5 rounded-circle border border-white p-2 text-white"></i>
          <i className="fa-brands fa-twitter me-3 fs-5 rounded-circle border border-white p-2 text-white"></i>
          <i className="fa-brands fa-linkedin-in me-3 fs-5 rounded-circle border border-white p-2 text-white"></i>
          <i className="fa-solid fa-globe fs-5 rounded-circle border border-white p-2 text-white"></i>
         </div>
        </div>
        <div className='col-md-4'>
          <h3>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      
      </div>
      <div className='f-foot w-100 p-2'>
        <p className='text-white'>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}
