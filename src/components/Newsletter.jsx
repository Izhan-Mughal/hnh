import React from "react";
import NewsBack from "../assets/img/newsback.png";
const Newsletter = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="bg__dark rounded-5 pb-5 pt-4 pt-lg-5  px-lg-5 px-3 position-relative newsletter">
                <div
                  className="row mx-0 gap-lg-0 gap-4 py-lg-3 align-items-center position-relative"
                  style={{ zIndex: "2" }}
                >
                  <div className="col-lg-6">
                    <div className="">
                      <h1 className="text__light cabin mt-3">
                        Subscribe Our NewsLetter
                      </h1>
                      <p className="lato text__gray5 ">
                        Posuere sollicitudin aliquam ultrices sagittis orci a
                        scelerisque.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 pe-lg-0">
                    <div className="d-flex align-items-center justify-content-lg-end justify-content-center gap-lg-3 gap-2 flex-lg-nowrap flex-wrap">
                      <input
                        type="text"
                        className="py-3 px-lg-5 px-3 border-0 rounded-pill w_100"
                        placeholder=" your email address"
                      />
                      <button className=" btn  rounded-pill  text__dark bg__secondary w_100 hover__secondary py-2 px-4">
                        <div className="span d-block py-1">Subscribe</div>
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={NewsBack}
                  className="newsletter__background"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
