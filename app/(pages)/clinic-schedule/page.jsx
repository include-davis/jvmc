"use client"; 
import styles from './page.module.scss';
import data from '../_data/clinic-schedule.json';
import { MdInsertInvitation } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";


export default function ClinicSchedule() {

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>Calendar & Clinic Schedules</h2>
          <h4>Need an appointment? Check availability and schedule one with our clincs now.</h4>
        </div>

        <div className={styles.gcal}>
          <div className={styles.calendar}>
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showTitle=0"
            style={{ border: "solid 1px #777" }}
            width="1040"
            height="696"></iframe>
      </div>
          <div className={styles.key}>
            <h4>Calendar Key</h4>
            {Object.entries(data.key).map(([key, clinic]) => (
              <div key={key} className={styles.keyElem}>
                <div className={styles.circ} style={{backgroundColor: `var(${clinic.color})`}}></div>
                <p className={styles.title}>{clinic.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infocards}>
          {Object.entries(data.info).map(([key, clinic]) => (
            <div key={key} className={styles.card}>
              <div className={styles.info}>
                <h4>{clinic.title}</h4>
                <p>{clinic.paragraph}</p>
                <div className={styles.tm}>
                  <div className={styles.text}>
                    <MdInsertInvitation size={24} color='var(--emerald)'/>
                    <p>{clinic.time}</p>
                  </div>
                  <div className={styles.text}>
                    <IoMdInformationCircle size={24} color='var(--emerald)'/>
                    <p>{clinic.message}</p>
                  </div>
                </div>
              </div>
              {clinic.appt === "button" ? (
                <button className="btn">Visit GHC Website</button>
              ) : (
                <p className={styles.appt}>{clinic.appt}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}