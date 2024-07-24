import React from "react";
import Business from "../img/business.jpg";
import Coop from "../img/cooporate.png"

function AboutPage() {
  return (
    <div className="about">
      <div className="back">
        <img src={Business} alt="business" className="business"/>
        <h1 className="h1">About Us</h1>
      </div>

      <div className="text">
        <h2 className="fine">
          Financial literacy is the key <br /> to improved financial <br />
          success.
        </h2>
        <p className="sum">
          Whether you have individual or business finance needs, we seek
          opportunities to nourish and add value. We help you to achieve your
          financing requirements by drawing on a depth of experience across
          commercial, residential and business lending. Above all, we believe
          financial literacy and education are essential and aim to connect you
          with the best information to make informed decisions when transacting
          with us
        </p>
        <img src={Coop} alt="cooperate" className="cooperate" />
      </div>
    </div>
  );
}

export default AboutPage;
