"use client";
import styles from './page.module.scss';
import Image from 'next/image'
import data from '@/app/(pages)/_data/community-partners.json'

import { ImLocation } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";
import CommunityPartnersCarousel from '../_components/CommunityPartnersCarousel/CommunityPartnersCarousel';

export default function CommunityPartners() {

  return (
    <main className={styles.page}>
      <div className={styles.partnersSection}>
        <div className={styles.header}>
          <h1>{data.title}</h1>
          <h4>{data.subtitle}</h4>
        </div>

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
      </div>

      
        <div className={styles.carouselSection}>
          <div>
            <h2 className={styles.community_partners_title}>{data.carousel.bottom_title}</h2>
            <h4 className={styles.community_partners_subtitle}>{data.carousel.bottom_subtitle}</h4>
          </div>
          <CommunityPartnersCarousel images={data.carousel.carousel_images} />
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
    </main>
  );
}
