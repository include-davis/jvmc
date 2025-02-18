"use client"; 
import styles from './page.module.scss';
import data from '../_data/clinic-schedule.json';

export default function ClinicSchedule() {

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>Calendar & Clinic Schedules</h2>
          <h4>Need an appointment? Check availability and schedule one with our clincs now.</h4>
        </div>

        <div className={styles.gcal}>
          <div>

          </div>
          <div className={styles.key}>
            <h4>Calendar Key</h4>
            {Object.entries(data.key).map(([key, clinic]) => (
              <div key={key} className={styles.keyElem}>
                <div className={styles.circ} style={{backgroundColor: `var(${clinic.color})`}}></div>
                <p>{clinic.title}</p>
              </div>
            ))}
            {/* <div className={styles.cir1}></div>
            <p>Reproductive Health Clinic</p>
            <div className={styles.cir2}></div>
            <p>JVMC Clinic</p>
            <div className={styles.cir3}></div>
            <p>Gender Health Center</p> */}
          </div>
        </div>

        <div className={styles.infocards}>
          {Object.entries(data.info).map(([key, clinic]) => (
            <div key={key} className={styles.card}>
              <div className={styles.info}>
                <h4>{clinic.title}</h4>
                <p>{clinic.paragraph}</p>
                <div className={styles.tm}>
                  {/* <img src={'../public/mdi_calendar.png'}></img> */}
                  <p>{clinic.time}</p>
                  {/* <img></img> */}
                  <p>{clinic.message}</p>
                </div>
              </div>
              {clinic.appt === "button" ? (
                <button className={styles.btn}>Visit GHC Website</button>
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