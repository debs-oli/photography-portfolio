import { Link } from "react-scroll";
import { FaBehance, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "../CSS/Home.css";

export default function Home() {
  return (
    <main id="home">
      <div className="homeContent">
        <h1>Hi, I'm Marta Jesus</h1>
        <h2>
          a <span>photographer</span>
        </h2>
        <p>passionate photographer with a special interest in film and fashion photography</p>

        <ul>
          <li>
            <a href="https://www.behance.net/oceartn">
              <FaBehance className="social" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/oceartn/">
              <FaInstagram className="social" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/oceartn/">
              <FaLinkedinIn className="social" />
            </a>
          </li>
        </ul>

        <div className="checkWork">
          <Link to="work" spy={true} smooth={true} offset={0} duration={500}>
            check my work
          </Link>
        </div>
      </div>

      <div>
        <img src="/Images/marta.png" alt="profilePic" />
      </div>
    </main>
  );
}
