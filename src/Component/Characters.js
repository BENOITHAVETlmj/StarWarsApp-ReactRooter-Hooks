import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch("http://swapi.dev/api/people");
    const characters = await data.json();
    setCharacters(characters.results);
  };

  return (
    <div>
      <h1>List of StarWars characters</h1>

      {characters &&
        characters.map((character, index) => (
          <h1 key={character.name}>
            <Link
              className="character-item-name"
              to={`/Character/${index + 1}`}
            >
              {character.name}
            </Link>
          </h1>
        ))
      }
    </div>
  );
}

export default Characters;
