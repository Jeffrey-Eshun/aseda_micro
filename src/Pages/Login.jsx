import React, { useState } from 'react';
// import { auth } from '../firebase';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Login Successful!');
        window.location.href = 'index.html';  // main page here
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
            <div className='text'>Log In</div>
            <div className='underline'></div>
          </div>
          <div className='inputs'>
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
          <button id="submit" className="button_allow" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;