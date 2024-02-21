import React from "react";
import Background from "../../assets/img/HeroHome.png";
import { FaRegCalendarDays } from "react-icons/fa6";

const HomeBanner = () => {
  return (
    <>
      <section
        className="banner__home"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container pt-1 pb-lg-0 pb-5">
          <div className="banner__content">
            <h1 className="text__primary text-uppercase aileron mb-0">
              Digital Marketing
            </h1>
            <h1 className="text__light text-uppercase aileron mb-0">
              That Creates
            </h1>
            <h1 className="text__stroke text-uppercase aileron display-5 mt-0">
              Results
            </h1>
            <p className="text__light lato">
              We are not like other agencies. We are ambitious on our own behalf
              and on behalf of our customers, and only want to work with
              projects that make sense and that we ourselves believe in.
            </p>
            <div className="d-flex gap-lg-2 gap-3 flex-wrap justify-content-start align-items-center">
              <button className="btn btn__dark">Our Services</button>
              <button className="btn btn__light ps-1 d-flex align-items-center gap-2">
                <span
                  className="bg__primary text__light rounded-circle d-flex justify-content-center align-items-center"
                  style={{ width: "35px", height: "35px" }}
                >
                  <FaRegCalendarDays />
                </span>
                Book A Meeting
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
