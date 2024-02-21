import React from "react";
import logo from "../assets/img/logo.png";
import footerbg from "../assets/img/footerbg.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer style={{ backgroundImage: `url(${footerbg})` }}>
        <div className="container py-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9 px-0">
              <div className="row gap-lg-0 gap-4 mx-0 flex-lg-nowrap">
                <div className="col-lg-3 d-flex justify-content-lg-end justify-content-center align-items-center">
                  <img src={logo} className="img-fluid" alt="" />
                </div>
                <div className="col-lg d-lg-block d-none">
                  <div className="vr2"></div>
                </div>
                <div className="col-lg">
                  <Link
                    to="#"
                    className="footer__head text-white text-decoration-none fs-5 nunito"
                  >
                    Product
                  </Link>
                  <div className="footer__line"></div>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-4"
                  >
                    &bull; Service
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; FAQ
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Single Service
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Get Quote
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Prices
                  </Link>
                </div>
                <div className="col-lg">
                  <Link
                    to="#"
                    className="footer__head text-white text-decoration-none fs-5 nunito"
                  >
                    Company
                  </Link>
                  <div className="footer__line"></div>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-4"
                  >
                    &bull; Address
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; News
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Contracts
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Testimonials
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Our Team
                  </Link>
                  <Link
                    to="#"
                    className="footer__head d-block text-white text-decoration-none  lato mt-2"
                  >
                    &bull; Our Approach
                  </Link>
                </div>
                <div className="col-lg">
                  <Link
                    to="#"
                    className="footer__head text-white text-decoration-none fs-5 nunito"
                  >
                    Address
                  </Link>
                  <div className="footer__line"></div>

                  <p className="mt-4 text__light lato">
                    1438 W Blancke St, kiyev port south USA, America
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-4">
          <hr className="my-0 text__light mx-0" style={{ opacity: 0.2 }} />
          <p className="text-center text__light mt-4 mb-0">
            ©2024 HnH Tech Solutions. All rights reserved | Terms of Service |
            Privacy Policy
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
