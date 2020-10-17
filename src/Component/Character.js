import React, { useState, useEffect } from "react";
import "../index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";
import VehicleName from "./VehicleName";

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

  const vehiclesArray = React.useMemo(() => character.vehicles, [
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
      <h1 id="characterDetails">Name: {character.name}</h1>
      <h3 id="characterDetails">Birth year: {character.birth_year}</h3>
      <h3 id="characterDetails">Gender: {character.gender}</h3>
      <h3 id="characterDetails">Height: {character.height}</h3>
      <h3 id="characterDetails">Mass: {character.mass}</h3>
      <h3 id="characterDetails">Hair color: {character.hair_color}</h3>
      {vehiclesArray &&
        vehiclesArray.length > 0 &&
        vehiclesArray.map((vehicle, index) => (
          <h1 key={index}>
            <Link
              to={`/Character/${match.params.id}/vehicle/${getLastNumber(
                vehicle
              )}`}
            >
              {vehicle && (
                <VehicleName className="character-name" url={vehicle} />
              )}
            </Link>
          </h1>
        ))}
    </div>
  );
}

export default Character;
