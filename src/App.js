import React, { useState, useEffect } from "react";
import List from "./List";
import CountrySelected from "./CountrySelected";
import Welcome from "./Welcome";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [country, SetSelectedCountry] = useState([]);

  useEffect(() => {
    const FetchCountries = async () => {
      setLoading(true);
      // response
      const res = await axios.get("https://restcountries.eu/rest/v2/all");
      const payload = res.data;
      setCountries(payload);
      setLoading(false);
      console.log("payload", payload);
    };
    FetchCountries();
  }, []); // [] avoid useEffect() to run and make an never ended loop at each updates

  useEffect(() => {
    const selected = localStorage.getItem("selectedCountry");
    if (selected) {
      SetSelectedCountry(JSON.parse(selected));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedCountry", JSON.stringify(country));
  }, [country]);

  const getObj = country => SetSelectedCountry(country);
  return (
    <div className="container">
      <header className="header">
        <div>Countries List</div>
      </header>
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route
          exact
          path="/countries"
          render={props => {
            return (
              <List
                {...props}
                countries={countries}
                loading={loading}
                key={countries.id}
                getObj={getObj}
              />
            );
          }}
        />
        <Route
          path="/selected"
          render={props => {
            return (
              <CountrySelected {...props} country={country} key={country.id} />
            );
          }}
        />
      </Router>
    </div>
  );
}

export default App;
