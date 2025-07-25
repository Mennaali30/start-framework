import React from 'react'
import './About.css'
export default function About() {
  return (
    <div className='about'>
      <div>
      <h1 className='text-white'>ABOUT COMPONENT</h1>
       <div className='home-line '>
          <span className="line"></span>
          <i className="fa-solid fa-star text-white"></i>
          <span className="line"></span>
        </div>
        </div>
        <div className='row text-white gx-3'>
        <div className='col-md-6'>
         <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> 
        </div>
        <div className='col-md-6'>
         <p className='text-start'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p> 
        </div>
        </div>
    </div>
  )
}
