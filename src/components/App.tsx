import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [navColor, setNavColor] = useState("#fff");

  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/":
        setNavColor("#009FBD");
        break;
      case "/portfolio":
        setNavColor("#f7d060");
        break;
      case "/contact":
        setNavColor("#FF6969");
        break;
      default:
        setNavColor("#009FBD");
        break;
    }
  }, [location]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="App">
      <div
        className={`app-nav ${menuActive ? "app-nav__menu--active" : ""}`}
        style={{ backgroundColor: navColor }}
      >
        <div
          className="app-nav__menu"
          onClick={toggleMenu}
          style={{ backgroundColor: navColor }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "#000",
              display: "flex",
              alignItems: "center",
              marginLeft: ".75%",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <div className="app-nav__menu-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <Navbar linkColor={navColor} />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
