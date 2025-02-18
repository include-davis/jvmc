"use client";
import styles from './page.module.scss';
import text from '@/app/(pages)/_data/community-partners.json'

export default function CommunityPartners() {
  const partners = [
    {
      name: 'Harm Reduction Services', description: "HRS offers free, confidential harm reduction services to improve the health and well-being of drug users, in addition to empowering local communities.",
      location: "2800 Stockton Blvd. Sacramento, CA 95817", date: "Monday - Friday, 12:00 PM - 6:00 PM", appointment: "",
      website: "https://hrssac.org/", buttonText: "Visit HRS Website" 
    },
    {
      name: 'Gender Health Center', description: "GHC offers free or low-cost health, legal, and support services for trans and gender-expansive communities.",
      location: "3823 V Street Sacramento, CA 95817", date: "1st & 3rd Friday of each month, 6:00 PM - 9:00 PM", appointment: "By appointment only",
      website: "https://www.genderhealthcenter.org/", buttonText: "Visit GHC Website"
    },
    {
      name: 'Stockton Harm Reduction Program', description: "SHRP offers harm reduction tools, wound care supplies, referrals to health and legal services, and advocates for social justice in Stockton.",
      location: "446 S Harrison St, Stockton, CA 95203", date: "Saturdays, 9:00 AM - 1 :00 PM", appointment: "",
      website: "https://theshrp.org/", buttonText: "Visit SHRP Website"
    }
  ]
    return (
      <main style={{backgroundColor: '#f8f8f8'}}>
        <div>Community Partners</div>
        <h1 className={styles.titleText}> Community Partners</h1>
        <p className={styles.subtitleText}>Our trusted allies supporting our mission beyond the our clinics.</p>
        <div className={styles.partnersGrid}>
          {partners.map((partners, index) => 
            <div key={index} className={styles.partnersCard}>
              <h2 className={styles.partnersName}>{partners.name}</h2>
              <p className={styles.partnersDescription}>{partners.description}
                <Image 
                src={text.iconImages["location"]} width={39} height={39} alt="location">
                </Image>
              </p>
              <p className={styles.locationText}>{partners.location}</p>
              <p className={styles.dateText}>{partners.date}</p>
              <p className={styles.appointmentText}>{partners.appointment}</p>
              <button
                className={styles.button}
                onClick={() => window.location.href = partners.website}>
                  {partners.buttonText}
              </button>
            </div>
          )}
        </div>
      </main>
    );
  }