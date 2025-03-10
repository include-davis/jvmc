import Image from "next/image";
import styles from "./AboutUsCard.module.scss";

export default function AboutUsCard({ content, img, title, imgAlt, alignment }) {

  return (
    <div className={`${styles.cardWrapper} ${styles[alignment]}`}>
      <div className={styles.cardContainer}>
        <h3>{title}</h3>
        {/* LONG TEXT */}
        <div dangerouslySetInnerHTML={{ __html: content }} />

      </div>
      <div className={`${styles.img} ${styles[alignment]}`}>
        <Image 
          src={img[0]}
          style={{ objectFit: "cover" }}
          fill={true}
          alt={imgAlt}
        />
        {console.log(imgAlt)}
      </div>
    </div>
  )
}

