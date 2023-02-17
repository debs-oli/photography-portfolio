import React from "react";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import "../CSS/Home.css";

export default function Home() {
  return (
    <main className="home" id="home">
      <div className="homeContent">
        <h1>Hi, I'm Marta Jesus</h1>
        <h2>
          a <span>photographer</span>
        </h2>
        <p>passionate photographer with a special interest in film and fashion photography</p>

        <div className="social">
          <a href="https://www.behance.net/oceartn">
            <FaBehance className="socialLinks" />
          </a>
          <a href="https://www.instagram.com/oceartn/">
            <FaInstagram className="socialLinks" />
          </a>
          <a href="https://www.linkedin.com/in/oceartn/">
            <FaLinkedinIn className="socialLinks" />
          </a>
        </div>

        <div className="checkWork">
          <a href="#work">check my work</a>
        </div>
      </div>

      <div className="profile">
        <img src="/Images/marta.png" alt="profilePic" />
      </div>
    </main>
  );
}
