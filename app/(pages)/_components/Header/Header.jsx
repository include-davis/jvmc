import styles from "./Header.module.scss";
import Image from 'next/image';
import Link from "next/link";

export default function Header() {
  return (
      <div className={styles.header}>
          <Image src="/images/JVMC Logo 1.png" alt="JVMC Logo" width={118} height={89} className={styles.headerImage} />
          <div className={styles.headerLinks}>
              <Link href="/" className={styles.headerItems}>Home</Link>
              <Link href="/clinic-schedule" className={styles.headerItems}>Clinic Schedules</Link>
              <Link href="/community-partners" className={styles.headerItems}>Community Partner</Link>
              <Link href="/about-us" className={styles.headerItems}>About Us</Link>
              <Link href="/volunteer" className={styles.headerItems}>Volunteer</Link>
              <Link href="/contact-us" className={styles.headerContact}>Contact Us</Link>
          </div>
      </div>
  );
}