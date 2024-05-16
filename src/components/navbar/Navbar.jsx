import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.scss";
import logo from "../../assets/imgs/logo.png";
// import { Portfolio } from "./../portfolio/Portfolio";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <Link
        to="intro"
        // spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="desktopMenu">
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          About Me
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Contacts
        </Link>
      </div>
      <button className="desktopMenuBtn">
        <Link
          activeClass="activeBtn"
          className="contacts"
          to="contacts"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Let's Talk
        </Link>
      </button>

      <div className="burger-menu" onClick={handleMenu}>
        {showMenu ? (
          <IoMdClose style={{ fontSize: "2rem" }} />
        ) : (
          <IoMdMenu style={{ fontSize: "2rem" }} />
        )}
        <div
          className={`navMenu ${showMenu ? "showMenu" : ""} `}
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            onClick={closeMenu}
            className="listItem"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            className="listItem"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Experience
          </Link>
          <Link
            onClick={closeMenu}
            className="listItem"
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Portfolio
          </Link>
          <Link
            onClick={closeMenu}
            className="listItem"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            About Me
          </Link>
          <Link
            onClick={closeMenu}
            className="listItem"
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};
