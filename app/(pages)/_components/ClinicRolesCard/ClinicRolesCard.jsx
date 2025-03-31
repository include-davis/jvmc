import Image from "next/image";
import styles from "./ClinicRolesCard.module.scss";

export default function ClinicRolesCard({
  icon,
  iconAlt,
  img,
  imgAlt,
  align,
  subheader,
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
      <div className={styles.cardTop}>
        <Image
          src={icon}
          width={39}
          height={39}
          alt={iconAlt}
          sizes={"(max-width: 1048px) 33vw"}
        />
        <h3>{subheader}</h3>
      </div>
      <p> {description} </p>
    </div>
  );
}
