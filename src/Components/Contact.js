import React from "react";
import ContactForm from "./ContactForm";
// import instagramicon from '../images/icons8-instagram-64.png'


import '../styles/Contact.css'


const Contact = () => {

  return (
    <div id="contact-main-container">
      <i><h1 className="contact-page-header">Schedule a Consultation</h1></i>
      <div id="contact-content-container">

        <div id="contact-left-side">
          <h1>Valkyrie Consulting</h1>
          <p>Proudly Serving Minnesota and Northern Wisconsin</p>
          <p>valkyrieconsults@gmail.com</p>
        </div>
        <div id="contact-right-side">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;