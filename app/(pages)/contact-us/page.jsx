import styles from './page.module.scss';
import contactData from '../_data/contact-us.json';

export default function ContactUs() {
  const { heading1, heading2 } = contactData.questionsCard
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
        </div>
      </main>
    );
  }