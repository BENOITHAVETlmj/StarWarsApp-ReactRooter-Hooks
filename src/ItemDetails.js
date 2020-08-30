import React, { useState, useEffect } from "react";
import "./index.css";

function Shop({ match }) {
  const [character, setCharacter] = useState({ films: [], vehicles: [] });

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://swapi.dev/api/people/${match.params.id}`
    );
    const item = await fetchItem.json();
    setCharacter(item);
  };

  return (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.birth_year}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.height}</h3>
      <h3>{character.hair_color}</h3>
      <h3>{character.skin_color}</h3>
    </div>
  );
}

export default Shop;
