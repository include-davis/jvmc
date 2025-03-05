"use client";
import styles from './page.module.scss';
import text from '@/app/(pages)/_data/community-partners.json'
import Image from 'next/image'
import data from '@/app/(pages)/_data/community-partners.json'

import { ImLocation } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";

export default function CommunityPartners() {

  return (
    <main>
      <h1 className={styles.titleText}> {data.title}</h1>
      <h4 className={styles.subtitleText}>{data.subtitle}</h4>
      <div className={styles.partnersGrid}>
        {data.partners.map((partner, index) => {
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
                  src={data.images[index]} 
                  style={{objectFit: 'cover'}}
                  fill={true}
                  alt={data.imagesAlt[index]} 
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
