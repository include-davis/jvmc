"use client";
import styles from './page.module.scss';
import text from '@/app/(pages)/_data/community-partners.json';
import Image from 'next/image';

export default function CommunityPartners() {
  const partners = [
    {
      name: 'Harm Reduction Services', 
      description: "HRS offers free, confidential harm reduction services to improve the health and well-being of drug users, in addition to empowering local communities.",
      location: "2800 Stockton Blvd. Sacramento, CA 95817", 
      date: "Monday - Friday, 12:00 PM - 6:00 PM", 
      appointment: "",
      website: "https://hrssac.org/", 
      buttonText: "Visit HRS Website" 
    },
    {
      name: 'Gender Health Center', 
      description: "GHC offers free or low-cost health, legal, and support services for trans and gender-expansive communities.",
      location: "3823 V Street Sacramento, CA 95817", 
      date: "1st & 3rd Friday of each month, 6:00 PM - 9:00 PM", 
      appointment: "By appointment only",
      website: "https://www.genderhealthcenter.org/", 
      buttonText: "Visit GHC Website"
    },
    {
      name: 'Stockton Harm Reduction Program', 
      description: "SHRP offers harm reduction tools, wound care supplies, referrals to health and legal services, and advocates for social justice in Stockton.",
      location: "446 S Harrison St, Stockton, CA 95203", 
      date: "Saturdays, 9:00 AM - 1 :00 PM", 
      appointment: "",
      website: "https://theshrp.org/", 
      buttonText: "Visit SHRP Website"
    }
  ];

  const partnerImages = [
    "/HRS.svg",
    "/GHC.svg",
    "/SHRC.svg"
  ];

  return (
    <main style={{ backgroundColor: '#f8f8f8' }}>
      <div>Community Partners</div>
      <h1 className={styles.titleText}> Community Partners</h1>
      <p className={styles.subtitleText}>Our trusted allies supporting our mission beyond the our clinics.</p>
      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => {
          return (
            <div key={index} className={styles.partnerContainer}>
              <div className={styles.partnersCard}>
                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h2 className={styles.partnersName}>{partner.name}</h2>
                  <p className={styles.partnersDescription}>{partner.description}</p>
                  <p className={styles.locationText}>
                    <Image 
                      src={text.iconImages["location"]} width={18} height={21} alt="location" className={styles.icon}
                    />
                    {partner.location}
                  </p>
                  <p className={styles.dateText}>
                    <Image 
                      src={text.iconImages["calendarIcon"]} width={17} height={19} alt="calendarIcon" className={styles.icon}
                    />
                    {partner.date}
                  </p>
                  <p className={styles.appointmentText}>
                    {index === 1 && (
                      <Image 
                        src={text.iconImages["appointmentIcon"]} width={17} height={19} alt="appointmentIcon" className={styles.icon}
                      />
                    )}
                    {partner.appointment}
                  </p>
                  <button
                    className={styles.button}
                    onClick={() => window.location.href = partner.website}
                  >
                    {partner.buttonText}
                  </button>
                </div>
              </div>

              {/* Image outside the card */}
              <div className={styles.imageWrapper}>
                <Image 
                  src={partnerImages[index]} 
                  width={434} 
                  height={440.014} 
                  alt={`partner-image-${index}`} 
                  className={styles.partnerImage}
                />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
