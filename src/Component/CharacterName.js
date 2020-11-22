import React, { useEffect, useState } from "react";
import "../index.css";

function Name({ url }) {
  const [character, setCharacter] = useState({ films: [], vehicles: [] });

  useEffect(() => {
    fetchCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCharacter = async () => {
    const fetchCharacter = await fetch(`${url}`);
    const item = await fetchCharacter.json();
    setCharacter(item);
  };

  return  (
    <h3 className="character-name">Name: {character.name}</h3>
  );
}

export default Name;
