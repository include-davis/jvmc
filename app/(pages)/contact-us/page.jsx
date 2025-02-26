"use client"
import { useState } from 'react';
import styles from './page.module.scss';
import contactData from '../_data/contact-us.json';

export default function ContactUs() {
  const { heading1, heading2 } = contactData.questionsCard

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent automatic page reload

    // Validation?

    const contactData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    // Send to API
    console.log(contactData);
  }
    return (
      <main>
        <div className={styles.contactPage}>
          <div>Contact Us</div>
          {/* MAP COMPONENT */}
          {/* SOCIAL MEDIA COMPONENT */}
          {/* QUESTIONS? COMPONENT */}
          <div className={styles.questionsCard}>
            <h3>{heading1}</h3>
            <h3>{heading2}</h3>
            <p>Please <b>do not use this page for inquiries</b></p>
            <p>For questions about volunteering please email <b><a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a></b></p>
          </div>
          {/* CONTACT FORM COMPONENT */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formField}>
              <div className={styles.formInput}>
                <label>First Name*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={styles.formInput}>
                <label>Email*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formInput}>
                <label>Last Name*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.formInput}>
                <label>Subject*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formMessage}>
              <label>Message</label>
                <textarea
                  type="text"
                  className={styles.message}
                  placeholder='Type Message Here...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
            </div>
          </form>
        </div>
      </main>
    );
  }