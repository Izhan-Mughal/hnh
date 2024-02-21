import React from "react";
import BookImg from "../../assets/img/booknow.png";
import Badge from "../../components/Badge";
import { FaPhone } from "react-icons/fa6";
const AboutBook = () => {
  return (
    <>
      <section className="my-5 py-lg-5 ">
        <div className="container ">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="book__now py-lg-0 py-5 px-lg-0 px-4">
                <div className="row mx-0 align-items-center gap-lg-0 gap-4 flex-lg-row flex-column-reverse">
                  <div className="col"></div>
                  <div className="col-lg-5 ">
                    <div className="pe-xxl-5">
                      <Badge content="Book Now" color="primary" textwhite />
                      <h1 className="cabin text__light mt-2">
                        Better Consult, Better Results
                      </h1>
                      <p className="mt-3 lato text__light">
                        Our software development agency has a growth up to 30%
                        per each year. If you are result-oriented, not afraid to
                        take initiative – drop us a note and join our team!
                      </p>
                      <button className="bg__secondary border-0 rounded-pill  px-4 lato fw-bold py-1 mt-2">
                        <span className="py-2 d-block">
                          <FaPhone /> +800 123 1234
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img src={BookImg} className="img-fluid" alt="" />
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

export default AboutBook;
