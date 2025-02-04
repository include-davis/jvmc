import styles from './page.module.scss';
import VolunteerCard from '../_components/VolunteerCard/VolunteerCard';

export default function Volunteer() {
    return (
      <main>
        <div>Volunteer</div>
        {/* VolunteerCard components */}
        <VolunteerCard></VolunteerCard>
      </main>
    );
  }