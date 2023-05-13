import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

import profileImage from "../assets/images/profile.jpg";
import AboutMeContent from "../components/AboutMeContent";
import Modal from "../components/Modal";

import "./Home.css";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="home">
      <div className="home-main">
        <div className="image-container">
          <img className="home-image" src={profileImage} alt="" />
        </div>
        <div className="home-text">
          <h1>Hi There</h1>
          <h1>Looking For A Software Developer?</h1>
          <p>
            I'm a freelance Fullstack developer based in Vancouver, BC. My focus
            is on building beautiful mobile and web applications using React and
            React Native.
          </p>
          <div className="home-btn-container">
            <button className="home-button" onClick={() => setModalState(true)}>
              <PersonIcon
                sx={{ verticalAlign: "middle", paddingRight: "3%" }}
              />
              <span className="home-button-text">ABOUT ME</span>
            </button>
          </div>
          <Modal
            changeModalState={setModalState}
            modalBody={<AboutMeContent />}
            modalState={modalState}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
