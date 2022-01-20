import React from "react";
import "./skills.css";
import Skill from "./../skill/Skill";
import { DiReact } from "react-icons/di";
import { FaNodeJs, FaSass } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const mySkills = [
    { name: "React", percent: "95", icon: <DiReact /> },
    { name: "JavaScript", percent: "90", icon: <SiJavascript /> },
    { name: "Express", percent: "90", icon: <SiExpress /> },
    { name: "Node.js", percent: "85", icon: <FaNodeJs /> },
    { name: "MongoDb", percent: "95", icon: <SiMongodb /> },
    { name: "Sass", percent: "90", icon: <FaSass /> },
  ];
  return (
    <div id="skills">
      <div className="skills__container section__padding dark__bg">
        <div className="section__heading">
          <h1 className="light__text">SKILLS</h1>
          <div className="gradient__bar"></div>
          <p className="light__text">
            Here are some of the skills I've learned
          </p>
        </div>
        <div className="skills-detail__container">
          {mySkills.map((skill, index) => {
            return <Skill key={index} {...skill} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
