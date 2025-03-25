"use client";
import { ImLocation } from "react-icons/im";
import { IoMdCalendar } from "react-icons/io";
import { FaCircleExclamation } from "react-icons/fa6";
import styles from "./CommunityPartnersCard.module.scss";
import Image from "next/image";

export default function CommunityPartnersCard({ index, partner }) {
  // Set class based on index and reverse if it is the first or third image

  return (
    <div
      className={`${styles.cardContainer} ${index % 2 == 0 ? styles.reverse : ""}`}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={partner.imageSrc}
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
          fill={true}
          alt={partner.imageAlt}
        />
      </div>

      <div className={styles.partnersCard}>
        <div className={styles.header}>
          <h4>{partner.name}</h4>
          <p>{partner.description}</p>
        </div>
        <div className={styles.contactInfo}>
          <p className={styles.locationText}>
            <ImLocation className={styles.icon} />
            {partner.location}
          </p>
          <p className={styles.dateText}>
            <IoMdCalendar className={styles.icon} />
            {partner.date}
          </p>
          <p className={styles.appointmentText}>
            {partner.appointment && (
              <FaCircleExclamation className={styles.icon} />
            )}
            {partner.appointment}
          </p>
        </div>
        <a className={`${styles.button} btn`} href={partner.website}>
          {partner.buttonText}
        </a>
      </div>
    </div>
  );
}
