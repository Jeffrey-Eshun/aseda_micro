import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="frst-nav">
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <NavLink to="/" activeclass="active">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="img-acc-loc-cont">
        <div className="logo-image">
          <img src="src/img/Aseda_Micro.png" alt="IMAGE" />
          <li>
            <Link to="/">Home</Link>
          </li>
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
};

export default Navbar;
