import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar =()=>{

  return(
    <>
    <div className="frst-nav">
      <ul>
        <li><NavLink to='/' activeClass="active">HOME</NavLink></li>
        <li><NavLink to="/about">ABOUT</NavLink></li>
        <li><NavLink to='/contact'>CONTACT</NavLink></li>
        <li><Link to='/join'>JOIN</Link></li>
      </ul>
    </div>

    <div className="img-acc-loc-cont">
      <div className="logo-image">
        <img src="src/img/Aseda_Micro.png" alt="IMAGE" />
        <li><Link to='/'>Home</Link></li>
      </div>
      <div className="acc">
        <select name="text" id="select">
          <option value="text">Current Account</option>
          <option value="text">Savining Account</option>
          <option value="text">Wards Account</option>
          <option value="text">Youth Accoun</option>
        </select>
      </div>
      <div className="loc">
        <div className="location">
          <p>Location Us</p>
        </div>
      </div>
      <div className="con">
        <div className="contact">
          <p>Contact Us</p>
        </div>
      </div>
    </div>
    
    </>
  );
}


export default Navbar