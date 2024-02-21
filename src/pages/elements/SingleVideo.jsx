import React from "react";
import Badge from "../../components/Badge";
import StyledVideo from "../../components/StyledVideo";

const SingleVideo = () => {
  return (
    <>
      <section className="py-5 bg__dark">
        <div className="container py-lg-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11  col-xxl-9">
              <div className="d-flex justify-content-center text-center">
                <div>
                  <Badge content="Our History" color="secondary" />
                  <h1 className="display-5 cabin text__light mt-3">
                    Strategy for Every Stage in 
                    <br className="d-lg-block d-none" />
                    the Client's Journey
                  </h1>
                  <p className="mt-2 lato text__light">
                    Ippsum is the result of synergy between our teams and our
                    customers. Our company culture is focused on
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
    </>
  );
};

export default SingleVideo;
