import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div
      className="banner dark__bg section__padding"
      style={{ paddingTop: "0rem", paddingBottom: "0rem" }}
    >
      <div className="banner__container">
        <h1 className="light__text">Need A App or Website Developer?</h1>
        <button className="button">Contact Me</button>
      </div>
    </div>
  );
};

export default Banner;
