"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Error handling
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  // Prevent multiple submissions while loading
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    console.log("submit");
    e.preventDefault(); // Prevent automatic page reload

    // Prevent multiple submissions while loading
    if (loading) return;

    setLoading(true);

    // Input Validation
    let valid = true;

    if (!firstName.trim()) {
      setFirstNameError("Please provide a first name");
      valid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Please provide a last name");
      valid = false;
    } else {
      setLastNameError("");
    }

    if (!email.trim()) {
      setEmailError("Please provide an email");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please provide a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!subject.trim()) {
      setSubjectError("Please provide a subject");
      valid = false;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("Please provide a message");
      valid = false;
    } else {
      setMessageError("");
    }

    if (!valid) {
      setLoading(false); // Reset loading state if validation fails
      // return;
    }

    const contactData = {
      firstName,
      lastName,
      email,
      subject,
      message,
    };

    // Send to API
    try {
      if (!valid) throw new Error("Invalid input");

      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactData),
      });

      if (!res.ok) throw new Error("Failed to send email");

      const data = await res.json();
      alert(data.message || "Email sent successfully!");

      // Reset form fields after successful submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      if (error.message !== "Invalid input") {
        alert("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formField}>
        <div className={styles.formInput}>
          <label>First Name*</label>
          <input
            type="text"
            className={`${styles.formInputText} ${firstNameError && styles.error}`}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {firstNameError && (
            <p className={styles.errorText}>{firstNameError}</p>
          )}
        </div>
        <div className={styles.formInput}>
          <label>Last Name*</label>
          <input
            type="text"
            className={`${styles.formInputText} ${lastNameError && styles.error}`}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {lastNameError && <p className={styles.errorText}>{lastNameError}</p>}
        </div>
      </div>
      <div className={styles.formField}>
        <div className={styles.formInput}>
          <label>Email*</label>
          <input
            type="text"
            className={`${styles.formInputText} ${emailError && styles.error}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className={styles.errorText}>{emailError}</p>}
        </div>
        <div className={styles.formInput}>
          <label>Subject*</label>
          <input
            type="text"
            className={`${styles.formInputText} ${subjectError && styles.error}`}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {subjectError && <p className={styles.errorText}>{subjectError}</p>}
        </div>
      </div>
      <div className={styles.formMessage}>
        <label>Message</label>
        <textarea
          type="text"
          className={`${styles.message} ${messageError && styles.error}`}
          placeholder="Type Message Here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {messageError && <p className={styles.errorText}>{messageError}</p>}
      </div>
      <div className={styles.buttonArea}>
        <button
          type="submit"
          disabled={loading}
          className={`btn ${styles.sendButton}`}
        >
          Send
        </button>
      </div>
    </form>
  );
}
