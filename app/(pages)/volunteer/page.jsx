import Link from "next/link";
import data from "@/app/(pages)/_data/volunteer.json";
import styles from "./page.module.scss";
import Image from "next/image";
import text from "@/app/(pages)/_data/volunteer.json";
import VolunteerCard from "../_components/VolunteerCard/VolunteerCard";
import VolunteerGeneralInfoFallbackData from "@/app/(pages)/_data/general-info.json";

export async function getVolunteerGeneralInfo() {
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
    const parsedData = {
      landingDescription: data.body.volunteer_page_description,
      landingImage: data.body.volunteer_page_image[0],
      landingImageAlt: data.body.volunteer_page_image_alt_text,
    };
    // console.log(parsedData);
    return parsedData;
  } catch (e) {
    console.error(
      `Failed to fetch general-info for volunteer page: ${e.message}`
    );
    return {
      landingDescription:
        VolunteerGeneralInfoFallbackData.volunteer_page_description,
      landingImage: VolunteerGeneralInfoFallbackData.volunteer_page_image,
      landingImageAlt:
        VolunteerGeneralInfoFallbackData.volunteer_page_image_alt_text,
    };
  }
}

const cards = [
  {
    title: "Undergraduate Students at UC Davis",
    direction: "right",
    image: "/images/UGrad.jpg",
    altText: "Undergraduate Students",
    icon: (
      <Image
        src={"/undergrad-icon.svg"}
        alt={"undergrad icon"}
        objectFit="cover"
        fill="true"
      />
    ),
    mainText: (
      <>
        New cohorts are recruited during Winter Quarter annually. More
        information regarding the application process as an undergraduate
        student at UC Davis can be found on our instagram page,{" "}
        <b>
          <a href="https://instagram.com/jvmcstudents" target="_blank">
            @jvmcstudents
          </a>
        </b>
        .<br />
        <br />
        To qualify as a volunteer, undergraduates must:
        <ul>
          <li>Be an active UC Davis student</li>
          <li>Be able to commit to 3 quarters of volunteer work</li>
          <li>Be able to attend our weekly meetings</li>
        </ul>
        <br />
        Please email{" "}
        <b>
          <a href="mailto:jvmcvolunteer@gmail.com">jvmcvolunteer@gmail.com</a>
        </b>{" "}
        with questions about recruitment and/or volunteering.{" "}
        <b>
          Fill out our interest form if you would like to keep up to date on our
          recruitment cycle!
        </b>
      </>
    ),
    link: (
      <a
        href="https://forms.gle/5STumqF28u1dvUmTA"
        target="_blank"
        className="btn"
      >
        Volunteer Form
      </a>
    ),
  },
  {
    title: "Physicians",
    direction: "left",
    image: "/images/Physicians.jpg",
    altText: "Physicians",
    icon: (
      <Image
        src={"/preceptor-icon.svg"}
        alt={"preceptor icon"}
        objectFit="cover"
        fill="true"
      />
    ),
    mainText: (
      <>
        To qualify as a physician volunteer with JVMC you must be covered by UC
        Davis School of Medicine's malpractice insurance.
        <br />
        <br />
        As a UC Davis Physician you are automatically covered!
        <br />
        <br />
        <b>
          If you are not a part of the UC Davis Health System and would still
          love to volunteer, please contact us via email!
        </b>
      </>
    ),
    link: (
      <>
        <a href="mailto:jvmcvolunteer@gmail.com" className="btn">
          Email Us
        </a>
      </>
    ),
  },
  {
    title: "Medical Students: MD, PA, & NP Students",
    direction: "right",
    image: "/images/MD_Student.jpg",
    altText: "MD Students",
    icon: (
      <Image
        src={"/medicine-chest-icon.svg"}
        alt={"medicine chest icon"}
        objectFit="cover"
        fill="true"
      />
    ),
    mainText: (
      <>
        If you are looking to volunteer with JVMC as a Medical Students, please
        arrive at the clinic location at 12:30 PM. Clinic hours are from 1:00
        PM-5:00 PM.
        <br />
        <br />
        Please wear a scrub top and jeans or scrub bottoms instead of your white
        coats to be respectful to our patients. Additionally, please bring your
        student ID card and a stethoscope to the clinic.
      </>
    ),
    link: (
      <Link href="/contact-us" className="btn">
        Contact Us
      </Link>
    ),
  },
];

export default async function Volunteer() {
  const generalData = await getVolunteerGeneralInfo();

  return (
    <main className={styles.page}>
      {/* Top Section */}
      <div className={styles.top}>
        <div className={styles.header}>
          <h1 className={styles.title}>{text.title}</h1>
          <h4 className={styles.sub_title}>{text.sub_title}</h4>
        </div>
        <div className={styles.opening}>
          <Image
            className={styles.landing_photo}
            src={generalData.landingImage}
            width={521}
            height={370}
            alt={generalData.landingImageAlt}
          />
          <div className={styles.intro}>
            {/* Below is LONG_TEXT */}
            <p
              dangerouslySetInnerHTML={{
                __html: generalData.landingDescription,
              }}
            />
          </div>
        </div>
      </div>

      {/* Middle Cards */}
      <div className={styles.middle}>
        {/* VolunteerCard components */}
        <h2 className={styles.header}>Ready to Volunteer with Us?</h2>
        <div className={styles.volunteerCards}>
          {cards.map((cards, idx) => {
            return (
              <VolunteerCard
                key={idx}
                title={cards.title}
                direction={cards.direction}
                image={cards.image}
                altText={cards.altText}
                icon={cards.icon}
                mainText={cards.mainText}
                link={cards.link}
              ></VolunteerCard>
            );
          })}
        </div>

        <div className={styles.gradient1Container}>
          <div className={styles.gradient1}>
            <Image src={data.gradient1} alt={data.gradient1_alt} fill={true} />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <div className={styles.learn_more}>
          <h4>{text.bottom_title}</h4>
          <p>
            {text.bottom_text["chunk_1"]}
            <span className={styles.about_us}>
              {text.bottom_text["chunk_2"]}
            </span>
            {text.bottom_text["chunk_3"]}
          </p>
          <Link href="/about-us" className="btn">
            {text.bottom_button}
          </Link>
        </div>
      </div>

      <div className={styles.gradient2Container}>
        <div className={styles.gradient2}>
          <Image src={data.gradient2} alt={data.gradient2_alt} fill={true} />
        </div>
      </div>
    </main>
  );
}
