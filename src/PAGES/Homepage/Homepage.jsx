import React from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Herosection from "./../../components/Herosection/Herosection";
import Services from "../../components/services/Services.jsx";
import Skills from "./../../components/skills/Skills";
import SelectedWorks from "./../../components/selected_works/SelectedWorks";
import Achievements from "./../../components/achievements/Achievements";
import Banner from "./../../components/banner/Banner";
import Contactus from "./../../components/contactus/Contactus";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Herosection />
      <Services />
      <Skills />
      <SelectedWorks />
      <Achievements />
      <Banner />
      <Contactus />
    </div>
  );
};

export default Homepage;
