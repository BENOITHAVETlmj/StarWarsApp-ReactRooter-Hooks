import React, { useEffect, useState } from "react";
import "../index.css";
import { Link } from "react-router-dom";
import Name from "./CharacterName";

function Vehicle({ match }) {
  const [vehicle, setVehicle] = useState();

  useEffect(() => {
    fetchVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchVehicle = async () => {
    const fetchVehicle = await fetch(
      `http://swapi.dev/api/vehicles/${match.params.id}`
    );
    const item = await fetchVehicle.json();
    setVehicle(item);
  };

  //getting last number of the url link to get id matching params endpoint
  function getLastNumber(url) {
    var matches = url.match(/\d+/g);
    return matches[matches.length - 1];
  }

  return (
    <div className="vehicle-card">
      <ul>
        <li>Name: {vehicle && vehicle.name}</li>
        <li>
          Created in:{" "}
          {vehicle && new Date(vehicle.created).toLocaleString("en-US")}
        </li>
        <li>Model:{vehicle && vehicle.model}</li>
        <li>Manufacturer: {vehicle && vehicle.manufacturer}</li>
        <li>
          Pilots:
          {vehicle &&
            vehicle.pilots.map((pilot, index) => (
              <div key={index}>
                <Link to={`/Character/${getLastNumber(pilot)}`}>
                  <Name url={pilot} />
                </Link>
              </div>
            ))}
        </li>
      </ul>
    </div>
  );
}

export default Vehicle;
