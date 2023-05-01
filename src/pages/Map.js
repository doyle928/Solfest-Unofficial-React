import map from "../assets/map_v2_4x.png";
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
