import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";

import batibous1 from "../../assets/promo/Batibois/Batibois-1.jpg";
import batibous2 from "../../assets/promo/Batibois/Batibois-2.jpg";
import batibous3 from "../../assets/promo/Batibois/Batibois-3.jpg";
import batibous4 from "../../assets/promo/Batibois/Batibois-4.jpg";
import batibous5 from "../../assets/promo/Batibois/Batibois-5.jpg";

import { alcatelpromo } from "./promo-data";

export const Batibois = () => {
  const batiboispromo = [batibous1, batibous2, batibous4, batibous5];

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, right: "25px" }}
        onClick={onClick}
      />
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, left: "10px", zIndex: "1" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    className: "slider variable-width center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    accessibility: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="promo-container">
      <div className={`promo-wrap`}>
        <div className="promo-desc">
          <h1 className="promo-title">
            BIG OPENING DAY <p>Batibois Alsace</p>
          </h1>
          <h2 className="promo-subtitle">
            Batibois Alsace brings together the world of construction and
            architects of the greater east to announce a new era!
            <a
              href="https://www.batibois-alsace.com/batibois-alsace-rassemble-le-monde-de-la-construction-et-des-architectes-du-grand-est-pour-annoncer-un-nouvel-air/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink style={{ color: "white", marginLeft: "1rem" }} />
            </a>
          </h2>
          <div className="promo-details" style={{ fontSize: "1.3rem" }}>
            <p>
              Batibois Alsace was able to bring together nearly 800 guests,
              clients, prospects, architects, project owners and other building
              professionals around its event.
            </p>
            <p>
              More than 65 partner suppliers were delighted to be present and to
              be able to interact with their customers.
            </p>
          </div>
        </div>
        <div className="promo-report">
          <div className="gallery-item logitech-promo">
            <img src={batibous3} alt="Asbis promo" />
          </div>
          <div className="slider-container promo-gallery">
            <Slider {...settings}>
              {batiboispromo.map((item) => {
                return (
                  <div className="gallery-item" style={{ width: "auto" }} key={item.id}>
                    <img src={item} alt="Batibois promo" />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};
