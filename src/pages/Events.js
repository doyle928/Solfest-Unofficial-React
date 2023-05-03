import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import React, { useState } from "react";

import friday from "../assets/events_friday.png";
import saturday from "../assets/events_saturday.png";
import sunday from "../assets/events_sunday.png";

function Events(props) {
  const [lineupDay, setLineupDay] = useState(friday);
  const [activeDay, setActiveDay] = useState(0);

  console.log(props.height);

  return (
    <div className="events">
      <TransformWrapper>
        <TransformComponent>
          <img src={lineupDay} alt="event image" />
        </TransformComponent>
      </TransformWrapper>
      <ul style={{ paddingBottom: `${props.height}px` }}>
        <li
          onClick={() => {
            setLineupDay(friday);
            setActiveDay(0);
          }}
        >
          <a className={activeDay === 0 ? "active" : ""}>Fri</a>
        </li>
        <li
          onClick={() => {
            setLineupDay(saturday);
            setActiveDay(1);
          }}
        >
          <a className={activeDay === 1 ? "active" : ""}>Sat</a>
        </li>
        <li
          onClick={() => {
            setLineupDay(sunday);
            setActiveDay(2);
          }}
        >
          <a className={activeDay === 2 ? "active" : ""}>Sun</a>
        </li>
      </ul>
    </div>
  );
}

export default Events;
