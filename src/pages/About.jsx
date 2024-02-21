import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import AboutBannerImg from "../assets/img/AboutBanner.png";
import AboutVision from "./elements/AboutVision";
import AboutStats from "./elements/AboutStats";
import AboutHistory from "./elements/AboutHistory";
import AboutClients from "./elements/AboutClients";
import AboutTeam from "./elements/AboutTeam";
import AboutBook from "./elements/AboutBook";
const About = () => {
  return (
    <>
      <Header active={1} />
      <AboutBanner
        aboutimg={AboutBannerImg}
        bannerClass="about__banner"
        badgeContent="About"
        bannerContent="Creative Services For Boost Your Business Growth"
      />
      <AboutVision />
      <AboutStats />
      <AboutClients />
      <AboutHistory />
      <AboutTeam />
      <AboutBook />
      <Footer />
    </>
  );
};

export default About;
