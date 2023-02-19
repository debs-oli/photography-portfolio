import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { useState } from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import "../CSS/Navbar.css";

export default function Navbar() {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);

  const context = useContext(ThemeContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context;
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <nav style={theme} className="navbar">
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
          <span className="navMode" onClick={changeTheme}>
            <BsFillLightbulbFill />
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
