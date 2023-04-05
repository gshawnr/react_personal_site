import PersonIcon from "@mui/icons-material/Person";
import ClearAllIcon from "@mui/icons-material/ClearAll";

import BasicModal from "../components/Modal";
import profileImage from "../assets/images/person.jpg";

import "./Home.css";

const Home = () => {
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
          <BasicModal />
        </div>
      </div>
    </div>
  );
};

export default Home;
