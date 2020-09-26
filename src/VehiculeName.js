import React, { useEffect, useState } from "react";
import "./index.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

function Vehicle({ url }) {
  const [vehicle, setVehicle] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const override = css`
    display: block;
    margin: 20px auto;
  `;

  useEffect(() => {
    fetchVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVehicle = async () => {
    setIsLoading(true);
    const fetchVehicle = await fetch(`${url}`);
    const item = await fetchVehicle.json();
    setVehicle(item);
    setIsLoading(false);
  };

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    <div className="vehicule">Vehicule Name: {vehicle && vehicle.name}</div>
  );
}

export default Vehicle;
