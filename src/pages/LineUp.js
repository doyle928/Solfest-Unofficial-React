import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useState } from "react";

import thursday from "../assets/lineup_thursday_4x.jpg";
import friday from "../assets/lineup_friday_4x.jpg";
import saturday from "../assets/lineup_saturday_2x.jpg";
import sunday from "../assets/lineup_sunday_4x.jpg";

function LineUp(props) {
  const [lineupDay, setLineupDay] = useState(thursday);
  const [activeDay, setActiveDay] = useState(0);

  console.log(props.height)

  return (
    <div className="lineup">
      <TransformWrapper>
        <TransformComponent>
          <img src={lineupDay} alt="lineup image" />
        </TransformComponent>
      </TransformWrapper>
      <ul style={{bottom: `${props.height - 3}px`}}>
        <li
          onClick={() => {
            setLineupDay(thursday);
            setActiveDay(0);
          }}
        >
          <a className={activeDay === 0 ? "active" : ""}>Thurs</a>
        </li>
        <li
          onClick={() => {
            setLineupDay(friday);
            setActiveDay(1);
          }}
        >
          <a className={activeDay === 1 ? "active" : ""}>Fri</a>
        </li>
        <li
          onClick={() => {
            setLineupDay(saturday);
            setActiveDay(2);
          }}
        >
          <a className={activeDay === 2 ? "active" : ""}>Sat</a>
        </li>
        <li
          onClick={() => {
            setLineupDay(sunday);
            setActiveDay(3);
          }}
        >
          <a className={activeDay === 3 ? "active" : ""}>Sun</a>
        </li>
      </ul>
    </div>
  );
}

export default LineUp;
