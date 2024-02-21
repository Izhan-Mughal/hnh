import React from "react";
import LaptopSingle from "../../assets/img/LaptopSingle.png";
const CaseSingleLaptop = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <img
                src={LaptopSingle}
                alt="Image for Case Study"
                className="img-fluid rounded-5"
              />
              <div className="row mx-0 justify-content-center">
                <div className="col-lg-10">
                  <div className="case__study__single bg__dark rounded-5 px-lg-5 px-4 d-flex flex-lg-row flex-column   py-lg-5 py-4 gap-lg-4 gap-3">
                    <div className="row mx-0 w-100">
                      <div className="col-lg-3">
                        <p className="fs-5 text__light cabin mb-2">Case Name</p>
                        <p className="text__gray5">Taxes & Efficiency</p>
                      </div>
                      <div className="col-lg-3">
                        <p className="fs-5 text__light cabin mb-2">Category</p>
                        <p className="text__gray5">Business</p>
                      </div>
                      <div className="col-lg-3">
                        <p className="fs-5 text__light cabin mb-2">Date</p>
                        <p className="text__gray5">31 September 2022</p>
                      </div>
                      <div className="col-lg-3">
                        <button className="bg__secondary rounded-pill lato border-0 py-2 px-4">
                          <span className="d-block py-1">Live Preview</span>
                        </button>
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

export default CaseSingleLaptop;
