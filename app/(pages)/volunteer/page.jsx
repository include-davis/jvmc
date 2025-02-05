import styles from './page.module.scss';
import VolunteerCard from '../_components/VolunteerCard/VolunteerCard';
import { PiStudent } from "react-icons/pi";

const cards = [
  {
    title: "Undergraduate Students at UC Davis", 
    direction: "right", 
    image: "/images/magpie.png",
    altText: "A magpie",
    icon: <PiStudent />,
    mainText: (
      <>
        New cohorts are recruited during Winter Quarter annually. More information regarding the application process as an undergraduate student at UC Davis can be found on our instagram page, <a href="https://instagram.com/jvmcstudents">@jvmcstudents</a>.<br /><br />
        
        To qualify as a volunteer, undergraduates must:
        <ul>
          <li>Be an active UC Davis student</li>
          <li>Be able to commit to 3 quarters of volunteer work</li>
          <li>Be able to attend our weekly meetings</li>
        </ul>
        Please email <a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a> with questions about recruitment and/or volunteering. Fill out our interest form if you would like to keep up to date with our recruitment cycle!
      </>
    ),
    link: "",
    linkText: "",
  },
  {
    title: "Undergraduate Students at UC Davis", 
    direction: "left", 
    image: "/images/magpie.png",
    altText: "A magpie",
    icon: <PiStudent />,
    mainText: "This is the workshop on React and Next.js. Hope to see you there!",
    link: "",
    linkText: "",
  },
  {
    title: "Undergraduate Students at UC Davis", 
    direction: "right", 
    image: "/images/magpie.png",
    altText: "A magpie",
    icon: <PiStudent />,
    mainText: "This is the workshop on React and Next.js. Hope to see you there!",
    link: "",
    linkText: "",
  }, 
];

export default function Volunteer() {
    return (
      <main>
        <div>Volunteer</div>
        {/* VolunteerCard components */}
        <div className={styles.volunteerCards}>
        {
          cards.map((cards, idx) => {
            return (
              <div key={idx}>
                <VolunteerCard 
                  title={cards.title}
                  direction={cards.direction}
                  image={cards.image}
                  altText={cards.altText}
                  icon={cards.icon}
                  mainText={cards.mainText}
                  link={cards.link}
                  linkText={cards.linkText}></VolunteerCard>
              </div>
            )
          })
        }
        </div>
      </main>
    );
  }