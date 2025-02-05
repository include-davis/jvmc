import styles from './page.module.scss';
import { PiStudent } from "react-icons/pi";

export default function About() {
    return (
      <main>
        <div className={styles.page}>
          <h1>Clinic Roles</h1>
          <h3>The incredible team that makes JVMC happen</h3>
          <div className={styles.card}>
          <h2>Undergrad</h2>
              <span><PiStudent size={60}/></span>
              
          </div>
          <div className={styles.card2}>
            
            </div>
          
        </div>
      </main>
    );
  }
  