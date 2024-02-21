import React from "react";
import ServiceProcessImg from "../../assets/img/ServiceProcess.png";
import Badge from "../../components/Badge";
import { FaWallet } from "react-icons/fa6";
const ServiceProcess = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0 gap-lg-0 gap-4 align-items-center">
                <div className="col-lg-6">
                  <img src={ServiceProcessImg} alt="" className="img-fluid" />
                </div>
                <div className="col"></div>
                <div className="col-lg-5">
                  <Badge content="Process" color="secondary" />
                  <h1 className="cabin mt-4">
                    Our Consuting Service Development
                  </h1>
                  <div className="mt-3 d-flex gap-2">
                    <div className="fs-3 pt-0 mt-0">
                      <FaWallet />
                    </div>
                    <div>
                      <p className="fs-5 fw-bold lato mb-1 pt-2">
                        Banking and Finance
                      </p>
                      <p className=" fw-light lato">
                        Professionally fashion wireless leadership rather than
                        prospective experiences my cardinate clicks-and-mortar
                        testing whereas.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 d-flex gap-2">
                    <div className="fs-3 pt-0 mt-0">
                      <FaWallet />
                    </div>
                    <div>
                      <p className="fs-5 fw-bold lato mb-1 pt-2">
                        Banking and Finance
                      </p>
                      <p className=" fw-light lato">
                        Professionally fashion wireless leadership rather than
                        prospective experiences my cardinate clicks-and-mortar
                        testing whereas.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 d-flex gap-2">
                    <div className="fs-3 pt-0 mt-0">
                      <FaWallet />
                    </div>
                    <div>
                      <p className="fs-5 fw-bold lato mb-1 pt-2">
                        Banking and Finance
                      </p>
                      <p className=" fw-light lato">
                        Professionally fashion wireless leadership rather than
                        prospective experiences my cardinate clicks-and-mortar
                        testing whereas.
                      </p>
                    </div>
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

export default ServiceProcess;
