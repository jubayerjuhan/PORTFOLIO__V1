import React from "react";
import "./achievement.css";
import { SiNasa } from "react-icons/si";
import { HiArrowNarrowRight } from "react-icons/hi";

const Achievement = () => {
  return (
    <div className="achievement__container">
      <div className="achievement__container-Name">
        <h1 className="light__text">NASA SPACE APPS CHALLENGE 2021</h1>
        <h3 className="">Bangladesh</h3>
        <p className="light__text">Regional Runner Up</p>
        <SiNasa />
        <div class="gradient__bar" style={{ margin: "2rem 0" }}></div>
      </div>
      <div className="achievement-content">
        <div className="achievement-content_image">
          <img
            src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638088228/Portfolio%20V1/image6.ef17f705_vqjgkj.png"
            alt="Achievement"
          />
        </div>
        <div className="achievement-content_info">
          <h1>M.A.R.V.O. - Planetary Lander Simulation Game</h1>
          <p className="light__text">
            M.A.R.V.O is a simulation game that allows you to explore the MARS
            by playing the game. In this game you will be able to land on the
            surface of Mars with a real lunar module and explore the environment
            with some pretty exciting MARS locations.
          </p>
          <div style={{ display: "flex", gap: "30px" }}>
            <div className="arrow__btn">
              <a
                href="https://drive.google.com/file/d/1C5CBHqUAz3H26SX9TnFMf8Sy-bo1jLCH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="light__text">Show Certificate</p>
              </a>
              <HiArrowNarrowRight />
            </div>
            <div className="arrow__btn">
              <a
                href="https://2021.spaceappschallenge.org/challenges/statements/planetary-lander-video-game/teams/celestial-six/project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="light__text">Learn More</p>
              </a>
              <HiArrowNarrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
