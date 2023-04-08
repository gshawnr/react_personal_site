import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import { sendMessage } from "../apis/aws";
import Modal from "../components/Modal";
import "./Contact.css";

type InputEvent = {
  target: {
    value: string;
  };
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalState, setModalState] = useState(false);

  const handleNameChange = (e: InputEvent) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: InputEvent) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: InputEvent) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      // TODO add validation
      const data = { name, email, message };

      // spacing added for message readability
      const formattedMsg = `
      ${message} 
      
      REPLY TO: ${email}`;

      // await sendMessage(formattedMsg, name);

      clearInputs();
      setModalState(true);
    } catch (err) {
      console.log("contact error: handleSubmit err", err);
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <form className="contact-form">
        <div className="contact form-control">
          <label className="contact">Name</label>
          <input
            className="contact"
            name="name"
            onChange={handleNameChange}
            required
            type="text"
            value={name}
          />
        </div>
        <div className="contact form-control">
          <label className="contact">Email</label>
          <input
            className="contact"
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="contact form-control">
          <label className="contact" id="message">
            Message
          </label>
          <textarea
            className="contact"
            id="message"
            name="message"
            rows={12}
            value={message}
            onChange={handleMessageChange}
          />
        </div>
        <div className="contact send-btn">
          <Button
            endIcon={<SendIcon />}
            fullWidth
            sx={{
              width: "20%",
              backgroundColor: "#0b2447",
              color: "#fcffe7",
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
      <div className="contact-social">
        <div>
          <a href="https://github.com/gshawnr">
            <GitHubIcon sx={{ color: "#fff", fontSize: 40 }} />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/shawn-richardson-3132bbb">
            <LinkedInIcon sx={{ fontSize: 40, color: "#fff" }} />
          </a>
        </div>
        <div>
          <a href="http://gsrdev.com/">
            <LanguageIcon sx={{ color: "#fff", fontSize: 40 }} />
          </a>
        </div>
      </div>
      <Modal
        modalState={modalState}
        changeModalState={setModalState}
        modalTitle={titleText}
        modalBody={bodyText}
      />
    </div>
  );
};

const titleText = "Message Sent";
const bodyText = "Thank you for reaching out.";
export default Contact;
