import React from "react";
import Badge from "../../components/Badge";
import BlogCard from "../../components/BlogCard";
import BlogCardImg from "../../assets/img/BlogCard1.png";
import userImg from "../../assets/img/UserPhotoBlog.png";
const BlogContent = () => {
  return (
    <>
      <section className="my-5 py-lg-5">
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="d-flex justify-content-lg-between align-items-center justify-content-start gap-lg-0 gap-5 flex-wrap">
                <div>
                  <Badge color="green" content="Blog" textwhite />
                  <h1 className="cabin">
                    Take a look at our latest{" "}
                    <br className="d-lg-block d-none" />
                    articles & resources
                  </h1>
                </div>
                <div>
                  <button className="bg__secondary rounded-pill border-0 fw-regular hover__secondary py-2 px-4 lato">
                    More News
                  </button>
                </div>
              </div>
              <div className="row mx-0 mt-5">
                <div className="row mx-0 gap-xl-0 gap-5">
                  <div className="col-xl-6">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
                  </div>
                  <div className="col-xl-6">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
                  </div>
                  <div className="col-xl-6 mt-xl-5">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
                  </div>
                  <div className="col-xl-6 mt-xl-5">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
                  </div>
                  <div className="col-xl-6 mt-xl-5">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
                  </div>
                  <div className="col-xl-6 mt-xl-5">
                    <BlogCard
                      blogimg={BlogCardImg}
                      blogheading="Consulting Fees Study 2019 (And How To Raise Your Rates)"
                      blogcontent="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition."
                      username="John Carter"
                      userdate="September 1 2022"
                      userimg={userImg}
                    />
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

export default BlogContent;
