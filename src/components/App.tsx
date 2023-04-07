import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Portfolio from "../screens/Portfolio";

import "./App.css";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <div className={`app-nav ${menuActive ? "app-nav__menu--active" : ""}`}>
        <div className="app-nav__menu" onClick={toggleMenu}>
          <div className="app-nav__menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
