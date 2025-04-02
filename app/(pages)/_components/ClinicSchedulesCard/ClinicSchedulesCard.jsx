"use client";
import styles from "./ClinicSchedulesCard.module.scss";
import { MdInsertInvitation } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";

export default function ClinicSchedulesCard({ key, clinic }) {
  return (
    <div key={key} className={styles.card}>
      <div className={styles.info}>
        <h4>{clinic.title}</h4>
        <p>{clinic.paragraph}</p>
        <div className={styles.tm}>
          <div className={styles.text}>
            <MdInsertInvitation size={24} color="var(--emerald)" />
            <p>{clinic.time}</p>
          </div>
          <div className={styles.text}>
            <IoMdInformationCircle size={24} color="var(--emerald)" />
            <p>{clinic.message}</p>
          </div>
        </div>
      </div>
      {(clinic.action === null) != (clinic.button_text === null) &&
      clinic.action === null ? (
        <a target="_blank" href={clinic.button_link} className="btn">
          {clinic.button_text}
        </a>
      ) : (
        <p className={styles.action}>{clinic.action}</p>
      )}
    </div>
  );
}
