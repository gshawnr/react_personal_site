import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "../components/Carousel";

import mobImageStrs from "../assets/images/mob_images_export";
import webImageStrs from "../assets/images/web_images_export";

import "./Portfolio.css";

function Portfolio() {
  const mobImages = createImagesArr(mobImageStrs, "portfolio-image-mob");
  const webImages = createImagesArr(webImageStrs, "portfolio-image-web");

  console.log(mobImages);

  return (
    <div className="portfolio-container">
      <Typography variant="h1">Portfolio</Typography>
      <Paper
        elevation={3}
        sx={{
          margin: "4% auto",
          padding: "1%",
          width: "85%",
          borderRadius: "10px",
        }}
      >
        <div className="portfolio-carousel-container">
          <Carousel>{mobImages}</Carousel>
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
          width: "85%",
          borderRadius: "10px",
        }}
      >
        <div className="portfolio-carousel-container">
          <Carousel>{webImages}</Carousel>
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

function createImagesArr(
  imageStrings: string[],
  classname: string
): React.ReactNode[] {
  return imageStrings.map((image, index) => {
    return (
      <div key={index}>
        <img className={classname} src={image} />
      </div>
    );
  });
}

export default Portfolio;
