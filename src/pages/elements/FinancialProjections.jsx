import React from "react";
import FinancialImg from "../../assets/img/financial.png";
import companyLogo from "../../assets/img/companyLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TestiUser from "../../assets/img/testiuser.png";
import TestimonialCard from "../../components/TestimonialCard";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import FinancialCard from "../../components/FinancialCard";
const FinancialProjections = () => {
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container py-lg-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-xxl-11 col-xxl-9">
              <div id="testimonial" className="">
                <div className="d-flex justify-content-lg-between align-items-end">
                  <div>
                    <img src={FinancialImg} className="img-fluid" alt="" />
                    <h1 className="mt-3 cabin text__dark">
                      Fimancial Projections
                    </h1>
                    <p className="text__gray2 lato mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut{" "}
                      <br className="d-lg-block d-none" /> labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco <br className="d-lg-block d-none" />{" "}
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                  <div className="d-lg-flex d-none gap-4 mb-5">
                    <button className="my-swiper-button-prev">
                      <FaAngleLeft />
                    </button>
                    <button className="my-swiper-button-next">
                      <FaAngleRight />
                    </button>
                  </div>
                </div>
                <Swiper
                  spaceBetween={0}
                  slidesPerView={3.5}
                  modules={[Navigation, A11y]}
                  navigation={{
                    nextEl: ".my-swiper-button-next",
                    prevEl: ".my-swiper-button-prev",
                  }}
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
                    1300: {
                      slidesPerView: 3.5,
                    },
                    1400: {
                      slidesPerView: 3.5,
                    },
                    1700: {
                      slidesPerView: 3.5,
                    },
                    1800: {
                      slidesPerView: 4.5,
                    },
                  }}
                >
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                  <SwiperSlide>
                    <FinancialCard />
                  </SwiperSlide>
                </Swiper>
                <div className="d-flex justify-content-center mt-3 d-lg-none gap-4">
                  <button className="my-swiper-button-prev">
                    <FaAngleLeft />
                  </button>
                  <button className="my-swiper-button-next">
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinancialProjections;
