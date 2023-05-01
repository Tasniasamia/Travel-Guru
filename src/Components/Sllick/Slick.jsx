import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './index.css'
import './Slick.css'
// import required modules
import { Pagination } from "swiper";

export default function Slick() {
  return (
    <div style={{display:"flex"}}>
   <div style={{width:"30%"}}>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iste, facere placeat amet excepturi incidunt aspernatur quisquam dolores aut! Repudiandae cumque dolor earum dolore veniam tempora illo, maxime quo voluptates.</p>
   </div>
            <div style={{width:"70%"}}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper></div>
    </div>
  );
}
