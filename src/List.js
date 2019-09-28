import React, { useState } from "react";
import Country from "./Country";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const List = ({ countries, loading, getObj }) => {
  const [search, setSearch] = useState("");

  const updateSearch = e => {
    setSearch(e.target.value.substr(0, 15).toLowerCase());
  };

  let filteredCountry = countries.filter(country => {
    return country.name.toLowerCase().indexOf(search) !== -1;
  });
  if (loading) {
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
      <Link to="/">
        <h2 className={"link-to-welcome"}>Back to welcome page</h2>
      </Link>
      <input
        type="text"
        value={search}
        placeholder="Wich country are you looking for?"
        onChange={updateSearch.bind(this)}
        className="search"
      ></input>

      {filteredCountry.map(country => {
        return (
          <ul
            className="country"
            onClick={() => getObj(country)}
            key={country.name}
          >
            <Country country={country} />
          </ul>
        );
      })}
    </div>
  );
};
export default List;
