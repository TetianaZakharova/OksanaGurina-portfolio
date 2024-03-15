import React from "react";
import Slider from "react-slick";
import { FaLink } from "react-icons/fa";

import { alcatelpromo } from "./promo-data";

export const Alcatel = () => {
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
      {alcatelpromo.map((item) => {
        return (
          <div className={`promo-wrap`} key={item.id}>
            <div className="promo-desc">
              <h1 className="promo-title">{item.title}</h1>
              {item.subtitle && (
                <h2 className="promo-subtitle">{item.subtitle}</h2>
              )}

              <div className="promo-details">
                {item.description !== undefined && (
                  <div>
                    <p className="promo-item">Idea:</p>
                    <span>{item.description}</span>
                  </div>
                )}
                {item.slogan !== undefined && (
                  <p style={{ fontSize: "1.2rem", fontWeight: "400" }}>
                    {item.slogan}
                  </p>
                )}
                {item.role && (
                  <div>
                    <p className="promo-item">Role:</p>
                    <span className="rolename">{item.role}</span>
                  </div>
                )}
                {item.communication.length > 0 && (
                  <div>
                    <div>
                      <p className="promo-item">Communication:</p>
                    </div>
                    <ul>
                      {item.communication.map((com, i) => (
                        <li key={i}>{com}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.tasks && (
                  <div>
                    <div>
                      <p className="promo-item">Activities</p>
                    </div>
                    <ul>
                      {item.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.coverage !== undefined && (
                  <div>
                    <p className="promo-item">Coverage:</p>
                    <span>{item.coverage}</span>
                  </div>
                )}
                {item.ctr !== undefined && (
                  <div>
                    <p className="promo-item">CTR:</p>
                    <span>{item.ctr}</span>
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
              {item.photos3 !== undefined && (
                <div className="slider-container promo-gallery">
                  {item.photos3.map((item, i) => {
                    return (
                      <div className="gallery-item logitech-promo" key={i}>
                        <img src={item} alt="Asbis promo" />
                      </div>
                    );
                  })}
                </div>
              )}
              {item.photos2 !== undefined && (
                <div className="slider-container promo-gallery">
                  {item.photos2.length === 1 ? (
                    item.photos2.map((item, i) => {
                      return (
                        <div className="gallery-item logitech-promo" key={i}>
                          <img src={item} alt="Asbis promo" />
                        </div>
                      );
                    })
                  ) : (
                    <Slider {...settings}>
                      {item.photos2.map((item, i) => {
                        return (
                          <div
                            key={i}
                            className="gallery-item"
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
                        <div className="gallery-item" key={i} style={{ width: "auto" }}>
                          <img src={item} alt="Asbis promo" />
                        </div>
                      );
                    })
                  ) : (
                    <Slider {...settings}>
                      {item.photos.map((i, index) => {
                        return (
                          <div
                          key={index}
                            className={`gallery-item ${
                              item.id === "asbisromo1" ? "logitech-img" : ""
                            }`}
                            style={{ width: "auto" }}
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
