import styles from './page.module.scss';
import Link from 'next/link';
import Image from 'next/image'
import text from '@/app/(pages)/_data/volunteer.json';

export default function Volunteer() {

    return (
      <main className={styles.page}>
        <div className={styles.top}>
          <div className={styles.header}>
            <h1 className={styles.title}>{text.title}</h1>
            <h4 className={styles.sub_title}>{text.sub_title}</h4>
          </div>
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
        </div>

        <div className={styles.bottom}>
          <div className={styles.learn_more}>
            <h4 className={styles.bottom_title}>{text.bottom_title}</h4>
            <p className={styles.text}>
              {text.bottom_text["chunk_1"]} 
              <span className={styles.about_us}>{text.bottom_text["chunk_2"]}</span>
              {text.bottom_text["chunk_3"]}
            </p>
            <Link href="/about-us" className="btn">{text.bottom_button}</Link>
          </div>
        </div>  
      </main>
    );
  }