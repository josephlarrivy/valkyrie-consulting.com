import React from "react";
import { Link } from "react-router-dom";
import trailimage from "../images/josh-hild-ANLERD5m1_s-unsplash.jpg"
import leavesimage from "../images/new-beach-picture.avif"
import valkyrielogo from "../images/Valkyrie-Consulting-Approved-Logo.jpg"


import '../styles/Home.css'


const Home = () => {


  return (
    <div id="home-main-container">

      <div id="home-header">
        <img id='logo' src={valkyrielogo} alt="Instagram" />
        <i><h2 id="home-subtitle">Supporting a healthy Mind-Body connection from a trauma informed perspective</h2></i>
        {/* <h1 id="home-title">Valkyrie Consulting</h1> */}
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
          <button id="home-consult-button">Schedule A Consultation Today</button>
        </Link>
      </div>

      <div className="image-container">
        <img src={leavesimage} alt="duluth minnesota superior wisconsin shore" />
        <div className="quote-container">
          <p className="quote-text">Customized services designed to support the unique needs of individuals and groups through trauma informed yoga, other therapeutic approaches, and education</p>
        </div>
        <div className="home-photo-credit">
          <p>Photo by <a href="https://unsplash.com/@brianbeckwith" target="_blank" rel="noreferrer">Brian Beckwith</a> on <a href="https://unsplash.com/photos/hwcHGFlYlxE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></p>
        </div>
      </div>

      <i><h1 id="home-services-header">Services</h1></i>
      <div id="services-home-container">
        <div className="services-block">
          <h4>Trauma Informed Yoga</h4>
          <p>Trauma Informed Yoga is a style of movement practice that supports awareness of the mind-body connection, provides choice and exploration of a healthy relationship with the body.</p>
        </div>
        <div className="services-block">
          <h4>Therapeutic Consultation</h4>
          <p>Consultation is designed for individuals, groups and organizations to consider healthy mind-body connections from a customized perspective and develop an approach to support overall well-being.</p>
        </div>
        <div className="services-block">
          <h4>Education</h4>
          <p>Workshops and educational presentations that cover a wide variety of topics such as the relationship between stress and the body and other content as requested.</p>
        </div>
        <div className="services-block">
          <h4>Retreats</h4>
          <p>Retreats are designed to include multiple factors of wellness including movement, therapeutic techniques and educational workshops and other domains for individuals, small groups or organizations.</p>
        </div>
      </div>

      <Link to="/services" style={{ textDecoration: 'none', color: 'white' }}>
        <button id="home-learn-more-button">Learn More</button>
      </Link>

      

      <div className="image-container">
        <img src={trailimage} alt="duluth minnesota superior wisconsin hiking trail" />
        <div className="quote-container">
          <p className="quote-text">“[Valkyrie Consulting is] conscious to my needs as a client, encouraging me to explore my trauma in a safe and controllable setting, where I can take the steps towards healing and recovery.”</p>
          <p className="quote-author">– Joe P.</p>
        </div>
        <div className="home-photo-credit">
          <p>Photo by <a href="https://unsplash.com/@joshhild?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Josh Hild</a> on <a href="https://unsplash.com/photos/ANLERD5m1_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a></p>
        </div>
      </div>







      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <i><h1 id="home-page-bottom-text-one">Let's Talk!</h1></i>
      <h2 id="home-page-bottom-text-two">Your first consultation is free.</h2>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
        <button id="about-consult-button">Schedule A Consultation</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}

export default Home;