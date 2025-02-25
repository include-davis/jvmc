import styles from './page.module.scss';

export default function ContactUs() {
    return (
      <main>
        <div>Contact Us</div>
        {/* MAP COMPONENT */}
        {/* SOCIAL MEDIA COMPONENT */}
        {/* QUESTIONS? COMPONENT */}
        <div className={styles.questionsCard}>
          <h3>Questions?<br/>We would love to hear!</h3>
          <p></p>
          <p></p>
        </div>
        {/* CONTACT FORM COMPONENT */}
      </main>
    );
  }