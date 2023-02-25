import { useEffect, useState } from "react";
import { FaUser, FaPhoneAlt, FaLocationArrow, FaAngleRight } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

import "../CSS/About.css";

export default function About() {
  const [clickTab, setClickTab] = useState(1);

  const clickState = (index) => {
    setClickTab(index);
  };

  const [experience, setExperience] = useState([]);

  useEffect(() => {
    fetch("/API/experience.json")
      .then((response) => response.json())
      .then((data) => setExperience(data));
  }, []);

  return (
    <main id="about">
      <img src="/Images/about.png" alt="" />

      <div>
        <h1>get to know me</h1>
        <ul className="tabs">
          <li>
            <button className="singleTab" onClick={() => clickState(1)}>
              about
            </button>
          </li>
          <li>
            <button className="singleTab" onClick={() => clickState(2)}>
              skills
            </button>
          </li>
          <li>
            <button className="singleTab" onClick={() => clickState(3)}>
              education
            </button>
          </li>
          <li>
            <button className="singleTab" onClick={() => clickState(4)}>
              experience
            </button>
          </li>
        </ul>

        <div className="tabContent">
          {/* ABOUT CONTENT */}
          <div className={clickTab === 1 ? "content activeContent" : "content"}>
            <div className="aboutContent">
              <p>
                Passionate photographer with a special interest in film and fashion photography! Always looking forward
                for the next challenge in my field as well as in my personal growth. I have a unique and soulful gaze
                that makes me stand out with the talent I already have.
              </p>
              <ul>
                <li>
                  <span>
                    <FaUser />
                  </span>{" "}
                  Marta Jesus
                </li>
                <li>
                  <span>
                    <FaLocationArrow />
                  </span>{" "}
                  Maia, Portugal
                </li>
                <li>
                  <span>
                    <FaPhoneAlt />
                  </span>{" "}
                  +351 916 844 313
                </li>
                <li>
                  <span>
                    <AiFillMessage />
                  </span>{" "}
                  martajesus.work@gmail.com
                </li>
              </ul>
            </div>
          </div>
          {/* SKILLS CONTENT */}
          <div className={clickTab === 2 ? "content activeContent" : "content"}>
            <div className="skillsContent">
              <p>
                I'm creative, a team player and organized. Additionally, I enjoy greatly to be constantly learning and
                becoming a better professional and human being.
              </p>
              <div className="skillsWrapper">
                <div className="skill">
                  <p>Adobe Premiere Pro</p>
                  <div className="skillBar skill1">
                    <span className="skillCount1">90%</span>
                  </div>
                </div>
                <div className="skill">
                  <p>Adobe Lightroom</p>
                  <div className="skillBar skill2">
                    <span className="skillCount2">90%</span>
                  </div>
                </div>
                <div className="skill">
                  <p>Adobe Photoshop</p>
                  <div className="skillBar skill3">
                    <span className="skillCount3">50%</span>
                  </div>
                </div>
                <div className="skill">
                  <p>English</p>
                  <div className="skillBar skill4">
                    <span className="skillCount4">90%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EDUCATION CONTENT */}
          <div className={clickTab === 3 ? "content activeContent" : "content"}>
            <div className="educationContent">
              <h2>school of arts, catholic university of portugal</h2>
              <h3>degree in sound and image</h3>
              <p>2018 - 2020</p>
              <p>
                Broad set of skills in the fields of cinema and audiovisual, sound design, multimedia art and 3D
                animation:
              </p>
              <ul>
                <li>
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  fundamental aspects of audiovisual language
                </li>
                <li>
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  operate and manipulate technical equipment
                </li>
                <li>
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  master basic composition and editing rules in image and sound
                </li>
                <li>
                  <span>
                    <FaAngleRight />
                  </span>{" "}
                  conceive, produce and implement complete projects
                </li>
              </ul>
            </div>
          </div>
          {/* EXPERIENCE CONTENT */}
          {experience.map((experience) => (
            <div key={experience.id} className={clickTab === 4 ? "content activeContent" : "content"}>
              <div className="experienceContent">
                <h2>{experience.company}</h2>
                <h3>{experience.position}</h3>
                <p>{experience.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
