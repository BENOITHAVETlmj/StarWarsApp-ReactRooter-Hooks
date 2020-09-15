import React, { useState, useEffect } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

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
    console.log(item);
  };

  const vehicles = React.useMemo(() => character.vehicles, [
    character.vehicles,
  ]);

  //getting last number of the url link to get id matching params endpoint
  function getLastNumber(url) {
    var matches = url.match(/\d+/g);
    return matches[matches.length - 1];
  }

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    <div>
      <h1 id="characterDetails">{character.name}</h1>
      <h3 id="characterDetails">{character.birth_year}</h3>
      <h3 id="characterDetails">{character.gender}</h3>
      <h3 id="characterDetails">{character.height}</h3>
      <h3 id="characterDetails">{character.mass}</h3>
      <h3 id="characterDetails">{character.hair_color}</h3>
      {vehicles &&
        vehicles.length > 0 &&
        vehicles.map((vehicle, index) => (
          <h1 key={index}>
            <Link
              to={`/Character/${match.params.id}/vehicle/${getLastNumber(
                vehicle
              )}`}
            >
              {vehicle && vehicle}
            </Link>
          </h1>
        ))}
    </div>
  );
}

export default Character;
