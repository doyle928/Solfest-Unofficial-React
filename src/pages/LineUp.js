import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useState } from "react";

import thursday from "../assets/lineup_thursday_4x.jpg";
import friday from "../assets/lineup_friday_4x.jpg";
import saturday from "../assets/lineup_saturday_2x.jpg";
import sunday from "../assets/lineup_sunday_4x.jpg";

function LineUp() {
  const [lineupDay, setLineupDay] = useState(thursday);
  const [activeDay, setActiveDay] = useState(0);
  
  return (
    <div className="lineup">
      <TransformWrapper>
        <TransformComponent>
          <img src={lineupDay} alt="lineup image" />
        </TransformComponent>
      </TransformWrapper>
      <ul>
        <li>
          <a onClick={() => {
            setLineupDay(thursday)
            setActiveDay(0)
          }}
          className={activeDay === 0 ? "active" : ""}
          >Thurs</a>
        </li>
        <li>
        <a onClick={() => {
            setLineupDay(friday)
            setActiveDay(1)
          }}
          className={activeDay === 1 ? "active" : ""}
          >Fri</a>
        </li>
        <li>
        <a onClick={() => {
            setLineupDay(saturday)
            setActiveDay(2)
          }}
          className={activeDay === 2 ? "active" : ""}
          >Sat</a>
        </li>
        <li>
        <a onClick={() => {
            setLineupDay(sunday)
            setActiveDay(3)
          }}
          className={activeDay === 3 ? "active" : ""}
          >Sun</a>
        </li>
      </ul>
    </div>
  );
}

export default LineUp;
