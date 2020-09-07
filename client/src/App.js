import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
