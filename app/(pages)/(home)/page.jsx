'use client'
import styles from './page.module.scss';
import { useState, useRef } from "react";
import data from '../_data/home.json';
import { FaCircleChevronLeft } from "react-icons/fa6";
import { FaCircleChevronRight } from "react-icons/fa6";
import { MdInsertInvitation } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; 

export default function Home() {
  const slides = Object.values(data.carousel);

  const [activeIndex, setActiveIndex] = useState(0);
  const startXRef = useRef(0);
  const endXRef = useRef(0);
  const n = slides.length;
  const subIndex = () => {
    setActiveIndex((activeIndex + n - 1) % n);
  };
  const addIndex = () => {
    setActiveIndex((activeIndex + 1) % n);
  };

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>Explore Our Clinics!</h2>
          <h4>Discover everything JVMC has to offer.</h4>
        </div>
        <div className={styles.viewport}>
          {/* figure out the correct percentage to move each slide */}
          <div className={styles.carousel} style={{ transform: `translateX(-${(activeIndex) * 60}%)` }}>
            {slides.map((slideinfo, index) => (
            <div key={index} className={`${styles.slide} ${activeIndex === index ? styles.active:null}`}>
              <Image src={slideinfo.src} alt='image' width={'480'} height={'280'} className={styles.image}/>
              <div className={styles.info}>
                <h3>{slideinfo.title}</h3>
                <div>
                  <MdInsertInvitation className={styles.icon} size={20} color='var(--emerald)'/>
                  <p>{slideinfo.time}</p>
                </div>
                <div>
                  <IoMdInformationCircle className={styles.icon} size={20} color='var(--emerald)'/>
                  <p>{slideinfo.info}</p>
                </div>
                <a href="/clinic-schedule" className="btn">Schedule Now</a>
              </div>
            </div>))}
          </div>
        </div>
        <div className={styles.nav}>
        <button className={styles.navbttn} onClick={subIndex}><FaCircleChevronLeft size={38} color='var(--teal)'/></button>
          <div className={styles.dots}>
            {slides.map((_, index) => {
              return (<div
                key={index}
                className={`${styles.dot} ${activeIndex === index ? styles.active : null}`}
                onClick={() => setActiveIndex(index)}></div>);})}
          </div>
          <button className={styles.navbttn} onClick={addIndex}><FaCircleChevronRight size={38} color='var(--teal)'/></button>
        </div>
      </div>
    </main>
  );
}
