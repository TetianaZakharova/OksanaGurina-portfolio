import React from "react";
import Slider from "react-slick";

import { vodafonepromo } from "./promo-data";

export const Vodafone = () => {
 
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
    // adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerMode: true,
    focusOnSelect: true,
  };

  return (
    <div className="promo-container">
      {vodafonepromo.map((item) => {
        return (
          <div className={`promo-wrap ${item.id === 'vodafone4' ? 'other' : ''}`} key={item.id}>
            <div className="promo-desc">
              <h1 className="promo-title">{item.title}</h1>
              {item.subtitle && (
                <h2 className="promo-subtitle">{item.subtitle}</h2>
              )}
              {item.maintarget && <p>{item.maintarget}</p>}
              <div className="promo-details">
                {item.role && (
                  <div>
                    <p className="promo-item">Role:</p>
                    <span className="rolename">{item.role}</span>
                  </div>
                )}
                {item.tasks && (
                  <div>
                    <div>
                      <p className="promo-item">Tasks:</p>
                    </div>
                    <ul>
                      {item.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.communication && (
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
                {item.results && (
                  <div>
                    <div>
                      <p className="promo-item">Results, week to week:</p>
                    </div>
                    <ul>
                      {item.results.map((res, i) => (
                        <li key={i} className="week-results" >{res}</li>
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
                {item.target && (
                  <div>
                    <p className="promo-item">Sales target:</p>
                    <span className="rolename">{item.target}</span>
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
                  <video className={`video ${item.id === "vodafone1" ? "blackfrd": "yyy"}`} controls
                  //  autoPlay 
                   muted key={i}>
                    <source src={vid} type="video/mp4" />
                  </video>
                )
              )}

              {item.photos.length > 0 && (
                <div className="slider-container promo-gallery">
                  {item.photos.length === 1 ? (
                    item.photos.map((item, i) => {
                      return (
                        <div className="gallery-item" style={{ width: "auto" }} key={i}>
                          <img src={item} alt="KS promo" />
                        </div>
                      );
                    })
                  ) : (
                    <Slider {...settings}>
                      {item.photos.map((item, i) => {
                        return (
                          <div
                          key={i}
                            className="gallery-item"
                            style={{ width: "auto" }}
                          >
                            <img src={item} alt="KS promo" />
                          </div>
                        );
                      })}
                    </Slider>
                  )}
                </div>
              )}
            </div>
            {item.id === "vodafone3" && (
              <div className="promo-details additional">
                <div className="smm-wrap">
                  {item.communication2 && (
                    <div>
                      <div>
                        <p className="promo-item">Communication:</p>
                      </div>
                      <ul>
                        {item.communication2.map((com, i) => (
                          <li key={i}>{com}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.slogan.length > 0 && (
                    <div className="smm-clogans">
                      {item.slogan.map((i, index) => (
                        <p key={index}>{i}</p>
                      ))}
                    </div>
                  )}
                </div>
                {item.photos2 !== undefined && (
                  <Slider {...settings}>
                    {item.photos2.map((item, i) => {
                      return (
                        <div className="gallery-item" style={{ width: "auto" }} key={i}>
                          <img src={item} alt="KS promo" />
                        </div>
                      );
                    })}
                  </Slider>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};