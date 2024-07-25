import React from "react";
import Business from "../img/business.jpg";
import Coop from "../img/cooporate.png"
import Diff from "../img/diff.jpg"

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
          Financial literacy is the key <br /> to improved financial <br />
          success.
        </h2>
        <p className="sum">
          Whether you have individual or business finance needs,<br/> we seek
          opportunities to nourish and add value. We help you to<br/> achieve your
          financing requirements by drawing on a depth<br/> of experience across
          commercial, residential and business<br/> lending. <br/><br/>Above all, we believe
          financial literacy and education are<br/> essential and aim to connect you
          with the best information<br/> to make informed decisions when transacting
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
          <img src={Diff} alt="diff" className="diff" />
          <figcaption><h2>Calvin Williamson Eshun</h2></figcaption>
          <p>Software Developer</p>
        </div>
        <div className="squad">
          <img src={Diff} alt="diff" className="diff" />
          <figcaption><h2>Ruth A. Shika</h2></figcaption>
          <p>Software Developer</p>
        </div>
        <div className="squad">
          <img src={Diff} alt="diff" className="diff" />
          <figcaption><h2>Jeffrey Jojo Eshun</h2></figcaption>
          <p>Software Developer</p>
        </div>
        <div className="squad">
          <img src={Diff} alt="diff" className="diff" />
          <figcaption><h2>Rafik Conway</h2></figcaption>
          <p>Software Developer</p>
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
            <div className="cli">1</div>
            <div className="cli">2</div>
            <div className="cli">3</div>
            <div className="cli">4</div>
          </div>
      </div>

      <footer>
        <div className="footer-1">
          <div className="foot-1">
            <h1>LOGO</h1>
          </div>
          <div className="foot-2">
            <h2>Get in touch</h2>
            <p>12 Olive Lane, 12 Olive Lane, 12</p>
            <p>Olive Lane, 12 Olive Lane,</p>
            <p>Melbourne VIC 3000</p>
            <p>03 1234 5678</p>
          </div>
          <div className="foot-3">
            <h2>Follow us</h2>
            <div className="socials">
              ####
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
