"use client";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import footerData from "../../_data/footer.json";
import { useRouter } from "next/navigation";

export default function Footer() {
  const { platform, url, icon } = footerData.socialLinks;
  const { home, clinic, community, about, volunteer, contact } = footerData.navLinks;
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image 
              src="/logo.png" 
              alt="JVMC Logo" 
              style={{ objectFit: "fill" }} 
              fill={true} 
            />
          </div>
          <ul className={styles.socialLinks}>
            <li className={styles.boxIcon}>
              <a 
                href="https://www.instagram.com/jvmclinic"
                target="_blank"
                rel="noopener noreferrer"
                >
              <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li className={styles.boxText}>
              <div className={styles.at1}>@jvmcclinic</div>
              <div className={styles.at2}>@jvmcstudents</div>
            </li>
          </ul>
        </div>
        <ul className={styles.navLinks}>
          {[
            { label: "Home", url: "/" },
            { label: "Clinic Schedules", url: "/clinic-schedule" },
            { label: "Community Partners", url: "/community-partners" },
            { label: "About Us", url: "/about-us" },
            { label: "Volunteer", url: "/volunteer" },
            { label: "Contact Us", url: "/contact-us" },
          ].map(({ label, url }) => (
            <li key={url}>
              <Link href={url} className={pathname === url ? styles.active : ""}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bottomSection}>
        <p>Made with 🤍 by #include at Davis © 2025</p>
      </div>
    </footer>
  );
}
