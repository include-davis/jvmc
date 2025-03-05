import Image from "next/image";
import styles from "./VolunteerCard.module.scss";

export default function VolunteerCard({ title, direction, image, altText, icon, mainText, link }) {
    return (
      <div className={`${styles.cardComponent} ${styles[direction]}`}>
        <div className={`${styles.card} ${styles[direction]}`}>
          <div className={styles.cardText}>
            <div className={styles.cardTitle}>
              <div className={styles.icon}>
                {icon}
              </div> 
              <h4>{title}</h4>
            </div>
            <div className={styles.cardBody}>
              {mainText}
            </div>
            {link}
          </div>
          <div className={styles.cardImage}>
            <Image src={image} alt={altText} layout="fill" objectFit="cover"/>
          </div>
        </div>
      </div>
    );
}