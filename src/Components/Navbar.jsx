import React from "react";
import { useState } from "react";
import { HiMoon } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";

import "../CSS/Navbar.css";

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  return (
    <nav className="navbar">
      <h1>
        <a href="#home" className="logo">
          Marta Jesus
        </a>
      </h1>

      <ul className={clickMenu ? "navMenu active" : "navMenu"} onClick={handleClickMenu}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#work">work</a>
        </li>
        <li>
          <a href="#contacts">contacts</a>
        </li>
      </ul>

      <ul className="navIcons">
        <li className="icon">
          <span>
            <HiMoon className="navMode" />
          </span>
        </li>
        <li className="icon">
          <span className="navMobile" onClick={handleClickMenu}>
            {clickMenu ? <FaTimes /> : <FaBars />}
          </span>
        </li>
      </ul>
    </nav>
  );
}
