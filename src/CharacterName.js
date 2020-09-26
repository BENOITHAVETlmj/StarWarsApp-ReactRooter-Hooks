import React, { useEffect, useState } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function Name({ url }) {
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
    const fetchCharacter = await fetch(`${url}`);
    const item = await fetchCharacter.json();
    setCharacter(item);
    setIsLoading(false);
  };

  return isLoading ? (
    <ClipLoader css={override} size={50} color={"black"} />
  ) : (
    <h3 className="character-name">Name: {character.name}</h3>
  );
}

export default Name;
