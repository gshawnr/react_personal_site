import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

// import profileImage from "../assets/images/person.jpg";
import profileImage from "../assets/images/profile.jpg";
import AboutMeContent from "../components/AboutMeContent";
import BasicModal from "../components/Modal";

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
          <h1>Hi There</h1>
          <h1>Looking For A Software Developer?</h1>
          <p>
            I'm a freelance Fullstack developer based in Vancouver, BC. My focus
            is on building beautiful mobile and web applications using React and
            React Native.
          </p>
          <button className="home__button" onClick={() => setModalState(true)}>
            <PersonIcon sx={{ verticalAlign: "middle", paddingRight: "3%" }} />
            <span className="home__button_text">ABOUT ME</span>
          </button>
          <BasicModal
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
