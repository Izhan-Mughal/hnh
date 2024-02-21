import React from "react";
import Badge from "../../components/Badge";
import { FaCheckCircle } from "react-icons/fa";
import expectationImg from "../../assets/img/expectation.png";
const SingleExpectation = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0 flex-lg-row-reverse">
                <div className="col-lg-7 col-xl-7 col-xxl-6">
                  <Badge content="WE'LL WORK WITH YOU" color="secondary" />
                  <h1 className="cabin mt-3">What to expect</h1>
                  <p className="lato mt-3">
                    Capitalize on low hanging fruit to identify a ballpark value
                    added activity beta test. Override the digital divide with
                    additional from DevOps.
                  </p>
                  <div className="d-flex mt-2 gap-2">
                    <div className="text__primary">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <p className="lato">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex mt-2 gap-2">
                    <div className="text__primary">
                      <FaCheckCircle />
                    </div>
                    <div>
                      <p className="lato">
                        Bring to the table win-win survival strategies to ensure
                        proactive domination. At the end of the day.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl"></div>
                <div className="col-lg-5">
                  <div className="d-flex justify-content-lg-end justify-content-center">
                    <img src={expectationImg} className="img-fluid" alt="" />
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

export default SingleExpectation;
