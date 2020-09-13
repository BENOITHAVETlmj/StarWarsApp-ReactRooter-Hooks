import React, { useState, useEffect } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import Vehicle from "./Vehicle";

function Character({ match }) {
  const [character, setCharacter] = useState({ films: [], vehicles: [] });
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharacter = async () => {
    setIsLoading(true);
    const fetchCharacter = await fetch(
      `http://swapi.dev/api/people/${match.params.id}`
    );
    const item = await fetchCharacter.json();
    setCharacter(item);
    setIsLoading(false);
  };

  const vehicles = React.useMemo(() => character.vehicles, [
    character.vehicles,
  ]);

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    <div>
      <h1>{character.name}</h1>
      <h3>{character.birth_year}</h3>
      <h3>{character.gender}</h3>
      <h3>{character.height}</h3>
      <h3>{character.mass}</h3>
      <h3>{character.hair_color}</h3>
      {vehicles &&
        vehicles.length > 0 &&
        vehicles.map((vehicle, index) => (
          <Vehicle key={index} vehicle={vehicle} />
        ))}
    </div>
  );
}

export default Character;
