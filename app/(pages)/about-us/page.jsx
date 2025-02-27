import styles from "./page.module.scss";
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>About Us</h1>
          <h4>Serving the community one patient at a time.</h4>
        </div>

      <div className={styles.historyWrapper}>
        <div className={styles.historyContainer}>
          <h3> Our History</h3>
          <p>Joan Viteri Memorial Clinic was founded in memory of Joan Viteri, a resident of the Oak Park neighborhood in Sacramento who died as a result of a treatable abscess. Fearing judgment from the medical community because of the stigma tied to intravenous drug use, she was unable to obtain the medical care she needed.</p>
          <p>Together with Harm Reduction Services and the Gender Health Center, JVMC strives to prevent such tragic and unnecessary deaths among stigmatized populations in the Oak Park community. Equipped with specific resources to treat individuals who use intravenous drugs, individuals who work in the sex trade, and members of the LGBTQ community, we treat all patients with dignity and respect.</p>
        </div>
        <div className={styles.img1}>
          <Image 
            src={"/jvmc-img1.png"}
            style={{ objectFit: "fill" }}
            fill={true}
            alt={"Image 1"}
          />
        </div>
        </div>
      
      <div className={styles.missionWrapper}>
        <div className={styles.missionContainer}>
          <h3> Our Mission</h3>
          <p>JVMC’s mission is to offer unbiased health care to individuals who use intravenous drugs, work in the sex trade, or identify as transgender, as well as to their families. No matter your life history, everyone is welcome at JVMC.</p>
          <p>We provide free primary health care services to the uninsured population in the Oak Park area of Sacramento, CA.  Many patients arrive for hypertension and diabetes management, as well as wound care and abscess drainage. </p>
          <p>The JVMC mission is fulfilled through the service of UC Davis undergraduates, medical, PA, NP students and the generosity of physicians.</p>
        </div>
        <div className={styles.img1}>
          <Image 
            src={"/jvmc-img1.png"}
            style={{ objectFit: "fill" }}
            fill={true}
            alt={"Image 1"}
          />
        </div>
      </div>

      <div className={styles.servicesWrapper}>
        <div className={styles.servicesContainer}>
          <h3> Our Services</h3>
          <p>At JVMC, patients can come in for primary care services, abscess drainages, prescriptions, reproductive care services and gender health care. Once a month, we have our Reproductive Health Clinic offer IUD and STI screenings, along with menstrual products, and health education resources. </p>
          <p>Additional services offered by the Gender Health Center (GHC) includes a free hormone clinic, mental health counseling, support groups and cultural programs, harm reduction, legal assistance, education and training, etc.</p>
        </div>
        <div className={styles.img1}>
          <Image 
            src={"/jvmc-img1.png"}
            style={{ objectFit: "fill" }}
            fill={true}
            alt={"Image 1"}
          />
        </div>
      </div>
      </div>
    </>
    
  );
}
