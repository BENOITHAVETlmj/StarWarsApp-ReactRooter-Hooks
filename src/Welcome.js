import React from "react";
import { Link } from "react-router-dom";

export default (function Welcome() {
  return (
    <div>
      <h1>Click bellow to see all countries from the world</h1>
      <Link to="/countries">This is the List</Link>
    </div>
  );
});
