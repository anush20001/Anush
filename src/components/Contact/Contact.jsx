import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import "../../App.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x7s3phi",
        "template_73xmp0d",
        form.current,
        "lMG4UQXUWhl38lVde"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset the form after submission
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            value={formData.user_name}
            onChange={(e) =>
              setFormData({ ...formData, user_name: e.target.value })
            }
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            value={formData.user_email}
            onChange={(e) =>
              setFormData({ ...formData, user_email: e.target.value })
            }
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />

          <input type="submit" value="Send" className="button" />

          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
