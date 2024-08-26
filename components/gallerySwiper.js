import React from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

import "swiper/css/navigation";
import "swiper/css";

const GallerySwiper = ({ images }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
      }}
      className="serviceSlider"
    >
      {images.map((imageUrl, index) => {
        return (
          <>
            <SwiperSlide key={index}>
              <Image
                src={imageUrl}
                alt="gallery picture"
                width={700}
                height={700}
                className="rounded-3xl"
              />
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
};

export default GallerySwiper;
