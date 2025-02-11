import styles from './page.module.scss';
import text_data from '@/app/(pages)/_data/volunteer.json';

export default function Volunteer() {


    return (
      <main>
        <h1 className={styles.title}>{text_data.Title}</h1>

        <div className={styles.learn_more}>
          <h1 className={styles.header}>{text_data.bottom_title}</h1>
          <p className={styles.text}>For more information on each volunteering role, please navigate to the <span className={styles.aboutUs}>About Us</span> page. There you will find out more about what each role in the clinic entails.</p>
          <div className="btn">{text_data.bottom_button}</div>
          {/*button className={styles.buttn} onClick={handle_click}></button>*/}
        </div>
      </main>
    );
  }