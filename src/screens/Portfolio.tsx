import React from "react";
import Carousel from "../components/Carousel";

import mobImageStrs from "../assets/images/mob_images_export";
import webImageStrs from "../assets/images/web_images_export";

import "./Portfolio.css";

function Portfolio() {
  const mobImages = createImagesArr(mobImageStrs, "portfolio-image-mob");
  const webImages = createImagesArr(webImageStrs, "portfolio-image-web");

  return (
    <div className="portfolio">
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
        <div className="portfolio-web-carousel">
          <Carousel>{webImages}</Carousel>
        </div>
        <div className="portfolio-web-text-container">
          <h3>MERN Stack Investing App</h3>
          <p>
            This project solves the challenge of processing and analyzing large
            amounts of financial data quickly and efficiently. It uses an
            Express back-end with user authentication and a third-party API to
            fetch and process historical financial data, which is then stored in
            MongoDB for easy access and analysis. The back-end stores the raw
            financial data obtained from the 3rd party API and then uses it
            (based on mappings) to generate several analysis documents that
            include metrics for assessing profitability, value, liquidity, and
            more. This approach ensures that the data is not only easily
            accessible, but also organized and presented in a meaningful way to
            users. A key benefit to this structure is that at some future date,
            different sources for financial data could be used, and only the
            internal mappings would need to be updated. This feature makes the
            project flexible and adaptable to changing conditions, ensuring that
            the users always have access to accurate and relevant financial
            data.
          </p>
          <p>
            The React front-end features intuitive interfaces and responsive
            design, making it easy for users to navigate and analyze complex
            financial data. With search and sort capabilities on the data
            tables, users can quickly find the information they need to make
            informed investment decisions.
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
