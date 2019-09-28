import React from "react";
import { Link } from "react-router-dom";

const Country = ({ country }) => {
  return (
    <div className="container">
      <div className="countryPage" key={country.id}>
        <Link to="/selected">
          <li>{country.name}</li>
          <img src={country.flag} alt="country flag" className="flag" />
        </Link>
      </div>
    </div>
  );
};

export default Country;
