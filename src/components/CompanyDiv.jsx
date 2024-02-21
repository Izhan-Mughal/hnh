import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CompanyDiv = (props) => {
  return (
    <>
      <div
        className="companydiv"
        style={{
          backgroundImage: `url(${props.bgImg})`,
          backgroundColor: props.transparent ? `transparent` : ``,
        }}
      >
        <img src={props.brandimg} alt="" />
        <button>{props.title}</button>
      </div>
      {props.data ? (
        <div className="px-4">
          <h3 className="text-center cabin mt-3">{props.name}</h3>
          <p className="lato text-center text__gray">{props.description}</p>
          <div className="d-flex justify-content-center gap-3 fs-5">
            <Link
              to={props.linktag}
              className="text-decoration-none text-dark d-block"
            >
              <FaInstagram />
            </Link>
            <Link
              to={props.linktag}
              className="text-decoration-none text-dark d-block"
            >
              <FaFacebook />
            </Link>
            <Link
              to={props.linktag}
              className="text-decoration-none text-dark d-block"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CompanyDiv;
