import { useEffect, useState } from "react";
import "../CSS/Work.css";

export default function Work() {
  const [work, setWork] = useState([]);

  useEffect(() => {
    fetch("/API/work.json")
      .then((response) => response.json())
      .then((data) => setWork(data));
  }, []);

  return (
    <main className="work" id="work">
      <h1>my recent work</h1>

      <ul>
        <li>see all</li>
        <li>editorial</li>
        <li>wedding</li>
        <li>fashion</li>
        <li>brands</li>
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
