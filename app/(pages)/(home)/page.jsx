import styles from "./page.module.scss";
import Image from "next/image";
import { FaHome, FaClock, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import data from "@/app/(pages)/_data/home.json";
import HomepageCarousel from "../_components/HomepageCarousel/HomepageCarousel";
import HomeCard from "../_components/HomeCard/HomeCard";

import HomeGeneralInfoFallbackData from "@/app/(pages)/_data/general-info.json";
import HomeCardsFallbackData from "@/app/(pages)/_data/home-cards.json";

export async function getHomeGeneralInfo() {
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
    const contents = data.body[0];
    const parsedData = {
      tagline: contents.tagline,
      address: contents.address,
      hours: contents.hours,
    };
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch general-info for home page: ${e.message}`);
    return {
      tagline: HomeGeneralInfoFallbackData.tagline,
      address: HomeGeneralInfoFallbackData.address,
      hours: HomeGeneralInfoFallbackData.hours,
    };
  }
}


async function getHomeCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/home-cards?_published=true`,
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
      `Failed to fetch home-cards: ${e.message}`
    );
    return HomeCardsFallbackData;
  }
}

export default async function Home() {
  const { Sentence_1, Sentence_2, Sentence_3 } = data.text_Block1;
  const { bulletpoint_1, bulletpoint_2, bulletpoint_3, bulletpoint_4 } =
    data.text_Block2;

  const generalData = await getHomeGeneralInfo();
  const homeData = await getHomeCards();

  return (
    <main>
      <div className={styles.body}>
        <div className={styles.titleWithButtonSection}>
          <div className={styles.headerGradientContainer}>
            <div className={styles.headerGradient}>
              <Image
                src={data.header_gradient}
                alt={data.header_gradient_alt}
                fill={true}
              />
            </div>
          </div>
          <Image
            src={data.teddy}
            alt={data.teddyAlt}
            width={166}
            height={123}
          />
          <div className={styles.titleAndSubtitleBox}>
            <h1> {data.homePageTitle} </h1>
            <p> {generalData.tagline} </p>
          </div>

          <div className={styles.contactButton}>
            <Link className="btn" href="/contact-us">
              {data.buttonMsg}
            </Link>
          </div>
        </div>

        <div className={styles.cardSectionBox}>
          <div className={styles.cardSectionHeader}>
            <h3>{data.cardSectionHeaderTitle}</h3>
            <Image
              src={data.cardSectionHeaderImage}
              alt={data.cardSectionHeaderImageAlt}
              width={780} // 780
              height={280} // 280
            />
          </div>

          {homeData.map((card, idx) => 
            <HomeCard 
              key={idx}
              title={card.title}
              description={card.description}
              img={card.image}
              imgAlt={card.image_alt_text}
              icon={card.icon}
              iconAlt={card.icon_alt_text}
              align={idx % 2 === 0 ? "left" : "right"}
            />
          )}

          <div className={styles.dots1}>
            <Image src={data.dots_1} alt={"dots"} width={259} height={533} />
          </div>

          <div className={styles.dots2}>
            <Image src={data.dots_2} alt={"dots"} width={394} height={609} />
          </div>
        </div>

        <HomepageCarousel data={data.carousel} />

        <div className={styles.contactCard}>
          <div className={styles.dots3}>
            <Image src={data.dots_3} alt={"dots"} width={461} height={545} />
          </div>
          <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo} style={{ gap: "20px" }}>
              <FaHome color="var(--emerald)" size={40} />
              <div className={styles.contactInfoText}>
                <h3>{data.contactCard.visit.text}</h3>
                <p>{generalData.address}</p>
              </div>
            </div>
            <div className={styles.contactInfo} style={{ paddingLeft: "4px" }}>
              <FaClock color="var(--emerald)" size={32} />
              <div className={styles.contactInfoText}>
                <h3>{data.contactCard.hours.text}</h3>
                <p>{generalData.hours}</p>
              </div>
            </div>
            <div className={styles.contactInfo} style={{ paddingLeft: "4px" }}>
              <FaEnvelope color="var(--emerald)" size={32} />
              <h3>{data.contactCard.contact}</h3>
            </div>
            <Link href={data.contactCard.button.link} className={"btn"}>
              {data.contactCard.button.text}
            </Link>
          </div>
          <div className={styles.contactImageContainer}>
            <div className={styles.gradientCircle}></div>
            <div className={styles.contactImage}>
              <Image
                src={data.contactCard.img.src}
                alt={data.contactCard.img.alt}
                style={{ objectFit: "cover" }}
                fill={true}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottomGradientContainer}>
          <div className={styles.bottomGradient}>
            <Image
              src={data.bottom_gradient}
              alt={data.bottom_gradient_alt}
              fill={true}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
