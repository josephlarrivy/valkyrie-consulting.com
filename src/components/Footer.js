import React from "react";
import "../styles/Footer.css";
import instagramicon from '../images/icons8-instagram-64.png'

const Footer = () => {
  // Instagram URL
  const instagramUrl = "https://www.instagram.com/valkyrieconsulting/";

  return (
    <div id="footer-inner-container">
      <div className="footer-div">
        <b><p>Contact:</p></b>
        <p>valkyrieconsults@gmail.com</p>
      </div>
      <div className="footer-div">
        <b><p>Proudly Serving:</p></b>
        <p>Twin Ports Area of Duluth, Minnesota and Superior, Wisconsin</p>
      </div>
      <div className="footer-div">
        <b><p>Social Media:</p></b>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
          <img src={instagramicon} alt="Instagram" />
        </a>
      </div>
    </div>
  )
}

export default Footer;
