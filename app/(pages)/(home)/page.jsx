import styles from './page.module.scss';
import Image from 'next/image';
import { FaHome, FaClock, FaEnvelope} from 'react-icons/fa';
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <div className={styles.contactCard}>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <FaHome color="var(--emerald)" size={32}/>
              <div className={styles.infoText}>
                <h3 style={{ color: "var(--emerald)" }}>Come Visit Us!</h3>
                <p style={{ color: "var(--dark-grey)" }}>3647 40th St, Sacramento, CA 95817</p>
              </div>
            </div>
            <div className={styles.info}>
              <FaClock color="var(--emerald)" size={32}/>
              <div className={styles.infoText}>
                <h3 style={{ color: "var(--emerald)" }}>Opening Hours</h3>
                <p style={{ color: "var(--dark-grey)" }}>Every Saturday: 1:00pm - 4:00pm</p>
              </div>
            </div>
            <div className={styles.info}>
              <FaEnvelope color="var(--emerald)" size={32}/>
              <h3 style={{ color: "var(--emerald)" }}>Contact</h3>
            </div>
            <Link href="/contact-us" className={"btn"}>Ask Us Questions</Link>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.gradientCircle}></div> 
            <Image src="/images/IMG_8158 2.png" alt="Contact Photo" width={360} height={280} className={styles.image} />
          </div>
        </div>
    </main>
  );
}
