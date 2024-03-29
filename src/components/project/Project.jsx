import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

import "./project.css";

const Project = ({
  project: { id, title, description, image, projectLink },
}) => {
  return (
    <>
      <div className="project__container">
        <div className="project__thumbnail">
          <img src={image} alt={title} />
        </div>
        <div className="project__info">
          <h1 className="project__title">{title}</h1>
          <p className="light__text">{description}</p>
        </div>

        <Link to={`projects/${id}`} style={{ width: "fit-content" }}>
          <div className="arrow__btn">
            <p className="light__text">Learn More</p>
            <HiArrowNarrowRight />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Project;
