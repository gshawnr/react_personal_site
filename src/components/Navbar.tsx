import React, { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__hamburger">
          <div className={`hamburger__line ${open ? "open" : ""}`}></div>
          <div className={`hamburger__line ${open ? "open" : ""}`}></div>
          <div className={`hamburger__line ${open ? "open" : ""}`}></div>
        </div>
      </nav>
      <div className="nav__menu-items">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PORTFOLIO</a>
        <a href="#">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
