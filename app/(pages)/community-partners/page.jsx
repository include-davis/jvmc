import styles from './page.module.scss';

import Image from 'next/image'
import text from '@/app/(pages)/_data/community-partners.json';

export default function CommunityPartners() {
    const images = [  /*double images to give infinite scroll illusion */
      text.carousel_images["img_1"],
      text.carousel_images["img_2"],
      text.carousel_images["img_3"],
      text.carousel_images["img_4"],
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

        <div className={styles.carousel} style={{ '--num-images': images.length / 2 }}>
          <div className={styles.row}>
            {imagesToDisplay.map((image, index) => (
              <div key={index} className={styles.column}>
                <Image
                  className={styles.img}
                  src={image}
                  alt={`Image ${index}`}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

      </main>
    );
  }