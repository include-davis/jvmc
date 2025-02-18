import styles from "./page.module.scss";

export default function About() {
  return (
    <>
  
      <h1 className={styles.aboutUs}>About Us</h1>
      <h4 className={styles.phrase}>
      Serving the community one patient at a time.</h4>

      <div className={styles.historyWrapper}>
      <div className={styles.historyContainer}>
      <h2> Our History</h2>
      <p>Joan Viteri Memorial Clinic was founded in memory of Joan Viteri, a resident of the Oak Park neighborhood in Sacramento who died as a result of a treatable abscess. Fearing judgment from the medical community because of the stigma tied to intravenous drug use, she was unable to obtain the medical care she needed.</p>
      <p>Together with Harm Reduction Services and the Gender Health Center, JVMC strives to prevent such tragic and unnecessary deaths among stigmatized populations in the Oak Park community. Equipped with specific resources to treat individuals who use intravenous drugs, individuals who work in the sex trade, and members of the LGBTQ community, we treat all patients with dignity and respect.</p>
      </div>
      <img src="jvmc-img1.jpeg" alt = "Image 1" className={styles.img1} />
      </div>
    </>
    
  );
}
