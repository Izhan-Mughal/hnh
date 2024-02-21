import React from "react";
import Badge from "../../components/Badge";
const AboutBanner = (props) => {
  return (
    <>
      <section
        className={props.bannerClass}
        style={{ backgroundImage: `url(${props.aboutimg})` }}
      >
        <div className="container">
          <div className="row mx-0 justify-content-center">
            <div className="col-xl-11 col-xxl-9">
              <div className="banner__card">
                <Badge color="secondary" content={props.badgeContent} />
                <h1 className="mt-2 cabin">
                    {props.bannerContent}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
