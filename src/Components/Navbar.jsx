import { useState } from "react";
import { Link } from "react-scroll";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { HiMoon, HiSun } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/Navbar.css";

export default function Navbar() {
  /* NAVBAR MENU */
  const [clickMenu, setClickMenu] = useState(false);
  const handleClickMenu = () => setClickMenu(!clickMenu);
  const closeMenu = () => setClickMenu(false);

  /* DARK/LIGHT MODE */
  const context = useContext(ThemeContext);
  const { isDarkTheme, darkTheme, lightTheme, changeTheme } = context;
  const theme = isDarkTheme ? darkTheme : lightTheme;
  const themeIcons = isDarkTheme ? <HiSun /> : <HiMoon />;

  return (
    <nav style={theme} id="navbar">
      <h1>
        <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={handleClickMenu} className="logo">
          Marta Jesus
        </Link>
      </h1>

      <ul style={theme} className={clickMenu ? "navMenu active" : "navMenu"}>
        <li className="navLink">
          <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
            home
          </Link>
        </li>
        <li className="navLink">
          <Link to="about" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
            about
          </Link>
        </li>
        <li className="navLink">
          <Link to="work" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
            work
          </Link>
        </li>
        <li className="navLink">
          <Link to="contacts" spy={true} smooth={true} offset={0} duration={500} onClick={closeMenu}>
            contacts
          </Link>
        </li>
      </ul>

      <ul className="navIcons">
        <li className="icon">
          <button className="navMode" onClick={changeTheme}>
            {themeIcons}
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
