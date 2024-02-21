import React from "react";
import Header from "../components/Header";
import HomeBanner from "./elements/HomeBanner";
import Brands from "./elements/Brands";
import HomeAbout from "./elements/HomeAbout";
import HomeServices from "./elements/HomeServices";
import HomeHistory from "./elements/HomeHistory";
import HomeSpeciality from "./elements/HomeSpeciality";
import HomeRanking from "./elements/HomeRanking";
import HomeServiceSlider from "./elements/HomeServiceSlider";
import HomeResults from "./elements/HomeResults";
import HomeTestimonials from "./elements/HomeTestimonials";
import HomeStats from "./elements/HomeStats";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header active={0} />
      <HomeBanner />
      <Brands />
      <HomeAbout />
      <HomeServices />
      <HomeHistory />
      <HomeSpeciality />
      <HomeRanking />
      <HomeServiceSlider />
      <HomeResults />
      <HomeTestimonials />
      <HomeStats />
      <Footer />
    </>
  );
};

export default Home;
