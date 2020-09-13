import React from "react";
import "./index.css";
import Nav from "./Nav";
import Characters from "./Characters";
import Home from "./Home";
import About from "./About";
import Character from "./Character";
import Vehicle from "./Vehicle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Characters" exact component={Characters} />
          <Route path="/Character/:id" component={Character} />
          <Route path="/vehicle/:id" exact component={Vehicle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
