// client/src/pages/ContactPage.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ContactPage = () => {
  // State to hold the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage submission status
  const [status, setStatus] = useState('');

  // Update state when user types in a field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default browser refresh
    setStatus('Sending...');

    // Send the form data to our backend
    axios.post('http://localhost:5000/api/contact/send', formData)
      .then(res => {
        setStatus('Message sent successfully!');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(err => {
        setStatus('Error sending message. Please try again.');
        console.error(err);
      });
  };

  return (
    <div className="contact-page">
      <h1 style={{ textAlign: 'center' }}>Get in Touch</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </div>
  );
};

export default ContactPage;