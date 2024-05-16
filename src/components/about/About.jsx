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
              marketing agencies. <br />
              <br />
              Proficient in three languages — Ukrainian, English, and French — I
              am strong in marketing communications, market and data analytics,
              marketing strategy, building relationships, and developing
              effective partnerships. <br /> <br />
              One notable achievement was doubling partner investments (Samsung,
              ZTE, etc) in smartphone sales across 560 Kyivstar stores in two
              years, solidifying our market share at 5%. I am also skilled in
              project management, evidenced by successful promotions for B2B and
              B2C clients. For example, the "Cashback 20% for Nokia at Vodafone"
              initiative boosted Nokia's smartphone market share up to 7% in
              just three months in 2018. <br />
              <br /> In terms of event management, I have organized workshops,
              forums, and coordinated sponsorships for events like the 'Koktebel
              Jazz Festival' in Ukraine, attracting 30,000 visitors.
            </p>
          </div>
          <div className="portrait-wrap">
            <img src={bg} alt="Profile" className="bg" />
          </div>
        </div>
        <p className="introPara">
          <br />
          More recently, in France, I co-managed the GRAND OPENING DAY of
          Batibois Reichstett, hosting 800 guests from the construction and
          architecture sectors. Beyond work, my life journey includes
          significant personal projects.
          <br />
          <br />
          Since moving to France in April 2022, I've stabilized my daily life,
          secured a permanent role at a French company, initiated a literary
          project with the André Malraux Media Library, achieved a B2 level in
          French, validated my Master's degree in Marketing, and passed the
          'Marketing B2B' exam at the University of Strasbourg. As I explore the
          next step in my career, I am actively seeking opportunities to apply
          my skills. I am open to discussions and welcome any proposals or
          advice, excited to contribute to new projects and continue growing
          professionally. <br />
          <br />
          <span>If you know who is looking for me... let me know!</span>
        </p>
      </div>
    </section>
  );
};

// <span className="introText">
// <span className="introName">Oksana GURINA</span> <br />
// Marketing Project Manager
// </span>
