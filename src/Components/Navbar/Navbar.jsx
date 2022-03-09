import React from 'react'
import { DiGithubBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
import { IconContext } from "react-icons";

import './Navbar.css'

 function Navbar() {
  return (
    
   <div className='nav'> 
   <IconContext.Provider value={{ color:'white', size:'40px'}}>
     <div className='navlinks'>
      <div className='content' >
        <a>
        <span>Home </span>
        <span>About </span>
        <span>Contact </span>
        </a>      
      </div>
     <img className='logo'  src='https://rebel-rhinos.netlify.app/static/media/logo_original.d3dc57e4fd9492a69c85.png' alt='LOGO' width='70' height='70' />
     <div className='icons'>
     <span><DiGithubBadge/></span>
     <span><DiReact/></span>
     <span><DiPhotoshop/></span>
       </div>
       
     </div>
     </IconContext.Provider>
   </div>
  );
}
export default Navbar;
