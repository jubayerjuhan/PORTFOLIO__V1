import React from "react";
import "./contactus.css";

const Contactus = () => {
  return (
    <div className="contactus__container section__padding dark__bg">
      <div
        className="contactus__container__title section__heading"
        style={{ alignItems: "flex-start" }}
      >
        <h1 className="light__text">Contact Us</h1>
        <div className="gradient__bar" style={{ marginLeft: "0" }}></div>
      </div>

      <div className="contactus__action__section">
        <div
          className="section__heading"
          style={{ alignItems: "flex-start", flex: "1" }}
        >
          <h1 className="light__text">Get In Touch</h1>
          <div className="gradient__bar" style={{ marginLeft: "0" }}></div>
          <p style={{ textAlign: "left" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            fuga eligendi accusantium.
          </p>
        </div>
        <div className="contactus__action__section__form">
          <form action="">
            <div className="contactus__action__2x_grid">
              <div className="contactus__action__section__form__input">
                <p className="light__text">Name</p>
                <input type="text" name="name" />
              </div>
              <div className="contactus__action__section__form__input">
                <p className="light__text">Email</p>
                <input type="text" name="name" />
              </div>
              <div className="contactus__action__section__form__input">
                <p className="light__text">Phone Number</p>

                <input type="text" name="name" />
              </div>
              <div className="contactus__action__section__form__input">
                <p className="light__text">Subject</p>
                <input type="text" name="name" />
              </div>
            </div>

            <div className="contactus__action__section__form__input_last">
              <p className="light__text">Message</p>

              <input type="text" name="name" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
