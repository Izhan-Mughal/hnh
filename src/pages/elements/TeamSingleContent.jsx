import React from "react";
import TeamSingleImg from "../../assets/img/TeamSingle.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";
const TeamSingleContent = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0 align-items-center">
                <div className="col-lg-6 pe-lg-5 ">
                  <img src={TeamSingleImg} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="row mx-0 gap-lg-0 gap-4">
                    <div className="col-lg-6 px-0">
                      <p className="fs-4 fw-bold cabin mb-0">Sarah Jasmine</p>
                      <p className="text__gray2 lato">CEO at Company</p>
                    </div>
                    <div className="col-lg-6 px-0">
                      <div className="d-flex gap-3 justify-content-center  fs-4">
                        <div>
                          <FaFacebook />
                        </div>
                        <div>
                          <FaInstagram />
                        </div>
                        <div>
                          <FaTwitter />
                        </div>
                        <div>
                          <FaLinkedin />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="lato mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit sed do.
                  </p>
                  <hr className="w-100" />
                  <p className="fs-4 cabin fw-bold mb-0">Past Experience</p>
                  <p className="lato mt-2">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit sed do.
                  </p>
                  <p className="lato">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit sed do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSingleContent;
