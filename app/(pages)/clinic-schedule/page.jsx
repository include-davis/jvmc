import styles from './page.module.scss';

export default function ClinicSchedule() {
    return (
      <main>
        <div className={styles.page}>
          <div className={styles.header}>
            <h1>Calendar & Clinic Schedules</h1>
            <h3>Need an appointment? Check availability and schedule one with our clincs now.</h3>
          </div>
          <div className={styles.gcal}>

          </div>
          <div className={styles.infocards}>
            <div className={styles.jvmc}>
              <h4>JVMC Clinic</h4>
            </div>
            <div className={styles.rhc}>
              <h4>Reproductive Health Clinic</h4>
            </div>
            <div className={styles.ghc}>
              <h4>Gender Health Center</h4>
            </div>
          </div>
        </div>
      </main>
    );
  }