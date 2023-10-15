import React from "react";
// import { Link } from "react-router-dom";
import "../styles/Footer.css";
import instagramicon from '../images/icons8-instagram-64.png'
import valkyrielogo from "../images/Valkyrie-Consulting-Approved-Logo.png"


const Footer = () => {
  // Instagram URL
  const instagramUrl = "https://www.instagram.com/valkyrieconsulting/";

  return (
    <div id="footer-inner-container">
      <div className="footer-div-links">
        <a href="/"><p>Home</p></a>
        <a href="/about"><p>About</p></a>
        <a href="/services"><p>Servies</p></a>
        <a href="/contact"><p>Contact</p></a>
      </div>
      <div className="footer-div">
        <img id='logo' src={valkyrielogo} alt="Valkyrie consulting alex ross duluth minnesota superior wisconsin therapy logo" />
        <p>Serving Minnesota and Northern Wisconsin</p>
      </div>
      <div className="footer-div">
        <b><p>Contact</p></b>
        <a href={instagramUrl} target="_blank" rel="noreferrer">
          <img id="instagram-logo" src={instagramicon} alt="Instagram" />
        </a>
        <p>valkyrieconsults@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer;
