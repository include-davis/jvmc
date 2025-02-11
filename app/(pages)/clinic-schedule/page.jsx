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
            <div>

            </div>
            <div className={styles.key}>
              <h3>Calendar Key</h3>
              <div className={styles.cir1}></div>
              <p>Reproductive Health Clinic</p>
              <div className={styles.cir2}></div>
              <p>JVMC Clinic</p>
              <div className={styles.cir3}></div>
              <p>Gender Health Center</p>
            </div>
          </div>
          <div className={styles.infocards}>
            <div className={styles.jvmc}>
              <h4>JVMC Clinic</h4>
              <p>JVMC Clinic provides free primary health care services to individuals using intravenous drugs, work in the sex trade, or identify as transgender.</p>
  
              <h4>Walk-ins only</h4>
            </div>
            {/* <div className={styles.rhc}>
              <h4>Reproductive Health Clinic</h4>
              <p>The Reproductive Health Clinic provides sexual and reproductive clinical care such as IUDs, STI testing/treatment, and menstrual products.</p>
            </div>
            <div className={styles.ghc}>
              <h4>Gender Health Center</h4>
              <p>GHC offers free or low-cost health, legal, and support services for trans and gender-expansive communities.</p>
            </div> */}
          </div>
        </div>
      </main>
    );
  }