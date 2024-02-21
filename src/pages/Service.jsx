import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import ServiceBannerImg from "../assets/img/ServiceBanner.png";
import HomeServices from "./elements/HomeServices";
import ServiceProcess from "./elements/ServiceProcess";
import PricingPlan from "./elements/PricingPlan";
import ServiceContact from "./elements/ServiceContact";
const Service = () => {
  return (
    <>
      <Header active={2} />
      <AboutBanner
        aboutimg={ServiceBannerImg}
        bannerClass="about__banner"
        badgeContent="Services"
        bannerContent="Creative Services For Boost Your Business Growth"
      />
      <HomeServices />
      <ServiceProcess />
      <PricingPlan />
      {/* ServiceContact props for Service Contact */}
      <ServiceContact />
      <Footer />
    </>
  );
};

export default Service;
