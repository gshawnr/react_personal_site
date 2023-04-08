import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="nav__menu-items">
        <Link to="/">HOME</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Navbar;
