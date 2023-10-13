import React from "react";
// import { Link } from "react-router-dom";

import '../styles/Services.css'


const Services = () => {


  return (
    <div>
      <div id="services-header">
        <i><h1>Services</h1></i>
        <i><h2>Welcome to Valkyrie Consulting, where your journey to well-being begins.</h2></i>
      </div>
      <div id="services-page-content-container">

        <div className="services-banner-container">
          <div className="banner-left-side">
            <i><h1>Trauma Informed Yoga</h1></i>
          </div>
          <div className="banner-right-side">
            <p>Trauma Informed Yoga is a style of movement practice that supports an increased awareness of the mind-body connection, provides choice and exploration of a healthy relationship with the physical body.</p>
            <p>As human beings we frequently ignore our bodies and the clues and cues it gives us, not eating or meeting other physical needs when they come up, or experiencing something traumatic or significant that impacts how we perceive our body and interact with it.</p>
            <p>For this reason, Trauma Informed Yoga is a powerful experience in reconnecting with the physical body and exploring in a safe and supportive environment. Sessions can be facilitated 1:1, in small groups or with established organizations following initial consultation to determine best fit.</p>
          </div>
        </div>

        <div className="services-banner-container">
          <div className="banner-left-side">
            <i><h1>Therapeutic Consultation</h1></i>
          </div>
          <div className="banner-right-side">
            <p>Therapeutic consultation is designed for individuals, groups and organizations to consider healthy mind-body connections from a customized perspective and develop an approach to support overall well-being.</p>
            <p>This could include 1:1 or group consultation to assess success and challenges and determine what therapeutic tools, approaches and services could be appropriate and helpful.</p>
            <p>Consultation services can occur on a short or long term basis depending on the developed goals and objectives of the individual or group.</p>
          </div>
        </div>

        <div className="services-banner-container">
          <div className="banner-left-side">
            <i><h1>Education</h1></i>
          </div>
          <div className="banner-right-side">
            <p>Workshops and educational presentations are designed to cover topics such as the relationship between stress and the body as well as healthy coping and regulation strategies and other domains of wellness.</p>
            <p>Please contact Valkyrie Consulting directly for further questions and consideration of topics and workshops.</p>
          </div>
        </div>

        <div className="services-banner-container">
          <div className="banner-left-side">
            <i><h1>Retreats</h1></i>
          </div>
          <div className="banner-right-side">
            <p>Retreats are designed to include multiple factors of wellness including movement, therapeutic techniques and educational workshops and other domains for individuals, small groups or organizations.</p>
            <p>There is an emphasis throughout the day about supporting development of healthy habits and routines that includes nourishing food and beverage choices and whole body wellness opportunities that are intended to appeal to a broad demographic.</p>
            <p>Retreats can be coordinated solely with Valkyrie Consulting or in conjunction with other partners based on negotiation and goodness of fit.</p>
          </div>
        </div>

      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <i><h1 id="services-page-bottom-text-one">Let's Talk!</h1></i>
      <h2 id="services-page-bottom-text-two">Your first consultation is free.</h2>
      <a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
        <button id="about-consult-button">Schedule A Consultation</button>
      </a>

      <br></br>
      <br></br>
      <br></br>


    </div>
  )
}

export default Services;