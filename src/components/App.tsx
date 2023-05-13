import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Portfolio from "../screens/Portfolio";
import Navbar from "./Navbar";

import "./App.css";

function App() {
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

  return (
    <div className="app">
      <Navbar linkColor={navColor} />
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
