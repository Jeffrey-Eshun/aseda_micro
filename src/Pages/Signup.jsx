import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";

import user_icon from '../assets/person.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();

    // Ensure you have imported and initialized Firebase auth correctly
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Sign Up Successful!');
        window.location.href = '/';
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className='loginsignup-container'>
        <div className='container'>
          <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
            <div className='input'>
              <img src={user_icon} alt="User Icon" />
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </div>
            <div className='input'>
              <img src={email_icon} alt="Email Icon" />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className='input'>
              <img src={password_icon} alt="Password Icon" />
              <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>
          </div>
          <button id="submit" className="button_allow" onClick={handleAuth}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
