import styles from './page.module.scss';
import data from "@/app/(pages)/_data/about-us.json";
import Image from 'next/image';
import ClinicRolesCard from '../_components/ClinicRolesCard/ClinicRolesCard';
import AboutUsCard from "../_components/AboutUsCard/AboutUs";

export default function About() {
  return (
      <div className={styles.page}>
        <div className={styles.aboutUs}>
          <div className={styles.header}>
            <h1>{data.aboutUsHeader.title}</h1>
            <h4>{data.aboutUsHeader.subtitle}</h4>
          </div>
        
          {/* About Us Cards are mapped here */}
          {
            data.aboutUsCards.map((card, idx) => 
              <AboutUsCard 
                key={idx}
                title={card.title}
                content={card.content}
                img={card.image}
                alt={card.alt}
                alignment={idx % 2 === 0 ? "right" : "left"} // alternate alignment
              />
            )
          }
        </div>

        <div className={styles.clinicRoles}>
          <div className={styles.header}>
              <h1>{data.clinicRolesHeader.title}</h1>
              <h4>{data.clinicRolesHeader.subtitle}</h4>
          </div>
          
          {/* Clinic Roles Cards are mapped here */}
          {data.clinicRolesCards.map((card, idx) => 
            <ClinicRolesCard
              key={idx}
              icon={card.iconImage}
              iconAlt={card.iconAlt}
              img={card.photo}
              imgAlt={card.photoAlt}
              align={idx % 2 === 0 ? "right" : "left"}
              subheader={card.subheader}
              description={card.description}
            />
          )}
        </div>

        <div className={styles.fairCard}>
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

        </div>
      </div>
  );
}
