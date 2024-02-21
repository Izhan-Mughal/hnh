import React from "react";
import { Link } from "react-router-dom";
import CardImage1 from "../../assets/img/CardTab.png";
import PlusGold from "../../assets/img/PlusGold.png";
const MoreCaseStudy = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="">
                <h2 className="aileron text-center mb-4 pb-lg-2">
                  More Case Studies
                </h2>
                <div className="bg__secondary2 px-2 py-3 rounded-5 w-100">
                  <div className="row mx-0 gap-md-0 gap-4">
                    <Link
                      to="/casestudysingle"
                      className="col-lg-4 col-md-6 d-block text-decoration-none"
                    >
                      <div
                        className="card__tab"
                        data="Taxes"
                        style={{ backgroundImage: `url(${CardImage1})` }}
                      >
                        <img src={PlusGold} className="plus__gold" alt="" />
                        <p className="fs-5 category__tab lato">
                          Taxes & Efficiency
                        </p>
                        <p className="category__genre lato">Business</p>
                      </div>
                    </Link>
                    <Link
                      to="/casestudysingle"
                      className="col-lg-4 col-md-6 d-block text-decoration-none"
                    >
                      <div
                        className="card__tab"
                        data="Investment"
                        style={{ backgroundImage: `url(${CardImage1})` }}
                      >
                        <img src={PlusGold} className="plus__gold" alt="" />
                        <p className="fs-5 category__tab lato">
                          Investment Banking
                        </p>
                        <p className="category__genre lato">Business</p>
                      </div>
                    </Link>
                    <Link
                      to="/casestudysingle"
                      className="col-lg-4 col-md-6 mt-md-3 mt-lg-0 d-block text-decoration-none"
                    >
                      <div
                        data="Financial"
                        className="card__tab"
                        style={{ backgroundImage: `url(${CardImage1})` }}
                      >
                        <img src={PlusGold} className="plus__gold" alt="" />
                        <p className="fs-5 category__tab lato">
                          Financial Plan
                        </p>
                        <p className="category__genre lato">Business</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    to="/casestudysingle"
                    className=" d-block text-decoration-none mt-5"
                  >
                    <button className="rounded-pill hover__dark bg__dark text__light py-2 px-4">
                      Browse all Case Studies
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreCaseStudy;
