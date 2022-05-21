import React from 'react'
import "../style.css"
import cv from "./cv.pdf";
export default function Home() {
  
  return (
    <>
      <section className='home container' id='home'>
        <div className='home-content'>
          <div className='home-img'>
          <i className='bx bx-code-alt'></i>
          </div>          
          <br />
          <div className='home-text'>
            <h3>Hello</h3>
            <h2>I'm <span className='pooran'>Pooran Sen</span></h2>
            <p>
            A self-motivated Web Developer with huge knowledge and proficiency in JavaScript, HTML , CSS, and mobile responsive web development, as well as strong skills and ability in writing clean and efficient code.
            </p>
            <a href={cv} className='btn downloadCV' download="">
              Download CV 
              <i className='bx bx-download'></i>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
