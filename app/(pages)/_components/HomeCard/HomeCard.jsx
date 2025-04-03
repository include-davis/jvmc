import styles from "./HomeCard.module.scss";
import Image from "next/image";

export default function HomeCard({
  title,
  description,
  img,
  imgAlt,
  icon,
  iconAlt,
  align,
}) {
  return (
    <div
      className={`${styles.card} ${align === "left" ? styles.left : styles.right}`}
    >
      {/* left side has image and right side has text or vice versa */}
      <div className={styles.img}>
        <Image
          src={img}
          alt={imgAlt}
          fill={true}
          style={{ objectFit: "cover" }}
          sizes={"(max-width: 1048px) 33vw, (max-width: 720px) 100vw"}
        />
      </div>

      <div className={styles.text}>
        <div className={styles.header}>
          <Image src={icon} alt={iconAlt} width={40} height={40} />
          <h3>{title}</h3>
        </div>

        {/* THIS IS LONG TEXT */}
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
}
