import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutBanner from "./elements/AboutBanner";
import ContactImg from "../assets/img/ContactImg.png";
import Newsletter from "../components/Newsletter";
import ServiceContact from "./elements/ServiceContact";
import ContactIntouch from "./elements/ContactIntouch";

const Contact = () => {
  return (
    <>
      <Header active={5} />
      <AboutBanner
        aboutimg={ContactImg}
        bannerClass="about__banner"
        badgeContent="Contact Us"
        bannerContent="Feel Free To Reach Us"
      />
      <ContactIntouch />
      <Newsletter />
      <ServiceContact />
      <Footer />
    </>
  );
};

export default Contact;
