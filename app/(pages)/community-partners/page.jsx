import styles from './page.module.scss';

import Image from 'next/image'
import text from '@/app/(pages)/_data/community-partners.json';

export default function CommunityPartners() {
    const images = [
      text.carousel_images["img_1"],
      text.carousel_images["img_2"],
      text.carousel_images["img_3"],
      text.carousel_images["img_4"],
    ];

    const imagesToDisplay = [...images];

    return (
      <main>
        <div>Community Partners</div>
        <h2 className={styles.community_partners_title}>{text.bottom_title}</h2>
        <h4 className={styles.community_partners_subtitle}>{text.bottom_subtitle}</h4>

        <div className={styles.carousel} style={{ '--num_images': 4}}>
          <div className={styles.row}>
            {imagesToDisplay.map((image, index) => (
              <div key={index} className={styles.column}>
                <Image
                  className={styles.img}
                  src={image}
                  alt={`Image ${index}`}
                  layout="fill"  // Adjust the image size
                  objectFit="cover"  // Adjust the image size
                  objectPosition="center"
                />
              </div>
            ))}
          </div>
        </div>

      </main>
    );
  }