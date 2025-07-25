import React, { useState } from 'react'
import './Portfolio.css'
import image1 from '../../assets/images/home.png'
import image2 from '../../assets/images/cake.png'
import image3 from '../../assets/images/port3.png'

export default function Portfolio() {
  const [modalSrc, setModalSrc] = useState(null);

  return (
    <div className='port'>
      <div className='port-col text-center'>
        <h1>PORTFOLIO COMPONENT</h1>
        <div className='home-line mt-4'>
          <span className='line-blow'></span>
          <i className='fa-solid fa-star port-col'></i>
          <span className='line-blow'></span>
        </div>
      </div>

      <div className='container'>
        <div className='row justify-content-center align-items-center gy-4 gx-3 pb-5 pt-2'>
          {[image1, image2, image3, image1, image2, image3].map((imgg, i) => (
            <div key={i} className='col-md-4'>
              <div className='div-img'>
                <div
                  className='img-hov rounded-2'
                  data-bs-toggle="modal"
                  data-bs-target="#imgModal"
                  onClick={() => setModalSrc(imgg)}
                >
                  <i className="fa-solid fa-plus fa-3x spann"></i>
                  <img src={imgg} alt="image port" className='rounded-2 img-port' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="imgModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered portfolio-modal">

          <div className="modal-content bg-transparent border-0">
            <button
              type="button"
              className="btn-close btn-close-white ms-auto me-2 mt-2"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <img src={modalSrc} alt="full view" className="img-fluid w-100 rounded-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
