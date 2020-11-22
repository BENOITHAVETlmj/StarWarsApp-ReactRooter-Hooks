import React from "react";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Component/Nav";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
const Home = React.lazy(() => import("./Component/Home"));
const Characters = React.lazy(() => import("./Component/Characters"));
const About = React.lazy(() => import("./Component/About"));
const Vehicle = React.lazy(() => import("./Component/Vehicle"));
const Character = React.lazy(() => import("./Component/Character"));

function App() {
  const override = css`
  display: block;
  margin: 20px auto;
`;
  return (
    <Router>
      <div className="App">
        <Nav />
        <React.Suspense fallback={<ClipLoader css={override} size={350} color={"yellow"} />}>
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Characters" exact component={Characters} />
          <Route path="/Character/:id" exact component={Character} />
          <Route path="/Character/:id/Vehicle/:id" component={Vehicle} />
        </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}

export default App;
