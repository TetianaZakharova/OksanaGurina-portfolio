import React, { useState } from "react";
import experience from "../../assets/data/experience.json";
import Typography from "@mui/joy/Typography";
import { ModalWindow } from "../modal/Modal";
import "./experience.scss";
import { IoIosArrowDropright } from "react-icons/io";

export const Experience = () => {
  const [open, setOpen] = useState(false);
  const [activeDetails, setActiveDetails] = useState();

  const detailsHandler = (id) => {
    // console.log(id);
    setActiveDetails(id);
    setOpen(true);
  };

  return (
    <section id="experience">
      <h2 className="section-title">work experience</h2>
      <div className="experience-wrap">
        {experience.map((item) => {
          return (
            <div className="experience-item" key={item.id}>
              <div className="company-wrap">
                <div className="company-logo">
                  <img className="logo-item" src={item.img} alt={item.name} />{" "}
                </div>
                <div className="company-name">
                  <p className="name">{item.name}</p>
                  <p className="description">{item.description}</p>
                </div>
              </div>
              {item.title.map((role, i) => {
                return (
                  <p className="role" key={i}>
                    {role.role}
                    <span className="role-date">{role.data}</span>
                  </p>
                );
              })}
              <p
                className="role-details"
                onClick={() => detailsHandler(item.id)}
              >
                Details <IoIosArrowDropright />
              </p>
            </div>
          );
        })}

        <ModalWindow open={open} setOpen={setOpen}>
          {experience
            .filter((item) => item.id === activeDetails)
            .map((i) => {
              return (
                <div key={i.id}>
                  <div>
                    <img style={{ height: "60px" }} src={i.img} alt="" />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      // textColor="inherit"
                      textColor="white"
                      fontWeight="lg"
                      mb={1}
                    >
                      {i.name}
                    </Typography>
                    <Typography
                      component="p"
                      //   id="modal-title"
                      //   level="h4"
                      // textColor="inherit"
                      textColor="white"
                      fontWeight="lg"
                      mb={1}
                    >
                      {i.description}
                    </Typography>
                  </div>
                  <Typography
                    id="modal-desc"
                    className="ach-list"
                    textColor="text.tertiary"
                    component="ul"
                  >
                    {i.achievements.map((ach, i) => (
                      <li className="ach-item" key={i}>
                        {ach}
                      </li>
                    ))}
                  </Typography>
                </div>
              );
            })}
        </ModalWindow>
      </div>
    </section>
  );
};
