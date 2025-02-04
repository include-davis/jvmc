import styles from "./VolunteerCard.module.scss";
import Image from "next/image";

export default function VolunteerCard({ direction, image, titleIcon, title, mainText, link, linkText }) {
    return (
      <div className={styles.cardComponent}>
        <div className={styles.card}>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              Title
            </div>
            <div className={styles.cardBody}>
              bodybodybody<br/>bodybodybody<br/>bodybodybody<br/>bodybodybody
            </div>
            <div className={styles.cardLink}>
              link
            </div>
          </div>
        </div>
        <div className={styles.cardImage}>
          <Image src="/images/magpie.png" alt="temp" layout="fill" objectFit="cover"/>
        </div>
      </div>
    );
}