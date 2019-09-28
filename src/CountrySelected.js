import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const CountrySelected = ({ country }) => {
  console.log("my country selected", country);

  if (country.length === 0) {
    return (
      <Loader
        Loader
        type="BallTriangle"
        color="green"
        height={200}
        width={200}
      />
    );
  }
  return (
    <div className="container">
      <Link to="/countries" className={"link-to-countries"}>
        Back to countries List
      </Link>
      <section>
        <h2>Name of the country: {country.name}</h2>
        <div>Native name : {country.nativeName}</div>
        <div>Capital: {country.capital}</div>
        <div>Language: {country.languages[0].name}</div>
        <div>Population : {country.population} people</div>
        <div>Region : {country.region}</div>
        <div>Subregion : {country.subregion}</div>
        <div>Timezones: {country.timezones[0]}</div>
        <div>Currencies: {country.currencies[0].name}</div>
        <img src={country.flag} className="flag1" alt="flag" />
      </section>
    </div>
  );
};

export default CountrySelected;
