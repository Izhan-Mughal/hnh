import React from "react";
import Badge from "./Badge";
import { FaAngleRight } from "react-icons/fa";
import PricingPattern from "../assets/img/pricingpattern.png";
const Plan = () => {
  return (
    <>
      <div className="pricing__plan text-start round__radius bg-white w-100 p-4">
        <div className="bg__dark2 round__radius p-4 position-relative">
          <img src={PricingPattern} alt="" />
          <p className="fs-5 text__light lato fw-bold">Basic Plan</p>
          <p className=" text__gray5 lato">
            The argument in favor of using to filler text goes something.
          </p>
          <div className="d-flex gap-2 align-items-center">
            <h2 className="text__light cabin mb-0">$35 </h2>
            <Badge color="dark4" content="Monthly" textwhite />
          </div>
        </div>
        <div className="mt-4 px-xl-3">
          <div className="d-flex gap-4">
            <div>
              <FaAngleRight />
            </div>
            <div>
              <p className="fw-bold text__dark lato">24/7 System Monitoring</p>
            </div>
          </div>
          <div className="d-flex gap-4">
            <div>
              <FaAngleRight />
            </div>
            <div>
              <p className="fw-bold text__dark lato">24/7 System Monitoring</p>
            </div>
          </div>
          <div className="d-flex gap-4">
            <div>
              <FaAngleRight />
            </div>
            <div>
              <p className="fw-bold text__dark lato">24/7 System Monitoring</p>
            </div>
          </div>
          <div className="d-flex gap-4">
            <div>
              <FaAngleRight />
            </div>
            <div>
              <p className="fw-bold text__dark lato">24/7 System Monitoring</p>
            </div>
          </div>
          <button>Get This Plan</button>
        </div>
      </div>
    </>
  );
};

export default Plan;
