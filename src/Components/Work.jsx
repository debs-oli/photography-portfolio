import { useState } from "react";
import workData from "./WorkData";
import "../CSS/Work.css";

export default function Work() {
  const [work, setWork] = useState(workData);

  const filterWork = (categoryWork) => {
    const result = workData.filter((currentCategory) => {
      return currentCategory.category === categoryWork;
    });
    setWork(result);
  };

  return (
    <main className="work" id="work">
      <h1>my recent work</h1>

      <ul>
        <li onClick={() => setWork(workData)}>all</li>
        <li onClick={() => filterWork("editorial")}>editorial</li>
        <li onClick={() => filterWork("wedding")}>wedding</li>
        <li onClick={() => filterWork("fashion")}>fashion</li>
        <li onClick={() => filterWork("brands")}>brands</li>
      </ul>

      <div className="cardContainer">
        {work.map((work) => (
          <div key={work.id}>
            <div className="card">
              <img src={work.img} alt="" />
              <div className="overlay">
                <h2>{work.title}</h2>
                <p>{work.date}</p>
                <a href={work.url}>see more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
