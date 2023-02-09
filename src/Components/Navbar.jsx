import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

import "../CSS/Navbar.css";

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  return (
    <nav className="navbar">
      <h1>
        <NavLink to="/" className="logo">
          Marta Jesus
        </NavLink>
      </h1>

      <ul className={clickMenu ? "navMenu active" : "navMenu"} onClick={() => handleClickMenu(false)}>
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
          <span>
            <HiMoon className="navMode" />
          </span>
        </li>
        <li className="navIcon">
          <span className="navMobile" onClick={handleClickMenu}>
            {clickMenu ? <FaTimes /> : <FaBars />}
          </span>
        </li>
      </ul>
    </nav>
  );
}
