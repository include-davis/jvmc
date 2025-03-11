"use client";
import styles from "./page.module.scss";
import Image from "next/image";
import data from "../_data/clinic-schedule.json";
import { MdInsertInvitation } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";

export default function ClinicSchedule() {
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>{data.title}</h2>
          <h4>{data.subtitle}</h4>
        </div>

        <div className={styles.gradientContainer}>
          <div className={styles.gradient}>
            <Image src={data.gradient} alt={data.gradient_alt} fill={true} />
          </div>
        </div>

        <div className={styles.gcal}>
          <div className={styles.calendar}>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=a6298014dd9ccad37eb2b34842045e9e6991da9348b88ce3139b4688cb07bf58%40group.calendar.google.com&ctz=America%2FLos_Angeles"
              style={{ border: "solid 1px #777" }}
              width="1040"
              height="696"
            ></iframe>
          </div>
          <div className={styles.key}>
            <h4>Calendar Key</h4>
            {Object.entries(data.key).map(([key, clinic]) => (
              <div key={key} className={styles.keyElem}>
                <div
                  className={styles.circ}
                  style={{ backgroundColor: `var(${clinic.color})` }}
                ></div>
                <p className={styles.title}>{clinic.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.infocards}>
          {Object.entries(data.info).map(([key, clinic]) => (
            <div key={key} className={styles.card}>
              <div className={styles.info}>
                <h4>{clinic.title}</h4>
                <p>{clinic.paragraph}</p>
                <div className={styles.tm}>
                  <div className={styles.text}>
                    <MdInsertInvitation size={24} color="var(--emerald)" />
                    <p>{clinic.time}</p>
                  </div>
                  <div className={styles.text}>
                    <IoMdInformationCircle size={24} color="var(--emerald)" />
                    <p>{clinic.message}</p>
                  </div>
                </div>
              </div>
              {clinic.appt === "button" ? (
                <a
                  target="_blank"
                  href="https://www.genderhealthcenter.org"
                  className="btn"
                >
                  Visit GHC Website
                </a>
              ) : (
                <p className={styles.appt}>{clinic.appt}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
