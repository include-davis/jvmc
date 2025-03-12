import styles from "./page.module.scss";
import AboutUsCardFallbackData from "@/app/(pages)/_data/about-us.json";
import ClinicRolesCardFallbackData from "@/app/(pages)/_data/clinic-roles.json";
import Image from "next/image";
import ClinicRolesCard from "../_components/ClinicRolesCard/ClinicRolesCard";
import AboutUsCard from "../_components/AboutUsCard/AboutUsCard";
import EventCardGeneralInfoFallbackData from "@/app/(pages)/_data/general-info.json";

async function getAboutUsCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/about-us-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((card) => {
      return {
        title: card.title,
        description: card.description,
        image: card.image[0],
        image_alt_text: card.image_alt_text,
      };
    });
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch about-us-cards: ${e.message}`);
    return AboutUsCardFallbackData;
  }
}

async function getClinicRolesCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/clinic-roles-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((card) => {
      return {
        title: card.title,
        description: card.description,
        image: card.image[0],
        image_alt_text: card.image_alt_text,
        icon: card.icon[0],
        icon_alt_text: card.icon_alt_text,
      };
    });
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(
      `Failed to fetch clinic-roles-cards in about us page: ${e.message}`
    );
    return ClinicRolesCardFallbackData;
  }
}

export async function getEventCardGeneralInfo() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/general-info?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    console.log(data);
    const contents = data.body;
    const parsedData = {
      eventTitle: contents.event_card_title,
      eventDescription: contents.event_card_description,
      eventImage: contents.event_card_image[0],
      eventImageAlt: contents.event_card_image_alt_text,
      eventButtonText: contents.event_card_button_text,
      eventButtonLink: contents.event_card_button_url,
    };
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(
      `Failed to fetch general-info for event card in about us page: ${e.message}`
    );
    return {
      eventTitle: EventCardGeneralInfoFallbackData.event_card_title,
      eventDescription: EventCardGeneralInfoFallbackData.event_card_description,
      eventImage: EventCardGeneralInfoFallbackData.event_card_image,
      eventImageAlt: EventCardGeneralInfoFallbackData.event_card_image_alt_text,
      eventButtonText: EventCardGeneralInfoFallbackData.event_card_button_text,
      eventButtonLink: EventCardGeneralInfoFallbackData.event_card_button_url,
    };
  }
}

export default async function About() {
  const aboutUsCardData = await getAboutUsCards();
  const clinicRolesCardData = await getClinicRolesCards();
  const eventCardData = await getEventCardGeneralInfo();

  return (
    <div className={styles.page}>
      <div className={styles.aboutUs}>
        <div className={styles.header}>
          <h1>About Us</h1>
          <h4>Serving the community one patient at a time.</h4>
        </div>

        {/* About Us Cards are mapped here */}
        {aboutUsCardData.map((card, idx) => (
          <AboutUsCard
            key={idx}
            title={card.title}
            content={card.description}
            img={card.image}
            imgAlt={card.image_alt_text}
            alignment={idx % 2 === 0 ? "right" : "left"} // alternate alignment
          />
        ))}
      </div>

      <div className={styles.clinicRoles}>
        <div className={styles.header}>
          <h1>Clinic Roles</h1>
          <h4>The incredible team that makes JVMC happen</h4>
        </div>

        {/* Clinic Roles Cards are mapped here */}
        {clinicRolesCardData.map((card, idx) => (
          <ClinicRolesCard
            key={idx}
            title={card.title}
            description={card.description}
            img={card.image}
            imgAlt={card.image_alt_text}
            icon={card.icon}
            iconAlt={card.icon_alt_text}
            align={idx % 2 === 0 ? "right" : "left"}
          />
        ))}
        <div className={styles.clinicRolesGradientContainer}>
          <div className={styles.clinicRolesGradient}>
            <Image
              src="/images/clinicRolesGradient.png"
              alt="Background Gradient"
              fill={true}
            />
          </div>
        </div>
      </div>

      <div className={styles.fairCard}>
        <div className={styles.fairImg}>
          <Image
            src={eventCardData.eventImage}
            style={{ objectFit: "cover" }}
            fill={true}
            alt={eventCardData.eventImageAlt}
          />
        </div>
        <div className={styles.fairText}>
          <h4>{eventCardData.eventTitle}</h4>
          <p>{eventCardData.eventDescription}</p>
          <a
            className="btn"
            href={eventCardData.eventButtonLink}
            target="_blank"
          >
            {eventCardData.eventButtonText}
          </a>
        </div>
      </div>

      <div className={styles.bottomGradientContainer}>
        <div className={styles.bottomGradient}>
          <Image
            src="/images/aboutBottomGradient.png"
            alt="Bottom Gradient"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
