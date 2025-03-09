import styles from './page.module.scss';
import data from '@/app/(pages)/_data/community-partners.json';
import Image from 'next/image'
import text from '@/app/(pages)/_data/community-partners.json';
import CommunityPartnersCarousel from '../_components/CommunityPartnersCarousel/CommunityPartnersCarousel';

export default function CommunityPartners() {
    return (
      <main>
        <div>Community Partners</div>
        <h2 className={styles.community_partners_title}>{text.bottom_title}</h2>
        <h4 className={styles.community_partners_subtitle}>{text.bottom_subtitle}</h4>

        <CommunityPartnersCarousel images={data.carousel_images} />

      </main>
    );
  }