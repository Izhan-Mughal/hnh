import React from "react";
import Badge from "./Badge";
import phoneIcon from "../assets/img/iconPhone.png";
import clockIcon from "../assets/img/iconClock.png";
import locationIcon from "../assets/img/iconLocation.png";
const ContactContent = () => {
  return (
    <>
      <div>
        <Badge content="Process" color="secondary" />
        <h1 className="cabin mt-3 text-capitalize">Contact Us. It's Easy.</h1>
        <p className="mt-2  text__gray2 lato">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative.
        </p>
        <div className="d-flex align-items-center mt-lg-5 mt-4 gap-3">
          <div>
            <img src={phoneIcon} className="img-fluid" alt="" />
          </div>
          <div>
            <p className="  text__gray2 lato mb-0">Call Today</p>
            <p className="fw-bold text__dark cabin mb-1">+1 800 100 900</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5 gap-3">
          <div>
            <img src={clockIcon} className="img-fluid" alt="" />
          </div>
          <div>
            <p className="  text__gray2 lato mb-0">Monday - Friday</p>
            <p className="fw-bold text__dark cabin mb-1">9AM - 5PM</p>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5 gap-3">
          <div>
            <img src={locationIcon} className="img-fluid" alt="" />
          </div>
          <div>
            <p className="  text__gray2 lato mb-0">USA Office</p>
            <p className="fw-bold text__dark cabin mb-1">
              195 Devonshire St Boston, MA 02110
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
