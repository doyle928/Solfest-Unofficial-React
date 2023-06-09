import React from "react";
import map from "../assets/map_new_4x.jpg";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Map() {
  return (
    <div className="map">
      <TransformWrapper>
        <TransformComponent>
          <img src={map} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default Map;
