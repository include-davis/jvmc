import styles from './page.module.scss';
import data from '@/app/(pages)/_data/home.json';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  const {Sentence_1, Sentence_2, Sentence_3} = data.text_Block1
  const {bulletpoint_1, bulletpoint_2, bulletpoint_3, bulletpoint_4} = data.text_Block2

  return (
    <main>  
        <div className = {styles.body}>

          <div className = {styles.titleWithButtonSection}>
            <div className={styles.headerGradient}>
              <Image
                src={data.header_gradient}
                alt={data.header_gradient_alt}
                width={1839}
                height={1349}
              />
            </div>
            <Image
                src={data.teddy}
                alt={data.teddyAlt}
                width={166}
                height={123}
              />
            <div className = {styles.titleAndSubtitleBox}>
              <h1> {data.homePageTitle} </h1>
              <p> {data.homePageSubtitle} </p>
            </div>

          <div className = {styles.contactButton}>
            <Link className = "btn" href="/contact-us">
              {data.buttonMsg}
            </Link>
          </div>
          </div>


          <div className = {styles.cardSectionBox}>

              <div className={styles.cardSectionHeader}>

                <h3>{data.cardSectionHeaderTitle}</h3>
                <Image
                  src={data.cardSectionHeaderImage}
                alt={data.cardSectionHeaderImageAlt}
                  width={780} // 780
                  height={280} // 280
                />

              </div>


                <div className = {styles.card}>
                  {/* left side has image and right side has text */}
                  <div className = {styles.card_ImageBox}>

                  <Image
                    src={data.card1_Image_Link}
                    alt={data.card1_Image_Alt}
                    width={320}  
                    height={424} 
                    className={styles.image_1}
                  />
                    
                  </div>

                  <div className = {styles.card_TextBox}>
                  <div className = {styles.card_TitleAndLogo}>
                  {/* <CiMedicalCross className = {styles.icon}/> */}
                  <Image
                    src={data.health_icon}
                    alt={data.health_icon_alt} 
                    width={40}  
                    height={40} 
                    className={styles.icon}
                  />
                  <h3>{data.card1_Title}</h3>
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
                      src={data.dots_1}
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
                        src={data.biPeople_icon}
                        alt={data.biPeople_icon_alt} 
                        width={40}  
                        height={40} 
                        // className={styles.icon}
                      />
                      <h3>{data.card2_Title}</h3>
                    </div>

                    <p>{data.card2_Subtitle}</p>
                
                    <ul className= {styles.description_2}>
                    {data.text_Block2_Subtext}
                        <li>{bulletpoint_1}</li>
                        <li>{bulletpoint_2}</li>
                        <li>{bulletpoint_3}</li>
                        <li>{bulletpoint_4}</li>

                    </ul>
                  </div>

                  <div className = {styles.card_ImageBox}>
                    <Image
                      src={data.card2_Image_Link}
                      alt={data.card2_Image_Alt}
                      width={305}  
                      height={383}
                      className={styles.image_2}
                    />
                  </div>
                </div>

                <div className={styles.dots2}>
                    <Image
                      src={data.dots_2}
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
