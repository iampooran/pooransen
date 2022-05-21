import React from 'react'
import navbarCSS from "./navbar.module.css"

export default function Navbar() {  
  return (
    
  <>
  <nav className="navbar navbar-expand-lg navbar-dark sticky-top"  style={{background:"#0d0f26"}}>
        <div className="container-fluid ">
          <a className="navbar-brand " href="/">
            <span href="/" className={navbarCSS.logo} id={navbarCSS.addMargin}>Pooran</span>
          </a>   
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link " style={{color:"#FFFFFF"}} aria-current="page" href="#home">Home</a>
              </li>
              
              
              <li className="nav-item">
                <a className="nav-link" style={{color:"#FFFFFF"}} href="#about">About Me</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" style={{color:"#FFFFFF"}} href="#skills">Skills</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" style={{color:"#FFFFFF"}} href="#projects">Projects</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" style={{color:"#FFFFFF"}} href="#education">Education</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" style={{color:"#FFFFFF"}} href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  </>
  )
}
