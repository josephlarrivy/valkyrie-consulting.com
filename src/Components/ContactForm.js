import React, { useState } from "react";
// import emailjs from 'emailjs-com';

import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import '../styles/ContactForm.css'

const ContactForm = () => {

  const INITIAL_STATE = {
    'fname': '',
    'lname': '',
    'email': '',
    'message': '',
    'services': {
      'traumaInformedYoga': false,
      'therapeuticConsultation': false,
      'educationWorkshops': false,
      'retreats': false,
      'individual': false,
      'group': false,
      'organization': false,
    }
  }

  const [formData, setFormData] = useState(INITIAL_STATE);
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleChange = evt => {
    const { name, value, type, checked } = evt.target;
    if (type === 'checkbox') {
      setFormData(data => ({
        ...data,
        services: {
          ...data.services,
          [name]: checked,
        }
      }));
    } else {
      setFormData(data => ({
        ...data,
        [name]: value,
      }));
    }
  };

  const handleCaptchaChange = value => {
    setCaptchaValue(value);
  };

  // const handleSubmit = async (evt) => {
  //   evt.preventDefault();

  //   if (!captchaValue) {
  //     alert("Please complete the reCAPTCHA");
  //     return;
  //   }

  //   emailjs.sendForm('service_yfh2nmo', 'template_flxfwwx', evt.target, 'dOwl-x9RcwhboytS1')
  //   setFormData({
  //     ...INITIAL_STATE,
  //     services: { ...formData.services } // Preserve services
  //   });
  //   setCaptchaValue(null); // Reset reCAPTCHA value
  //   alert("Form submitted successfully. Thank you for your request.");
  // }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const url = 'https://private-email-sending-server-ed9119e08e0e.herokuapp.com/email/sendEmailValkyrie'
    // const url = 'http://localhost:3003/email/sendEmailValkyrie'

    try {
      const response = await axios.post(url, {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        message: formData.message,
        services: formData.services,
      });

      console.log('Success:', response.data);
      setFormData(INITIAL_STATE);
      alert("Form submitted successfully. Thank you for your request.");
      setCaptchaValue(null);
    } catch (error) {
      console.error('Error:', error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div id="name-container">
        <div className="first-name-container">
          <label htmlFor="fname">First Name: </label>
          <br></br>
          <input
            required
            id={formData.fname}
            type="text"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="name-input"
          />
        </div>

        <div className="last-name-container">
          <label htmlFor="lname">Last Name: </label>
          <br></br>
          <input
            required
            id={formData.lname}
            type="text"
            name="lname"
            value={formData.lname}
            onChange={handleChange}
            className="name-input"
          />
        </div>
      </div>
      

      <div className="email-container">
        <label htmlFor="email">Email: </label>
        <br></br>
        <input
          required
          id={formData.email}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
        />
      </div>

      <div className="services-container">
        <label>I'm interested in help with:</label>
        <br />
        <label>
          <input
            type="checkbox"
            name="traumaInformedYoga"
            checked={formData.services.traumaInformedYoga}
            onChange={handleChange}
          />
          Trauma Informed Yoga
        </label>

        <br />
        <label>
          <input
            type="checkbox"
            name="therapeuticConsultation"
            checked={formData.services.therapeuticConsultation}
            onChange={handleChange}
          />Therapeutic Consultation</label>

        <br />
        <label>
          <input
            type="checkbox"
            name="educationWorkshops"
            checked={formData.services.educationWorkshops}
            onChange={handleChange}
          />Education/Workshops</label>

        <br />
        <label>
          <input
            type="checkbox"
            name="retreats"
            checked={formData.services.retreats}
            onChange={handleChange}
          />Retreats</label>

        <br />
        <label>
          <input
            type="checkbox"
            name="individual"
            checked={formData.services.individual}
            onChange={handleChange}
          />Individual</label>

        <br />
        <label>
          <input
            type="checkbox"
            name="group"
            checked={formData.services.group}
            onChange={handleChange}
          />Group</label>

        <br />
        <label>
          <input
            type="checkbox"
            name="organization"
            checked={formData.services.organization}
            onChange={handleChange}
          />Organization</label>

      </div>

      <div className="message-container">
        <label htmlFor="message">Message: </label>
        <br></br>
        <textarea
          id={formData.message}
          type="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="message-input"
        />
      </div>

      <div className="recaptcha-container">
        <ReCAPTCHA
          sitekey="6Le-T7EoAAAAAFg2cM1AeyrrV_aHYGXOfg6yTX51"
          onChange={handleCaptchaChange}
        />
      </div>

      <button className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm;