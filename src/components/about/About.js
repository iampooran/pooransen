import React from 'react'
import aboutCSS from "./about.module.css"
export default function About() {
  return (
    <>
     <div className={aboutCSS.home_text} id="about">
       <br />
       <h1 className="heading" >About Me</h1>
       <p>A web designer and front end developer from India who loves creative web designing. I done my Bachelor of Science in Information Technology from GLS University, Ahmedabad and currently pursuing my Master of Computer Application from Lovely Professional University, Punjab. I love Cricket, Movies and Games. I also love to play Chess.</p>
       
       <section>
        <div className='social'>
              <a href="https://www.linkedin.com/in/pooransen/" target="popup"><i className='bx bxl-linkedin-square'></i></a>
              <a href="https://github.com/iampooran/" target="popup"><i className='bx bxl-github' ></i></a>
              <a href="mailto:pooransen50@gmail.com"><i className='bx bx-envelope'></i></a>
              <a href="https://www.facebook.com/pooran50" target="popup"><i className='bx bxl-meta' ></i></a>
              <a href="https://www.instagram.com/iam_pooran/" target="popup"><i className='bx bxl-instagram' ></i></a>
              <a href="https://twitter.com/iam_pooran" target="popup"><i className='bx bxl-twitter' ></i></a>
            </div>
        </section>
     </div>

     
    </>
  )
}
