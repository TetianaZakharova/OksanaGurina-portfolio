import React from "react";
import { Link } from "react-scroll";
import bg from "../../assets/imgs/gurina-contacts.png";
import "./about.scss";

export const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About me</h2>
      <div className="">
        <div className="introContent">
          <div className="introInfo">
            <p className="introPara">
              With over 15 years experience in retail marketing, focusing on
              devices and computers, I have worked in both corporate retail and
              marketing agencies. Proficient in three languages — Ukrainian,
              English, and French — I am strong in marketing communications,
              market and data analytics, marketing strategy, building and
              developing effective partnerships. <br/> <br/>Since moving to France in April
              2022, I've stabilized my daily life, secured a permanent role at a
              French company, initiated a literary project with the André
              Malraux Media Library, achieved a B2 level in French, validated my
              Master's degree in Marketing, and passed the 'Marketing B2B' exam
              at the University of Strasbourg. As I explore the next step in my
              career, I am actively seeking opportunities to apply my skills. I
              am open to discussions and welcome any proposals or advice,
              excited to contribute to new projects and continue growing
              professionally. <br/> <br/> <span>If you know who is looking for me... let me know!</span>
            </p>
          </div>
          <div className="portrait-wrap">
            <img src={bg} alt="Profile" className="bg" />
          </div>
        </div>
      </div>
    </section>
  );
};

// <span className="introText">
// <span className="introName">Oksana GURINA</span> <br />
// Marketing Project Manager
// </span>
