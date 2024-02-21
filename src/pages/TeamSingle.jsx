import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import TeamSingleContent from "./elements/TeamSingleContent";
import Newsletter from "../components/Newsletter";
const TeamSingle = () => {
  return (
    <>
      <Header active={2} />
      <TeamSingleContent />
      <Newsletter />
      <Footer />
    </>
  );
};

export default TeamSingle;
