"use client";
import styles from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import data from "../../_data/footer.json";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoSection}>
          <div className={styles.logo}>
            <Image
              src={data.img}
              alt={data.imgAlt}
              style={{ objectFit: "fill" }}
              fill={true}
            />
          </div>
          <ul className={styles.socialLinks}>
            <li className={styles.boxIcon}>
              <a
                href={data.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.icon} />
              </a>
            </li>
            <li className={styles.boxText}>
              <p>{data.mainInstagram}</p>
              <p>{data.studentInstagram}</p>
            </li>
    
          </ul>
        </div>
        <ul className={styles.navLinks}>
          {data.navLinks.map(({ label, href, isButton}, idx) => {
            const isActive = pathname === href;
            return (
              <li key={idx}>
                <Link
                  href={href}
                  key={idx}
                  className={
                    isButton ? 
                    `${"btn"} ${isActive && styles.btnActive}` :
                    `${styles.navLink} ${isActive && styles.active}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={styles.bottomSection}>
        <p>Made with 🤍 by #include at Davis © 2025</p>
      </div>
    </footer>
  );
}
