import React from "react";
import projects from "../../contents/projects.js";

import Project from "./../project/Project";
import "./selectedWorks.css";

const SelectedWorks = () => {
  console.log(projects);
  return (
    <div
      className="selected-works__container section__padding dark__bg"
      id="projects"
    >
      <div className="section__heading">
        <h1 className="light__text">Projects</h1>
        <div className="gradient__bar"></div>
        <p className="light__text">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="selected-works__container-content">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;
