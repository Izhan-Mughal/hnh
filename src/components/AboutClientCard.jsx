import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AboutClientCard = (props) => {
  return (
    <>
      <div className="bg-white px-4 py-5 w-100 rounded-3">
        <img src={props.ClientIcon} alt="" className="img-fluid" />
        <p className="fs-5 lato fw-bold mt-3">{props.Heading}</p>
        <p className="nunito mt-2">{props.content}</p>
        <Link
          to={props.linkpath ? props.linkpath : "/about"}
          className="fs-6 text-decoration-none text-dark lato fw-bold mt-2"
        >
          Read More &nbsp; <FaArrowRight />
        </Link>
      </div>
    </>
  );
};

export default AboutClientCard;
