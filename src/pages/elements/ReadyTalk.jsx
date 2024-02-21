import React from "react";
import Badge from "../../components/Badge";
import imgHands from "../../assets/img/handimg.png";
const ReadyTalk = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="bg__dark rounded-5 pt-lg-0 pt-4 px-lg-0 px-3 ">
                <div className="row mx-0 gap-lg-0 gap-4 ">
                  <div className="col-lg-6">
                    <div className="ps-lg-5 py-lg-5">
                      <Badge content="contact" color="dark4" textwhite />
                      <h1 className="text__light cabin mt-3">Ready to talk?</h1>
                      <p className="lato text__gray5 mt-3">
                        Posuere sollicitudin aliquam ultrices sagittis orci a
                        scelerisque. Massa placerat duis ultricies lacus sed
                        turpis. Pellentesque pellentesque habitant morbi
                        tristique.
                      </p>
                      <div className="d-flex align-items-center gap-lg-3 gap-2 flex-lg-nowrap flex-wrap">
                        <input
                          type="text"
                          className="py-3 px-lg-5 px-3 border-0 rounded-pill w_100"
                          placeholder=" your email address"
                        />
                        <button className=" btn  rounded-pill  text__light bg__green w_100 hover__green py-2 px-4">
                          <div className="span d-block py-1">Send Message</div>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pe-lg-0">
                    <img src={imgHands} className="img-fluid" alt="" />
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

export default ReadyTalk;
