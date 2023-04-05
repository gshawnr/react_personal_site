import { useState } from "react";
import "./App.css";
import Home from "../screens/Home";
import Navbar from "./Navbar";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <div className={`nav ${menuActive ? "nav__menu--active" : ""}`}>
        <div className="nav__menu" onClick={toggleMenu}>
          <div className="nav__menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Navbar />
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
