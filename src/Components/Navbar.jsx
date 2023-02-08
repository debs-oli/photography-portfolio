import { NavLink } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

import "../CSS/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <NavLink to="/" className="logo">
          Marta Jesus
        </NavLink>
      </h1>

      <ul className="navMenu">
        <li>
          <NavLink to="/" className="navLink">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navLink">
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" className="navLink">
            work
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navLink">
            contact
          </NavLink>
        </li>
      </ul>

      <ul className="navRight">
        <li className="navIcon">
          <HiMoon className="navMode" />
        </li>
        <li className="navIcon">
          <FaBars className="navMobile" />
        </li>
      </ul>
    </nav>
  );
}
