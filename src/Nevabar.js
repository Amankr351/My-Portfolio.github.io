import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Nevabar = () => {
    const[value,setValue] = useState(false)
    return (
        <>
           <div className='Navbar'>
               <h2 className='logo'>Aman</h2>
               <ul className= {
                   value ? "mobile-nav-link" : "Nav-link"
               }>
                 <li><a href="/home">home</a></li>
                 <li><a href="/about">about</a></li>
                 <li><a href="/skill">skill</a></li>
                 <li><a href="/contect">contect</a></li>
                 <li><a href="#">signup</a></li>
                 <li><a href="#">login</a></li>
               </ul>
               
             <button className='btnn' onClick={() => setValue(!value)}>
              <GiHamburgerMenu />
             </button>
           </div> 
        </>
    )
}

export default Nevabar
