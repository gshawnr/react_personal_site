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
          <h3>
            A React Native Password App that aims to provide a secure and
            user-friendly solution for generating and storing passwords.
          </h3>
          <p>
            The app offers full CRUD (Create, Read, Update, Delete)
            functionality with an authenticated login process to ensure the
            user's privacy and security. It uses Realm for local database
            storage, which ensures that the user's sensitive information is
            encrypted in local storage. The app intentionally does not sync data
            to cloud storage.
          </p>
          <ul>
            Features
            <li>Local database storage with Realm</li>
            <li>Authenticated Login</li>
            <li>Full CRUD functionality</li>
            <li>Customization of generated passwords</li>
            <li>Styling is still a work in progress</li>
          </ul>
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
