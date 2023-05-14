import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

type NavbarProps = {
  linkColor: string;
};

const Navbar = ({ linkColor }: NavbarProps) => {
  const [menuActive, setMenuActive] = useState(true);

  return (
    <div className="nav" style={{ backgroundColor: linkColor }}>
      <div className={`${menuActive ? "nav-menu-active" : "nav-menu-hidden"}`}>
        <div className="nav-menu-icon-container">
          <div
            className="nav-menu-icon"
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="nav-menu-items" style={{ backgroundColor: linkColor }}>
        <Link style={{ backgroundColor: linkColor }} to="/">
          HOME
        </Link>
        <Link style={{ backgroundColor: linkColor }} to="/portfolio">
          PORTFOLIO
        </Link>
        <Link style={{ backgroundColor: linkColor }} to="/contact">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
