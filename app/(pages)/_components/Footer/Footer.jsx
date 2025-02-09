import styles from "./Footer.module.scss";
import { FaInstagram} from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <img src="/apple-icon.png" alt="JVMC Logo" className={styles.logo} />
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <LuFacebook />
              </a>
            </li>
          </ul>
        </div>
        <ul className={styles.navLinks}>
          <li><a href="/">Home</a></li>
          <li><a href="/clinic-schedule">Clinic Schedule</a></li>
          <li><a href="/community-partners">Community Partners</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/volunteer">Volunteer</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
      </div>
      <div className={styles.bottomSection}>
        <p>Made with 🤍 by #include at Davis © 2025</p>
      </div>
    </footer>
  );
}