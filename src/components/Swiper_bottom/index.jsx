import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import image1 from "../../assets//swiper1.webp";
import image2 from "../../assets/swiper2.webp";
import image3 from "../../assets/swiper3.webp";
import image4 from "../../assets/swiper4.webp";
import image5 from "../../assets/swiper5.webp";

const ImageSwiper = () => {
  return (
    <div className="mt-[20px] w-[1340px]">
      <div className="py-[20px] px-[20px] mx-auto  rounded-[10px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          className="pb-8"
        >
          <SwiperSlide>
            <img
              src={image1}
              alt="Image 1"
              className="w-full h-auto rounded-[15px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image2}
              alt="Image 2"
              className="w-full h-auto rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image3}
              alt="Image 3"
              className="w-full h-auto rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image4}
              alt="Image 4"
              className="w-full h-auto rounded-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={image5}
              alt="Image 5"
              className="w-full h-auto rounded-md"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSwiper;
