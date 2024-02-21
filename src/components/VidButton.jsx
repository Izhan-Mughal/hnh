import React from "react";
import { FaPlay } from "react-icons/fa";

const VidButton = () => {
  return (
    <div className="vid__btn">
      {" "}
      <FaPlay />
      <div className="circles">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>
    </div>
  );
};

export default VidButton;
