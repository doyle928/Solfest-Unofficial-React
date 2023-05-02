import React, { useState, useEffect, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapIcon from "@mui/icons-material/Map";

const Layout = (props) => {
  console.log(props)
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
    console.log(ref.current.clientHeight)
    props.setHeightNav(height)
    console.log(props)
  });

  return (
    <>
      <nav ref={ref}>
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon sx={{ fontSize: "5vw" }} />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lineup">
              <AccessTimeIcon sx={{ fontSize: "5vw" }} />
              <p>Lineup</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/map">
              <MapIcon sx={{ fontSize: "5vw" }} />
              <p>Map</p>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
