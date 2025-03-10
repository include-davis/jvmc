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
import "swiper/css";
import "swiper/css/free-mode";

export default function Home() {
  const slides = Object.values(data.carousel);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const numSlides = 4;

  const handleSwiperInit = (swiper) => {
    swiperRef.current = swiper;
  };

  const subIndex = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const addIndex = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>Explore Our Clinics!</h2>
          <h4>Discover everything JVMC has to offer.</h4>
        </div>
        <Swiper
          slidesPerView={2.30}
          spaceBetween={-160}
          centeredSlides={true}
          autoplay={false}
          loop={true}
          onSwiper={handleSwiperInit}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className={styles.swiper}>
          {slides.map((slideinfo, index) => (
          <SwiperSlide key={index} className={styles.swiperslide} style={{ zIndex: index === activeIndex ? 10 : 1 }}>
            <div className={`
                ${styles.slide} 
                ${index === activeIndex ? styles.active : styles.inactive}
                ${index === activeIndex || (activeIndex + numSlides + 1) % numSlides === index || (activeIndex + numSlides - 1) % numSlides === index? styles.shown : styles.unshown }
              `}>
              <Image src={slideinfo.src} alt="image" width={480} height={280} className={styles.image} />
              <div className={styles.info}>
                <h3>{slideinfo.title}</h3>
                <div>
                  <MdInsertInvitation className={styles.icon} size={20} color="var(--emerald)" />
                  <p>{slideinfo.time}</p>
                </div>
                <div>
                  <IoMdInformationCircle className={styles.icon} size={20} color="var(--emerald)" />
                  <p>{slideinfo.info}</p>
                </div>
                <a href="/clinic-schedule" className="btn">Schedule Now</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
        <div className={styles.nav}>
        <button className={styles.navbttn} onClick={subIndex}><FaCircleChevronLeft size={38} color='var(--teal)'/></button>
        <div className={styles.dots}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
              onClick={() => {
                if (swiperRef.current) {
                  swiperRef.current.slideToLoop(index);
                }
              }}></div>
        ))}</div>
        <button className={styles.navbttn} onClick={addIndex}><FaCircleChevronRight size={38} color='var(--teal)'/></button>
        </div>
      </div>
    </main>
  );
}
