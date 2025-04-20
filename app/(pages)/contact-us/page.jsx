import styles from "./page.module.scss";
import contactData from "../_data/contact-us.json";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import ContactUsGeneralInfoFallbackData from "@/app/(pages)/_data/general-info.json";
import ContactForm from "../_components/ContactForm/ContactForm";

export async function getContactUsGeneralInfo() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/general-info?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    console.log(data);
    const contents = data.body[0];
    const parsedData = {
      address: contents.address,
      apptInstructions: contents.appointment_instruction,
    };
    console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(
      `Failed to fetch general-info for contact us page: ${e.message}`
    );
    return {
      address: ContactUsGeneralInfoFallbackData.address,
      apptInstructions:
        ContactUsGeneralInfoFallbackData.appointment_instruction,
    };
  }
}

export default async function ContactUs() {
  const generalData = await getContactUsGeneralInfo();
  const { heading1, heading2 } = contactData.questionsCard;

  return (
    <main className={styles.contactUs}>
      {/* MAP COMPONENT */}
      <div className={styles.rainbowTop}>
        <Image
          src="/Contact_Rainbow_Top.png"
          alt="Decorative Rainbow Top"
          fill="true"
          style={{ objectFit: "contain" }}
          priority={true}
        />
      </div>
      <h1>Contact Us</h1>
      <section className={styles.container}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.666409336778!2d-121.46305095896587!3d38.541457271919676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad06c484a2647%3A0x4b342e5bcbaa8fff!2sMorrissey%20Flynn%20Building%2C%203647%2040th%20St%2C%20Sacramento%2C%20CA%2095817!5e0!3m2!1sen!2sus!4v1740808728482!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={styles.boxCard}>
          <div className={styles.infoCard}>
            <h3>{generalData.address}</h3>
          </div>
          <div className={styles.textInfo}>
            <h4>{generalData.apptInstructions}</h4>
          </div>
        </div>
      </section>
      {/* SOCIAL MEDIA COMPONENT */}
      <section className={styles.socialMedia}>
        <div className={styles.dotsContainer}>
          <div className={styles.dotsLeft}>
            <Image
              src="/images/NEW_Contact_Middle_Left_Dots.png"
              alt="Decorative Dots Left"
              fill="true"
              style={{ objectFit: "contain" }}
              sizes={"(max-width: 1048px) 50vw, (max-width: 720px) 33vw"}
            />
          </div>
        </div>
        <h4>Visit our social media pages!</h4>
        <div className={styles.socialMediaIcons}>
          <a
            href="https://www.instagram.com/jvmclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaInstagram className={styles.icon} />
            @jvmcclinic
          </a>
          <a
            href="https://www.instagram.com/jvmcstudents/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaInstagram className={styles.icon} />
            @jvmcstudents
          </a>
        </div>
        <div className={styles.dotsContainer}>
          <div className={styles.dotsRight}>
            <Image
              src="/images/NEW_Contact_Middle_Left_Right.png"
              alt="Decorative Dots Right"
              fill="true"
              style={{ objectFit: "contain" }}
              sizes={"(max-width: 1048px) 50vw, (max-width: 720px) 33vw"}
            />
          </div>
        </div>
      </section>
      {/* QUESTIONS? COMPONENT */}
      <div className={styles.questionsCard}>
        <div>
          <h3>{heading1}</h3>
          <h3>{heading2}</h3>
        </div>
        <p>
          Please <b>do not use this page for inquiries</b>
        </p>
        <p>
          For questions about volunteering please email{" "}
          <b>
            <a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a>
          </b>
        </p>
      </div>

      {/* CONTACT FORM COMPONENT */}
      <ContactForm />

      <div className={styles.rainbowBottom}>
        <Image
          src="/Contact_Rainbow_Bottom.png"
          alt="Decorative Rainbow Bottom"
          fill="true"
          style={{ objectFit: "contain" }}
        />
      </div>
    </main>
  );
}
