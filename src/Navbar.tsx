import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__hamburger" onClick={() => setOpen(!open)}>
        <div className={`hamburger__line ${open ? "open" : ""}`}></div>
        <div className={`hamburger__line ${open ? "open" : ""}`}></div>
        <div className={`hamburger__line ${open ? "open" : ""}`}></div>
      </div>
      <div className={`navbar__menu ${open ? "open" : ""}`}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
