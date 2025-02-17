import styles from './page.module.scss';
import HomeData from '@/app/(pages)/_data/home.json';

export default function Home() {
  return (
    <main>
        <div className = "body">

            <div className = {styles.titleWithButton}>
                  <h1> {HomeData.homePageTitle} </h1>
                  <h4> {HomeData.homePageSubtitle} </h4>
                  <button className ="btn"> {HomeData.buttonMsg} </button>
            </div>

            <div className = {styles.mainCardSection}>
              <div className={styles.mainCardSectionTitle}>
                <h4>{HomeData.mainCardSection_Title}</h4>
              </div>

            </div>

        </div>
         
    </main>
  );
}
