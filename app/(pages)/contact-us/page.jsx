"use client"
import { useState } from 'react';
import styles from './page.module.scss';
import contactData from '../_data/contact-us.json';
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';

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
        <main className={styles.contactUs}>
            {/* MAP COMPONENT */}
            <div className={styles.rainbowTop}>
                <Image src="/Contact_Rainbow_Top.png" alt="Decorative Rainbow Top" className={styles.rainbowTop} width={1482} height={1350}/>
            </div>
            <div className={styles.rainbowBottom}>
                <Image src="/Contact_Rainbow_Bottom.png" alt="Decorative Rainbow Bottom" className={styles.rainbowBottom} width={1362} height={1068}/>
            </div>
            <h1>Contact Us</h1>
            <section className={styles.container}>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.666409336778!2d-121.46305095896587!3d38.541457271919676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad06c484a2647%3A0x4b342e5bcbaa8fff!2sMorrissey%20Flynn%20Building%2C%203647%2040th%20St%2C%20Sacramento%2C%20CA%2095817!5e0!3m2!1sen!2sus!4v1740808728482!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: "12px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className={styles.boxCard}>
                    <div className={styles.infoCard}> 
                        <h3>3647 40th St</h3>
                        <h3>Sacramento, CA 95817</h3>
                    </div>
                    <div className={styles.textInfo}>
                        <h4>No Appointments Needed!</h4>
                        <h4>Open every Saturday 1-4pm</h4>
                    </div>
                </div>
            </section>
            {/* SOCIAL MEDIA COMPONENT */}
            <section className={styles.socialMedia}>
                <h4>Visit our social media pages!</h4>
                <div className={styles.dotsContainer}>
                    <div className={styles.dotsLeft}>
                      <Image src="/NEW_Contact_Middle_Left_Dots.png" alt="Decorative Dots Left" width={420} height={412}/>
                    </div>
                    <div className={styles.dotsRight}>
                      <Image src="/NEW_Contact_Middle_Left_Right.png" alt="Decorative Dots Right" width={432} height={397} />
                    </div>
                </div>
                <div className={styles.socialMediaIcons}>
                    <a href="https://www.instagram.com/jvmclinic" target="_blank" rel="noopener noreferrer" className="btn">  
                        <FaInstagram className={styles.icon} />@jvmcclinic
                    </a>
                    <a href="https://www.instagram.com/jvmcstudents/" target="_blank" rel="noopener noreferrer" className="btn">
                        <FaInstagram className={styles.icon} />@jvmcstudents
                    </a>
                </div>
            </section>
            {/* QUESTIONS? COMPONENT */}
            <div className={styles.questionsCard}>
                <div>
                  <h3>{heading1}</h3>
                  <h3>{heading2}</h3>
                </div>
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
                    <button type="submit" className={`btn ${styles.sendButton}`}>
                      Send
                    </button>
                </div>
            </form>
      </main>
    );
}