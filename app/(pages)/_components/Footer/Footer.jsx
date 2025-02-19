import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram} from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
        <div className={styles.logo}>
            <Image
              src={"/logo.png"}
              alt={"JVMC Logo"}
              style={{ objectFit: "fill" }}
              fill={true}
            />
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.instagram.com/jvmclinic" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jvmclinic" target="_blank" rel="noopener noreferrer">
                <LuFacebook />
              </a>
            </li>
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/clinic-schedule">Clinic Schedules</Link></li>
          <li><Link href="/community-partners">Community Partners</Link></li>
          <li><Link href="/about-us">About Us</Link></li>
          <li><Link href="/volunteer">Volunteer</Link></li>
          <li><Link href="/contact-us">Contact Us</Link></li>
        </ul>
      </div>
      <div className={styles.bottomSection}>
        <p>Made with 🤍 by #include at Davis © 2025</p>
      </div>
    </footer>
  );
}