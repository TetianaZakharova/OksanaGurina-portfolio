import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";

import { asbispromo } from "./promo-data";

export const Asbis = () => {
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
      {asbispromo.map((item) => {
        return (
          <div className={`promo-wrap`} key={item.id}>
            <div className="promo-desc">
              <h1 className="promo-title">
                {item.title}
                {item.landing !== undefined && (
                  <span className='landing-link'>
                    <a
                      href={item.landing}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLink style={{ color: "white" }} />
                    </a>
                  </span>
                )}
              </h1>
              {item.subtitle && (
                <h2 className="promo-subtitle">{item.subtitle}</h2>
              )}
              {item.description !== "" && <p>{item.description}</p>}
              <div className="promo-details">
                {item.slogan !== undefined && (
                  <p style={{ fontSize: "1.5rem", fontWeight: "500" }}>
                    {item.slogan}
                  </p>
                )}
                {item.role && (
                  <div>
                    <p className="promo-item">Role:</p>
                    <span className="rolename">{item.role}</span>
                  </div>
                )}
                {item.target && (
                  <div>
                    <p className="promo-item">
                      {item.id === "asbisromo4"
                        ? "Sales targets 3Q’2017:"
                        : "TA:"}
                    </p>
                    <span className="rolename">{item.target}</span>
                  </div>
                )}
                {item.location !== undefined && (
                  <div>
                    <p className="promo-item">Location:</p>
                    <span className="rolename">{item.location}</span>
                  </div>
                )}
                {item.tasks && (
                  <div>
                    <div>
                      <p className="promo-item">
                        {item.id === "asbisromo3" ? "Agenda:" : "Tasks:"}
                      </p>
                    </div>
                    <ul>
                      {item.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.communication.length > 0 && (
                  <div>
                    <div>
                      <p className="promo-item">Communication:</p>
                    </div>
                    <ul>
                      {item.communication.map((com, i) => (
                        <li key={i}>
                          {com}{" "}
                          {item.landing !== undefined &&
                            com.includes("Landing") && (
                              <a
                                href={item.landing}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaLink style={{ color: "white" }} />
                              </a>
                            )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.budget && (
                  <div>
                    <p className="promo-item">Budget:</p>
                    <span className="rolename">{item.budget}</span>
                  </div>
                )}
                {item.results.length > 0 && (
                  <div>
                    <div>
                      <p className="promo-item">Results:</p>
                    </div>
                    <ul>
                      {item.results.map((res, i) => (
                        <li key={i}>{res}</li>
                      ))}
                    </ul>
                  </div>
                )}
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
                  <video
                    className="video"
                    controls
                    // autoPlay
                    muted
                    key={i}
                  >
                    <source src={vid} type="video/mp4" />
                  </video>
                )
              )}
              {item.photos2 !== undefined && (
                <div className="slider-container promo-gallery">
                  {item.photos2.length === 1 ? (
                    item.photos2.map((it, i) => {
                      return (
                        <div
                          className={`gallery-item logitech-promo ${
                            item.id === "asbisromo4" ? "poker-img" : ""
                          }`}
                          key={i}
                        >
                          <img src={it} alt="Asbis promo" />
                        </div>
                      );
                    })
                  ) : (
                    <Slider {...settings}>
                      {item.photos2.map((item, i) => {
                        return (
                          <div
                            className="gallery-item"
                            key={i}
                            style={{ width: "auto" }}
                          >
                            <img src={item} alt="Asbis promo" />
                          </div>
                        );
                      })}
                    </Slider>
                  )}
                </div>
              )}
              {item.photos.length > 0 && (
                <div className="slider-container promo-gallery">
                  {item.photos.length === 1 ? (
                    item.photos.map((item, i) => {
                      return (
                        <div
                          className="gallery-item"
                          style={{ width: "auto" }}
                          key={i}
                        >
                          <img src={item} alt="Asbis promo" />
                        </div>
                      );
                    })
                  ) : (
                    <Slider {...settings}>
                      {item.photos.map((i, index) => {
                        return (
                          <div
                            className={`gallery-item ${
                              item.id === "asbisromo1" ? "logitech-img" : ""
                            }`}
                            style={{ width: "auto" }}
                            key={index}
                          >
                            <img src={i} alt="Asbis promo" />
                          </div>
                        );
                      })}
                    </Slider>
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
