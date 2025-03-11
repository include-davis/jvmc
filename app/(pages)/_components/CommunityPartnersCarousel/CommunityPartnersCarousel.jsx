import styles from "./CommunityPartnersCarousel.module.scss";
import Image from "next/image";

export default function CommunityPartnersCarousel({ images }) {
  const imagesLength = images.length;
  const doubleImages = [...images, ...images];

  return (
    <div
      className={styles.carousel}
      style={{ "--num-images": imagesLength }}
    >
      <div className={styles.row}>
        {doubleImages.map((image, index) => (
          <div key={index} className={styles.column}>
            {console.log(image.src)}
            <Image
              className={styles.img}
              src={image.src}
              alt={image.alt}
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
