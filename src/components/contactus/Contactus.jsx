import React from "react";
import "./contactus.css";
import ringTriangle from "../../assets/ringTriangle.svg";
import ContactCard from "./../Contact-cards/Contact_card";
import { AiOutlinePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";

const Contactus = () => {
  const contacts = [
    { info: "jubayerjuhan.info@gmail.com", icon: <MdOutlineEmail /> },
    { info: "+8801620692839", icon: <AiOutlinePhone /> },
    { info: "Dhaka, Bangladesh", icon: <TiLocationArrowOutline /> },
  ];
  return (
    <div className="contactus__container__main">
      <img src={ringTriangle} alt="" className="ringTriangle" />
      <div className="contactus__container section__padding dark__bg">
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

                <textarea
                  className="light__text"
                  rows="4"
                  cols="50"
                  name="comment"
                ></textarea>
              </div>
              <div className="contactus__action__section__form__input_btn">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contactus__card__container">
          {contacts.map((contact, i) => {
            return <ContactCard contact={contact} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
