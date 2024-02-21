import React from "react";
import TestiImage from "../assets/img/TestiBlog.png";
import Quote from "../assets/img/quote.png";
const TestimonialBlog = () => {
  return (
    <>
      <section className="blog__testimonial position-relative">
        <img src={TestiImage} className="img-fluid bg__blog__testimonial" alt="" />
        <img src={Quote} alt="" className="quote" />
        <p>
          “The job market of the future will consist of those jobs that robots
          cannot perform. Our blue-collar work is pattern recognition, making
          sense of what you see. Gardeners will still have jobs because every
          garden is different.”
        </p>
      </section>
    </>
  );
};

export default TestimonialBlog;
