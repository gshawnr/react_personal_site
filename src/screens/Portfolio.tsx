import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "../components/Carousel";

import web from "../assets/images/web.png";
import web2 from "../assets/images/web2.png";

import "./Portfolio.css";

const imageStrings: string[] = [web, web2, web, web2, web, web2];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Typography variant="h1">Portfolio</Typography>
      <Paper
        elevation={3}
        sx={{
          margin: "4% auto",
          padding: "1%",
          width: "70%",
          borderRadius: "10px",
        }}
      >
        <div className="portfolio-carousel-container">
          <Carousel>{images}</Carousel>
        </div>
        <Typography variant="h5" sx={{ paddingX: "5%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
          veritatis beatae velit facere sapiente numquam ex et dolorem
          dignissimos vel in facilis totam nisi delectus, repudiandae quos
          possimus aut?
        </Typography>
        <br />
        <Typography variant="h5" sx={{ paddingX: "5%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
          veritatis beatae velit facere sapiente numquam ex et dolorem
          dignissimos vel in facilis totam nisi delectus, repudiandae quos
          possimus aut?
        </Typography>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          margin: "1% auto",
          padding: "1%",
          width: "70%",
          borderRadius: "10px",
        }}
      >
        <div className="portfolio-carousel-container">
          <Carousel>{images}</Carousel>
        </div>
        <Typography variant="h5" sx={{ paddingX: "5%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
          veritatis beatae velit facere sapiente numquam ex et dolorem
          dignissimos vel in facilis totam nisi delectus, repudiandae quos
          possimus aut?
        </Typography>
        <br />
        <Typography variant="h5" sx={{ paddingX: "5%" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eaque
          veritatis beatae velit facere sapiente numquam ex et dolorem
          dignissimos vel in facilis totam nisi delectus, repudiandae quos
          possimus aut?
        </Typography>
      </Paper>
    </div>
  );
}

const images: React.ReactNode[] = imageStrings.map((image, index) => {
  return (
    <div key={index}>
      <img className="portfolio-image" src={image} />
    </div>
  );
});

export default Portfolio;
