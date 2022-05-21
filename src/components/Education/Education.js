import React from 'react'
import educationCSS from "./education.module.css"

export default function Education() {
  return (
    <>
    <div id="education">
        <br />
    <h2 className="heading" >Education</h2>
    </div>
        <div className={educationCSS.container}>
            
        <div className={educationCSS.entry}>
            <div className={educationCSS.indicator}>
                <span></span>
            </div>
            <p className={educationCSS.content}>
                <span>Master of Computer Application</span>
                Lovely Professional University, Punjab
                <span>7.58 CGPA (Current)</span>
            </p>
            <div className={educationCSS.time}>2021-Present</div>
        </div>
        <div className={educationCSS.entry}>
            <div className={educationCSS.indicator}>
                <span></span>
            </div>
            <p className={educationCSS.content}>
                <span>Bachelor of Science in Information Technology</span>
                GLS University, Ahmedabad
                <span>8.93 CGPA</span>
            </p>
            <div className={educationCSS.time}>2021</div>
        </div>  
        <div className={educationCSS.entry}>
            <div className={educationCSS.indicator}>
                <span></span>
            </div>
            <p className={educationCSS.content}>
                <span>CLASS XII</span>
                Adarsh Vidya Manidr, Bhinmal
                <span>81.60%</span>

            </p>
            <div className={educationCSS.time}>2018</div>
        </div>
        <div className={educationCSS.entry}>
            <div className={educationCSS.indicator}>
                <span></span>
            </div>
            <p className={educationCSS.content}>
                <span>CLASS X</span>
                Adarsh Vidya Manidr, Bhinmal
                <span>68.00%</span>
            </p>
            <div className={educationCSS.time}>2016</div>
        
        </div>
    </div>
    </>
  )
}
