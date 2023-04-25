import { Box, Typography } from "@mui/material";

import "./AboutMeContent.css";

function AboutMeContent() {
  return (
    <Box sx={{ backgroundColor: "#FAF8F1" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3">About Me</Typography>
      </Box>
      <Box className="about-me-content">
        <Typography className="about-me-content-text">
          Hi, I'm Shawn. I'm a software developer with a degree in Electrical
          Engineering and over 3 years of experience working in full stack
          development.
        </Typography>
        <Typography className="about-me-content-text">
          My main interests lie in working with React and React Native to build
          engaging and interactive user interfaces. I'm also passionate about
          developing robust, scalable back-end solutions to support these
          applications. In addition to my technical experience, I hold a
          business degree from the Richard Ivey School of Business and a
          Software Systems Developer diploma from BCIT.
        </Typography>
        <Typography className="about-me-content-text">
          I'm always looking for new challenges and opportunities to learn and
          grow as a developer. Feel free to reach out to me to learn more or
          discuss potential projects.
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutMeContent;
