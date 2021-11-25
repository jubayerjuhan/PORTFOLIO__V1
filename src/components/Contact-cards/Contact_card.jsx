import React from "react";
import "./contact_card.css";

const Contact_card = ({ contact }) => {
  return (
    <div className="contact-card__container ">
      <div className="contact-card__container-icon">{contact.icon}</div>
      <p className="light__text">{contact.info}</p>
    </div>
  );
};

export default Contact_card;
