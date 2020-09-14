import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/home/:id">
            <List />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
