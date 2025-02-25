import styles from './page.module.scss';
import Image from "next/image"
import text from '@/app/(pages)/_data/about-us.json';
import ClinicRolesCard from '../_components/ClinicRolesCard/ClinicRolesCard';


export default function About() {
    return (
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

 