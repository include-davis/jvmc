"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import navLinks from "../../_data/header.json";
import styles from "./Header.module.scss";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false); // Toggle state for mobile menu visibility

  return (
    <div className={styles.header}>
      <Image src="/logo.png" alt="JVMC Logo" width={120} height={88} />

      {/* Mobile Menu Icon */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </div>

      {/* Mobile Header Links (with class showMenu applied to toggle visibility) */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}
      >
        <div className={styles.mobileHeaderLinks}>
          {navLinks.map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                className={styles.mobileHeaderLinks}
                onClick={() => setMenuOpen(!menuOpen)}
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
                  ? `${"btn"} ${styles.btnSize} ${isActive && styles.btnActive}`
                  : `${styles.headerItems} ${isActive && styles.active}`
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
