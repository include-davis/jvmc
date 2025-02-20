import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import navLinks from "../../_data/header.json"; 

export default function Header() {
  return (
    <div className={styles.header}>
      <Image src="/images/JVMC Logo 1.png" alt="JVMC Logo" width={120} height={88} />
      <div className={styles.headerLinks}>
        {navLinks.map(({ href, label, isButton }) => (
          <Link key={href} href={href} className={isButton ? "btn" : styles.headerItems}>
            {isButton ? label : <p className={styles.headerItems}>{label}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
}
