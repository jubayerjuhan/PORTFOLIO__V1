import React from "react";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import footerdesign from "../../assets/footerdesign.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__container__text light__text">
        <h1>Get In Touch With Me</h1>
        <p>Dhanmondi, Dhaka - 1209, Bangladesh</p>
        <p>jubayerjuhan.info@gmail.com</p>
        <p>+8801620692839</p>
      </div>
      <div className="footer__container__socialmedia">
        <div className="socialmedia__container">
          <BsFacebook />
        </div>
        <div className="socialmedia__container">
          <BsTwitter />
        </div>
        <div className="socialmedia__container">
          <FaLinkedinIn />
        </div>
      </div>
      <div className="footer__design">
        <img src={footerdesign} alt="" />
      </div>
    </div>
  );
};

export default Footer;
