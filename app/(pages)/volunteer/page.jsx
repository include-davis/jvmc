import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

import VolunteerCard from "../_components/VolunteerCard/VolunteerCard";
import VolunteerGeneralInfoFallbackData from "@/app/(pages)/_data/general-info.json";
import VolunteerCardsFallbackData from "@/app/(pages)/_data/volunteer.json";

export async function getVolunteerGeneralInfo() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/general-info?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    // console.log(data);
    const contents = data.body[0];
    const parsedData = {
      landingDescription: contents.volunteer_page_description,
      landingImage: contents.volunteer_image[0],
      landingImageAlt: contents.volunteer_image_alt_text,
    };
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(
      `Failed to fetch general-info for volunteer page: ${e.message}`
    );
    return {
      landingDescription:
        VolunteerGeneralInfoFallbackData.volunteer_page_description,
      landingImage: VolunteerGeneralInfoFallbackData.volunteer_image,
      landingImageAlt:
        VolunteerGeneralInfoFallbackData.volunteer_image_alt_text,
    };
  }
}

export async function getVolunteerCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/volunteer-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    // console.log(data);
    const parsedData = data.body.map((card) => {
      let button_text, button_link;
      if (card.button_text_and_link) {
        [button_text, button_link] = card.button_text_and_link.split(",");
      }
      return {
        title: card.title,
        description: card.description,
        image: card.image[0],
        image_alt_text: card.image_alt_text,
        icon: card.icon[0],
        icon_alt_text: card.icon_alt_text,
        button_text: card.button_text_and_link ? button_text : null,
        button_link: card.button_text_and_link ? button_link : null,
      };
    });
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch volunteer-cards: ${e.message}`);
    return VolunteerCardsFallbackData;
  }
}

export default async function Volunteer() {
  const generalData = await getVolunteerGeneralInfo();
  const volunteerData = await getVolunteerCards();

  return (
    <main className={styles.page}>
      {/* Top Section */}
      <div className={styles.top}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Volunteer at JVMC</h1>
          <h4 className={styles.sub_title}>
            JVMC runs smoothly with the help of our volunteers caring for our
            patients.
          </h4>
        </div>
        <div className={styles.opening}>
          <div className={styles.landingPhoto}>
            <Image
              src={generalData.landingImage}
              style={{ objectFit: "cover" }}
              fill={true}
              alt={generalData.landingImageAlt}
            />
          </div>

          {/* Below is LONG_TEXT */}
          <div
            className={styles.intro}
            dangerouslySetInnerHTML={{ __html: generalData.landingDescription }}
          />
        </div>
      </div>

      {/* Middle Cards */}
      <div className={styles.middle}>
        {/* VolunteerCard components */}
        <h2 className={styles.header}>Ready to Volunteer with Us?</h2>
        <div className={styles.volunteerCards}>
          {volunteerData.map((card, idx) => (
            <VolunteerCard
              key={idx}
              direction={idx % 2 === 0 ? "right" : "left"}
              title={card.title}
              description={card.description}
              image={card.image}
              imageAlt={card.image_alt_text}
              icon={card.icon}
              iconAlt={card.icon_alt_text}
              buttonText={card.button_text}
              buttonLink={card.button_link}
            />
          ))}
        </div>

        <div className={styles.gradient1Container}>
          <div className={styles.gradient1}>
            <Image
              src={"/images/volunteerGradient1.png"}
              alt={"Gradient 1"}
              fill={true}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.learn_more}>
          <h4>Interested in learning more about each role?</h4>
          <p>
            For more information on each volunteering role, please navigate to
            the&nbsp;
            <span className={styles.about_us}>About Us</span>&nbsp;page. There
            you will find out more about what each role in the clinic entails.
          </p>
          <Link href="/about-us" className="btn">
            About Us
          </Link>
        </div>
      </div>

      <div className={styles.gradient2Container}>
        <div className={styles.gradient2}>
          <Image
            src={"/images/volunteerGradient2.png"}
            alt={"Gradient 2"}
            fill={true}
          />
        </div>
      </div>
    </main>
  );
}
