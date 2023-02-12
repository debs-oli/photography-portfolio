import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "../CSS/Home.css";

export default function Home() {
  return (
    <main className="home">
      <div className="homeContent">
        <h1>Hi I'm Marta Jesus</h1>
        <h2>
          a <span>photographer</span>
        </h2>
        <p>passionate photographer with a special interest in film and fashion photography</p>

        <div className="social">
          <a href="https://www.behance.net/oceartn">
            <FaBehance className="links" />
          </a>
          <a href="https://www.instagram.com/oceartn/">
            <FaInstagram className="links" />
          </a>
          <a href="https://www.linkedin.com/in/oceartn/">
            <FaLinkedinIn className="links" />
          </a>
        </div>

        <div className="work">
          <NavLink to="/work" className="seeWork">
            check my work
          </NavLink>
        </div>
      </div>

      <div className="profile">
        <img src="/Images/marta.png" alt="" className="img" />
      </div>
    </main>
  );
}
