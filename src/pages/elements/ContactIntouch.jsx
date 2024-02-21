import React from "react";
import ContactGetInTouch from "../../assets/img/ContactGetInTouch.png";
import Badge from "../../components/Badge";
import CallIcon from "../../assets/img/callicon.png";
import MailIcon from "../../assets/img/mailicon.png";
import LocationIcon from "../../assets/img/locationicon.png";
const ContactIntouch = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0 gap-lg-0 align-items-center gap-5">
                <div className="col-lg-6">
                  <img src={ContactGetInTouch} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                  <div className="ps-xl-5">
                    <Badge content="Let's Talk" color="primary" textwhite />
                    <h1 className="cabin mt-3">Get In Touch With Us</h1>
                    <p className="text__gray2 lato mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <div className="d-flex mt-4 gap-3 align-items-center">
                      <div>
                        <img src={CallIcon} className="img-fluid" alt="" />
                      </div>
                      <div>
                        <p className="text__gray2 lato mb-0 ">
                          Have Any Question?
                        </p>
                        <p className="text__dark fw-bold lato mb-0 ">
                          Free +01 238 543 987
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-4 gap-3 align-items-center">
                      <div>
                        <img src={MailIcon} className="img-fluid" alt="" />
                      </div>
                      <div>
                        <p className="text__gray2 lato mb-0 ">Write Email</p>
                        <p className="text__dark fw-bold lato mb-0 ">
                          Info@consultalk.com
                        </p>
                      </div>
                    </div>
                    <div className="d-flex mt-4 gap-3 align-items-center">
                      <div>
                        <img src={LocationIcon} className="img-fluid" alt="" />
                      </div>
                      <div>
                        <p className="text__gray2 lato mb-0 ">Visit Anytime</p>
                        <p className="text__dark fw-bold lato mb-0 ">
                          King Street, Prior Lake, New York.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactIntouch;
