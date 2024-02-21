import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import CaseStudySingleImg from "../assets/img/CaseStudySingle.png";
import CaseSingleLaptop from "./elements/CaseSingleLaptop";
import SingleCaseContent from "./elements/SingleCaseContent";
import Newsletter from "../components/Newsletter";
import MoreCaseStudy from "./elements/MoreCaseStudy";
const CaseStudySingle = () => {
  return (
    <>
      <Header active={3} />
      <AboutBanner
        aboutimg={CaseStudySingleImg}
        bannerClass="about__banner"
        badgeContent="Case Study Single"
        bannerContent="Taxes & Efficiency"
      />
      <CaseSingleLaptop />
      <SingleCaseContent />
      <Newsletter />
      <MoreCaseStudy />
      <Footer />
    </>
  );
};

export default CaseStudySingle;
