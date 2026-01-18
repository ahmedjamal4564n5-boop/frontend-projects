import React from "react";
import Prodect from "./Prodect";
import "./slideProdect.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
function SlideProdect({ date, title }) {
  return (
    <>
      <div className="slider-prodect">
        <div className="contaner">
          <div className="text">
            <h2>{title}</h2>
            <p>Add bestseliing products To Weekly line up</p>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2, // فون
              },
              768: {
                slidesPerView: 3, // تابلت
              },
              1024: {
                slidesPerView: 5, // لابتوب وشاشات كبيرة
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
          >
            {date.map((item) => (
              <SwiperSlide>
                <Prodect item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SlideProdect;
