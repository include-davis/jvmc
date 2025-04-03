import styles from "./page.module.scss";
import Image from "next/image";
import ClinicRolesCard from "../_components/ClinicRolesCard/ClinicRolesCard";
import AboutUsCard from "../_components/AboutUsCard/AboutUs";
import AboutUsCardFallbackData from "../_data/about-us.json";
import ClinicRolesCardFallbackData from "../_data/clinic-roles.json";
import EventCardGeneralInfoFallbackData from "../_data/general-info.json";

async function getAboutUsCards() {
  return AboutUsCardFallbackData;
}

async function getClinicRolesCards() {
  return ClinicRolesCardFallbackData;
}

export async function getEventCardGeneralInfo() {
  return {
    eventTitle: EventCardGeneralInfoFallbackData.event_card_title,
    eventDescription: EventCardGeneralInfoFallbackData.event_card_description,
    eventImage: EventCardGeneralInfoFallbackData.event_card_image,
    eventImageAlt: EventCardGeneralInfoFallbackData.event_card_image_alt_text,
    eventButtonText: EventCardGeneralInfoFallbackData.event_card_button_text,
    eventButtonLink: EventCardGeneralInfoFallbackData.event_card_button_url,
  };
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
        <div className={styles.cardsWrapper}>
          {aboutUsCardData.map((card, idx) => (
            <AboutUsCard
              key={idx}
              title={card.title}
              content={card.description}
              img={card.image}
              alt={card.image_alt_text}
              alignment={idx % 2 === 0 ? "right" : "left"} // alternate alignment
            />
          ))}
        </div>
      </div>

      <div className={styles.clinicRoles}>
        <div className={styles.header}>
          <h1>Clinic Roles</h1>
          <h4>The incredible team that makes JVMC happen.</h4>
        </div>

        {/* Clinic Roles Cards are mapped here */}
        {clinicRolesCardData.map((card, idx) => (
          <ClinicRolesCard
            key={idx}
            icon={card.icon}
            iconAlt={card.icon_alt_text}
            img={card.image}
            imgAlt={card.image_alt_text}
            align={idx % 2 === 0 ? "left" : "right"}
            subheader={card.title}
            description={card.description}
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
          <a className="btn" href={eventCardData.eventButtonLink} target="_blank">
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
