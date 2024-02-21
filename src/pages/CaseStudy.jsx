import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import ServiceContact from "./elements/ServiceContact";
import CaseImage from "../assets/img/CaseStudy.png";
import CaseTabs from "./elements/CaseTabs";

const CaseStudy = () => {
  return (
    <>
      <Header active={3} />
      <AboutBanner
        bannerClass="about__banner"
        aboutimg={CaseImage}
        badgeContent="Case Studies"
        bannerContent="Case Studies"
      />
      <CaseTabs />
      <ServiceContact />
      <Footer />
    </>
  );
};

export default CaseStudy;
