import styles from './page.module.scss';
// import data from "@/app/(pages)/_data/about-us.json";
import AboutUsCardFallbackData from "@/app/(pages)/_data/about-us.json";
import ClinicRolesCardFallbackData from "@/app/(pages)/_data/clinic-roles.json";
import Image from 'next/image';
import ClinicRolesCard from '../_components/ClinicRolesCard/ClinicRolesCard';
import AboutUsCard from "../_components/AboutUsCard/AboutUsCard";
// import data from "@/app/(pages)/_data/about-us.json";

async function getAboutUsCards(){
  try{
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/about-us-cards?_published=true`, 
      { next: { tag: "cms" }}
    )
    const data = await res.json();
    if(!data.ok || !data.body || data.body.length === 0){
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((card) => {
      return {
        title: card.title,
        description: card.description,
        image: card.image,
        image_alt_text: card.image_alt_text
      }
    })
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch about-us-cards: ${e.message}`);
    return AboutUsCardFallbackData
  }
}

async function getClinicRolesCards() {
  try{
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/clinic-roles-cards?_published=true`, 
      { next: { tag: "cms" }}
    )
    const data = await res.json();
    if(!data.ok || !data.body || data.body.length === 0){
      throw new Error(data.error);
    }
    console.log(data);
    const parsedData = data.body.map((card) => {
      return {
        title: card.title,
        description: card.description,
        image: card.image,
        image_alt_text: card.image_alt_text,
        icon: card.icon,
        icon_alt_text: card.icon_alt_text
      }
    })
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(`Failed to fetch clinic-roles-cards: ${e.message}`);
    return ClinicRolesCardFallbackData
  }
}

export default async function About() {
  const aboutUsCardData = await getAboutUsCards();
  const clinicRolesCardData = await getClinicRolesCards();

  return (
      <div className={styles.page}>
        <div className={styles.aboutUs}>
          <div className={styles.header}>
            <h1>About Us</h1>
            <h4>Serving the community one patient at a time.</h4>
          </div>
        
          {/* About Us Cards are mapped here */}
          {
            aboutUsCardData.map((card, idx) => 
              <AboutUsCard 
                key={idx}
                title={card.title}
                content={card.description}
                img={card.image}
                imgAlt={card.image_alt_text}
                alignment={idx % 2 === 0 ? "right" : "left"} // alternate alignment
              />
            )
          }
        </div>

        <div className={styles.clinicRoles}>
          <div className={styles.header}>
              <h1>Clinic Roles</h1>
              <h4>The incredible team that makes JVMC happen</h4>
          </div>
          
          {/* Clinic Roles Cards are mapped here */}
          {clinicRolesCardData.map((card, idx) => 
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
          )}
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

        {/* <div className={styles.fairCard}>
          <div className={styles.fairImg}>
            <Image
              src={data.fair.img}
              style={{ objectFit: "cover" }}
              fill={true}
              alt={data.fair.imgAlt}
            />
          </div>
          <div className={styles.fairText}>
            <h4>{data.fair.title}</h4>
            {data.fair.content.map((text, idx) => <p key={idx}>{text}</p>)}
            <a className="btn" href={data.fair.instagramUrl} target="_blank">
              {data.fair.button}
            </a>
          </div>

        </div> */}

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
