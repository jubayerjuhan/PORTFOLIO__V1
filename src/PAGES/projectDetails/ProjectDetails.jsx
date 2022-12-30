import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import projects from "../../contents/projects.js";
import { IoChevronBack } from "react-icons/io5";

import "../projectDetails/projectDetails.css";
import { Helmet } from "react-helmet";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((project) => project.id === parseInt(id));

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  console.log(project);
  return (
    <>
      <Helmet>
        <title>{`Project - ${project?.title}`}</title>
      </Helmet>
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
            <h3>Features</h3>
            <div className="feature__list-wrapper">
              <ul className="features__list">
                {project.features?.map((feature, key) => (
                  <li className="light__text project__details-project__summery">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="projectDetails__project-link">
            <h3>Project Links</h3>
            <a href={project.projectLink} target="_blank">
              <p>🔗Live Project Link</p>
            </a>
          </div>
          {project.companyLink && (
            <div className="projectDetails__project-link">
              <h3>Company Link</h3>
              <a href={project.companyLink} target="_blank">
                <p>🔗Live Company Link</p>
              </a>
            </div>
          )}
          <div className="projectDetails__project-link">
            <h3>Github Project Links</h3>
            {project.githubLink.map((link, key) => (
              <a href={link.link} target="_blank" key={key}>
                <p>🔗{link.name} Link</p>
              </a>
            ))}
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
