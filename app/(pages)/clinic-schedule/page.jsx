import styles from "./page.module.scss";
import Image from "next/image";
import ClinicCardFallbackData from "../_data/clinic-schedule.json";
import ClinicSchedulesCard from "../_components/ClinicSchedulesCard/ClinicSchedulesCard";

async function getClinicSchedulesCards() {
  try {
    const res = await fetch(
      `${process.env.CMS_BASE_URL}/api/content/calendar-cards?_published=true`,
      { next: { tag: "cms" } }
    );
    const data = await res.json();
    if (!data.ok || !data.body || data.body.length === 0) {
      throw new Error(data.error);
    }
    return data.body.map((card) => {
      let button_text, button_link;
      if (card.action_button_text_and_link) {
        [button_text, button_link] =
          card.action_button_text_and_link.split(",");
      }
      return {
        color: card.hex_code,
        title: card.title,
        paragraph: card.description,
        time: card.hours,
        message: card.appointment_instruction,
        action: card.action_text ? card.action_text : null,
        button_text: card.action_button_text_and_link ? button_text : null,
        button_link: card.action_button_text_and_link ? button_link : null,
      };
    });
  } catch (e) {
    console.error(`Failed to fetch calendar-cards: ${e.message}`);
    return ClinicCardFallbackData;
  }
}

export default async function ClinicSchedule() {
  const data = await getClinicSchedulesCards();

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Calendar & Clinic Schedules</h1>
          <h4>
            Need an appointment? Check availability and schedule one with our
            clincs now.
          </h4>
        </div>

        <div className={styles.gradientContainer}>
          <div className={styles.gradient}>
            <Image
              src="/images/clinicScheduleGradient.png"
              alt="Background Gradient"
              fill={true}
            />
          </div>
        </div>

        <div className={styles.gcal}>
          <div className={styles.calendar}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=a6298014dd9ccad37eb2b34842045e9e6991da9348b88ce3139b4688cb07bf58%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              width="1040"
              height="696"
            />
          </div>
          <div className={styles.key}>
            <h4>Calendar Key</h4>
            <ul>
              {data.map((clinic, key) => (
                <li key={key} className={styles.keyElem}>
                  <div
                    className={styles.circ}
                    style={{ backgroundColor: `${clinic.color}` }}
                  />
                  <p className={styles.title}>{clinic.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.infocards}>
          {data.map((clinic, key) => (
            <ClinicSchedulesCard key={key} clinic={clinic} />
          ))}
        </div>
      </div>
    </main>
  );
}
