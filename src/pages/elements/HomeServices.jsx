import React from "react";
import service1 from "../../assets/img/service1.png";
import service2 from "../../assets/img/service2.png";
import service3 from "../../assets/img/service3.png";
import service4 from "../../assets/img/service4.png";
import service5 from "../../assets/img/service5.png";
import service6 from "../../assets/img/service6.png";
import ServiceData from "../../utils/service.json";
import Badge from "../../components/Badge";
import { Link } from "react-router-dom";
const HomeServices = () => {
  // console.log(ServiceData);
  const serviceLogos = [
    service1,
    service2,
    service3,
    service4,
    service5,
    service6,
  ];
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xxl-11 col-lg-12 px-0 col-xxxl-9">
              <div className="text-center">
                <Badge content="Services" color="secondary" />
                <h2 className="text-center text-uppercase aileron fw-light mt-3">
                  WHAT SHOULD WE HELP WITH?
                </h2>
                <p className="lato mt-2 mb-5">
                  We are specialists in creating websites and webshops that
                  create value <br className="d-xl-block d-none" /> for your
                  company at fair prices.
                </p>
              </div>

              <div className="row mx-0 justify-content-center">
                {serviceLogos.map((logo, index) => (
                  <Link
                    to="/servicesingle"
                    key={index}
                    className="col-lg-4 my-2 text-decoration-none d-block"
                  >
                    <div className="service__cards">
                      <img
                        src={logo}
                        alt={`service icon ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                      <h4 className="cabin mt-3">{ServiceData[index].title}</h4>
                      <p className="cabin  fw-light">
                        {ServiceData[index].description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
