import styles from './page.module.scss';
import Image from 'next/image';
import { FaHome, FaClock, FaEnvelope} from 'react-icons/fa';
import Link from "next/link";
import data from '@/app/(pages)/_data/home.json'

export default function Home() {
  return (
    <main className={styles.contact}>
        <div className={styles.contactCard}>
          <div className={styles.infoContainer}>
            <div className={styles.info}>
              <FaHome color="var(--emerald)" size={32}/>
              <div className={styles.infoText}>
                <h3>{data.contactCard.visit.text}</h3>
                <p>{data.contactCard.visit.address}</p>
              </div>
            </div>
            <div className={styles.info}>
              <FaClock color="var(--emerald)" size={32}/>
              <div className={styles.infoText}>
                <h3>{data.contactCard.hours.text}</h3>
                <p>{data.contactCard.hours.hours}</p>
              </div>
            </div>
            <div className={styles.info}>
              <FaEnvelope color="var(--emerald)" size={32}/>
              <h3>{data.contactCard.contact}</h3>
            </div>
            <Link href={data.contactCard.button.link} className={"btn"}>
              {data.contactCard.button.text}
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.gradientCircle}></div> 
            <div className={styles.image}>
              <Image 
                src={data.contactCard.img.src} 
                alt={data.contactCard.img.alt} 
                style={{objectFit: "cover"}}
                fill={true}
              />
            </div>
          </div>
        </div>
    </main>
  );
}
