import React from "react";
import Badge from "../../components/Badge";
import CompanyDiv from "../../components/CompanyDiv";
import Person1 from "../../assets/img/person1.png";
import Person2 from "../../assets/img/person2.png";
import Person3 from "../../assets/img/person3.png";
import brandimg1 from "../../assets/img/fortune.png";
import brandimg2 from "../../assets/img/brand.png";
import brandimg3 from "../../assets/img/point.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AboutTeam = () => {
  return (
    <section className="py-5 bg__secondary2">
      <div className="container py-lg-5">
        <div className="row mx-0 justify-content-center">
          <div className="col-xl-11 col-xxl-9">
            <Badge content="Our Team" color="secondary" />
            <h1 className="aileron text-capitalize mt-3">
              We champion the bold to <br className="d-xl-block d-none" />{" "}
              achieve the extraordinary
            </h1>
            <p className="mt-2 lato fw-light">
              Ippsum is the result of synergy between our teams and our
              customers. Our company culture{" "}
              <br className="d-xl-block d-none" /> is focused on excellent
              productivity, customer satisfaction, respect for team.
            </p>
            <div className="row mx-0 mt-5 gap-md-0 gap-3">
              <Link
                to="/team"
                className="col-lg-4 col-md-6 text-reset text-decoration-none"
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
              <div className="col-lg-4 col-md-6">
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
              </div>
              <div className="col-lg-4 col-md-6 mt-md-3 mt-lg-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
