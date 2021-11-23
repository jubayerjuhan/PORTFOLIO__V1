import React from "react";
import "./achievements.css";
import { GiAchievement } from "react-icons/gi";
import Achievement from "../achievement/Achievement.jsx";
const Achievements = () => {
  return (
    <div className="achievements__container section__padding dark__bg">
      <div className="section__heading">
        <div className="achievements__heading_title">
          <GiAchievement />
          <h1 className="light__text">Achievements</h1>
          <GiAchievement />
        </div>
        <div className="gradient__bar"></div>
      </div>
      <div className="achievement__container-content">
        <Achievement />
      </div>
    </div>
  );
};

export default Achievements;
