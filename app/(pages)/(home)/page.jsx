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
  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    endXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50; 
    if (startXRef.current - endXRef.current > threshold) {
      addIndex();
    } else if (endXRef.current - startXRef.current > threshold) {
      subIndex();
    }
  };
  return (
    <main>
      <div className={styles.page}>
        <div className={styles.header}>
          <h2>Explore Our Clinics!</h2>
          <h4>Discover everything JVMC has to offer.</h4>
        </div>

        <div className={styles.carousel}>
          <Swiper effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 50, // Controls the rotation of slides
              stretch: 0, // Controls spacing between slides
              depth: 100, // Controls perspective depth
              modifier: 1, // Controls intensity
              slideShadows: true, // Adds shadow to slides
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination, EffectCoverflow]}
            className="swiper-container">
          {slides.map((data, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.content}>
              <Image src={data.src} alt='' width={'480'} height={'280'} className={styles.image}/>
              <div className={styles.info}>
                <h3>{data.title}</h3>
                <div>
                  <MdInsertInvitation size={18} color='var(--emerald)'/>
                  <p>{data.time}</p>
                </div>
                <div>
                  <IoMdInformationCircle size={18} color='var(--emerald)'/>
                  <p>{data.info}</p>
                </div>
                <a href="/clinic-schedule" className="btn">Schedule Now</a>
              </div>
            </div>
          </SwiperSlide>))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
