import { Link } from "react-router-dom";

import "./Navbar.css";

type NavbarProps = {
  linkColor: string;
};

const Navbar = ({ linkColor }: NavbarProps) => {
  return (
    <div>
      <div className="nav__menu-items">
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
