import styles from "./page.module.scss";
import Image from "next/image";
import CommunityPartnersFallbackData from "@/app/(pages)/_data/community-partners.json";
import CommunityPartnersCard from "../_components/CommunityPartnersCard/CommunityPartnersCard";
import CommunityPartnersCarousel from "../_components/CommunityPartnersCarousel/CommunityPartnersCarousel";
import CarouselFallbackData from "@/app/(pages)/_data/community-partners-carousel.json";

// revalidateTag("cms")
async function getCards() {
  return CommunityPartnersFallbackData;
}

async function getCarouselImages() {
  return CarouselFallbackData;
}

export default async function CommunityPartners() {
  const partners = await getCards();
  const carouselImages = await getCarouselImages();

  return (
    <main className={styles.page}>
      <div className={styles.partnersSection}>
        <div className={styles.header}>
          <h1>Community Partners</h1>
          <h4>
            Our trusted allies supporting our mission beyond the our clinics.
          </h4>
        </div>

        <div className={styles.partnersGrid}>
          {partners.map((partner, index) => {
            return (
              <CommunityPartnersCard
                key={index}
                index={index}
                partner={partner}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.carouselSection}>
        <div>
          <h2>Where We’ve Gone</h2>
          <h4>See our community in action!</h4>
        </div>
        <CommunityPartnersCarousel images={carouselImages} />
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
