import React from "react";
import RankImg from "../../assets/img/ranking.png";
import { FaChartSimple } from "react-icons/fa6";
import Rank from "../../components/Rank";
import { FaUsers } from "react-icons/fa6";

const HomeRanking = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-lg-12 col-xxl-9">
              <div className="row mx-0 gap-lg-0 gap-5 align-items-center">
                <div className="col-lg-5 position-relative">
                  <img src={RankImg} className="img-fluid" alt="" />
                  <div className="primary__circle"></div>
                  <div className="glass__number">
                    <span className="people__icon pb-2">
                      <FaUsers />
                    </span>
                    <div className="d-flex align-items-center flex-column">
                      <h1 className="mb-0 display-5 fw-bold">1,542</h1>
                      <p className="mb-0 fw-bold">Satisfied Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="d-flex justify-content-center justify-content-lg-end ps-xl-5">
                    <div className="ranks__container">
                      <Rank title="Page Rankings" icon={1} />
                      <Rank title="Site Optimization" margin={1} icon={2} />
                      <Rank title="Reporting & Analysis" margin={1} icon={3} />
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

export default HomeRanking;
