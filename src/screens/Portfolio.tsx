import React from "react";
import Carousel from "../components/Carousel";

import mobImageStrs from "../assets/images/mob_images_export";
import webImageStrs from "../assets/images/web_images_export";

import "./Portfolio.css";

function Portfolio() {
  const mobImages = createImagesArr(mobImageStrs, "portfolio-image-mob");
  const webImages = createImagesArr(webImageStrs, "portfolio-image-web");

  return (
    <div className="portfolio-container">
      <div className="portfolio-mob-container">
        <div className="portfolio-mob-text-container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            enim voluptatem distinctio commodi, delectus assumenda, provident,
            odit veritatis quidem labore error adipisci? Laborum, id. Corporis,
            esse eum possimus accusamus earum illum, harum exercitationem
            quisquam beatae enim quas maiores ratione qui excepturi! Animi,
            quasi quas beatae molestias modi corporis? Corrupti, quam?
          </p>
        </div>
        <div className="portfolio-mob-carousel">
          <Carousel>{mobImages}</Carousel>
        </div>
      </div>
      <div className="portfolio-web-container">
        <div className="portfolio-carousel-web">
          <Carousel>{webImages}</Carousel>
        </div>
        <div className="portfolio-web-text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sint
            omnis velit dolor excepturi porro placeat dicta. Fuga deserunt
            impedit accusantium quos nesciunt, minima eos repellendus, veniam
            pariatur dolorum voluptas, assumenda blanditiis. In impedit
            voluptatem rem maxime aliquam accusamus ipsam cupiditate praesentium
            minus reiciendis non possimus quos, provident ducimus odio!
          </p>
        </div>
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
