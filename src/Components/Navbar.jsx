import React from 'react'
import {Link} from "react-router-dom"

const Navbar =()=>{
  return(
    <>
    <div className="frst-nav">
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to='/contact'>CONTACT</Link></li>
        <li><Link to='/join'>JOIN</Link></li>
      </ul>
    </div>

    <div className="img-acc-loc-cont">
      <div className="logo-image">
        <img src="" alt="IMAGE" />
        <p>|   Home</p>
      </div>
      <div className="acc">
        <select name="text" id="select">
          <option value="text">Current Account</option>
          <option value="text">Savining Account</option>
          <option value="text">Loan</option>
          <option value="text">Deposit</option>
        </select>
      </div>
      <div className="loc">
        <div className="location">
          <p>Location</p>
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