import React from "react";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <>
      <Link
        to="/blogsingle"
        className="d-block blog__card w-100 text-decoration-none text-reset"
      >
        <img src={props.blogimg} className="blog__img" alt="Blog Image" />
        <div className="blog__content">
          <h2 className="cabin">{props.blogheading}</h2>
          <p className="lato text__gray2">{props.blogcontent}</p>
          <div className="blog__footer">
            <div className="user__content">
              <img src={props.userimg} alt="" />
              <p className="mb-0">{props.username}</p>
              <p className="mb-0">{props.userdate}</p>
            </div>
            <button className="lato">Read More</button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
