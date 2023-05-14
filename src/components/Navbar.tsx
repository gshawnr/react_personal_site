import { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

type NavbarProps = {
  linkColor: string;
};

const Navbar = ({ linkColor }: NavbarProps) => {
  const [menuActive, setMenuActive] = useState(false);

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
        <Link
          style={{ backgroundColor: linkColor }}
          to="/"
          onClick={() => setMenuActive(!menuActive)}
        >
          HOME
        </Link>
        <Link
          style={{ backgroundColor: linkColor }}
          to="/portfolio"
          onClick={() => setMenuActive(!menuActive)}
        >
          PORTFOLIO
        </Link>
        <Link
          style={{ backgroundColor: linkColor }}
          to="/contact"
          onClick={() => setMenuActive(!menuActive)}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
