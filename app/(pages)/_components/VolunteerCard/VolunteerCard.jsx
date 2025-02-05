import styles from "./VolunteerCard.module.scss";
import Image from "next/image";

export default function VolunteerCard({ title, direction, image, altText, icon, mainText, link }) {
    return (
      <div className={`${styles.cardComponent} ${styles[direction]}`}>
        <div className={`${styles.card} ${styles[direction]}`}>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              <div className={styles.icon}>
                {icon}
              </div> 
              {title}
            </div>
            <div className={styles.cardBody}>
              {mainText}
            </div>
            <div className={styles.cardLink}>
              {link}
            </div>
          </div>
        </div>
        <div className={styles.cardImage}>
          <Image src={image} alt={altText} layout="fill" objectFit="cover"/>
        </div>
      </div>
    );
}