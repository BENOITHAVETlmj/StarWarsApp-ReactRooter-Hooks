import React, { useState, useEffect } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function Shop({ match }) {
  const [vehicle, setVehicle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    console.log(match);
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchItem = async () => {
    setIsLoading(true);
    const fetchItem = await fetch(`http://swapi.dev/api/vehicles/14`);
    const item = await fetchItem.json();
    setVehicle(item);
    setIsLoading(false);
  };

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    <div>{vehicle.name}</div>
  );
}

export default Shop;
