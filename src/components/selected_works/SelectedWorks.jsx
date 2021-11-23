import React from "react";
import Project from "./../project/Project";
import "./selectedWorks.css";

const SelectedWorks = () => {
  return (
    <div className="selected-works__container section__padding dark__bg">
      <div className="section__heading">
        <h1 className="light__text">Selected Works</h1>
        <div className="gradient__bar"></div>
        <p className="light__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="selected-works__container-content">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};

export default SelectedWorks;
