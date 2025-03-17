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
    console.error(`Failed to fetch home-cards: ${e.message}`);
    return HomeCardsFallbackData;
  }
}

export default async function Home() {
  const generalData = await getHomeGeneralInfo();
  const homeData = await getHomeCards();

  return (
    <main className={styles.body}>
      <div className={styles.titleWithButtonSection}>
        <div className={styles.headerGradientContainer}>
          <div className={styles.headerGradient}>
            <Image
              src={"/images/homeGradient.png"}
              alt={"Header Gradient"}
              fill={true}
            />
          </div>
        </div>
        <Image
          src={"/images/jvmc-teddy.png"}
          alt={"JVMC Teddy Bear"}
          width={166}
          height={123}
        />
        <div className={styles.titleAndSubtitleBox}>
          <h1> Welcome to Joan Viteri Memorial Clinic </h1>
          <p> {generalData.tagline} </p>
        </div>

        <div className={styles.contactButton}>
          <Link className="btn" href="/contact-us">
            Contact Us
          </Link>
        </div>
      </div>

      <div className={styles.cardSectionBox}>
        <div className={styles.cardSectionHeader}>
          <h3>Serving the Oak Park Community</h3>
          <Image
            src={"/subtitleheader.png"}
            alt={"Image of Background for Card Section Header Title"}
            width={780} // 780
            height={280} // 280
          />
        </div>

        {homeData.map((card, idx) => (
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
        ))}

        <div className={styles.dots1}>
          <Image
            src={"/images/dots1.png"}
            alt={"dots"}
            width={259}
            height={533}
          />
        </div>

        <div className={styles.dots2}>
          <Image
            src={"/images/dots2.png"}
            alt={"dots"}
            width={394}
            height={609}
          />
        </div>
      </div>

      <HomepageCarousel data={data.carousel} />

      <div className={styles.contactCard}>
        <div className={styles.dots3}>
          <Image
            src={"/images/dots3.png"}
            alt={"dots"}
            width={461}
            height={545}
          />
        </div>
        <div className={styles.contactInfoContainer}>
          <div className={styles.contactInfo} style={{ gap: "20px" }}>
            <FaHome color="var(--emerald)" size={40} />
            <div className={styles.contactInfoText}>
              <h3>Come Visit Us!</h3>
              <p>{generalData.address}</p>
            </div>
          </div>
          <div className={styles.contactInfo} style={{ paddingLeft: "4px" }}>
            <FaClock color="var(--emerald)" size={32} />
            <div className={styles.contactInfoText}>
              <h3>Opening Hours</h3>
              <p>{generalData.hours}</p>
            </div>
          </div>
          <div className={styles.contactInfo} style={{ paddingLeft: "4px" }}>
            <FaEnvelope color="var(--emerald)" size={32} />
            <h3>Contact Us</h3>
          </div>
          <Link href={"/contact-us"} className={"btn"}>
            Ask Us Questions
          </Link>
        </div>
        <div className={styles.contactImageContainer}>
          <div className={styles.gradientCircle}></div>
          <div className={styles.contactImage}>
            <Image
              src={"/home-group.jpg"}
              alt={"Group of medical students"}
              style={{ objectFit: "cover" }}
              fill={true}
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomGradientContainer}>
        <div className={styles.bottomGradient}>
          <Image
            src={"/images/homeBottomGradient.png"}
            alt={"Bottom Gradient"}
            fill={true}
          />
        </div>
      </div>
    </main>
  );
}
