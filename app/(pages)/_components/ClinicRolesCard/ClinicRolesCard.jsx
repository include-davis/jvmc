import Image from "next/image";
import styles from "./ClinicRolesCard.module.scss";

export default function ClinicRolesCard({
  icon,
  iconAlt,
  img,
  imgAlt,
  align,
  title,
  description,
}) {
  return (
    <div className={`${styles.card} ${styles[align]}`}>
      <div className={styles.img}>
        <Image
          src={img}
          style={{ objectFit: "cover" }}
          fill={true}
          alt={imgAlt}
          sizes={"(max-width: 1048px) 33vw, (max-width: 720px) 50vw, 100vw"}
        />
      </div>
      <div className={styles.cardText}>
        <div className={styles.cardTop}>
          <Image src={icon} width={40} height={40} alt={iconAlt} />
          <h3>{title}</h3>
        </div>
        <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
