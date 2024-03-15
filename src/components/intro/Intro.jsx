import React from "react";
import { Link } from "react-scroll";
import bg from "../../assets/imgs/gurina-title.png";
import "./intro.scss";

export const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <img src={bg} alt="Profile" className="bg" />
        <div className="introInfo">
          <span className="introText">
            <span className="introName">Oksana Gurina</span> <br />
            Marketing Project Manager
          </span>
          <p className="introPara">
            With over 15 years experience in marketing and proficiency in 3
            languages (English, French, Ukrainian), <br /> I am looking for a
            Marketing Project Manager position for international brands
          </p>
          <div className="btn-wrap">
            <a
              className="download-btn"
              href="https://drive.google.com/file/d/1qZQ6pSP2vSCelvAR0NlHKPzwrJWcuDrD/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME EN
            </a>
            <a
              className="download-btn"
              href="https://drive.google.com/file/d/16Cs6KjLI-_7DOub1iCzDKEeebnf_O-f3/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              RESUME FR
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
