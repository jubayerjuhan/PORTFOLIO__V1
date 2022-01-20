import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../../contents/projects.js";
import { IoChevronBack } from "react-icons/io5";

import "../projectDetails/projectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === parseInt(id));

  const handleBack = () => {
    navigate("/");
  };
  console.log(project);
  return (
    <>
      <div
        className="projectDetails__image-container"
        style={{ backgroundImage: `url('${project.image}')` }}
      >
        <div className="projectDetails__backIcon" onClick={handleBack}>
          <IoChevronBack />
        </div>
      </div>
      <div className="projectDetails__info--wrapper light__text section__padding dark__bg">
        <div className="projectDetails__info ">
          <h2>Project Name : {project.title}</h2>
          <p className="project__details-project__summery">
            {project.description}
          </p>
          <div className="projectDetails__description light__text">
            <h3>Description</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, dignissimos! Id ullam distinctio eius at voluptate
              culpa, voluptatem laudantium fugit adipisci voluptates ex nam
              delectus quos odio assumenda, voluptatibus iure?
            </p>
          </div>
          <div className="projectDetails__project-link">
            <h3>Project Links</h3>
            <a href={project.projectLink} target="_blank">
              <p>🔗Live Project Link</p>
            </a>
          </div>
        </div>
        <div className="projectDetails__left">
          <div className="projectDetails__technology ">
            <h3>Used Technologies</h3>
            <div className="projectDetails__technology-container">
              {project.technologies.map((technology) => (
                <Pill name={technology} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Pill = ({ name }) => (
  <div className="pill__container">
    <p>{name}</p>
  </div>
);

export default ProjectDetails;
