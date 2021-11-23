import React from "react";
import "./skill.css";

const Skill = ({ name, percent, icon }) => {
  return (
    <div className="skills__skill-container">
      <div className="skill-heading">
        {icon}
        <p className="light__text">{name}</p>
      </div>

      <div className="skill-fill" style={{ width: `${percent}%` }}></div>
      <div className="skill-empty"></div>
    </div>
  );
};

export default Skill;
