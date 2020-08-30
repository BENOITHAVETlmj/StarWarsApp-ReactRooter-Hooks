import React, { useState, useEffect } from "react";
import "./index.css";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("https://swapi.dev/api/people");
    console.log("data", data);
  };

  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
}

export default Shop;
