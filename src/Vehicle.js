import React, { useState, useEffect } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import "./index.css";

const override = css`
  display: block;
  margin: 20px auto;
`;

function Vehicle({ vehicle }) {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState();
  useEffect(() => {
    fetchVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVehicle = async () => {
    setIsLoading(true);
    const fetchVehicle = await fetch(`${vehicle}`);
    const item = await fetchVehicle.json();
    setItem(item);
    setIsLoading(false);
  };

  console.log(item);

  return isLoading ? (
    <ClipLoader css={override} size={250} color={"yellow"} />
  ) : (
    item !== undefined && <div>{item.name}</div>
  );
}

export default Vehicle;
