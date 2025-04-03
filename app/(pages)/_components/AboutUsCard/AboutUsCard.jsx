import Image from "next/image";
import styles from "./AboutUsCard.module.scss";

export default function AboutUsCard({
  content,
  img,
  title,
  imgAlt,
  alignment,
}) {
  return (
    <div className={`${styles.cardWrapper} ${styles[alignment]}`}>
      <div className={styles.cardContainer}>
        <h3>{title}</h3>
        {/* LONG TEXT */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className={styles.img}>
        <Image
          src={img}
          style={{ objectFit: "cover" }}
          fill={true}
          alt={imgAlt}
          sizes={"(max-width: 1048px) 50vw, (max-width: 720px) 100vw"}
        />
      </div>
    </div>
  );
}
