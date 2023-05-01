import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LineUp from "./pages/LineUp";
import Map from "./pages/Map";

import backgroundVideo from "./assets/background.mp4";

function App() {
  return (
    <div className="App">
      <div>
        <div className="overlay"></div>
        <video autoPlay loop muted id="video">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>

      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="lineup" element={<LineUp />} />
            <Route path="map" element={<Map />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
