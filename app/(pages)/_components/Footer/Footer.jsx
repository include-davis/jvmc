import styles from "./Footer.module.scss";
import { FaInstagram} from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <hr className={styles.divider}/>
        <div class name={styles.footerContent}>
        // import the JVMC logo here
          <ul>
            <li> 
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><LuFacebook/></a>
            </li>
          </ul>
        </div>
        <p>Made with heart by #include at Davis @2025</p>
        <hr className={styles.divider}/>
    </footer> 
  );
}