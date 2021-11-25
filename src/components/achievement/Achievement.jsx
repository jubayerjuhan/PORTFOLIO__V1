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
          <img src="https://via.placeholder.com/1920x1080" alt="Achievement" />
        </div>
        <div className="achievement-content_info">
          <h1>M.A.R.V.O. Planetry Lander Video Game</h1>
          <p className="light__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quo suscipit corporis dignissimos quaerat at necessitatibus
            aspernatur est itaque corrupti? Vitae provident quis quia,
            dignissimos odio temporibus ut amet dolores!
          </p>
          <div className="arrow__btn">
            <p className="light__text">Learn More</p>
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
