"use client";
import { ImLocation } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";
import styles from './CommunityPartnersCard.module.scss';
import Image from "next/image";

export default function CommunityPartnersCard({index, partner}) {
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
                    src={partner.image_src} 
                    style={{objectFit: 'cover'}}
                    fill={true}
                    alt={partner.images_src} 
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
}