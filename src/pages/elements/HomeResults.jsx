import React from "react";
import Badge from "../../components/Badge";
import Person1 from "../../assets/img/person1.png";
import Person2 from "../../assets/img/person2.png";
import Person3 from "../../assets/img/person3.png";
import brandimg1 from "../../assets/img/fortune.png";
import brandimg2 from "../../assets/img/brand.png";
import brandimg3 from "../../assets/img/point.png";
import CompanyDiv from "../../components/CompanyDiv";
const HomeResults = () => {
  return (
    <>
      <section className="my-5 py-lg-2">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <Badge
                content="Let the results speak for themselves"
                color="secondary"
              />
              <h1 className="aileron text-uppercase mt-3">
                We have cooperated with +800{" "}
                <br className="d-xl-block d-none" /> ambitious companies
              </h1>
              <p className="mt-2 lato fw-light">
                Hear how we have supported a selection of our customers'
                inspiring growth journeys.
              </p>
              <div className="row mx-0 mt-5 gap-lg-0 gap-3">
                <div className="col-lg-4">
                  <CompanyDiv
                    title="CEO at Company"
                    brandimg={brandimg1}
                    bgImg={Person1}
                  />
                </div>
                <div className="col-lg-4">
                  <CompanyDiv
                    title="Manager"
                    brandimg={brandimg2}
                    bgImg={Person2}
                  />
                </div>
                <div className="col-lg-4">
                  <CompanyDiv
                    title="CEO at Company"
                    brandimg={brandimg3}
                    bgImg={Person1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeResults;
