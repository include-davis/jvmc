import styles from './page.module.scss';
import HomeData from '@/app/(pages)/_data/home.json';
import Image from 'next/image';
import Link from "next/link";

import { CiMedicalCross } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

export default function Home() {
  const {Sentence_1, Sentence_2, Sentence_3} = HomeData.text_Block1
  const {bulletpoint_1, bulletpoint_2, bulletpoint_3, bulletpoint_4} = HomeData.text_Block2

  return (
    <main>  
        <div className = {styles.body}>

          <div className = {styles.titleWithButtonSection}>
            <div className={styles.headerGradient}>
              <Image
                src={HomeData.header_gradient}
                alt={"header gradient"}
                width={1839}
                height={1349}
              />
            </div>
            <Image
                src={HomeData.teddy}
                alt={"JVMC teddy"}
                width={166}
                height={123}
              />
            <div className = {styles.titleAndSubtitleBox}>
              <h1> {HomeData.homePageTitle} </h1>
              <p> {HomeData.homePageSubtitle} </p>
            </div>

          <div className = {styles.contactButton}>
            <Link className = "btn" href="/contact-us">
            {HomeData.buttonMsg}
            </Link>
          </div>
          </div>


          <div className = {styles.cardSectionBox}>

              <div className={styles.cardSectionHeader}>

                <h3>{HomeData.cardSectionHeaderTitle}</h3>
                <Image
                  src={HomeData.cardSectionHeaderImage}
                alt="Image of Background for Card Section Header Title"
                  width={780} // 780
                  height={280} // 280
                />

              </div>


                <div className = {styles.card}>
                  {/* left side has image and right side has text */}
                  <div className = {styles.card_ImageBox}>
                  
                  <Image
                    src={HomeData.polygon16_1}
                    alt="Corner Image 1 for First Image" 
                    width={190}  //150
                    height={180} //130
                    className={styles.polygon16_1}
                  />

                  <Image
                    src={HomeData.card1_Image_Link}
                    alt="Image of JVMC Workers handling documents" 
                    width={319.67}  
                    height={423.933803597944} 
                    className={styles.image_1}
                  />

                  <Image
                    src={HomeData.polygon16_2}
                    alt="Corner Image 2 for First Image" 
                    width={190}  
                    height={180} 
                    className={styles.polygon16_2}
                  />
                    
                  </div>

                  <div className = {styles.card_TextBox}>
                  <div className = {styles.card_TitleAndLogo}>
                  {/* <CiMedicalCross className = {styles.icon}/> */}
                  <Image
                    src={HomeData.health_icon}
                    alt="Health Icon Image" 
                    width={40}  
                    height={40} 
                    className={styles.icon}
                  />
                  <h3>{HomeData.card1_Title}</h3>
                  </div>

                  <ul className= {styles.description_1}>
                      <li>{Sentence_1}</li>
                      <li>{Sentence_2}</li>
                      <li>{Sentence_3}</li>
                  </ul>


                  </div>
                </div>


                <div className={styles.dots1}>
                    <Image
                      src={HomeData.dots_1}
                      alt={"dots"}
                      width={259}
                      height={533}
                    />
                </div>
                <div className = {styles.card}>
                  {/* left side has text and right side has image */}
                  <div className = {styles.card_TextBox}>
                  <div className = {styles.card_TitleAndLogo}>
                  {/* <BsPeople className = {styles.icon}/> */}
                  <Image
                    src={HomeData.biPeople_icon}
                    alt="Health Icon Image" 
                    width={40}  
                    height={40} 
                    // className={styles.icon}
                  />
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
                    src={HomeData.polygon17}
                    alt="Corner Image 1 for Second Image" 
                    width={190}  
                    height={180} 
                    className={styles.polygon17}
                  />

                  <Image
                    src={HomeData.card2_Image_Link}
                    alt="Image of JVMC Workers grouped together for a photo"
                    width={304.82775798108776}  
                    height={383.39496473915455}
                    className={styles.image_2}
                  />

                  <Image
                    src={HomeData.polygon18}
                    alt="Corner Image 2 for Second Image" 
                    width={190}  
                    height={180} 
                    className={styles.polygon18}
                  />  
                  </div>
                </div>

                <div className={styles.dots2}>
                    <Image
                      src={HomeData.dots_2}
                      alt={"dots"}
                      width={394}
                      height={609}
                    />
                </div>
          
          </div>

         </div>    
    </main>
  );
}
