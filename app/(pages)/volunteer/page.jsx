import styles from './page.module.scss';

export default function Volunteer() {
    return (
      <main>
        <div className={styles.learn_more}></div>
          <h1 className={styles.header}>Interested in learning more about each role?</h1>
          <div className={styles.text}>For more information on each volunteering role, please navigate to the About Us page. There you will find out more about what each role in the clinic entails.</div>
          <button className={styles.buttn}>ABOUT US</button>
          {/*button className={styles.buttn} onClick={handle_click}></button>*/}
      </main>
    );
  }