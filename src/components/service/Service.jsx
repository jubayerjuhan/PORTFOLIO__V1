import React from "react";
import "./service.css";
import { HiArrowNarrowRight } from "react-icons/hi";

const Service = ({ title, desctiption, icon }) => {
  return (
    <div className="services__service-container small__padding">
      <div className="services__service-icon">{icon}</div>
      <h1 className="light__text">{title}</h1>
      <p className="light__text">{desctiption}</p>
      <div className="arrow__btn">
        <p className="light__text">Learn More</p>
        <HiArrowNarrowRight />
      </div>
    </div>
  );
};

export default Service;
