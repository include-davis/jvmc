import styles from './page.module.scss';

export default function ContactUs() {
    return (
      <main>
        <div className={styles.contactPage}>
          <div>Contact Us</div>
          {/* MAP COMPONENT */}
          {/* SOCIAL MEDIA COMPONENT */}
          {/* QUESTIONS? COMPONENT */}
          <div className={styles.questionsCard}>
            <h3>Questions?</h3>
            <h3>We would love to hear!</h3>
            <p>Please <b>do not use this page for inquiries</b></p>
            <p>For questions about volunteering please email <b><a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a></b></p>
          </div>
          {/* CONTACT FORM COMPONENT */}
        </div>
      </main>
    );
  }