import React, { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import Hamburger from "hamburger-react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [webNavClassName, setWebNavClassName] = useState("navbar__normal");

  const mobileMenuClassName = open
    ? "mobile__container-open"
    : "mobile__container-close";
  const opacityControl = open ? "opacity-1" : "opacity-0";

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

  const navLinks = [
    { address: "/#home", name: "Home" },
    { address: "/#skills", name: "Skills" },
    { address: "/#projects", name: "Projects" },
    { address: "/#achievements", name: "Achievement" },
    { address: "/#contactCard", name: "Contact" },
  ];

  const Menu = () => (
    <>
      {navLinks.map((link) => (
        <p className={`light__text ${opacityControl}`}>
          <a href={link.address} onClick={() => setOpen(false)}>
            {link.name}
          </a>
        </p>
      ))}
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
