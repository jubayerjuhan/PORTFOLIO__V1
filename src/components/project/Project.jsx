import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./project.css";

const Project = ({
  project: { id, title, description, image, projectLink },
}) => {
  console.log(title, description, image, projectLink);
  return (
    <>
      <div className="project__container">
        <div className="project__thumbnail">
          <img src={image} alt={title} />
        </div>
        <div className="project__info">
          <h1 className="light__text">{title}</h1>
          <p className="light__text">{description}</p>
        </div>

        <div className="arrow__btn">
          <Link to={`projects/${id}`}>
            <p className="light__text">Learn More</p>
            <HiArrowNarrowRight />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;
