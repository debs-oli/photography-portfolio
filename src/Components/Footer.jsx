import React from "react";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../CSS/Footer.css";

export default function Footer() {
  return (
    <div>
      <footer id="footer">
        <h1>marta jesus photography</h1>
        <ul className="social">
          <li>
            <a href="https://www.behance.net/oceartn">
              <FaBehance />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/oceartn/">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oceartn/">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
        <p>Copyright &copy;2023 by Débora Oliveira </p>
      </footer>
    </div>
  );
}
