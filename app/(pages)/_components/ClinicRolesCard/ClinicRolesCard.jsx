import Image from "next/image";
import styles from './ClinicRolesCard.module.scss';

export default function ClinicRolesCard({ icon, iconAlt, img, imgAlt, align, subheader, description }) {
    return (
      <div className={`${styles.card} ${align === "left" ? styles.leftCard : styles.rightCard}`}>
        <div className={styles.img}>
          
          <Image
            src={img}
            style={{ objectFit: "contain" }}
            fill={true}
            alt={imgAlt}
          />
        </div>
        <div className={styles.cardTop}>
          <Image src={icon} width={39} height={39} alt={iconAlt} />
          <h3>{subheader}</h3>
        </div>
        <p> {description} </p>
      </div>
    )
  }