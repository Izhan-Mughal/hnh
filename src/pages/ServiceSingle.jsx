import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import BannerImage from "../assets/img/ServiceSingle2.png";
import FinancialProjections from "./elements/FinancialProjections";
import SingleExpectation from "./elements/SingleExpectation";
import Brands from "./elements/Brands";
import SingleVideo from "./elements/SingleVideo";
import Faq from "./elements/Faq";

const ServiceSingle = () => {
  return (
    <>
      <Header active={2} />
      <AboutBanner
        badgeContent="Services Single"
        bannerContent="Services Details"
        aboutimg={BannerImage}
        bannerClass="about__banner"
      />
      <FinancialProjections />
      <SingleExpectation />
      <Brands />
      <SingleVideo />
      <Faq />
      <Footer />
    </>
  );
};

export default ServiceSingle;
