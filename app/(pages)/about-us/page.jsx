import styles from './page.module.scss';
import Image from "next/image"
import text from '@/app/(pages)/_data/about-us.json';
import ClinicRolesCard from '../_components/ClinicRolesCard/ClinicRolesCard';


export default function About() {
    return (
     
     /*<main>
        <div className={styles.page}>
          <div className={styles.header}>
              <h1>{text.mainHeader}</h1>
              <h4>{text.mainSubheader}</h4>
          </div>
        
            <div className={styles.card}>
              
              <div className={styles.img}>
          <Image
            src={img}
            style={{ objectFit: "fill" }}
            fill={true}
            alt={imgAlt}
          />
        </div>
              <div className={styles.cardTop}>
                <Image 
                src={text.iconImages["studentImage"]} width={39} height={39} alt="iconStudent">
                </Image>
                <h3>{text.subheaders["undergrad"]}</h3>
              </div>
              <p> {text.description["undergrad"]} </p>
            </div>
            <div className={styles.card2}>
              <Image 
              className={styles.img} src={text.photos["graduate"]} width={211} height={211} alt= {text.photoAlts["Graduates"]}>
              </Image>
              <div className={styles.cardTop}>
                <Image 
                src={text.iconImages["suitcaseImg"]} width={39} height={39} alt="iconSuitcase"> 
                </Image>
                <h3>{text.subheaders["graduate"]}</h3>
              </div>
              <p> {text.description["graduate"]} </p>
            </div>
            <div className={styles.card}>
              <Image
                className={styles.img2} src={text.photos["social"]} width={211} height={211} alt="socialWorkImage">
              </Image>
              <div className={styles.cardTop}>
                <Image 
                src={text.iconImages["heartImg"]} width={39} height={40} alt="iconHeart"> 
                </Image>
                <h3>{text.subheaders["social"]}</h3>
              </div>
              <p> {text.description["social"]} </p>
            </div>
            <div className={styles.card2}>
              <Image
              className={styles.img2} src={text.photos["preceptor"]} width={211} height={211} alt="preceptorImage">
              </Image>
              <div className={styles.cardTop}>
                <Image 
                  src={text.iconImages["doctorImg"]} width={39} height={39} alt="iconDoctor" > 
                </Image>
                <h3>{text.subheaders["preceptor"]}</h3>
              </div>
              <p> {text.description["preceptor"]} </p>
            </div>
          
        </div>
      </main>
      */

      <main>
        <div className={styles.page}>
          <div className={styles.header}>
              <h1>{text.mainHeader}</h1>
              <h4>{text.mainSubheader}</h4>
          </div>
          {text.iconImages.map((_, index) => 
            <ClinicRolesCard
              key={index}
              icon={text.iconImages[index]}
              iconAlt={text.iconAlts[index]}
              img={text.photos[index]}
              imgAlt={text.photoAlts[index]}
              align={text.alignments[index]}
              subheader={text.subheaders[index]}
              description={text.description[index]}
            />
          )}

          </div>
         </main>

     
    );
  }

 