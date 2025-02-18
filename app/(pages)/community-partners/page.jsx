import styles from './page.module.scss';

import Image from 'next/image'
import text from '@/app/(pages)/_data/community-partners.json';

export default function CommunityPartners() {
    return (
      <main>
        <div>Community Partners</div>
        <h2>{text.bottom_title}</h2>
        <h4>{text.bottom_subtitle}</h4>

        <div class={styles.carousel}>

          <div class={styles.row}>

            <div class={styles.column}>
              <Image></Image>
            </div>
            <div class={styles.column}>
              <Image></Image>
            </div>
            <div class={styles.column}>
              <Image></Image>
            </div>
            <div class={styles.column}>
              <Image></Image>
            </div>
            <div class={styles.column}>
              <Image></Image>
            </div>

          </div>

        </div>
      </main>
    );
  }