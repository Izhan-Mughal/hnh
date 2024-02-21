import React from "react";
import companyLogo from "../../assets/img/companyLogo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TestiUser from "../../assets/img/testiuser.png";
import TestimonialCard from "../../components/TestimonialCard";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const HomeTestimonials = () => {
  return (
    <>
      <section className="my-5 pt-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9 px-xxl-0">
              <div id="testimonial" className="">
                <div className="d-flex justify-content-lg-between">
                  <h1 className="aileron text-uppercase">
                    What our customers say
                  </h1>
                  <div className="d-lg-flex d-none gap-4">
                    <button className="my-swiper-button-prev">
                      <FaAngleLeft />
                    </button>
                    <button className="my-swiper-button-next">
                      <FaAngleRight />
                    </button>
                  </div>
                </div>
                <Swiper
                  className="pt-5"
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
                      slidesPerView: 1.5,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                    1280: {
                      slidesPerView: 2,
                    },
                    1400: {
                      slidesPerView: 2,
                    },
                    1700: {
                      slidesPerView: 2,
                    },
                    1800: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide>
                    <TestimonialCard
                      companyLogo={companyLogo}
                      companyname="Company"
                      user="Jacob"
                      userposition="Marketing Lead at Google"
                      testimonialdesc="  Lorem Ipsum has been the industry's standard from dummy text ever
                  since the unknown printer to galley of type and make a type specimen
                  book 😇."
                      TestiUser={TestiUser}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestimonialCard
                      companyLogo={companyLogo}
                      companyname="Company"
                      user="Jacob"
                      userposition="Marketing Lead at Google"
                      testimonialdesc="  Lorem Ipsum has been the industry's standard from dummy text ever
                  since the unknown printer to galley of type and make a type specimen
                  book 😇."
                      TestiUser={TestiUser}
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <TestimonialCard
                      companyLogo={companyLogo}
                      companyname="Company"
                      user="Jacob"
                      userposition="Marketing Lead at Google"
                      testimonialdesc="  Lorem Ipsum has been the industry's standard from dummy text ever
                  since the unknown printer to galley of type and make a type specimen
                  book 😇."
                      TestiUser={TestiUser}
                    />
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

export default HomeTestimonials;
