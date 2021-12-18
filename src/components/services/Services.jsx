import React from "react";
import "./services.css";
import Service from "./../service/Service";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePicture } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const Services = () => {
  const myServices = [
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <BiSearch />,
    },
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <AiOutlinePicture />,
    },
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <BiSearch />,
    },
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <BiSearch />,
    },
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <BiSearch />,
    },
    {
      name: "Research",
      desctiption:
        "Lorem ipsum dolor sit amet, consec tetur adipi scing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
      icon: <BiSearch />,
    },
  ];
  return (
    <div className="services__container section__padding dark__bg">
      <div className="section__heading">
        <h1 className="light__text">SERVICES</h1>
        <div className="gradient__bar"></div>
        <p className="light__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="service__container-content">
        {myServices.map((service, index) => {
          return (
            <Service
              key={index}
              title={service.name}
              desctiption={service.desctiption}
              icon={service.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
