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
      <div className={styles.cardText}>
        <div className={styles.cardTitle}>
          <div className={styles.icon}>
            <Image
              src={icon}
              alt={iconAlt}
              style={{ objectFit: "cover" }}
              fill={true}
              sizes={"(max-width: 1048px) 33vw"}
            />
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
      <div className={`${styles.cardImage} ${styles[direction]}`}>
        <Image
          src={image}
          alt={imageAlt}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes={"(max-width: 1048px) 33vw, (max-width: 720px) 50vw, 100vw"}
        />
      </div>
    </div>
  );
}
