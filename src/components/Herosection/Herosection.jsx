import React from "react";
import "./herosection.css";
import wave from "../../assets/wave.svg";

const Herosection = () => {
  const handleClick = () => {
    setTimeout(() => {
      alert("Please Check The Download Section!");
    }, 500);
  };
  return (
    <>
      <div className="utils">
        <img src={wave} alt="" />
      </div>
      <div
        className="herosection__container section__padding dark__bg"
        id="home"
      >
        <div className="herosection__container__texts">
          <p>Hi, I’m Jubayer Juhan</p>
          <h1 className="gradient__text">Front End and Mobile App Developer</h1>
          <p className="light__text description">
            I’m a Full Stack Web Developer and Mobile App Developer. A
            self-taught developer with a passion for learning new technologies
            every day.
          </p>
          <div className="herosection__buttons">
            <button className="resume__btn" onClick={handleClick}>
              <a href="https://raw.githubusercontent.com/jubayerjuhan/Resume/b0738e5d753617ba4600aa7c6898e893cbd2ad7d/JubayerJuhanResume_4.pdf">
                My Resume
              </a>
            </button>
            <button className="contact__btn">
              <a href="#contactCard"> Contact Me</a>
            </button>
          </div>
        </div>
        <div className="herosection__container__images">
          <img
            src="https://res.cloudinary.com/juhan-cloud/image/upload/v1638114468/Portfolio%20V1/dp_omkgzg.png"
            alt="profileImage"
          />
        </div>
      </div>
    </>
  );
};

export default Herosection;
