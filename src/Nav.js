import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>STAR WARS</h3>
      <ul className="nav-links">
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
