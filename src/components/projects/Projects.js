import React from 'react'
import projectsCSS from "./projects.module.css"
import project1 from './projects1.webp';
import project2 from './projects2.webp';
import project3 from './projects3.webp';
export default function Projects() {
  return (
    <>  
        <section className='container' id="projects">
        <h2 className="heading" >Projects</h2>    
        <h3 className={projectsCSS.heading2}>Check Live Demo</h3>    
        <div className={projectsCSS.portfolio_content}>
            <div className={projectsCSS.container}>
                <img src={project1} alt="" className={projectsCSS.image}/>
                <a href="/">
                <div className={projectsCSS.overlay}>
                    
                    <div className={projectsCSS.text}>
                    <h2>Project1</h2>
                    
                        <i className='bx bx-link-alt' id={projectsCSS.bx}></i></div>
                                
                </div>
                </a>
            </div>
            
            <div className={projectsCSS.container}>
            
            <img src={project2} alt="" className={projectsCSS.image}/>
            <a href="/">    
                <div className={projectsCSS.overlay}>
                    <div className={projectsCSS.text}>
                    <h2>Project2</h2>
                    
                        <i className='bx bx-link-alt' id={projectsCSS.bx}></i>
                        </div>
                        
                </div>
                </a>
                </div>

                <div className={projectsCSS.container}>
                
            <img src={project3} alt="" className={projectsCSS.image}/>
            <a href="/">
                <div className={projectsCSS.overlay}>
                    <div className={projectsCSS.text}>
                    <h2>Project3</h2>
                    <i className='bx bx-link-alt' id={projectsCSS.bx}></i></div>
                </div>
                </a>
                </div>
        </div>
        </section>
    </>
  )
}
