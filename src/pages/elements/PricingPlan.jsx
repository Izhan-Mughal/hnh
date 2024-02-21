import React from "react";
import Badge from "../../components/Badge";
import { FaAngleRight } from "react-icons/fa6";
import Plan from "../../components/Plan";

const PricingPlan = () => {
  return (
    <>
      <section className="bg__secondary2 py-5">
        <div className="container py-lg-5">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9 px_0">
              <div className="text-center">
                <Badge color="green" content="Pricing" textwhite />
                <h1 className="cabin mt-3">Our Pricing Plan</h1>
                <div className="row gap-lg-0 gap-4 mt-4 mx-0">
                  <div className="col-lg-4 ">
                    <Plan />
                  </div>
                  <div className="col-lg-4 ">
                    <Plan />
                  </div>
                  <div className="col-lg-4 ">
                    <Plan />
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

export default PricingPlan;
