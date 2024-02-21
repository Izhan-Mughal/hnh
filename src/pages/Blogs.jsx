import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import BlogImg from "../assets/img/BlogBanner.png";
import BlogContent from "./elements/BlogContent";
import ReadyTalk from "./elements/ReadyTalk";
const Blogs = () => {
  return (
    <>
      <Header active={4} />
      <AboutBanner
        aboutimg={BlogImg}
        bannerClass="about__banner"
        badgeContent="Blog"
        bannerContent="Latest Blog & News"
      />
      <BlogContent />
      <ReadyTalk />
      <Footer />
    </>
  );
};

export default Blogs;
