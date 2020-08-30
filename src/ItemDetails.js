import React, { useState, useEffect } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Shop({ match }) {
  const [character, setCharacter] = useState({ films: [], vehicles: [] });
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    setIsLoading(true);
    const fetchItem = await fetch(
      `http://swapi.dev/api/people/${match.params.id}`
    );
    const item = await fetchItem.json();
    setCharacter(item);
    setIsLoading(false);
  };

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.birth_year}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.height}</h3>
      <h3>{character.hair_color}</h3>
      {character.vehicles.length > 0 && (
        <Link to="/vehicles">
          <button>Vehicles</button>
        </Link>
      )}
    </div>
  );
}

export default Shop;
