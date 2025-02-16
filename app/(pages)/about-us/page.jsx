import styles from './page.module.scss';
import { PiStudent } from "react-icons/pi";

export default function About() {
    return (
      <main>
        <div className={styles.page}>
          <h1>Clinic Roles</h1>
          <h3>The incredible team that makes JVMC happen</h3>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span><PiStudent size={60}/></span>
                <h2>Undergrad</h2>
              </div>
              <p> 
                JVMC would cease to function without the dedication of UC Davis undergraduate students who serve
                the greater vision of the clinic.  This opportunity allows students to get experience in patient intake, 
                lab work, community health, nutrition, and social work.</p>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardTop}>
                <span><PiStudent size={60}/></span>
                <h2>Graduate</h2>
              </div>
              <p> 
              Medical, PA, and NP students are an integral part of JVMC.  Student volunteers have the opportunity to work with 
              patients one-on-one with physician supervision who provide guidance.  This is one of the best learning opportunities 
              for any future provider.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
                <span><PiStudent size={60}/></span>
                <h2>Social Work</h2>
              </div>
              <p> 
              In association with Harm Reduction Services, JVMC's social work team allows for patient's to seek out holistic needs and 
              pursue a greater life quality.  We offer various resources for patient care and life support.  There is an opportunity for 
              social work students to gain experience.
              </p>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardTop}>
                <span><PiStudent size={60}/></span>
                <h2>Preceptor</h2>
              </div>
              <p> 
              Where would we be without the dedication of experienced clinicians who are willing to offer their valuable time to mentor students?
                Their oversights serve the community by allowing for consistent medical care to the patients who enter our clinic.
              </p>
            </div>
          
        </div>
      </main>
    );
  }
  