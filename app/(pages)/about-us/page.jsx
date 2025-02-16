import styles from './page.module.scss';
import { PiStudent } from "react-icons/pi";
import Image from "next/image"
import text from '@/app/(pages)/_data/about-us.json';

export default function About() {
    return (
      <main>
        <div className={styles.page}>
          <h1>{text.mainHeader}</h1>
          <h4>{text.mainSubheader}</h4>
            <div className={styles.card}>
              <div className={styles.cardTop}>
              <Image
                src={text.iconImages["studentImage"]}
                width={39}
                height={39} >
                  
                </Image>
                <h3>{text.subheaders["undergrad"]}</h3>
              </div>
              <p> {text.description["undergrad"]} </p>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardTop}>
              <Image src={text.iconImages["suitcaseImg"]} width={39} height={39} > 

              </Image>
                <h3>{text.subheaders["graduate"]}</h3>
              </div>
              <p> {text.description["graduate"]} </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardTop}>
              <Image src={text.iconImages["heartImg"]} width={39} height={40} > 
              </Image>
                <h3>{text.subheaders["social"]}</h3>
              </div>
              <p> {text.description["social"]} </p>
            </div>
            <div className={styles.card2}>
              <div className={styles.cardTop}>
              <Image src={text.iconImages["doctorImg"]} width={39} height={39} > 

              </Image>
                <h3>{text.subheaders["preceptor"]}</h3>
              </div>
              <p> {text.description["preceptor"]} </p>
            </div>
          
        </div>
      </main>
    );
  }
  