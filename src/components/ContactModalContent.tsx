import React from "react";
import { Typography, Box } from "@mui/material";

import "./ContactModalContent.css";

type inputProps = {
  data: string;
};

function ContactModalContent({ data }: inputProps) {
  return (
    <Box sx={{ margin: "3%" }}>
      <Typography className="contact-modal-content-text" variant="h5">
        Dear {data},
      </Typography>
      <Typography className="contact-modal-content-text">
        {" "}
        Thank you for your message.
      </Typography>
      <Typography className="contact-modal-content-text">
        I appreciate you taking the time to reach out to me through my website.
        I will do my best to get back to you as soon as possible.
      </Typography>
      <Typography className="contact-modal-content-text">
        Best regards,
      </Typography>
      <Typography className="contact-modal-content-text"> Shawn</Typography>
    </Box>
  );
}

export default ContactModalContent;
