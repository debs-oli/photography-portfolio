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
    <main id="work">
      <h1>my recent work</h1>

      <ul>
        <li>
          <button onClick={() => setWork(workData)}>all</button>
        </li>
        <li>
          <button onClick={() => filterWork("editorial")}>editorial</button>
        </li>
        <li>
          <button onClick={() => filterWork("wedding")}>wedding</button>
        </li>
        <li>
          <button onClick={() => filterWork("fashion")}>fashion</button>
        </li>
        <li>
          <button onClick={() => filterWork("brands")}> brands</button>
        </li>
      </ul>

      <div className="container">
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
