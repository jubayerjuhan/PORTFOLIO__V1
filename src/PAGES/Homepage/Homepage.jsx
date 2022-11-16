import React, { useState } from "react";
import Navbar from "./../../components/Navbar/Navbar";
import Herosection from "./../../components/Herosection/Herosection";
import Services from "../../components/services/Services.jsx";
import Skills from "./../../components/skills/Skills";
import SelectedWorks from "./../../components/selected_works/SelectedWorks";
import Achievements from "./../../components/achievements/Achievements";
import Banner from "./../../components/banner/Banner";
import Contactus from "./../../components/contactus/Contactus";
import Map from "./../../components/map/Map";
import Footer from "./../../components/footer/Footer";
import Loading from "../../components/LoadingScreen/Loading.jsx";
import { Helmet } from "react-helmet";

const Homepage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1500);
  return (
    <div className="homepage">
      <Helmet>
        <title>Jubayer Juhan</title>
      </Helmet>
      <Loading loading={loading} />
      <Navbar />
      <Herosection />
      {/* <Services /> */}
      <Skills />
      <SelectedWorks />
      <Achievements />
      <Banner />
      <Contactus />
      <Map />
      <Footer />
    </div>
  );
};

export default Homepage;
