import React from "react";
import Badge from "../../components/Badge";
import ClientIcon from "../../assets/img/clienticon.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import AboutClientCard from "../../components/AboutClientCard";
const AboutClients = () => {
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container py-lg-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div>
                  <Badge color="primary" content="Growing with our clients" />
                  <h1 className="cabin mt-2">Our core values & principles</h1>
                  <p className="lato mb-0">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity beta test.{" "}
                    <br className="d-lg-block d-none" />
                    Override the digital divide with additional from DevOps.
                  </p>
                </div>
                <button className="btn btn-dark rounded-pill bg__dark px-4 py-2 lato">
                  Get in Touch
                </button>
              </div>
              <div className="mt-4">
                <div className="row mx-0 gap-lg-0 gap-4 justify-content-lg-start justify-content-center">
                  <div className="col-lg-3">
                    <AboutClientCard
                      ClientIcon={ClientIcon}
                      Heading="Creative Ideas"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, quas!"
                      linkpath="/abou"
                    />
                  </div>
                  <div className="col-lg-3">
                    <AboutClientCard
                      ClientIcon={ClientIcon}
                      Heading="Creative Ideas"
                      content="Lorem ipsum dolor sit amet  ."
                      linkpath="/abou"
                    />
                  </div>
                  <div className="col-lg-3">
                    <AboutClientCard
                      ClientIcon={ClientIcon}
                      Heading="Creative Ideas"
                      content="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, quas!"
                      linkpath="/abou"
                    />
                  </div>
                  <div className="col-lg-3">
                    <AboutClientCard
                      ClientIcon={ClientIcon}
                      Heading="Creative Ideas"
                      content="Lorem ipsum dolor sit amet  ."
                      linkpath="/abou"
                    />
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

export default AboutClients;
