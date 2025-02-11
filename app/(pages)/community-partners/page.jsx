import styles from './page.module.scss';

export default function CommunityPartners() {
  const partners = [{name: 'Harm Reduction Services', description: "HRS offers free, confidential harm reduction services to improve the health and well-being of drug users, in addition to empowering local communities."},
    {name: 'Gender Health Center', description: "GHC offers free or low-cost health, legal, and support services for trans and gender-expansive communities."},
    {name: 'Stockton Harm Reduction Program', description: "SHRP offers harm reduction tools, wound care supplies, referrals to health and legal services, and advocates for social justice in Stockton."}
  ]
    return (
      <main>
        <div>Community Partners</div>
        <h1 className={styles.titleText}> Community Partners</h1>
        <p className={styles.subtitleText}>Our trusted allies supporting our mission beyond the our clinics.</p>
        <div className={styles.partnersGrid}>
          {partners.map(partners, index) => (
            <div key={index} className={styles.partnersCard}>
              <h2 className={styles.partnersName}>{partners.name}</h2>
              <p className={styles.partnersDescription}>{partners.description}</p>
            </div>
          )}
        </div>
      </main>
    );
  }