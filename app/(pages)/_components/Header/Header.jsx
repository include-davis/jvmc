"use client"; // Ensure this is a client component

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import navLinks from "../../_data/header.json";
import styles from "./Header.module.scss";

export default function Header() {
  const pathname = usePathname();

  return (
    <div className={styles.header}>
      <Image src="/logo.png" alt="JVMC Logo" width={120} height={88} />
      <div className={styles.headerLinks}>
        {navLinks.map(({ href, label, isButton }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={
                isButton
                  ? `${"btn"} ${isActive && styles.btnActive}`
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
