import styles from './page.module.scss';
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";

export default function ContactUs() {
    return (
        <main className={styles.contactUs}>
            <h1 className={styles.title}>Contact Us</h1>
            <section className={styles.container}>
                <div className={styles.mapContainer}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.666409336778!2d-121.46305095896587!3d38.541457271919676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad06c484a2647%3A0x4b342e5bcbaa8fff!2sMorrissey%20Flynn%20Building%2C%203647%2040th%20St%2C%20Sacramento%2C%20CA%2095817!5e0!3m2!1sen!2sus!4v1740808728482!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: "12px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className={styles.boxCard}>
                    <div className={styles.infoCard}> 
                        <h3>3647 40th St</h3>
                        <h3>Sacramento, CA 95817</h3>
                    </div>
                    <div className={styles.textInfo}>
                        <h4>No Appointments Needed!</h4>
                        <h4>Open every Saturday 1-4pm</h4>
                    </div>
                </div>
            </section>
            <section className={styles.Media}>
                <section className={styles.socialMedia}>
                    <h4>Visit our social media pages!</h4>
                    <div className={styles.dotsContainer}>
                    <img src="/NEW_Contact_Middle_Left_Dots.png" alt="Decorative Dots Left" className={styles.dotsLeft}/>
                    <img src="/NEW_Contact_Middle_Left_Right.png" alt="Decorative Dots Right" className={styles.dotsRight}/>
                    </div>
                    <div className={styles.socialMediaIcons}>
                        <a href="https://www.instagram.com/jvmclinic" target="_blank" rel="noopener noreferrer" className="btn">  
                          <FaInstagram className={styles.icon} /> Instagram</a>
                        <a href="https://www.facebook.com/jvmclinic" target="_blank" rel="noopener noreferrer" className="btn">
                          <LuFacebook className={styles.icon} />Facebook</a>
                    </div>
                </section>
            </section>
        </main>
    );
}


  