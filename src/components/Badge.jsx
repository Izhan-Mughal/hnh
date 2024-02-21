import React from "react";

const Badge = (props) => {
  return (
    <>
      <div
        style={{ letterSpacing: "1.5px" }}
        className={props.textwhite ? ` badge fw-bold  text-uppercase rounded-pill lato bg__${props.color} ` : `badge fw-bold  text-uppercase rounded-pill lato bg__${props.color} text-dark`}
      >
        {props.content}
      </div>
    </>
  );
};

export default Badge;
