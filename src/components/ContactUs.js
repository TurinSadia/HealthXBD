"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from '@/app/page.module.css'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    countryCode: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (can log or send to server)
    console.log(formData);
  };

  return (
    <div className={styles.container}>
      <section className={styles.contactUsInfo}>
        {/* Title Section */}
        <div className={styles.alignCenter}>
          <div className={styles.contactUscontents}>
            <div className={styles.imageContainer}>
              <Image
                src="/Group 10.png" // Replace with your image path
                alt="Emergency Service"
                width={30} // Set the width of the image
                height={30} // Set the height of the image
                className={styles.heroImage}
              />
            </div>
            <p className={styles.title}>CONTACT US</p>
          </div>
          <h2 className={styles.paddingBottom}>Get a Quote Today</h2>
          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
          </p>
        </div>
      </section>

      {/* FORM */}
 <div className={styles.contactContainer}>
  <div className={styles.leftColumn}>
    <Image 
      src="/Group 30 (1).png" // Replace with your image path
      alt="Contact Image"
      width={500}
    height={800}
    className={styles.FormDImage}
    />
  </div>

  <div className={styles.rightColumn}>
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      
      {/* First Name and Last Name */}
      <div className={styles.formRow}>
        <div className={styles.inputLabel}>
          <h5>First Name:</h5>
        </div>
        <input 
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
        
        <div className={styles.inputLabel}>
          <h5>Last Name:</h5>
        </div>
        <input 
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </div>

      {/* Email */}
      <div className={styles.inputLabel}>
        <h5>Email:</h5>
      </div>
      <input 
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className={styles.inputField}
      />
      
      {/* Country Code and Phone Number */}
      <div className={styles.formRow}>
        <div className={styles.inputLabel}>
          <h5>Country Code:</h5>
        </div>
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className={styles.inputField}
        >
          <option value="+1">+1 (USA)</option>
          <option value="+44">+44 (UK)</option>
          <option value="+91">+91 (India)</option>
        </select>

        <div className={styles.inputLabel}>
          <h5>Phone:</h5>
        </div>
        <input 
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className={styles.inputField}
        />
      </div>

      {/* Date */}
      <div className={styles.inputLabel}>
        <h5>Select Date:</h5>
      </div>
      <input 
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className={styles.dateInput} // Use scoped class
      />

      {/* Message */}
      <div className={styles.inputLabel}>
        <h5>Message:</h5>
      </div>
      <textarea 
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows="5"
        className={styles.inputField}
      />

      {/* Submit Button */}
      <Button 
        text="Appointment Now"
        onClick={handleSubmit}
        className={styles.submitBtn}
        icon="" // optional icon for button
        type="submit"
      />
    </form>
  </div>
</div>


    </div>
  );
};

export default ContactUs;
