import React from 'react'
import skillCSS from "./skills.module.css"
export default function About() {
  return (
    <>
     <div id='skills'> 
    <br />
     <h1 className="heading">Skills</h1> 
    <section className={skillCSS.sectionSkills}>
    
    
    <div className={skillCSS.gridSkills}>
    <div className={skillCSS.skillContainer}>
    <div className={skillCSS.skillDiv}>
    <h2 className={skillCSS.heading2}>&nbsp;&nbsp;&nbsp;Skills</h2>
    <ul className={skillCSS.check_list}>
      <li>React</li>
      <li>Bootstrap</li>
      <li>JQuery</li>
      <li>SQL</li>
      <li>Wordpress</li>
    </ul>
  </div>
  </div>
  <div className={skillCSS.skillContainer}>
    <div className={skillCSS.skillDiv}>
    <h2 className={skillCSS.heading2}>Languages</h2>
    <ul className={skillCSS.check_list}>
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>C/C++</li>
      <li>Java</li>
    </ul>
  </div>
  </div>
  </div>
</section>
</div>
    </>
  )
}
