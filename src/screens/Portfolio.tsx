import React from "react";
import { Paper, Typography } from "@mui/material";
import Carousel from "../components/Carousel";

import mobImageStrs from "../assets/images/mob_images_export";
import webImageStrs from "../assets/images/web_images_export";

import "./Portfolio.css";

function Portfolio() {
  const mobImages = createImagesArr(mobImageStrs, "portfolio-image-mob");
  const webImages = createImagesArr(webImageStrs, "portfolio-image-web");

  return (
    <div className="portfolio-container">
      <div className="portfolio-carousel-container">
        <Carousel>{mobImages}</Carousel>
      </div>
      <div className="portfolio-carousel-container">
        <Carousel>{webImages}</Carousel>
      </div>
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
        <div>
          <img className={classname} src={image} />
        </div>
      </div>
    );
  });
}

export default Portfolio;
