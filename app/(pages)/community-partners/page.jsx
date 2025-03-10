import styles from './page.module.scss';
import Image from 'next/image'
import CommunityPartnersFallbackData from '@/app/(pages)/_data/community-partners-fallback.json'
import data from '@/app/(pages)/_data/community-partners.json'
import CommunityPartnersCard from '../_components/CommunityPartnersCard/CommunityPartnersCard';
import CommunityPartnersCarousel from '../_components/CommunityPartnersCarousel/CommunityPartnersCarousel';

// revalidateTag("cms")
async function getCards(){
  try{
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/community-cards?_published=true`, 
      { next: { tag: "cms" }}
    )
    const data = await res.json();
    if(!data.ok || !data.body || data.body.length === 0){
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((card) => {
      const [button_text, button_link] = card.button_text_and_link?.split(",");
      return {
        name: card.title,
        description: card.description,
        location: card.location,
        date: card.hours,
        appointment: card.appointment_instruction ? card.appointment_instruction : null,
        website: button_link,
        buttonText: button_text,
        image_src: card.image[0].src,
      }
    })
    console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch community-partners-cards: ${e.message}`);
    return CommunityPartnersFallbackData
  }
}

export default async function CommunityPartners() {
  const partners = await getCards();

  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Community Partners</h1>
        <h4>Our trusted allies supporting our mission beyond the our clinics.</h4>
      </div>

      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => {
          return <CommunityPartnersCard index={index} partner={partner}/>;
        })}
      </div>

      
        <div className={styles.carouselSection}>
          <div>
            <h2 className={styles.community_partners_title}>{data.carousel.bottom_title}</h2>
            <h4 className={styles.community_partners_subtitle}>{data.carousel.bottom_subtitle}</h4>
          </div>
          <CommunityPartnersCarousel images={data.carousel.carousel_images} />
        </div>


      <div className={styles.bottomGradientContainer}>
        <div className={styles.bottomGradient}>
          <Image
              src={"/images/communityPartnersGradient.png"}
              alt={"Bottom gradient"}
              fill={true}
            />
        </div>
      </div>
    </main>
  );
}
