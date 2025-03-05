import styles from "./page.module.scss";
import data from "@/app/(pages)/_data/about-us.json";
import AboutUsCard from "../_components/AboutUsCard/AboutUs";

export default function About() {
  return (
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>About Us</h1>
          <h4>Serving the community one patient at a time.</h4>
        </div>
        
        {/* Cards are mapped here */}
        {
          data.cards.map((card, idx) => 
            <AboutUsCard 
              key={idx}
              title={card.title}
              content={card.content}
              img={card.image}
              alt={card.alt}
              alignment={idx % 2 === 0 ? "right" : "left"} // alternate alignment
            />
          )
        }
      </div>
  );
}
