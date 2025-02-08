import styles from './page.module.scss';

export default function About() {
  return (
    <>
      <div className={styles.aboutUs}>About Us</div>
      <div className={styles.phrase}>
      Serving the community one patient at a time.
      </div>
    </>
    
  );
}
