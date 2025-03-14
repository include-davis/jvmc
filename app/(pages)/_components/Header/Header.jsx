"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import navLinks from "../../_data/header.json";
import styles from "./Header.module.scss";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for mobile menu visibility

  return (
    <div className={styles.header}>
      <Image src="/images/JVMC Logo 1.png" alt="JVMC Logo" width={120} height={88} />
      
      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icons */}
      </div>

      {/* Mobile Header Links (with class showMenu applied to toggle visibility) */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        <div className={styles.mobileHeaderLinks}>
          {navLinks.map(({ href, label}) => {
            return (
              <Link
                key={href}
                href={href}
                className={styles.mobileHeaderLinks}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Desktop Header Links */}
      <div className={styles.headerLinks}>
        {navLinks.map(({ href, label, isButton }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={
                isButton 
                  ? "btn"  // Apply the global btn class for button links
                  : `${styles.headerItems} ${isActive ? styles.headerItemActive : ""}`  // Apply custom header items and active state
              }
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
