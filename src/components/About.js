import React from "react";
import '../styles/About.css'
import shoreimage from "../images/joe-pohle--XChSwXB3uA-unsplash.jpg"
import loonsimage from "../images/garrett-cumber-Mj5y6XLi-TA-unsplash.jpg"
import cliffimage from '../images/taylor-friehl-qevn1LAAMCw-unsplash.jpg'
import forestimage from '../images/weston-m-g0bvYTcFN3o-unsplash.jpg'

const About = () => {


  return (
    <div id="about-container">
      <h1>About Us</h1>

      <br></br>

      <h2>Welcome to Valkyrie Consulting, where your journey to holistic well-being begins.</h2>

      <br></br>
      <br></br>

      <div className="full-width-banner">
        <p className="main-about-text">Our founder, Alex Ross, MA, is not just a Licensed Professional Clinical Counselor, but also a Registered Yoga Teacher. This unique combination of expertise forms the bedrock of Valkyrie Consulting, where we are dedicated to nurturing a strong mind-body connection for all.</p>
        <div>
          <img src={shoreimage} alt="Duluth Minnesota north shore"></img>
          <p id="photo-credit">Photo by <a href="https://unsplash.com/@joepohle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Joe Pohle</a> on <a href="https://unsplash.com/photos/-XChSwXB3uA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
      </div>
      
      <div className="full-width-banner">
        <div>
          <img src={loonsimage} alt="Duluth Minnesota north shore"></img>
          <p id="photo-credit">Photo by <a href="https://unsplash.com/@gccumber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Garrett Cumber</a> on <a href="https://unsplash.com/photos/Mj5y6XLi-TA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
        <p className="main-about-text">At Valkyrie Consulting, we recognize that each person and group is distinct, with their own specific needs. That's why we pride ourselves on tailoring our services to suit your individual requirements. It all starts with a personalized initial consultation, where we take the time to understand your goals and aspirations.</p>
      </div>
      
      <div className="full-width-banner">
        <p className="main-about-text">But that's not all – we're excited to announce our partnership with Superior Retreats. Together, we offer a range of day and weekend retreats that are designed to cater to a diverse audience. Our retreats are centered around the concept of whole-body wellness, encompassing physical movement, enlightening workshops, nourishing cuisine, a nurturing and safe environment, and a profound sense of community.</p>
        <div>
          <img src={cliffimage} alt="Duluth Minnesota north shore"></img>
          <p id="photo-credit">Photo by <a href="https://unsplash.com/@taylor_friehl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Friehl</a> on <a href="https://unsplash.com/photos/qevn1LAAMCw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
      </div>
      
      <div className="full-width-banner">
        <div>
          <img src={forestimage} alt="Duluth Minnesota north shore"></img>
          <p id="photo-credit">Photo by <a href="https://unsplash.com/@betteratf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">weston m</a> on <a href="https://unsplash.com/photos/g0bvYTcFN3o?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </div>
        <p className="main-about-text">Whether you're seeking personal growth, stress relief, or a rejuvenating escape, Valkyrie Consulting and Superior Retreats have you covered. Join us on a transformative journey towards a healthier, happier you.</p>
      </div>
      
      <br></br>
      <br></br>

      <h2>Experience the difference with Valkyrie Consulting. Your well-being is our passion.</h2>

      <br></br>
      <br></br>
      <br></br>

    </div>
  )
}

// images
// https://unsplash.com/photos/-XChSwXB3uA
// https://unsplash.com/photos/Mj5y6XLi-TA

export default About;