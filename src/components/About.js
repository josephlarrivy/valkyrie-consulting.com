import React from "react";
// import { Link } from "react-router-dom";
import '../styles/About.css'
import aleximage from "../images/bwselfie.jpg"
import loonsimage from "../images/garrett-cumber-Mj5y6XLi-TA-unsplash.jpg"
import cliffimage from '../images/taylor-friehl-qevn1LAAMCw-unsplash.jpg'
import forestimage from '../images/weston-m-g0bvYTcFN3o-unsplash.jpg'

const About = () => {
  return (
    <div id="about-container">

      <div id="about-header">
        <i><h1>About Us</h1></i>
        <i><h2>Welcome to Valkyrie Consulting, where your journey to well-being begins.</h2></i>
      </div>
      
      
      
      <div className="about-full-width-banner">
        <p className="about-main-text">At Valkyrie Consulting, we recognize that each person and group is distinct, with their own specific needs. That's why we pride ourselves on tailoring our services to suit your individual needs. It all starts with a personalized initial consultation, where we take the time to understand your goals and intentions.</p>
        <div className="about-image-container">
          <img src={loonsimage} alt="Superior Wisconsin lake loons"></img>
          <div className="about-photo-credit">
            <p>Photo by <a href="https://unsplash.com/@gccumber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Garrett Cumber</a> on <a href="https://unsplash.com/photos/Mj5y6XLi-TA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="about-full-width-banner">
        <div className="about-image-container">
          <img src={cliffimage} alt="Duluth Minnesota Lake Superior Twin Ports"></img>
          <div className="about-photo-credit">
            <p>Photo by <a href="https://unsplash.com/@taylor_friehl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Taylor Friehl</a> on <a href="https://unsplash.com/photos/qevn1LAAMCw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>
          </div>
        </div>
        <p className="about-main-text">But that's not all – we're excited to announce   personalized  retreats.  We offer a range of day and weekend retreats that are designed to cater to a diverse audience. Our retreats are centered around the concept of whole-body wellness, encompassing physical movement, enlightening workshops, nourishing cuisine, a nurturing and safe environment, and a profound sense of community.</p>
      </div>

      <br></br>
      <br></br>
      <br></br>
      
      <div className="about-full-width-banner">
        <p className="about-main-text">Whether you're seeking personal growth, stress relief, or a rejuvenating escape, Valkyrie Consulting has you covered. Join us on a transformative journey towards a healthier, happier you.</p>
        <div className="about-image-container">
          <img src={forestimage} alt="Twin Ports Northwoods"></img>
          <div className="about-photo-credit">
            <p>Photo by <a href="https://unsplash.com/@betteratf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">weston m</a> on <a href="https://unsplash.com/photos/g0bvYTcFN3o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a></p>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="about-full-width-banner">
        <div className="about-image-container">
          <img src={aleximage} alt="Duluth Minnesota North Shore"></img>
          <div className="about-photo-credit">
            <p>Photo by <a href="https://www.theleavesofash.com/" target="_blank">Leaves Of Ash</a></p>
          </div>
        </div>
        <p className="about-main-text">Our founder, Alex Ross, MA, is a Licensed Professional Clinical Counselor and Registered Yoga Teacher. Her passion forms the bedrock of Valkyrie Consulting, where we are dedicated to nurturing a strong mind-body connection for all.</p>
      </div>

      <br></br>
      <br></br>
      <br></br>

      {/* <br></br>
      <br></br>
      <br></br>
      <br></br> */}

      
      <i><h1 id="about-page-bottom-text-one">Let's Talk!</h1></i>
      <h2 id="about-page-bottom-text-two">Your first consultation is free.</h2>
      <a href="/contact" style={{ textDecoration: 'none', color: 'white' }}>
        <button id="about-consult-button">Schedule A Consultation</button>
      </a>

      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default About;