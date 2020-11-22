import React, { useEffect, useState } from "react";
import "../index.css";

function Vehicle({ url }) {
  const [vehicle, setVehicle] = useState({ films: [], vehicles: [] });
  useEffect(() => {
    fetchVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVehicle = async () => {
    const fetchVehicle = await fetch(`${url}`);
    const item = await fetchVehicle.json();
    setVehicle(item);
  };

  return (
    <div className="vehicle">Vehicle Name: {vehicle && vehicle.name}</div>
  );
}

export default Vehicle;
