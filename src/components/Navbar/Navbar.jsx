import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const Menu = () => (
    <>
      <p className="light__text">
        <a href="#home">Home</a>
      </p>
      <p className="light__text">
        <a href="#about">About</a>
      </p>
      <p className="light__text">
        <a href="#portfolio">Portfolio</a>
      </p>
      <p className="light__text">
        <a href="#services">Services</a>
      </p>
      <p className="light__text">
        <a href="#contact">Home</a>
      </p>
    </>
  );

  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <>
      <div className="navbar__links-mobile">
        {open && (
          <div className="navber__links-mobile__container  dark__bg slide-bottom">
            <Menu />
          </div>
        )}
      </div>

      <div className="navbar__container section__padding dark__bg">
        <div className="navbar__container-logo">
          <img src={logo} alt="" />
        </div>

        <div className="navbar__container-links__container">
          <Menu />
        </div>

        <div className="navbar__container__toggleMenu">
          <Hamburger toggled={open} toggle={setOpen} color="white" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
