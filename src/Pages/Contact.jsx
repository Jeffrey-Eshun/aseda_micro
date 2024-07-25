import React from 'react'
import Call from "../img/telephone.jpg"
import Build from "../img/chicago.jpg"

function Contact() {
  return (
    <div className='contact'>
      <div className="con-img">
        <img src={Call} alt="telephone" className='telephone'/>
      </div>
      <h1 className='con-head'>Contact Us</h1>

      <div className="business-con">
        <h1>BUSINESS TO BUSINESS</h1>
        <p>We are specialists in both economics and information technologies and we apply our full range of talent to creating the perfect solution for each client’s needs</p>
      </div>

      <div className="build-img">
        <div className="build-1">
          <h5>contact us</h5>
          <h1>Get in touch with us</h1>
          <p>If you’d like to know more about how we can help you plan,<br/> schedule, and manage your time more effectively on every<br/> development project, simply fill out the form to get in touch<br/> with one of our experts.</p>
        </div>
        <div className="build-2">
          <form action="active">
            <input type="text" placeholder="Name" className='name' required/>
            <input type="email" placeholder="Enter Email" className='name' required/>
            <input typeof="number" placeholder="Phone Number" className='name'/>
            <textarea name="text" id="message" placeholder='enter message'></textarea>
            <button type="submit" className='name'>Send</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
