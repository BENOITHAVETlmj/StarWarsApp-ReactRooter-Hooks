import React from "react";
import "./index.css";
import Nav from "./Nav";
import Shop from "./Shop";
import Home from "./Home";
import About from "./About";
import ItemDetails from "./ItemDetails";
import Vehicles from "./Vehicles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Shop" exact component={Shop} />
          <Route path="/Shop/:id" component={ItemDetails} />
          <Route path="/vehicles" exact component={Vehicles} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
