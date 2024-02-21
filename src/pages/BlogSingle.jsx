import React from "react";
import BlogSingleImg from "../assets/img/BlogSingle.png";
import AboutBanner from "./elements/AboutBanner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogSingleContent from "./elements/BlogSingleContent";
const BlogSingle = () => {
  return (
    <>
      <Header active={4} />
      <AboutBanner
        aboutimg={BlogSingleImg}
        bannerClass="about__banner"
        badgeContent="September 1 2022"
        bannerContent="Essential Guidelines To Grow Your Corporate Business With Us"
      />
      <BlogSingleContent />
      <Footer />
    </>
  );
};

export default BlogSingle;
