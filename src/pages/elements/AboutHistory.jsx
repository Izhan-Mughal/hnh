import React from "react";
import Badge from "../../components/Badge";
import StyledVideo from "../../components/StyledVideo";

const AboutHistory = () => {
  return (
    <section className="my-5 py-lg-5">
      <div className="container ">
        <div className="row mx-0 justify-content-center">
          <div className="col-xxl-10">
            <div className="d-flex justify-content-center text-center">
              <div>
                <Badge content="Our History" color="primary" textwhite />
                <h1 className="display-5 cabin mt-3">
                  Better Website Means A <br className="d-lg-block d-none" />
                  User Experience
                </h1>
                <p className="mt-2 lato">
                  Ippsum is the result of synergy between our teams and our
                  customers. Our company culture is focused on{" "}
                  <br className="d-lg-block d-none" /> excellent productivity,
                  customer satisfaction, respect for team and individual
                  achievements.
                </p>
                <StyledVideo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
