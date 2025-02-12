import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import text from '@/app/(pages)/_data/volunteer.json';

export default function Volunteer() {

    return (
      <main>
        <h1 className={styles.title}>{text.Title}</h1>
        <h4 className={styles.sub_title}>{text.subTitle}</h4>

        <div className={styles.opening}>
          <Image
            className={styles.landing_photo}
            src={text.entrance_pic}
            width={521}
            height={370}
            alt={text.entrance_pic_descript}
          />
          <div className={styles.intro}>
            <p>{text.intro_1}</p>
            <p>{text.intro_2}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.learn_more}>
            <h1 className={styles.header}>{text.bottom_title}</h1>
            <p className={styles.text}>
              {text.bottom_text["chunk1"]} 
              <span className={styles.aboutUs}>{text.bottom_text["chunk2"]}</span>
              {text.bottom_text["chunk3"]}
            </p>
            <Link href="/about-us" className="btn">{text.bottom_button}</Link>
          </div>
        </div>  
      </main>
    );
  }