import { Outlet, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MapIcon from "@mui/icons-material/Map";
import { useState } from "react";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon sx={{ fontSize: 24 }} />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/lineup">
              <AccessTimeIcon sx={{ fontSize: 24 }} />
              <p>Lineup</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/map">
              <MapIcon sx={{ fontSize: 24 }} />
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
