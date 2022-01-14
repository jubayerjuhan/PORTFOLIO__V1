import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [webNavClassName, setWebNavClassName] = useState("navbar__normal");

  const mobileMenuClassName = open
    ? "mobile__container-open"
    : "mobile__container-close";

  if (open) {
    if (window.innerWidth > 1050) {
      setOpen(false);
    }
    window.scrollTo(-100, -100);
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setWebNavClassName("navbar__container");
      } else {
        setWebNavClassName("navbar__normal");
      }
    });
  }, []);

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

  return (
    <>
      <div className="navbar__links-mobile">
        <div className={mobileMenuClassName}>
          <Menu />
        </div>
      </div>

      <div className={`section__padding ${webNavClassName}`}>
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
