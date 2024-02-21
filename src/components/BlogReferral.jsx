import React from "react";
import User from "../assets/img/BlogUser.png";
import PatternRef from "../assets/img/PatternRef.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const BlogReferral = () => {
  return (
    <>
      <section className="referral">
        <div className="row mx-0 gap-lg-0 gap-4">
          <div className="col-lg-5 position-relative">
            <img src={User} alt="" className="img-fluid user__images" />
            <img src={PatternRef} alt="" className="Pattern" />
          </div>
          <div className="col-lg-7">
            <div>
              <h2 className="cabin text__light"> Nayra Melson</h2>
              <p className="text__gray5 lato">Senior Manager</p>
              <p className="mt-3 lato text__gray5">
                Leads the global expansion of the designerz brand and overseas
                investment in solutions and innovation. Renowned coder and an
                authority on matters of industrial experience & interface.
              </p>
              <div className="d-flex gap-3 mt-3">
                <a
                  href="#"
                  className="text__light d-block text-decoration-none fs-4"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text__light d-block text-decoration-none fs-4"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text__light d-block text-decoration-none fs-4"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogReferral;
