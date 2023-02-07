import { NavLink } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav id="navbar">
      <h1>
        <NavLink to="/" className="logo">
          Marta Jesus
        </NavLink>
      </h1>

      <ul className="menu">
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

      <ul className="icons">
        <il>
          <HiMoon className="ldMode" />
        </il>
        <il>
          <FaBars className="navMobile" />
        </il>
      </ul>
    </nav>
  );
}
