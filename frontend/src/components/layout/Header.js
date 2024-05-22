import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className='px-5 d-flex justify-content-between'>
       <h2>LOGO</h2>
       <ul >
           <li className='header-nav-item'><Link to={"/"}>Home</Link></li>
           <li className='header-nav-item'><Link to={"/login"}>Login</Link></li>
           <li className='header-nav-item'><Link to={"/coursetable"} >Course</Link></li>
           <li className='header-nav-item'><Link to={"/courseregister"} >Admissan</Link></li>
       </ul>
  </header>
  )
}

export default Header