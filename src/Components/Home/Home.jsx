import React from 'react'
import './Home.css'
import image from '../../assets/images/avataaars.svg'

export default function Home() {
  return (
    <div className='home'>
      <div className='home-content'>
        <img src={image} alt="avatar" className='home-img' />
        <h1 className='home-title'>START FRAMEWORK</h1>
        <div className='home-line'>
          <span className="line"></span>
          <i className="fa-solid fa-star"></i>
          <span className="line"></span>
        </div>
        <p className='home-subtitle'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  )
}
