import React from "react";
import { FaStar } from "react-icons/fa6";
const TestimonialCard = (props) => {
  return (
    <>
      <div className="testimonial__card">
        <div className="testimonial__content">
          <div className="testimonial__content__header d-flex align-items-center flex-wrap justify-content-lg-between justify-content-start gap-lg-0 gap-3">
            <div className="d-flex gap-2 align-items-center">
              <img src={props.companyLogo} alt="company logo" />
              <h5 className="fw-bold mb-0 nunito">{props.companyname}</h5>
            </div>
            <div className="d-flex gap-2 align-items-center text__secondary fs-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="text__gray fw-light cabin mt-4">
            {props.testimonialdesc}
          </p>
        </div>
        <div className="testimonial__footer mt-3 d-flex align-items-center gap-2">
          <img src={props.TestiUser} alt="" />
          <div className="d-flex flex-column gap-0">
            <p className="nunito mb-0">{props.user}</p>
            <p className="nunito mb-0 text__gray1 small">
              {props.userposition}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
