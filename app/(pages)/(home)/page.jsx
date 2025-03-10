'use client'
import HomepageCarousel from '../_components/HomepageCarousel/HomepageCarousel';
import data from '../_data/home.json';
import "swiper/css";
import "swiper/css/free-mode";

export default function Home() {
  return (
    <main>
      <HomepageCarousel data={data.carousel} />
    </main>
  );
}
