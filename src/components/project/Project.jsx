import React from "react";
import "./project.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Project = () => {
  return (
    <div className="project__container">
      <div className="project__thumbnail">
        <img src="https://via.placeholder.com/1920x1080" alt="project" />
      </div>
      <div className="project__info">
        <h1 className="light__text">Project Title</h1>
        <p className="light__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          nulla deserunt ipsam. Quia hic maxime natus debitis cumque et!
          Dolorem, odio! Ab eaque voluptates minima quibusdam eveniet sed
          cupiditate quos!
        </p>
      </div>

      <div className="arrow__btn">
        <p className="light__text">Learn More</p>
        <HiArrowNarrowRight />
      </div>
    </div>
  );
};

export default Project;
