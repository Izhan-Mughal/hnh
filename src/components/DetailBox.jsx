import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";

const DetailBox = (props) => {
  return (
    <>
      <div className={`card__detail d-flex justify-content-center`}>
        <div>
          <div className="d-flex align-items-center gap-2">
            {props.icon == "star" && props.icon__color == "secondary" ? (
              <i className="text__secondary fs-4 mb-2">
                <FaStar />
              </i>
            ) : (
              <i className="text__green fs-4 mb-2">
                <FaFaceSmile />
              </i>
            )}
            <h1 className="cabin mb-0">{props.title}</h1>
          </div>
          <h5>{props.genre}</h5>
        </div>
      </div>
    </>
  );
};

export default DetailBox;
