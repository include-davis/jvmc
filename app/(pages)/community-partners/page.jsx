import styles from "./page.module.scss";
import Image from "next/image";
import CommunityPartnersFallbackData from "@/app/(pages)/_data/community-partners.json";
import CommunityPartnersCard from "../_components/CommunityPartnersCard/CommunityPartnersCard";
import CommunityPartnersCarousel from "../_components/CommunityPartnersCarousel/CommunityPartnersCarousel";
import CarouselFallbackData from "@/app/(pages)/_data/community-partners-carousel.json";

// revalidateTag("cms")
async function getCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/community-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
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
        appointment: card.appointment_instruction
          ? card.appointment_instruction
          : null,
        website: button_link,
        buttonText: button_text,
        imageSrc: card.image[0],
        imageAlt: card.image_alt_text,
      };
    });
    console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch community-partners-cards: ${e.message}`);
    return CommunityPartnersFallbackData;
  }
}

async function getCarouselImages() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/community-carousel-images?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((image) => {
      return {
        src: image.image[0],
        alt: image.image_alt_text,
      };
    });
    console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch community-partners-carousel: ${e.message}`);
    return CarouselFallbackData;
  }
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
          <h2 className={styles.community_partners_title}>Where We’ve Gone</h2>
          <h4 className={styles.community_partners_subtitle}>
            See our community in action!
          </h4>
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
