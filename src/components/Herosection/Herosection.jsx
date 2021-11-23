import React from "react";
import "./herosection.css";
import profileImage from "../../assets/profileImage.svg";
import wave from "../../assets/wave.svg";

const Herosection = () => {
  return (
    <>
      <div className="utils">
        <img src={wave} alt="" />
      </div>
      <div className="herosection__container section__padding dark__bg">
        <div className="herosection__container__texts">
          <p>Hi, I’m Jubayer Juhan</p>
          <h1 className="gradient__text">Front End and Mobile App Developer</h1>
          <p className="light__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit mattis.
          </p>
          <button>Contact Me</button>
        </div>
        <div className="herosection__container__images">
          <img src={profileImage} alt="profileImage" />
        </div>
      </div>
    </>
  );
};

export default Herosection;
