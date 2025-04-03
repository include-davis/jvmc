import Image from "next/image";
import styles from "./AboutUsCard.module.scss";

export default function AboutUsCard({ content, img, title, alt, alignment }) {
  return (
    <div className={`${styles.cardWrapper} ${styles[alignment]}`}>
      <div className={styles.cardContainer}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div className={styles.img}>
        <Image src={img} style={{ objectFit: "cover" }} fill={true} alt={alt} />
      </div>
    </div>
  );
}
