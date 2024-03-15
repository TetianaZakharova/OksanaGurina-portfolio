import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/imgs/gurina-contacts.png";
import contactImg2 from "../../assets/imgs/gurinaCV.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ModalWindow } from "../modal/Modal";

import "./contacts.scss";

export const Contacts = () => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [inputError, setInputError] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    message: "",
  });

  //   console.log(disabledBtn);
  //   console.log(inputError)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (!value) {
      setInputError((prev) => ({ ...prev, [name]: true }));
      setValidation((prev) => ({
        ...prev,
        [name]: `Field "${[
          name.charAt(0).toUpperCase() + name.slice(1),
        ]}" is required`,
      }));
    } else {
      setInputError((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handleEmailValidation = (e) => {
    const { name, value } = e.target;
    const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (name === "email" && !regExp.test(value) && value) {
      setInputError((prev) => ({ ...prev, [name]: true }));
      setValidation((prev) => ({
        ...prev,
        [name]: `Field "${[
          name.charAt(0).toUpperCase() + name.slice(1),
        ]}" is incorrect. Please enter valid Email`,
      }));
    }
  };

  useEffect(() => {
    if (
      !inputError.name &&
      !inputError.email &&
      !inputError.message &&
      formData.name !== "" &&
      formData.email !== "" &&
      formData.message !== ""
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [inputError, formData]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_21q68kd", "template_gpbvpmg", form.current, {
        publicKey: "GFVxQsU2pcGUn1Uq4",
      })
      .then(
        () => {
          e.target.reset();
          setFormData({ name: "", email: "", message: "" });
          setOpen(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contacts">
      <h2 className="section-title">Contacts</h2>
      <div className="contacts-wrap">
        <div className="contact-container">
          <img src={contactImg2} alt="MP Manager" />
          <div className="contact-info">
            <div className="contact-wrap">
              <FaMapMarkerAlt size={20} className="contact-icon" />
              <div>Strasbourg, France</div>
            </div>
            <a className="contact-wrap" href="mailto:oksana.gurina@gmail.com">
              <IoIosMail className="contact-icon" size={20} />
              <div>oksana.gurina@gmail.com</div>
            </a>
            <a
              className="contact-wrap"
              href="https://www.linkedin.com/in/oksanagurina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} className="contact-icon" />
              <div>linkedin.com/in/oksanagurina</div>
            </a>
            <div className="contact-wrap">
              <BsFillTelephoneFill size={20} className="contact-icon" />
              <div className="contact-numbers">
                <a href="tel:+330766351329">+33 07 66 35 13 29</a>
                <a href="tel:+380675841011">+38 06 75 84 10 11</a>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container">
          <p className="contactDesc">Let's Get In Touch</p>
          <Box
            onSubmit={sendEmail}
            ref={form}
            className="form-wrap"
            component="form"
            autoComplete="off"
            sx={{}}
            //   noValidate
          >
            <TextField
              id="outlined-basic"
              error={inputError.name}
              className="form-input"
              required
              label="Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              helperText={inputError.name ? validation.name : ""}
            />
            <TextField
              id="outlined-basic"
              className="form-input"
              error={inputError.email}
              required
              label="Your Email"
              variant="outlined"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleEmailValidation}
              helperText={inputError.email ? validation.email : ""}
            />
            <TextField
              id="outlined-basic"
              className="form-input"
              error={inputError.message}
              required
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              helperText={inputError.message ? validation.message : ""}
            />
            <button
              type="submit"
              value="Send"
              className="sumbitBtn"
              disabled={disabledBtn}
            >
              send message
            </button>
          </Box>
        </div>
        <ModalWindow open={open} setOpen={setOpen}>
          <div style={{ marginTop: "1.5rem" }}>
            That's Great!
            <br /> Your Message has been sent to Oksana Gurina
          </div>
          <div className="closeBtn" onClick={() => setOpen(false)}>Close</div>
        </ModalWindow>
      </div>
    </section>
  );
};
