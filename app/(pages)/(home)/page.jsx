import styles from './page.module.scss';
import HomeData from '@/app/(pages)/_data/home.json';
import Image from 'next/image';

import { CiMedicalCross } from "react-icons/ci";

export default function Home() {
  const {Sentence_1, Sentence_2, Sentence_3} = HomeData.text_Block1

  return (
    <main>
        <div className = "body">

            <div className = {styles.titleWithButton}>
              <div className = {styles.titleAndSubtitle}>
                <h1> {HomeData.homePageTitle} </h1>
                <h4> {HomeData.homePageSubtitle} </h4>
              </div>
                  
                  <button className ="btn"> {HomeData.buttonMsg} </button>
            </div>

            <div className = {styles.mainCardSection}>
              <div className={styles.mainCardSectionTitle}>
                <h3>{HomeData.mainCardSection_Title}</h3>
              </div>
              <div className = {styles.cards_Section}>
                  <div className = {styles.card_1}>
                    {/* left side has image and right side has text */}
                    <div className = {styles.card_1_ImageBox}>
                    <Image
                      src={HomeData.image1_Link}
                      alt="Image Text" 
                      width={300}  // Width of the image
                      height={400} // Height of the image
                    />
                      
                    </div>
                    <div className = {styles.card_1_TextBox}>

                    <div className = {styles.card_1_TitleAndLogo}>
                    <CiMedicalCross className = {styles.icon}/>
                    <h3>{HomeData.card1_Title}</h3>
                    </div>

                    <ul>
                        <li>{Sentence_1}</li>
                        <li>{Sentence_2}</li>
                        <li>{Sentence_3}</li>
                    </ul>


                    </div>
                  </div>

                  <div className = {styles.card_2}>
                    {/* left side has text and right side has image */}

                  </div>
              </div>

            </div>

        </div>
         
    </main>
  );
}
