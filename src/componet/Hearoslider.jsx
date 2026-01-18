import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../img/banner_Hero1.jpg";
import img2 from "../../img/banner_Hero2.jpg";
import img3 from "../../img/banner_Hero3.jpg";
import { Link } from "react-router";

import { Autoplay, Pagination } from "swiper/modules";
function Hearoslider() {
  return (
    <>
      <div className="slidehearo">
        <div className="contaner">
          <Swiper
          loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>introducing the new</h4>
                <h3>
                  microsoft xbox <br /> 360 controller
                </h3>
                <p>windows xp/10/7/8 ps3, tv box</p>
                <Link to={"/"} className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>mini-x6u speaker</h4>
                <h3>
                  led bluetooth <br /> speeker lamp
                </h3>
                <p>upport 3.5 mm jak audio input</p>
                <Link to={"/"} className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>new arrival</h4>
                <h3>
                  xiaomi air 75
                  <br /> earbuds
                </h3>
                <p>AAC HD Sound qulity</p>
                <Link to={"/"} className="btn">
                  Shop Now
                </Link>
              </div>
              <img src={img2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Hearoslider;
