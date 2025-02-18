import styles from './page.module.scss';
import HomeData from '@/app/(pages)/_data/home.json';
import Image from 'next/image';

import { CiMedicalCross } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

export default function Home() {
  const {Sentence_1, Sentence_2, Sentence_3} = HomeData.text_Block1
  const {bulletpoint_1, bulletpoint_2, bulletpoint_3, bulletpoint_4} = HomeData.text_Block2

  return (
    <main>
        <div className = {styles.body}>

            <div className = {styles.titleWithButton}>
              <div className = {styles.titleAndSubtitle}>
                <h1> {HomeData.homePageTitle} </h1>
                <h4> {HomeData.homePageSubtitle} </h4>
              </div>
                  
                  <button className ="btn"> {HomeData.buttonMsg} </button>
            </div>

            <div className = {styles.mainCardsSection}>
              <div className={styles.mainCardSectionTitle}>
                <h3>{HomeData.mainCardSection_Title}</h3>
                <Image
                  src={HomeData.mainCardSection_TitleImage}
                  alt="Main Card Section Title Image"
                  width={780}
                  height={280}
                  // layout="fill"
                  // objectFit="cover"
                  // objectPosition="center"
                  className={styles.headerBackGroundImage}
                  
                />
              </div>
              <div className = {styles.cards_Section}>
                  <div className = {styles.card_1}>
                    {/* left side has image and right side has text */}
                    <div className = {styles.card_1_ImageBox}>
                    <Image
                      src={HomeData.image1_Link}
                      alt="Image Text" 
                      width={325}  // Width of the image
                      height={420} // Height of the image
                      className={styles.image1}
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
                    <div className = {styles.card_2_TextBox}>
                    <div className = {styles.card_2_TitleAndLogo}>
                    <BsPeople className = {styles.icon2}/>
                    <h3>{HomeData.card2_Title}</h3>
                    </div>

                    <p>{HomeData.card2_Subtitle}</p>
                  
                    <ul>{HomeData.text_Block2Subtext}
                        <li>{bulletpoint_1}</li>
                        <li>{bulletpoint_2}</li>
                        <li>{bulletpoint_3}</li>
                        <li>{bulletpoint_4}</li>

                    </ul>
                    </div>

                    <div className = {styles.card_2_ImageBox}>
                    <Image
                      src={HomeData.image2_Link}
                      alt="Image Text" 
                      width={325}  // Width of the image
                      height={420} // Height of the image
                      className={styles.image2}
                    />
                      
                    </div>



                    
                  </div>
              </div>

            </div>

        </div>
         
    </main>
  );
}
