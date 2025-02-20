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

          <div className = {styles.titleWithButtonSection}>
            <div className = {styles.titleAndSubtitleBox}>
              <h1> {HomeData.homePageTitle} </h1>
              <h4> {HomeData.homePageSubtitle} </h4>
            </div>
                
                <button className ="btn"> {HomeData.buttonMsg} </button>
          </div>


          <div className = {styles.cardSectionBox}>
            <div className={styles.cardSectionHeader}>
              <h3>{HomeData.cardSectionHeaderTitle}</h3>
              <Image
                src={HomeData.cardSectionHeaderImage}
                alt="Main Card Section Title Image"
                width={780}
                height={280}
                
              />
            </div>
            <div className = {styles.infoCardsSection}>
                <div className = {styles.card}>
                  {/* left side has image and right side has text */}
                  <div className = {styles.card_ImageBox}>
                  <Image
                    src={HomeData.card2_Image_Link}
                    alt="Image Text" 
                    width={325}  
                    height={420} 
                    className={styles.image_1}
                  />
                    
                  </div>
                  <div className = {styles.card_TextBox}>

                  <div className = {styles.card_TitleAndLogo}>
                  <CiMedicalCross className = {styles.icon}/>
                  <h3>{HomeData.card1_Title}</h3>
                  </div>

                  <ul className= {styles.description_1}>
                      <li>{Sentence_1}</li>
                      <li>{Sentence_2}</li>
                      <li>{Sentence_3}</li>
                  </ul>


                  </div>
                </div>

                <div className = {styles.card}>
                  {/* left side has text and right side has image */}
                  <div className = {styles.card_TextBox}>
                  <div className = {styles.card_TitleAndLogo}>
                  <BsPeople className = {styles.icon}/>
                  <h3>{HomeData.card2_Title}</h3>
                  </div>

                  <p>{HomeData.card2_Subtitle}</p>
                
                  <ul className= {styles.description_2}>
                  {HomeData.text_Block2_Subtext}
                      <li>{bulletpoint_1}</li>
                      <li>{bulletpoint_2}</li>
                      <li>{bulletpoint_3}</li>
                      <li>{bulletpoint_4}</li>

                  </ul>
                  </div>

                  <div className = {styles.card_ImageBox}>
                  <Image
                    src={HomeData.card2_Image_Link}
                    alt="Image Text" 
                    width={325}  
                    height={420}
                    className={styles.image_2}
                  />
                    
                  </div>



                  
                </div>
            </div>

          </div>

         </div>
      
        
         
    </main>
  );
}
