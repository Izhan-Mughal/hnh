import React from "react";
import Background from "../../assets/img/404bg1.png";
import Background2 from "../../assets/img/404bg2.png";
import { Link } from "react-router-dom";
const Content404 = () => {
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container py-lg-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-6 col-xl-5 col-xxl-4">
              <div className="position-relative">
                <img
                  src={Background}
                  className="img-fluid background404"
                  alt=""
                />
                <img
                  src={Background2}
                  className="img-fluid background4042"
                  alt=""
                />
                <div className="content404 text-center">
                  <h1 className="cabin display-1 mb-0">404</h1>
                  <h1 className="cabin ">Page Not Found</h1>
                  <p className="lato">
                    This Page Doesn't or was removed!{" "}
                    <br className="d-lg-block d-none" /> We suggest you back to
                    Home
                  </p>
                  <button className="border-0 bg-transparent">
                    <Link
                      to="/"
                      className="text-dark d-block text-decoration-none rounded-pill bg__secondary btn hover__secondary px-4 py-2 fw-bold lato"
                    >
                      Back To Home
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content404;
