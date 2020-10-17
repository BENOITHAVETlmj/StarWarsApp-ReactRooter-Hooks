import React, { useState, useEffect } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setIsLoading(true);
    const data = await fetch("https://swapi.dev/api/people");

    const characters = await data.json();
    setCharacters(characters.results);
    setIsLoading(false);
  };

  return (
    <div>
      <h1>List of StarWars characters</h1>

      {isLoading ? (
        <ClipLoader css={override} size={250} color={"yellow"} />
      ) : (
        characters &&
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
      )}
    </div>
  );
}

export default Characters;
