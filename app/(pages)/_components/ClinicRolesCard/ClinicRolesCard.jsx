import Image from "next/image";
import styles from './ClinicRolesCard.module.scss';

export default function ClinicRolesCard({ icon, iconAlt, img, imgAlt, align, title, description }) {
    return (
      <div className={`${styles.card} ${styles[align]}`}>
        <div className={styles.img}>
          
          <Image
            src={img}
            style={{ objectFit: "cover" }}
            fill={true}
            alt={imgAlt}
          />
        </div>
        <div className={styles.cardTop}>
          <Image src={icon} width={40} height={40} alt={iconAlt} />
          <h3>{title}</h3>
        </div>
        {/* Below is LONG TEXT */}
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    )
  }