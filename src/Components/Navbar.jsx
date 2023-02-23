import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HiMoon, HiSun } from "react-icons/hi";

import "../CSS/Navbar.css";

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  const context = useContext(ThemeContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context;
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const icon = isDarkTheme ? <HiSun /> : <HiMoon />;

  return (
    <nav style={theme} id="navbar">
      <h1>
        <a href="#home" className="logo">
          Marta Jesus
        </a>
      </h1>

      <ul style={theme} className={clickMenu ? "navMenu active" : "navMenu"} onClick={handleClickMenu}>
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
          <button className="navMode" onClick={changeTheme}>
            {icon}
          </button>
        </li>
        <li className="icon">
          <button className="navMobile" onClick={handleClickMenu}>
            {clickMenu ? <FaTimes /> : <FaBars />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
