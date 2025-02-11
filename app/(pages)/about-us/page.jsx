import styles from './page.module.scss';
import HomePageCard from '@/app/HomePageCard/HomePageCard';


// card_content = [
//   {
//     title: "test 1",
//     icon:"cross icon",
//     text: ["Hello", "Hola",],
//   },
//   {
//     title: "test 2",
//     icon:"people icon",
//     text: ["Goodbye", "Adios",]
    
//   },

// ];

export default function About() {
    return (
      <main>
        <div className = {styles.body}>
          <div className = {styles.title_body}>
            <h1> Welcome to Joan Viteri Medical Clinic </h1>
            <h4>Serving health care needs of uninsured drug users, sex workers, <br></br> trans folks, and their families.</h4>
            <button className = {styles.btn}>Contact Us</button>
          </div>

          <div className = {styles.homepage_body}>
          <h4> Serving the Oak Park Community </h4>

          {/* <div className = {styles.HomePageCard}>
          {card_content.map((card_content,idx) => {
            return <div key={idx}>
                <HomePageCard card_content={card_content}></HomePageCard>
            </div>
          })}
          </div> */}

          {/* <div className={styles.interestCard}>
          {interests.map((interest, idx) => {
              return <div key={idx}>
                    <InterestCard interest={interest}></InterestCard>
                </div>
          }) }
        
        </div> */}


          </div>
          

          
          
        </div>
      
      </main>
    );
  }
  