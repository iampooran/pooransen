import React from 'react'
import contactCSS from "./contact.module.css"
export default function About() {
  return (
    <>
     
     <div className={contactCSS.container} id="contact">
     <br />
     <h1 className="heading">Contact</h1>
    <form>
        <ul>
            <li>
                <label><span>Name <span className={contactCSS.required_star}>*</span></span></label>
                <input type="text" id="name" name="user_name"/>
            </li>
            <li>
                <label><span>Email <span className={contactCSS.required_star}>*</span></span></label>
                <input type="email" id="mail" name="user_email"/>
            </li>
            <li>
                <label><span>Message</span></label>
                <textarea rows="4" cols="50"></textarea>
            </li>
            <li>
                <input type="submit" className={contactCSS.hoverEffect}/>
            </li>
        </ul>
        
    </form>
</div>
    </>
  )
}
