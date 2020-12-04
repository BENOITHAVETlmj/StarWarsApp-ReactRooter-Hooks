import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3>STAR WARS</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/About">
          <li>About</li>
        </Link>
        <Link to="/Characters">
          <li>Characters</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
