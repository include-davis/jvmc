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


  // Error handling
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent automatic page reload

    // Input Validation
    let valid = true;

    if (!firstName.trim()) {
      setFirstNameError('First Name is required.');
      valid = false;
    } else {
      setFirstNameError('');
    }

    if (!lastName.trim()) {
      setLastNameError('Last Name is required.');
      valid = false;
    } else {
      setLastNameError('');
    }

    if (!email.trim()) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!subject.trim()) {
      setSubjectError('Subject is required.');
      valid = false;
    } else {
      setSubjectError('');
    }

    const contactData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    if (valid) {
      // Send to API
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactData),
      });
      
      const data = await res.json();
      alert(data.message || 'Something went wrong');
    }
  };
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
                {firstNameError && <p className={styles.errorText}>{firstNameError}</p>}
                <label>First Name*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className={styles.formInput}>
                {lastNameError && <p className={styles.errorText}>{lastNameError}</p>}
                <label>Last Name*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formInput}>
                {emailError && <p className={styles.errorText}>{emailError}</p>}
                <label>Email*</label>
                <input
                  type="text"
                  className={styles.formInputText}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.formInput}>
                {subjectError && <p className={styles.errorText}>{subjectError}</p>}
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
            <div className={styles.buttonArea}>
              <button type="submit" className={styles.sendButton}>
                <b>Send</b>
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }