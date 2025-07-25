import React from 'react'
import './Contact.css'
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form submitted without reload!");}
  return (
    
    <div>
    <div className='port'>
      <div className='port-col text-center mt-4'>
        <h1>CONTACT SECTION</h1>
        <div className='home-line mt-4'>
          <span className='line-blow'></span>
          <i className='fa-solid fa-star port-col'></i>
          <span className='line-blow'></span>
        </div>
      </div>
      </div>
      

      <form action="" onSubmit={handleSubmit} className='py-5 w-50 mx-auto'>
       <input type="text" name="name" id="name" placeholder='userName' className=' w-100 my-5'/>
       <input type="text" name="age" id="age" placeholder='userAge' className=' w-100 mb-5'/>
       <input type="email" name="email" id="email" placeholder='userEmail' className=' w-100 mb-5'/>
       <input type="password" name="pass" id="pass" placeholder='userPassword' className=' w-100 mb-4'/>
       <div className='position-relative mb-5'>
       <button className='position-absolute '>Send Message</button>
       </div>

      </form>
      </div>

  )
}
