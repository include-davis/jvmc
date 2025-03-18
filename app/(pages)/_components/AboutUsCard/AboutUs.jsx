import Image from "next/image";
import styles from "./AboutUsCard.module.scss";

export default function AboutUsCard({ content, img, title, alt, alignment }) {
  return (
    <div className={`${styles.cardWrapper} ${styles[alignment]}`}>
      <div className={styles.cardContainer}>
        <h3>{title}</h3>
        {/* Map chunks of text to <p> elements */}
        {content.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
      <div className={`${styles.img} ${styles[alignment]}`}>
        <Image src={img} style={{ objectFit: "cover" }} fill={true} alt={alt} />
      </div>
    </div>
  );
}
