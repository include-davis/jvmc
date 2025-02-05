import styles from "./Header.module.scss";
import Image from 'next/image';


export default function Header() {
  return (
      <div className={styles.header}>
          <Image src="/images/JVMC Logo 1.png" alt="JVMC Logo" width={118} height={89} className={styles.headerImage} />
          <div className={styles.headerLinks}>
              <a href="#about" className={styles.headerItems}>Home</a>
              <a href="#skills" className={styles.headerItems}>Clinic Schedules</a>
              <a href="#projects" className={styles.headerItems}>Community Partner</a>
              <a href="#projects" className={styles.headerItems}>About Us</a>
              <a href="#projects" className={styles.headerItems}>Volunteer</a>
              {/* change the contact us later */}
              <a href="#projects" className={styles.headerContact}>Contact Us</a>
          </div>
      </div>
  );
}