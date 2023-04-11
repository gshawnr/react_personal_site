import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";

import { sendMessage } from "../apis/aws";
import ContactModalContent from "../components/ContactModalContent";
import Modal from "../components/Modal";

import "./Contact.css";

type InputEvent = {
  target: {
    value: string;
  };
};

const Contact = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMsg] = useState("");
  const [resMsgName, setResMsgName] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState("");

  const [message, setMessage] = useState("");
  const [msgError, setMsgError] = useState(false);
  const [msgErrorMsg, setMsgErrorMsg] = useState("");

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
      if (!validateInputs()) {
        return;
      }

      // spacing added for message readability
      const formattedMsg = `
      ${message} 
      
      REPLY TO: ${email}`;

      await sendMessage(formattedMsg, name);

      setResMsgName(name);
      setModalState(true);
      clearInputs();
    } catch (err) {
      console.log("contact error: handleSubmit err", err);
    }
  };

  const clearInputs = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const validateInputs = (): boolean => {
    let result = true;

    //name regex
    const nameRegex = /^(?!.*['"])[a-zA-Z0-9\s]+$/gm;
    if (!nameRegex.test(name)) {
      setNameError(true);
      setNameErrorMsg(
        "Name must be provided. Note some special characters are restricted."
      );
      result = false;
    }

    //email regex
    const emailRegex = /^(?!.*['"])[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/g;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setEmailErrorMsg("Email is invalid.  Please try again.");
      result = false;
    }

    //msg regex
    const msgRegex = /^(?!.*['"])[a-zA-Z0-9.-_*(),\\n\s]+$/gm;
    if (!msgRegex.test(message)) {
      setMsgError(true);
      setMsgErrorMsg(
        "Message must be provided. Note special characters are restricted (ie \" and ').  Please try again."
      );
      result = false;
    }

    return result;
  };

  return (
    <Container className="contact-container">
      <Typography className="contact-heading" variant="h3">
        How Can I Help?
      </Typography>
      <Box className="contact-form-control">
        <Box className="contact-form-group">
          <TextField
            autoFocus
            className="contact-input"
            error={nameError}
            fullWidth
            helperText={nameErrorMsg}
            label="name"
            onChange={(e) => {
              setNameError(false);
              setNameErrorMsg("");
              handleNameChange(e);
            }}
            required={true}
            type="text"
            value={name}
            variant="standard"
          />
        </Box>
        <Box className="contact-form-group">
          <TextField
            className="contact-input"
            error={emailError}
            fullWidth
            helperText={emailErrorMsg}
            label="email"
            onChange={(e) => {
              setEmailError(false);
              setEmailErrorMsg("");
              handleEmailChange(e);
            }}
            required
            type="email"
            value={email}
            variant="standard"
          />
        </Box>
        <Box className="contact-form-group">
          <TextField
            className="contact-input"
            error={msgError}
            fullWidth
            helperText={msgErrorMsg}
            label="message"
            multiline
            onChange={(e) => {
              setMsgError(false);
              setMsgErrorMsg("");
              handleMessageChange(e);
            }}
            required
            rows={8}
            value={message}
            variant="outlined"
          />
        </Box>
        <Box
          className="contact-btn-group"
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            className="contact-send-btn"
            endIcon={<SendIcon />}
            fullWidth
            sx={{
              width: "25%",
              backgroundColor: "#0b2447",
              color: "#fcffe7",
            }}
            onClick={handleSubmit}
            type="submit"
            variant="contained"
          >
            Send
          </Button>
        </Box>
      </Box>
      <Box className="contact-social">
        <Box>
          <a href="https://github.com/gshawnr">
            <GitHubIcon sx={{ color: "#fff", fontSize: 40 }} />
          </a>
        </Box>
        <Box>
          <a href="https://linkedin.com/in/shawn-richardson-3132bbb">
            <LinkedInIcon sx={{ fontSize: 40, color: "#fff" }} />
          </a>
        </Box>
        <Box>
          <a href="http://gsrdev.com/">
            <LanguageIcon sx={{ color: "#fff", fontSize: 40 }} />
          </a>
        </Box>
      </Box>
      <Modal
        modalState={modalState}
        changeModalState={setModalState}
        modalBody={<ContactModalContent data={resMsgName} />}
      />
    </Container>
  );
};

export default Contact;
