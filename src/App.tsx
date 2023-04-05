import React, { useState } from "react";
import "./App.css";
import Home from "./Home";

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
          <div className="nav__menu-items">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;
