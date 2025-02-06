import styles from './page.module.scss';

export default function Volunteer() {
    return (
      <main>
        <div className={styles.learn_more}>
          <h1 className={styles.header}>Interested in learning more about each role?</h1>
          <div className={styles.text}>For more information on each volunteering role, please navigate to the <span className={styles.aboutUs}>About Us</span> page. There you will find out more about what each role in the clinic entails.</div>
          <button className={styles.buttn}>
            <div className={styles.buttnText}>About Us</div>
          </button>
          {/*button className={styles.buttn} onClick={handle_click}></button>*/}
        </div>
      </main>
    );
  }