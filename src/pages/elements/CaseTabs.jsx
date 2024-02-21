import React, { useState } from "react";
import CardImage1 from "../../assets/img/CardTab.png";
import PlusGold from "../../assets/img/PlusGold.png";
import { Link } from "react-router-dom";
const CaseTabs = () => {
  const [activeClass, setactiveClass] = useState(0);
  const [activeContent, setactiveContent] = useState(0);
  const setmyActive = (values) => {
    setactiveClass(values);
    setactiveContent(values);
  };
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0 justify-content-center">
                <div className="col-lg-10 ">
                  <div className="casetab__div d-flex flex-lg-row flex-column  py-3 gap-lg-4 gap-3">
                    <button
                      onClick={() => {
                        setmyActive(0);
                      }}
                      className={
                        activeClass === 0 ? `case__btn  active` : `case__btn`
                      }
                    >
                      All
                    </button>
                    <button
                      onClick={() => {
                        setmyActive(1);
                      }}
                      className={
                        activeClass === 1 ? `case__btn  active` : `case__btn`
                      }
                    >
                      Taxes & Efficiency
                    </button>
                    <button
                      onClick={() => {
                        setmyActive(2);
                      }}
                      className={
                        activeClass === 2 ? `case__btn  active` : `case__btn`
                      }
                    >
                      Investment Banking
                    </button>
                    <button
                      onClick={() => {
                        setmyActive(3);
                      }}
                      className={
                        activeClass === 3 ? `case__btn  active` : `case__btn`
                      }
                    >
                      Financial Plan
                    </button>
                    <button
                      onClick={() => {
                        setmyActive(4);
                      }}
                      className={
                        activeClass === 4 ? `case__btn  active` : `case__btn`
                      }
                    >
                      Audit & Evaluation
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-lg-3">
                <div className="bg__secondary2 px-2 py-3 rounded-5 w-100">
                  <div className="row mx-0 gap-lg-0 gap-4">
                    {activeClass === 1 ? (
                      <>
                        <Link to="/casestudysingle" className="col-lg-4 d-block">
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
                        <Link to="/casestudysingle" className="col-lg-4 d-block">
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
                        <Link to="/casestudysingle" className="col-lg-4 d-block">
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
                      </>
                    ) : activeClass === 2 ? (
                      <Link to="/casestudysingle" className="col-lg-4 d-block">
                        <div
                          className="card__tab"
                          data="Taxes"
                          style={{ backgroundImage: `url(${CardImage1})` }}
                        >
                          <img src={PlusGold} className="plus__gold" alt="" />
                          <p className="fs-5 category__tab lato">
                            Investment Banking
                          </p>
                          <p className="category__genre lato">Business</p>
                        </div>
                      </Link>
                    ) : activeClass === 3 ? (
                      <Link to="/casestudysingle" className="col-lg-4 d-block">
                        <div
                          className="card__tab"
                          data="Taxes"
                          style={{ backgroundImage: `url(${CardImage1})` }}
                        >
                          <img src={PlusGold} className="plus__gold" alt="" />
                          <p className="fs-5 category__tab lato">
                            Financial Plan
                          </p>
                          <p className="category__genre lato">Business</p>
                        </div>
                      </Link>
                    ) : activeClass === 4 ? (
                      <Link to="/casestudysingle" className="col-lg-4 d-block">
                        <div
                          className="card__tab"
                          data="Taxes"
                          style={{ backgroundImage: `url(${CardImage1})` }}
                        >
                          <img src={PlusGold} className="plus__gold" alt="" />
                          <p className="fs-5 category__tab lato">
                            Audit & Evaluation
                          </p>
                          <p className="category__genre lato">Business</p>
                        </div>
                      </Link>
                    ) : (
                      <>
                        <Link
                          to="/casestudysingle"
                          className="col-lg-4 d-block text-decoration-none"
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
                          className="col-lg-4 d-block text-decoration-none"
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
                          className="col-lg-4 d-block text-decoration-none"
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
                        <Link
                          to="/casestudysingle"
                          className="col-lg-4 mt-lg-3 d-block text-decoration-none"
                        >
                          <div
                            data="Audit"
                            className="card__tab"
                            style={{ backgroundImage: `url(${CardImage1})` }}
                          >
                            <img src={PlusGold} className="plus__gold" alt="" />
                            <p className="fs-5 category__tab lato">
                              Audit & Evaluation
                            </p>
                            <p className="category__genre lato">Business</p>
                          </div>
                        </Link>
                        <Link
                          to="/casestudysingle"
                          className="col-lg-4 mt-lg-3 d-block text-decoration-none"
                        >
                          <div
                            className="card__tab"
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
                          className="col-lg-4 mt-lg-3 d-block text-decoration-none"
                        >
                          <div
                            className="card__tab"
                            style={{ backgroundImage: `url(${CardImage1})` }}
                          >
                            <img src={PlusGold} className="plus__gold" alt="" />
                            <p className="fs-5 category__tab lato">
                              Taxes & Efficiency
                            </p>
                            <p className="category__genre lato">Business</p>
                          </div>
                        </Link>
                      </>
                    )}
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

export default CaseTabs;
