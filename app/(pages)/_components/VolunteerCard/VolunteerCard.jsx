import Image from "next/image";
import styles from "./VolunteerCard.module.scss";

export default function VolunteerCard({
  direction,
  title,
  description,
  image,
  imageAlt,
  icon,
  iconAlt,
  buttonText,
  buttonLink,
}) {
  return (
    <div className={`${styles.cardComponent} ${styles[direction]}`}>
      <div className={`${styles.card} ${styles[direction]}`}>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>
            <div className={styles.icon}>
              <Image src={icon} alt={iconAlt} objectFit="cover" fill="true" />
            </div>
            <h4>{title}</h4>
          </div>
          {/* Below is LONG_TEXT */}
          <div
            className={styles.cardBody}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          {buttonLink && buttonText && (
            <a href={buttonLink} target="_blank" className="btn">
              {buttonText}
            </a>
          )}
        </div>
        <div className={styles.cardImage}>
          <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}
