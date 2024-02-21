import React from "react";
import SliderService1 from "../assets/img/slider__service.png";

const SliderCardService = () => {
  return (
    <>
      <div className="service__slider mx-auto">
        <div className="slider__img">
          <img src={SliderService1} className="img-fluid" alt="" />
        </div>
        <div className="service__slider__content">
          <h5 className="cabing text__dark mt-2">Audit & Evaluation</h5>
          <p className="text__gray lato fw-light mt-2">
            Get help from Alex Moore, a professional business coach with
            advanced experience on growth and business scaling.
          </p>
          <button className="lato">Learn More</button>
        </div>
      </div>
    </>
  );
};

export default SliderCardService;
