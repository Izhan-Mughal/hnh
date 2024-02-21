import React from "react";
import { FaCog } from "react-icons/fa";
import { FaChartSimple } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa6";

const Rank = (props) => {
  return (
    <>
      <div className={props.margin === 1 ? `rank mt-5` : `rank`}>
        <div className="rank__circle">
          {props.icon === 1 ? (
            <FaChartSimple />
          ) : props.icon === 2 ? (
            <FaCog />
          ) : (
            <FaChartPie />
          )}
        </div>

        <h5 className="rank__title nunito fw-bold mb-0">{props.title}</h5>
        <div className="rank__description noto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </>
  );
};

export default Rank;
