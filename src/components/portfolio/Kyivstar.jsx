import React from "react";
import Slider from "react-slick";

import { kspromo } from "./promo-data";
import ksharvest1 from "../../assets/promo/KS/KS-harvest-19-21-1.png";
import ksharvest2 from "../../assets/promo/KS/KS-harvest-19-21-2.png";
import ksharvest3 from "../../assets/promo/KS/KS-harvest-19-21-3.png";
import ksharvest4 from "../../assets/promo/KS/KS-harvest-19-21-4.png";
import ksharvest5 from "../../assets/promo/KS/KS-harvest-19-21-5.png";
import ksharvest6 from "../../assets/promo/KS/KS-harvest-19-21-6.png";
import ksharvest7 from "../../assets/promo/KS/KS-harvest-19-21-7.png";
import ksharvest8 from "../../assets/promo/KS/KS-harvest-19-21-8.png";
import ksharvest9 from "../../assets/promo/KS/KS-harvest-19-21-9.png";
import ksharvest10 from "../../assets/promo/KS/KS-harvest-19-21-10.png";
import ksharvest11 from "../../assets/promo/KS/KS-harvest-19-21-11.png";
import ksharvest12 from "../../assets/promo/KS/KS-harvest-19-21-12.png";
import ksharvest13 from "../../assets/promo/KS/KS-harvest-19-21-13.png";
import ksharvest14 from "../../assets/promo/KS/KS-harvest-19-21-14.png";

export const Kyivstar = () => {
  const harvest = [
    ksharvest1,
    ksharvest2,
    ksharvest3,
    ksharvest4,
    ksharvest5,
    ksharvest6,
    ksharvest7,
    ksharvest8,
    ksharvest9,
    ksharvest10,
    ksharvest11,
    ksharvest12,
    ksharvest13,
    ksharvest14,
  ];

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
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    accessibility: true,
    // adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerMode: true,
    focusOnSelect: true,
  };
  const settings2 = {
    className: "slider variable-width",
    // dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    accessibility: true,
    // adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="promo-container">
      {kspromo.map((item) => {
        return (
          <div className="promo-wrap" key={item.id}>
            <div className="promo-desc">
              <h1 className="promo-title">{item.title}</h1>
              <h2 className="promo-subtitle">{item.subtitle}</h2>
              <div className="promo-details">
                <div>
                  <p className="promo-item">Role:</p>
                  <span className="rolename">{item.role}</span>
                </div>
                <div>
                  <p className="promo-item">Tasks:</p>
                </div>
                <ul>
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
                <div>
                  <p className="promo-item">Communication:</p>
                </div>
                <ul>
                  {item.communication.map((com, i) => (
                    <li key={i}>{com}</li>
                  ))}
                </ul>
                <div>
                  <p className="promo-item">Budget:</p>
                  <span className="rolename">{item.budget}</span>
                </div>
                <div>
                  <p className="promo-item">Sales target:</p>
                  <span className="rolename">{item.target}</span>
                </div>
              </div>
            </div>
            <div className="promo-report">
              {item.video.map((vid, i) =>
                vid.includes("www.youtube.com") ? (
                  <iframe
                    className="video"
                    key={i}
                    src={vid}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    start="3000"
                    autoPlay="0"
                  ></iframe>
                ) : (
                  <video className="video" controls 
                  // autoPlay 
                  muted key={i}>
                    <source src={vid} type="video/mp4" />
                  </video>
                )
              )}
              <div className="slider-container promo-gallery">
                <Slider {...settings}>
                  {item.photos.map((item, i) => {
                    return (
                      <div
                        className="gallery-item"
                        style={{ width: "auto" }}
                        key={i}
                      >
                        <img src={item} alt="KS promo" />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        );
      })}
      <div className="promo-wrap other">
        <h1 className="promo-title">OTHER SMARTPHONE PROMOS 2019-2021</h1>
        <Slider {...settings2}>
          {harvest.map((item, i) => {
            return (
              <div className="gallery-item" style={{ width: "auto" }} key={i}>
                <img src={item} alt="KS promo" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
