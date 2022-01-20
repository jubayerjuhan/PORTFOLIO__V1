import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerdesign from "../../assets/footerdesign.svg";
import "./footer.css";

const Footer = () => {
  const socialMedia = [
    {
      name: "Twitter",
      link: "https://twitter.com/XUHANJJ",
      icon: <BsTwitter />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jubayerjuhan",
      icon: <FaLinkedinIn />,
    },
  ];
  return (
    <div className="footer__container">
      <div className="footer__container__text light__text">
        <h1>Get In Touch With Me</h1>
        <p>Dhanmondi, Dhaka - 1209, Bangladesh</p>
        <p>jubayerjuhan.info@gmail.com</p>
        <p>+8801620692839</p>
      </div>
      <div className="footer__container__socialmedia">
        {socialMedia.map((social) => (
          <a href={social.link} target="_blank">
            <div className="socialmedia__container">{social.icon}</div>
          </a>
        ))}
      </div>
      <div className="footer__design">
        <img src={footerdesign} alt="" />
      </div>
    </div>
  );
};

export default Footer;
