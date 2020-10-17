import React from "react";
import "./index.css";
import Nav from "./Component/Nav";
import Characters from "./Component/Characters";
import Home from "./Component/Home";
import About from "./Component/About";
import Character from "./Component/Character";
import Vehicle from "./Component/Vehicle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Characters" exact component={Characters} />
          <Route path="/Character/:id" exact component={Character} />
          <Route path="/Character/:id/Vehicle/:id" component={Vehicle} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
