import React from 'react'
import "../style.css"
export default function Footer() {
  return (
    <>
    
        {/* Footer */}
        <section className="footer" id='footer'>
        <div className='social'>
              <a href="https://www.linkedin.com/in/pooransen/" target="popup"><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://github.com/iampooran/" target="popup"><i className='bx bxl-github' ></i></a>
              <a href="mailto:pooransen50@gmail.com"><i className='bx bx-envelope'></i></a>
              <a href="https://www.facebook.com/pooran50" target="popup"><i className='bx bxl-meta' ></i></a>
              <a href="https://www.instagram.com/iam_pooran/" target="popup"><i className='bx bxl-instagram' ></i></a>
              <a href="https://twitter.com/iam_pooran" target="popup"><i className='bx bxl-twitter' ></i></a>
            </div>
        <p>&#169; POORAN SEN</p>
        </section>
    </>
  )
}