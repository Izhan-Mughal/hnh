import React from "react";
import BlogSingleImg from "../../assets/img/BlogSingleImg.png";
import TestimonialBlog from "../../components/TestimonialBlog";
import BlogReferral from "../../components/BlogReferral";
const BlogSingleContent = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="row mx-0">
                <div className="col-xl-10">
                  <h1 className="cabin">Best Business Consulting Services</h1>
                  <p className="text__gray2 lato">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring. Capitalize on low hanging fruit
                    to identify a ballpark value added activity to beta test.
                    Override the digital divide with additional clickthroughs
                    from DevOps.
                  </p>
                </div>
              </div>
              <img
                src={BlogSingleImg}
                className="img-fluid rounded-3 my-4"
                alt=""
              />
              <div className="row mx-0">
                <div className="col-xl-10">
                  <h1 className="cabin">The Digital Assets For All</h1>
                  <p className="text__gray2 lato">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring. Capitalize on low hanging fruit
                    to identify a ballpark value added activity to beta test.
                    Override the digital divide with additional clickthroughs
                    from DevOps.
                  </p>
                  <ul className="mt-5 mb-4">
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                  </ul>
                </div>
              </div>
              <TestimonialBlog />
              <div className="row mx-0">
                <div className="col-xl-10">
                  <h1 className="cabin mt-4">
                    Make real time a wireframes services
                  </h1>
                  <p className="text__gray2 lato">
                    Bring to the table win-win survival strategies to ensure
                    proactive domination. At the end of the day, going forward,
                    a new normal that has evolved from generation X is on the
                    runway heading towards a streamlined cloud solution. User
                    generated content in real-time will have multiple
                    touchpoints for offshoring.
                  </p>
                  <ol className="mt-4 mb-4">
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                    <li className="mb-3 lato text__gray2">
                      Dynamically target high-payoff intellectual capital for
                      customized
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row mx-0 mt-4">
                <div className="col-xl-9 px_0 col-xxl-7">
                  <BlogReferral />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSingleContent;
