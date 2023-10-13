import { useState } from "react";
import emailjs from 'emailjs-com';

import '../styles/ContactForm.css'

const ContactForm = () => {

  const INITIAL_STATE = {
    'fname': '',
    'lname': '',
    'email': '',
    'message': '',
    'services': { // Initialize services as an empty object
      'traumaInformedYoga': false, // You can set default values for services if needed
    }
  }

  const [formData, setFormData] = useState(INITIAL_STATE);

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

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    emailjs.sendForm('service_yfh2nmo', 'template_flxfwwx', evt.target, 'dOwl-x9RcwhboytS1')
    setFormData(INITIAL_STATE);
    alert("Form submitted successfully. Thank you for your request.");
  }

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

      <button className="submit-button">Submit</button>
    </form>
  )
}

export default ContactForm;