import React from "react";
import Badge from "../../components/Badge";
import AboutImage from "../../assets/img/homeabout.png";
import DetailBox from "../../components/DetailBox";

const HomeAbout = () => {
  return (
    <>
      <section className="pt-lg-4">
        <div className="container my-5">
          <div className="row mx-0 align-items-center gap-lg-0 gap-4">
            <div className="col-lg-6 col-xl-5 col-xxl-4 h-100">
              <Badge color="secondary" content="About Us" />
              <h1 className="display-5 cabin mt-4">
                About our Consuting Agency Team
              </h1>
              <p className="lato fw-bold fs-5 mt-3">
                We create experiences and build products that make business grow
              </p>
              <p className="lato fw-regular text__gray2">
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
              <div className="box__details mt-5">
                <div className="row mx-0 flex-lg-nowrap">
                  <div className="col-lg-6">
                    <DetailBox
                      title="400+"
                      genre="Business Services"
                      icon="star"
                      icon__color="secondary"
                    />
                  </div>
                  <span className="vr"></span>
                  <div className="col-lg-6">
                    <DetailBox
                      title="100+"
                      genre="Happy Customer"
                      icon="smiley"
                      icon__color="green"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-7 col-xxl-8 d-flex justify-content-lg-end justify-content-center "
              style={{ height: "auto" }}
            >
              <img
                src={AboutImage}
                alt="About Image"
                className="ms-lg-auto me-lg-0 mx-auto img-fluid about__img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
