"use client";
import styles from './page.module.scss';
import text from '@/app/(pages)/_data/community-partners.json'
import Image from 'next/image'

import { ImLocation } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";

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
    "/HRS.png",
    "/GHC.png",
    "/SHRC.png"
  ];

  return (
    <main style={{ backgroundColor: '#f8f8f8' }}>
      <div>Community Partners</div>
      <h1 className={styles.titleText}> Community Partners</h1>
      <h4 className={styles.subtitleText}>Our trusted allies supporting our mission beyond the our clinics.</h4>
      <div className={styles.partnersGrid}>
        {partners.map((partner, index) => {
          // Set class based on index and reverse if it is the first or third image
          let containerClass = styles.cardContainer;
          if (index === 0 || index === 2) {
            containerClass += ' ' + styles.reverse;
          }

          return (
            <div key={index} className={containerClass}>
              <div className={styles.imageWrapper}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={partnerImages[index]} 
                  style={{objectFit: 'cover'}}
                  fill={true}
                  alt={`partner-image-${index}`} 
                />
              </div>
              </div>

              <div className={styles.partnersCard}>
                  <div> 
                    <h4 className={styles.partnersName}>{partner.name}</h4>
                    <p className={styles.partnersDescription}>{partner.description}</p>
                  </div>
                  <div className={styles.contactInfo}>
                    <p className={styles.locationText}>
                      <ImLocation className={styles.icon}/>
                      {partner.location}
                    </p>
                    <p className={styles.dateText}>
                      <IoMdCalendar className={styles.icon}/>
                      {partner.date}
                    </p>
                    <p className={styles.appointmentText}>
                      {index === 1 && (
                        <FaCircleExclamation className={styles.icon}/>
                      )}
                      {partner.appointment}
                    </p>
                  </div>
                  <a
                    className="btn"
                    href={partner.website}
                  >
                    {partner.buttonText}
                  </a>
                </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
