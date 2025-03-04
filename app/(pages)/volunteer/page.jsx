import Link from 'next/link';
import styles from './page.module.scss';
import VolunteerCard from '../_components/VolunteerCard/VolunteerCard';

import { PiStudent } from "react-icons/pi";
import { LuStethoscope } from "react-icons/lu";
import { MdOutlineMedicalServices } from "react-icons/md";

const cards = [
  {
    title: "Undergraduate Students at UC Davis", 
    direction: "right", 
    image: "/images/UGrad.jpg",
    altText: "Undergraduate Students",
    icon: <PiStudent />,
    mainText: (
      <>
        New cohorts are recruited during Winter Quarter annually. More information regarding the application process as an undergraduate student at UC Davis can be found on our instagram page, <b><a href="https://instagram.com/jvmcstudents" target="_blank">@jvmcstudents</a></b>.<br /><br />
        
        To qualify as a volunteer, undergraduates must:
        <ul>
          <li>Be an active UC Davis student</li>
          <li>Be able to commit to 3 quarters of volunteer work</li>
          <li>Be able to attend our weekly meetings</li>
        </ul>
        <br />
        If you have any questions or concerns the recruitment process please email us at <b><a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a></b>. <b>Please Fill out our interest form if you would like to stay up to date on our recruitment cycle!</b>
      </>
    ),
    link: <a href="https://forms.gle/5STumqF28u1dvUmTA" target="_blank" className='btn'>Volunteer Form</a>,
  },
  {
    title: "Physicians", 
    direction: "left", 
    image: "/images/Physicians.jpg",
    altText: "Physicians",
    icon: <LuStethoscope />,
    mainText: (
      <>
        To qualify as a physician volunteer with JVMC you must be covered by UC Davis School of Medicine's malpractice insurance.<br/><br/>

        As a UC Davis Physician you are automatically covered!<br/><br/>

        <b>If you are not a part of the UC Davis Health System and would still love to volunteer, please contact us via email!</b>

      </>
    ),
    link: (
      <><a href="mailto:jvmcvolunteer@gmail.com" className='btn'>Email Us</a></>
    ),
  },
  {
    title: "Medical Students: MD, PA, & NP Students", 
    direction: "right", 
    image: "/images/MD_Student.jpg",
    altText: "MD Students",
    icon: <MdOutlineMedicalServices />,
    mainText: (
      <>
        If you are looking to volunteer with JVMC as a Medical Students, please arrive at the clinic location at 12:30 PM. Clinic hours are from 1:00 PM-5:00 PM.<br/><br/>

        Please wear a scrub top and jeans or scrub bottoms instead of your white coats to be respectful to our patients. Additionally, please bring your student ID card and a stethoscope to the clinic.
      </>
    ),
    link: <Link href="/contact-us" className='btn'>Contact Us</Link>,
  }, 
];

export default function Volunteer() {
    return (
      <main>
        {/* VolunteerCard components */}
        <div className={styles.volunteerCards}>
          <h2 className={styles.header}>Ready to Volunteer with Us?</h2>
        {
          cards.map((cards, idx) => {
            return (
                <VolunteerCard key={idx}
                  title={cards.title}
                  direction={cards.direction}
                  image={cards.image}
                  altText={cards.altText}
                  icon={cards.icon}
                  mainText={cards.mainText}
                  link={cards.link}></VolunteerCard>
            )
          })
        }
        </div>
      </main>
    );
  }