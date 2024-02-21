import React from "react";
import Badge from "../../components/Badge";
import SliderService1 from "../../assets/img/slider__service.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import SliderCardService from "../../components/SliderCardService";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
const HomeServiceSlider = () => {
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container py-lg-5">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <Badge content="Services" color="secondary" />
              <h1 className="text-center cabin display-5 mt-3">
                Get Control Over Your Business I take{" "}
                <br className="d-xl-block d-none" /> your finance to next level{" "}
                <FaArrowRightLong />
              </h1>
            </div>
          </div>
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9 px-xxl-0">
              <div className="mt-5" id="HomeServiceSlider">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={3.5}
                  modules={[Navigation, A11y]}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
                  breakpoints={{
                    300: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 2.5,
                    },
                    1280: {
                      slidesPerView: 3,
                    },
                    1400: {
                      slidesPerView: 3,
                    },
                    1700: {
                      slidesPerView: 3.3,
                    },
                    1800: {
                      slidesPerView: 3.5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <SliderCardService />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderCardService />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderCardService />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderCardService />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SliderCardService />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServiceSlider;
