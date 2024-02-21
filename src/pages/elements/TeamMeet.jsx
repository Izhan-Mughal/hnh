import React from "react";
import Person1 from "../../assets/img/person1.png";
import Person2 from "../../assets/img/person2.png";
import Person3 from "../../assets/img/person3.png";
import CompanyDiv from "../../components/CompanyDiv";
import { Link } from "react-router-dom";

const TeamMeet = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="d-flex justify-content-lg-between justify-content-start align-items-center flex-wrap gap-lg-0 gap-4">
                <div>
                  <h1 className="cabin">Meet Our Great Team</h1>
                  <p className="lato text__gray2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt{" "}
                    <br className="d-lg-block d-none" /> ut labore et dolore
                    magna aliqua. enim ad minim veniam, quis nostrud
                    exercitation.
                  </p>
                </div>
                <div>
                  <button className="btn rounded-pill px-4 py-2 bg__dark text__light hover__dark">
                    <span className="d-block py-1">Join Our Team</span>
                  </button>
                </div>
              </div>
              <div className="row mx-0 mt-5 gap-md-0 gap-3">
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6 text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="CEO at Company"
                    transparent
                    data
                    name="Sarah jasmine"
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg1}
                    bgImg={Person1}
                  />
                </Link>
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6  text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="Manager"
                    transparent
                    data
                    name="David Steve"
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg2}
                    bgImg={Person2}
                  />
                </Link>
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6 mt-md-4 mt-lg-0 text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="CEO at Company"
                    transparent
                    data
                    name="Alex T."
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg3}
                    bgImg={Person1}
                  />
                </Link>
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6 mt-md-4 text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="CEO at Company"
                    transparent
                    data
                    name="Sarah jasmine"
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg1}
                    bgImg={Person1}
                  />
                </Link>
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6 mt-md-4 text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="Manager"
                    transparent
                    data
                    name="David Steve"
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg2}
                    bgImg={Person2}
                  />
                </Link>
                <Link
                  to="/teamsingle"
                  className="col-lg-4 col-md-6 mt-md-4 text-decoration-none text-reset"
                >
                  <CompanyDiv
                    title="CEO at Company"
                    transparent
                    data
                    name="Alex T."
                    linktag="/about"
                    description="Leverage agile frameworks to provide a robust synopsis for
                  high level overviews."
                    //   brandimg={brandimg3}
                    bgImg={Person1}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMeet;
