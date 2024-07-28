import React from "react";
import Business from "../img/business.jpg";
import Coop from "../img/cooporate.png"
import Diff from "../img/diff.jpg"
import Girls from "../img/girls.jpg"
import Photo from "../img/photography.jpg"
import Old from "../img/senior.jpg"
import Color from "../img/colours.jpg"

function AboutPage() {
  return (
    <div className="about">
      <div className="back">
        <img src={Business} alt="business" className="business"/>
        <h1 className="h1">About Us</h1>
      </div>

      <div className="text">

        <div className="text-2">
        <h2 className="fine">
          Financial literacy is the key to improved financial
          success.
        </h2>
        <p className="sum">
          Whether you have individual or business finance needs,we seek
          opportunities to nourish and add value. We help you toachieve your
          financing requirements by drawing on a depthof experience across
          commercial, residential and business lending. Above all, we believe
          financial literacy and education are essential and aim to connect you
          with the best information to make informed decisions when transacting
          with us
        </p>
       
        </div>
         <div className="cooperate">
          <img src={Coop} alt="cooperate" />
        </div>
      </div>

      <div className="work">
        <h1>Working with us</h1>
        <p>A commitment to your financial literacy is embedded in everything we do. We offer a suite of financial resources and services that support you on your journey. At Aseda Microfinance, we are more than just a financial service provider; we are your partners in success. Join us and take the first step towards a more secure and prosperous financial future</p>
      </div>

      <div className="team">
        <h1>Our Team</h1>
        <p>Our team is made up of highly skilled and experienced professionals who are dedicated to providing
          you with the best possible service. We are committed to helping you achieve your financial goals and
          look forward to working with you.</p>
      </div>

      <div className="team-2">
        <div className="squad">
          <img src="public/calvin.jpg " alt="diff" className="diff" />
          <figcaption><h2>Calvin Williamson Eshun</h2></figcaption>
          <p>CEO of Aseda Microfinance</p>
        </div>
        <div className="squad">
          <img src="public/shika.jpg" alt="diff" className="diff" />
          <figcaption><h2>Ruth A. Shika</h2></figcaption>
          <p>Branch Manager</p>
        </div>
        <div className="squad">
          <img src="public/joojo.jpg" alt="diff" className="diff" />
          <figcaption><h2>Jeffrey Jojo Eshun</h2></figcaption>
          <p>Shareholder</p>
        </div>
        <div className="squad">
          <img src="public/rafik.jpg" alt="diff" className="diff" />
          <figcaption><h2>Rafik Conway</h2></figcaption>
          <p>Board Director</p>
        </div>
      </div>

      <div className="clients">
          <div className="client-1">
          <h1>Our Clients</h1>
          <p>Our clients are the heart of our business.<br/> We are committed to providing them with
          the best possible service and support.<br/> We are proud to work with a diverse range of clients,
          from small businesses to<br/> large corporations, and we look forward to continuing to serve them
          in the future.</p>
          </div>
          <div className="client-2">
            <div className="cli">
              <img src={Girls} alt="" />
            </div>
            <div className="cli">
              <img src={Old} alt="" />
            </div>
            <div className="cli">
              <img src={Photo} alt="" />
            </div>
            <div className="cli">
              <img src={Color} alt="" />
            </div>
          </div>
      </div>

      
    </div>
  );
}

export default AboutPage;
