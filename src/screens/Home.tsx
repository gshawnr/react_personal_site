import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

import BasicModal from "../components/Modal";
import AboutMeContent from "../components/AboutMeContent";
import profileImage from "../assets/images/person.jpg";

import "./Home.css";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="home">
      <div className="home__main">
        <div className="image__container">
          <img className="home__image" src={profileImage} alt="" />
        </div>
        <div className="home__text">
          <h1>HI THERE !</h1>
          <h2>LOOKING FOR A SOFTWARE DEVELOPER?</h2>
          <p>
            I'm a freelance Fullstack developer based in Vancouver, BC. I am
            focused on building beautiful mobile and web applications using
            React and React Native
          </p>
          <button className="home__button" onClick={() => setModalState(true)}>
            <PersonIcon sx={{ verticalAlign: "middle", paddingRight: "3%" }} />
            <span className="home__button_text">ABOUT ME</span>
          </button>
          <BasicModal
            modalState={modalState}
            changeModalState={setModalState}
            modalBody={<AboutMeContent />}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
