import React from "react";
import CountUp from "react-countup";

const HomeStats = () => {
  return (
    <section className="my-5 py-lg-5">
      <div className="container">
        <div className="row mx-0 justify-content-center">
          <div className="col-xl-11 col-xxl-9">
            <div className="row mx-0 gap-lg-0 gap-4 align-items-center">
              <div className="col-lg-3 d-flex justify-content-center text-center">
                <div>
                  <h1 className="cabin display-5 fw-bold">
                    <CountUp end={1200} duration={2} />+
                  </h1>
                  <p className="cabin fw-bold text__gray">Services</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center text-center">
                <div>
                  <h1 className="cabin display-5 fw-bold">
                    <CountUp end={234} duration={2} />+
                  </h1>
                  <p className="cabin fw-bold text__gray">Team Members</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center text-center">
                <div>
                  <h1 className="cabin display-5 fw-bold">
                    <CountUp end={345} duration={2} />+
                  </h1>
                  <p className="cabin fw-bold text__gray">Happy Customer</p>
                </div>
              </div>
              <div className="col-lg-3 d-flex justify-content-center text-center">
                <div>
                  <h1 className="cabin display-5 fw-bold">
                    <CountUp end={653} duration={2} />+
                  </h1>
                  <p className="cabin fw-bold text__gray">Creative Idea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStats;
