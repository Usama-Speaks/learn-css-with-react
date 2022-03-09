import React from 'react'
import './Footer.css'
import { DiGithubBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
<div className="container1">
<IconContext.Provider value={{ color:'white', size:'40px'}}>
  <div className="cont">
    <h2 className='label'>Get updates</h2>
    <form className="subscribe"> 
      <input class="finput" type="text" placeholder='Emailaddress@gmail.com'/>   
      <button className='button'>SUBSCRIBE</button>
    </form>
    <div className='last'>
      <h3 >Rebel Rhinos</h3>
      <p>Copyright © 2021 Rebel Rhinos</p>
      <p>All rights are not reserved</p>
      <span className='spn'><DiGithubBadge/></span>
     <span className='spn'><DiReact/></span>
     <span className='spn'><DiPhotoshop/></span>
    </div>
  </div>
  </IconContext.Provider>
</div>
  )
}
