import React from "react";
import Header from "../components/Header";
import AboutBanner from "./elements/AboutBanner";
import BannerImage from "../assets/img/TeamBanner2.png";
import Footer from "../components/Footer";
import TeamMeet from "./elements/TeamMeet";
import ReadyTalk from "./elements/ReadyTalk";

const Team = () => {
  return (
    <>
      <Header active={2} />
      <AboutBanner
        bannerClass="about__banner"
        aboutimg={BannerImage}
        badgeContent="Team"
        bannerContent="The Consultors"
      />
      <TeamMeet />
      <ReadyTalk />
      <Footer />
    </>
  );
};

export default Team;
